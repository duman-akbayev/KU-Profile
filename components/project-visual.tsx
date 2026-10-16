"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/portfolio";

type ProjectVisualProps = {
  accent: Project["accent"];
  sector: string;
  title: string;
  compact?: boolean;
};

const sectorCode: Record<string, string> = {
  "Power & utilities": "PWR",
  "Steel & utilities": "STL",
  "Metals & mining": "MTL",
  "Oil & gas": "O&G",
  "Industrial infrastructure": "INF",
  "Research & urban systems": "R&D",
};

export function ProjectVisual({ accent, sector, title, compact = false }: ProjectVisualProps) {
  const reduceMotion = useReducedMotion();
  const code = sectorCode[sector] ?? "PRJ";

  return (
    <div className={`project-accent-${accent} relative overflow-hidden bg-[var(--project-wash)] ${compact ? "aspect-[16/10]" : "aspect-[16/11]"}`}>
      <div className="dot-grid absolute inset-0 opacity-35" />
      <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--project-accent)_28%,transparent)] bg-[color-mix(in_srgb,var(--surface)_76%,transparent)] px-3 py-1.5 backdrop-blur-md">
        <span className="size-1.5 rounded-full bg-[var(--project-accent)]" />
        <span className="font-mono text-[0.58rem] font-bold tracking-[0.14em] text-ink">{code} / CASE STUDY</span>
      </div>

      <motion.svg
        viewBox="0 0 760 500"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={`Abstract engineering illustration for ${title}`}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <defs>
          <linearGradient id={`fade-${accent}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--project-accent)" stopOpacity=".8" />
            <stop offset="1" stopColor="var(--project-accent)" stopOpacity=".08" />
          </linearGradient>
        </defs>
        <g stroke="var(--project-accent)" strokeWidth="1.4" opacity=".45">
          <path d="M80 418H684M126 374H640M165 96V420M595 68V420" strokeDasharray="4 8" />
          <path d="M210 360V190h330v170M210 246h330M210 302h330" />
          <path d="m210 190 165-96 165 96M210 246l330 114M540 246 210 360M375 94v266" />
        </g>
        <motion.path
          d="M132 420H628"
          stroke="var(--project-accent)"
          strokeWidth="4"
          variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M210 360V190l165-96 165 96v170"
          fill="none"
          stroke="var(--project-accent)"
          strokeWidth="2.5"
          variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
          transition={{ duration: 1.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx="540"
          cy="190"
          r="48"
          fill={`url(#fade-${accent})`}
          variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
          transition={{ duration: 0.7, delay: 0.45 }}
        />
        <circle cx="540" cy="190" r="8" fill="var(--surface)" stroke="var(--project-accent)" strokeWidth="3" />
        <circle cx="210" cy="360" r="7" fill="var(--surface)" stroke="var(--project-accent)" strokeWidth="3" />
        <circle cx="375" cy="94" r="7" fill="var(--surface)" stroke="var(--project-accent)" strokeWidth="3" />
      </motion.svg>

      <div className="absolute bottom-5 right-5 z-10 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--ink)_56%,transparent)]">
        Owner-side engineering
      </div>
    </div>
  );
}
