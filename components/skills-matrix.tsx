import { skillGroups } from "@/data/portfolio";

export function SkillsMatrix() {
  return (
    <div>
      {skillGroups.map((group) => (
        <details key={group.title} className="minimal-details">
          <summary>
            <span>{group.title}</span>
            <span className="mr-auto hidden text-[0.9rem] font-normal text-muted sm:block">{group.description}</span>
          </summary>
          <div className="minimal-details-content">
            <p className="mb-5 max-w-xl text-base leading-7 sm:hidden">{group.description}</p>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => <span key={skill.name} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 text-[0.92rem] text-ink-soft">{skill.name}</span>)}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
