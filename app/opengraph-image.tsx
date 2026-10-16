import { ImageResponse } from "next/og";

export const alt = "Kanat Umertayev — Clarity for complex industrial projects";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#fafafa", color: "#171717", fontFamily: "Arial, sans-serif", padding: "72px" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center", background: "#171717", color: "#fafafa", fontWeight: 700, fontSize: 20 }}>K</div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>Kanat Umertayev</div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 60 }}>
          <div style={{ maxWidth: 900, fontSize: 78, lineHeight: 0.98, letterSpacing: "-4px", fontWeight: 700 }}>Clarity for complex industrial projects.</div>
          <div style={{ width: 22, height: 120, borderRadius: 8, background: "#2563eb" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#62626c", fontSize: 18 }}>
          <span>Project Engineer · Employer’s Representative</span><span>17+ years</span>
        </div>
      </div>
    </div>,
    size,
  );
}
