import type { Metadata } from "next";
import { ContactStrip } from "@/components/contact-strip";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Experience",
  description: "Kanat Umertayev’s project, civil, constructability, and owner-side engineering experience.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero eyebrow="Experience" title="Responsibility across the project lifecycle." copy="A career spanning research, field engineering, construction leadership, CAPEX assurance, and Employer representation." note="Recent roles are shown first. Earlier assignments are grouped for a calmer read." />

      <section className="border-b border-[var(--line)]">
        <div className="shell grid py-10 sm:grid-cols-3 sm:py-12">
          {[["17+", "years in industry"], ["6", "industrial sectors"], ["3", "countries worked in"]].map(([value, label], index) => <div key={label} className={`py-5 sm:px-8 sm:py-0 ${index ? "border-t border-[var(--line)] sm:border-l sm:border-t-0" : ""}`}><p className="text-4xl font-semibold tracking-[-0.055em]">{value}</p><p className="mt-2 text-base text-muted">{label}</p></div>)}
        </div>
      </section>

      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[0.64fr_1.36fr] lg:gap-24">
          <Reveal><div className="lg:sticky lg:top-32"><SectionHeading eyebrow="Career history" title="Built through progressively larger mandates." copy="The most recent roles carry the detail. Expand earlier career entries when needed." /></div></Reveal>
          <Reveal delay={0.08}><ExperienceTimeline /></Reveal>
        </div>
      </section>

      <section className="section-pad border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="shell-narrow text-center">
          <Reveal><p className="eyebrow mb-6">Through-line</p><h2 className="balance text-4xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-6xl">Define clearly. Coordinate early. Deliver with evidence.</h2><p className="mt-7 text-lg leading-8 text-muted sm:text-xl sm:leading-9">That approach has remained consistent from first design review through field execution and handover.</p></Reveal>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
