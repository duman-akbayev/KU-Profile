"use client";

import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;
    window.localStorage.setItem("kanat-theme", nextTheme);
  }

  return (
    <button type="button" onClick={toggleTheme} className="group relative grid size-11 place-items-center rounded-xl border border-[var(--line)] bg-[var(--surface)] text-ink transition hover:border-[var(--line-strong)] hover:shadow-[var(--shadow-soft)]" aria-label="Toggle light and dark theme" title="Toggle theme">
      <SunIcon className="block transition-transform group-hover:rotate-12 [[data-theme=dark]_&]:hidden" />
      <MoonIcon className="hidden transition-transform group-hover:-rotate-12 [[data-theme=dark]_&]:block" />
    </button>
  );
}
