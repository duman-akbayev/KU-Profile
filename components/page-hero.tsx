import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  index?: string;
  eyebrow: string;
  title: string;
  copy: string;
  note?: string;
};

export function PageHero({ eyebrow, title, copy, note }: PageHeroProps) {
  return (
    <header className="border-b border-[var(--line)] pt-40 sm:pt-48">
      <div className="shell pb-24 sm:pb-32">
        <Reveal>
          <p className="eyebrow mb-7">{eyebrow}</p>
          <h1 className="page-title balance">{title}</h1>
          <p className="pretty mt-8 max-w-3xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10">{copy}</p>
          {note && <p className="mt-9 max-w-xl border-l-2 border-accent pl-5 text-[0.95rem] leading-7 text-muted">{note}</p>}
        </Reveal>
      </div>
    </header>
  );
}
