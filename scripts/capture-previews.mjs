import { spawn } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const root = process.cwd();
const chromePath = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const baseUrl = process.env.PREVIEW_URL || "http://localhost:3000";
const previewDir = path.join(root, "previews");
const profileDir = path.join(tmpdir(), `kanat-cdp-${Date.now()}`);
const port = 9400 + Math.floor(Math.random() * 400);

await mkdir(previewDir, { recursive: true });

const browser = spawn(
  chromePath,
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--no-default-browser-check",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profileDir}`,
    "about:blank",
  ],
  { stdio: "ignore" },
);

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function waitForDebugger() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (response.ok) return;
    } catch {
      // Chrome is still starting.
    }
    await delay(100);
  }
  throw new Error("Chrome DevTools endpoint did not start.");
}

await waitForDebugger();

const targetResponse = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent("about:blank")}`, { method: "PUT" });
if (!targetResponse.ok) throw new Error(`Could not create browser target: ${targetResponse.status}`);
const target = await targetResponse.json();
const socket = new WebSocket(target.webSocketDebuggerUrl);

await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let commandId = 0;
const pending = new Map();
const eventWaiters = new Map();

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id) {
    const request = pending.get(message.id);
    if (!request) return;
    pending.delete(message.id);
    if (message.error) request.reject(new Error(message.error.message));
    else request.resolve(message.result);
    return;
  }

  const waiters = eventWaiters.get(message.method);
  if (!waiters?.length) return;
  eventWaiters.delete(message.method);
  waiters.forEach((resolve) => resolve(message.params));
});

function send(method, params = {}) {
  const id = ++commandId;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

function waitForEvent(method, timeout = 12_000) {
  return new Promise((resolve, reject) => {
    const current = eventWaiters.get(method) || [];
    current.push(resolve);
    eventWaiters.set(method, current);
    setTimeout(() => reject(new Error(`Timed out waiting for ${method}`)), timeout);
  });
}

await send("Page.enable");
await send("Runtime.enable");

async function capture({ name, route, width, height, mobile = false, dark = false }) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
    screenWidth: width,
    screenHeight: height,
    positionX: 0,
    positionY: 0,
  });
  await send("Emulation.setTouchEmulationEnabled", { enabled: mobile, maxTouchPoints: mobile ? 5 : 1 });
  await send("Emulation.setEmulatedMedia", {
    media: "screen",
    features: [{ name: "prefers-color-scheme", value: dark ? "dark" : "light" }],
  });

  const loaded = waitForEvent("Page.loadEventFired");
  await send("Page.navigate", { url: `${baseUrl}${route}` });
  await loaded;
  await delay(1_600);

  const viewport = await send("Runtime.evaluate", {
    expression: "({width: window.innerWidth, height: window.innerHeight, theme: document.documentElement.dataset.theme})",
    returnByValue: true,
  });
  const actual = viewport.result.value;
  const widthDelta = Math.abs(actual.width - width);
  const heightDelta = Math.abs(actual.height - height);
  if (widthDelta > 8 || heightDelta > 8) {
    throw new Error(`${name}: expected approximately ${width}x${height}, received ${actual.width}x${actual.height}`);
  }

  const screenshot = await send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: false,
  });
  await writeFile(path.join(previewDir, `${name}.png`), Buffer.from(screenshot.data, "base64"));
  console.log(`captured ${name}: ${actual.width}x${actual.height}, ${actual.theme} theme`);
}

const desktopPages = [
  ["home", "/"],
  ["about", "/about"],
  ["experience", "/experience"],
  ["projects", "/projects"],
  ["case-study", "/projects/recovery-power-plant"],
  ["contact", "/contact"],
  ["cv", "/cv"],
];

for (const [name, route] of desktopPages) {
  await capture({ name, route, width: 1440, height: 1000 });
}

for (const [name, route] of [["mobile-home", "/"], ["mobile-projects", "/projects"], ["mobile-contact", "/contact"]]) {
  await capture({ name, route, width: 390, height: 844, mobile: true });
}

await capture({ name: "dark-home", route: "/", width: 1440, height: 1000, dark: true });

await send("Emulation.setDeviceMetricsOverride", {
  width: 1240,
  height: 1754,
  deviceScaleFactor: 1,
  mobile: false,
  screenWidth: 1240,
  screenHeight: 1754,
});
await send("Emulation.setEmulatedMedia", { media: "print", features: [] });
const pdfLoaded = waitForEvent("Page.loadEventFired");
await send("Page.navigate", { url: `${baseUrl}/cv` });
await pdfLoaded;
await delay(1_000);
const pdf = await send("Page.printToPDF", {
  printBackground: true,
  preferCSSPageSize: true,
  displayHeaderFooter: false,
  paperWidth: 8.2677,
  paperHeight: 11.6929,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
});
await writeFile(path.join(root, "public", "Kanat-Umertayev-CV.pdf"), Buffer.from(pdf.data, "base64"));
console.log("generated public/Kanat-Umertayev-CV.pdf");

await send("Browser.close").catch(() => undefined);
socket.close();
browser.kill();
await rm(profileDir, { recursive: true, force: true }).catch(() => undefined);
