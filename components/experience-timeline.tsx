import { experience } from "@/data/portfolio";

function ExperienceEntry({ item, compact = false }: { item: (typeof experience)[number]; compact?: boolean }) {
  return (
    <article className={`grid gap-4 border-t border-[var(--line)] ${compact ? "py-7" : "py-10 sm:grid-cols-[12rem_1fr] sm:gap-10 sm:py-12"}`}>
      <div>
        <p className="text-[0.9rem] font-semibold text-ink-soft">{item.period}</p>
        <p className="mt-1 text-[0.85rem] text-muted">{item.location}</p>
      </div>
      <div>
        <h2 className={`${compact ? "text-xl" : "text-2xl sm:text-3xl"} font-semibold tracking-[-0.04em]`}>{item.role}</h2>
        <p className="mt-1 font-medium text-accent">{item.company}</p>
        <p className="pretty mt-4 max-w-3xl text-base leading-8 text-muted sm:text-lg">{item.summary}</p>
        {!compact && (
          <ul className="mt-5 max-w-3xl space-y-3">
            {item.achievements.slice(0, 2).map((achievement) => <li key={achievement} className="flex gap-3 text-[0.95rem] leading-7 text-ink-soft"><span className="mt-[0.68rem] size-1.5 shrink-0 rounded-full bg-accent" /><span>{achievement}</span></li>)}
          </ul>
        )}
      </div>
    </article>
  );
}

export function ExperienceTimeline() {
  const recent = experience.slice(0, 3);
  const earlier = experience.slice(3);

  return (
    <div>
      {recent.map((item) => <ExperienceEntry key={`${item.company}-${item.period}`} item={item} />)}
      <details className="minimal-details">
        <summary><span>Earlier career</span><span className="mr-auto text-[0.9rem] font-normal text-muted">{earlier.length} additional roles</span></summary>
        <div className="minimal-details-content">
          {earlier.map((item) => <ExperienceEntry key={`${item.company}-${item.period}`} item={item} compact />)}
        </div>
      </details>
    </div>
  );
}
