import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon, DownloadIcon } from "@/components/icons";
import { ContactStrip } from "@/components/contact-strip";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SkillsMatrix } from "@/components/skills-matrix";
import { credentials, education, languages, principles, profile, strengths, tools } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Kanat Umertayev, a project and civil engineer with 17+ years in complex industrial delivery.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Engineering judgement shaped by real sites." copy="Kanat connects technical detail with the decisions owners and delivery teams need to make." note="Experience across Kazakhstan, France, and South Korea." />

      <section className="section-pad">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <Reveal><p className="balance text-3xl font-semibold leading-[1.15] tracking-[-0.045em] sm:text-4xl">The goal is simple: fewer surprises, stronger decisions, better project outcomes.</p></Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-6 text-lg leading-9 text-muted">
              <p>For more than 17 years, Kanat has worked across power generation, steel, oil and gas, mining, and industrial infrastructure—from design and research to live-site execution.</p>
              <p>His strength is owner-side assurance: testing assumptions, finding interface risk, improving scope clarity, and making technical information useful to project leaders.</p>
              <p>He is now focused on senior project engineering, Employer’s representative, and civil leadership roles where practical judgement can shape high-value outcomes.</p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={profile.cvPath} download className="button-primary"><DownloadIcon /> Download CV</a><Link href="/contact" className="button-secondary">Discuss an opportunity <ArrowUpRightIcon /></Link></div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-[var(--line)] bg-[var(--surface)]">
        <div className="shell">
          <Reveal><SectionHeading eyebrow="Approach" title="Three principles guide the work." /></Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {principles.slice(0, 3).map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.06}>
                <article className="border-t border-[var(--line)] pt-7"><p className="text-sm font-semibold text-accent">0{index + 1}</p><h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{principle.title}</h2><p className="pretty mt-4 text-base leading-8 text-muted">{principle.copy}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="section-pad scroll-mt-24">
        <div className="shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <Reveal><div className="lg:sticky lg:top-32"><SectionHeading eyebrow="Capabilities" title="Depth, without the wall of buzzwords." copy="Open a category for the detail." /></div></Reveal>
          <Reveal delay={0.08}>
            <SkillsMatrix />
            <details className="minimal-details"><summary>Tools and systems</summary><div className="minimal-details-content"><div className="flex flex-wrap gap-2.5">{tools.map((tool) => <span key={tool} className="rounded-xl border border-[var(--line)] px-4 py-2.5 text-[0.92rem]">{tool}</span>)}</div></div></details>
            <details className="minimal-details"><summary>Leadership strengths</summary><div className="minimal-details-content"><div className="flex flex-wrap gap-2.5">{strengths.map((strength) => <span key={strength} className="rounded-xl border border-[var(--line)] px-4 py-2.5 text-[0.92rem]">{strength}</span>)}</div></div></details>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-[var(--line)] bg-[var(--surface)]">
        <div className="shell">
          <Reveal><SectionHeading eyebrow="Foundation" title="Education and credentials." /></Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Education</h3>
              {education.map((item) => (
                <article key={`${item.degree}-${item.period}`} className="border-t border-[var(--line)] py-7">
                  <p className="text-sm font-semibold text-accent">{item.period}</p>
                  <h4 className="mt-3 text-xl font-semibold tracking-[-0.03em]">{item.degree}</h4>
                  <p className="mt-1 text-base text-ink-soft">{item.institution}</p>
                  <p className="pretty mt-3 text-[0.95rem] leading-7 text-muted">{item.detail}</p>
                </article>
              ))}
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Professional credentials</h3>
              {credentials.map((credential) => (
                <details key={credential.title} className="minimal-details">
                  <summary><span>{credential.title}</span></summary>
                  <div className="minimal-details-content"><p className="font-medium text-ink-soft">{credential.issuer} · {credential.date}</p><p className="mt-2 leading-7">{credential.detail}</p></div>
                </details>
              ))}
              <div className="mt-10 rounded-2xl bg-[var(--canvas-soft)] p-6"><p className="text-base font-semibold">Languages</p><div className="mt-3 flex gap-6">{languages.map((language) => <p key={language.name} className="text-[0.95rem]"><span className="font-medium">{language.name}</span> <span className="text-muted">· {language.level}</span></p>)}</div></div>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
