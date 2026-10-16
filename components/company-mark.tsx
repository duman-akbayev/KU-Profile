type CompanyMarkProps = {
  mark: string;
  name: string;
  className?: string;
};

export function CompanyMark({ mark, name, className = "" }: CompanyMarkProps) {
  return (
    <div
      className={`relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] font-mono text-[0.68rem] font-bold tracking-[-0.05em] text-ink ${className}`}
      title={name}
      aria-label={`${name} mark`}
    >
      <span className="absolute -right-2 -top-2 size-5 rounded-full bg-accent opacity-70" />
      <span className="relative">{mark}</span>
    </div>
  );
}
