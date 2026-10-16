"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/portfolio";

const filters = ["All", "Power & utilities", "Steel & utilities", "Oil & gas", "Industrial infrastructure", "Research & urban systems"];

export function ProjectFilter() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((project) => project.sector === active);

  return (
    <div>
      <div className="hide-scrollbar -mx-3 mb-14 flex gap-2 overflow-x-auto px-3 pb-2" role="tablist" aria-label="Filter projects by sector">
        {filters.map((filter) => (
          <button key={filter} type="button" role="tab" aria-selected={active === filter} onClick={() => setActive(filter)} className={`shrink-0 rounded-xl border px-4 py-2.5 text-[0.88rem] font-medium transition ${active === filter ? "border-accent bg-accent text-accent-ink" : "border-[var(--line)] bg-[var(--surface)] text-muted hover:border-[var(--line-strong)] hover:text-ink"}`}>
            {filter}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-10 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div layout key={project.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
