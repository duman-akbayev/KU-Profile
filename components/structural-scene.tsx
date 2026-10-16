"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent } from "react";

export function StructuralScene() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 80, damping: 20 });
  const y = useSpring(pointerY, { stiffness: 80, damping: 20 });

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 14);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 14);
  }

  function handleLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      className="engineering-grid relative aspect-[4/4.5] overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)]"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      aria-label="Animated structural engineering illustration"
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,color-mix(in_srgb,var(--accent)_36%,transparent),transparent_30%)]" />
      <motion.div
        className="absolute left-[9%] top-[9%] rounded-full border border-[var(--line-strong)] bg-[var(--surface)] px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted"
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        Design / Field / Control
      </motion.div>

      <motion.svg style={{ x, y }} viewBox="0 0 520 600" className="absolute inset-0 h-full w-full" fill="none">
        <g stroke="var(--line-strong)" strokeWidth="1">
          <path d="M42 480H478M70 520H450M92 116V520M428 92V520" strokeDasharray="5 7" />
          <path d="M134 456V198h252v258M134 260h252M134 326h252M134 392h252" />
          <path d="m134 198 126-76 126 76M134 260l252 132M386 260 134 392M134 326l252 130M386 326 134 456" />
          <path d="M260 122v334" strokeDasharray="4 5" />
        </g>
        <motion.path
          d="M100 480h320"
          stroke="var(--project-accent, var(--teal))"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M134 456V198h252v258"
          stroke="var(--teal)"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
        {[198, 260, 326, 392, 456].flatMap((cy) => [134, 260, 386].map((cx) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="4.5"
            fill="var(--canvas)"
            stroke="var(--teal)"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.55 + (cy - 198) / 720 + cx / 1500 }}
          />
        )))}
        <motion.circle
          cx="386"
          cy="198"
          r="34"
          fill="var(--accent)"
          opacity=".9"
          animate={reduceMotion ? undefined : { scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="386" y="202" textAnchor="middle" fill="var(--accent-ink)" fontSize="11" fontWeight="700" letterSpacing="1">17+ YRS</text>
      </motion.svg>

      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--nav-bg)] backdrop-blur-xl">
        {[['EPC', 'Delivery'], ['P6', 'Controls'], ['RoK', 'Standards']].map(([value, label], index) => (
          <div key={value} className={`px-3 py-3.5 ${index ? "border-l border-[var(--line)]" : ""}`}>
            <p className="text-sm font-bold tracking-[-0.03em]">{value}</p>
            <p className="mt-0.5 text-[0.6rem] uppercase tracking-[0.1em] text-muted">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
