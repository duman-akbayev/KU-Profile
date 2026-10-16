import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, DownloadIcon, MapPinIcon } from "@/components/icons";
import { ContactStrip } from "@/components/contact-strip";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { expertise, experience, getProjectPhoto, profile, projects } from "@/data/portfolio";

export default function HomePage() {
  const selectedProjects = projects.filter((project) => project.featured).slice(0, 3);
  const heroPhoto = getProjectPhoto("recovery-power-plant");

  return (
    <>
      <section className="pt-40 sm:pt-48">
        <div className="shell">
          <Reveal>
            <p className="eyebrow mb-7">Project Engineer · Employer’s Representative</p>
            <h1 className="display-title balance">Clarity for complex industrial projects.</h1>
            <p className="pretty mt-8 max-w-3xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10">
              Kanat Umertayev brings 17+ years of civil and project engineering experience to high-stakes work across power, steel, oil and gas, and mining.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/projects" className="button-primary">View selected work <ArrowRightIcon /></Link>
              <a href={profile.cvPath} download className="button-secondary"><DownloadIcon /> Download CV</a>
            </div>
            <p className="mt-7 flex items-center gap-2 text-[0.9rem] text-muted"><MapPinIcon className="size-4" /> {profile.location} · Open to international opportunities</p>
          </Reveal>

          <Reveal delay={0.12} className="mt-16 sm:mt-20">
            <div className="photo-frame aspect-[16/9] sm:aspect-[16/8]">
              {heroPhoto && <Image src={heroPhoto.src} alt={heroPhoto.alt} fill priority className="object-cover" sizes="(min-width: 1200px) 1152px, 100vw" />}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8">
                <p className="text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">17+</p>
                <p className="mt-1 text-sm text-white/75 sm:text-base">years turning engineering risk into clear decisions</p>
              </div>
              {heroPhoto && <a href={heroPhoto.sourceUrl} target="_blank" rel="noreferrer" className="photo-credit">Illustrative photo · Pexels</a>}
            </div>
          </Reveal>

          <div className="grid border-b border-[var(--line)] py-10 sm:grid-cols-3 sm:py-12">
            {[
              ["Owner-side", "Perspective that protects delivery and operations"],
              ["6 sectors", "Power, steel, oil and gas, mining, and infrastructure"],
              ["3 countries", "Project and research experience across three markets"],
            ].map(([value, label], index) => (
              <div key={value} className={`py-5 sm:px-8 sm:py-0 ${index ? "border-t border-[var(--line)] sm:border-l sm:border-t-0" : ""}`}>
                <p className="text-2xl font-semibold tracking-[-0.04em]">{value}</p>
                <p className="mt-2 max-w-xs text-[0.92rem] leading-6 text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell-narrow text-center">
          <Reveal>
            <p className="eyebrow mb-6">What matters</p>
            <h2 className="balance text-[clamp(2.7rem,5.5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.058em]">Make the right decision before uncertainty reaches the site.</h2>
            <p className="pretty mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">Design, contracts, schedule, field conditions, and operations all meet at the project interface. That is where Kanat creates clarity.</p>
          </Reveal>
        </div>
        <div className="shell mt-16 grid gap-10 border-t border-[var(--line)] pt-12 md:grid-cols-3">
          {expertise.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article>
                <p className="text-sm font-semibold text-accent">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="pretty mt-4 text-base leading-8 text-muted">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[var(--surface)]">
        <div className="shell">
          <div className="mb-16 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <Reveal><SectionHeading eyebrow="Selected work" title="A few projects that show the range." /></Reveal>
            <Reveal delay={0.08}><Link href="/projects" className="button-quiet">All projects <ArrowRightIcon /></Link></Reveal>
          </div>
          <div className="space-y-16">
            <Reveal><ProjectCard project={selectedProjects[0]} featured /></Reveal>
            <div className="grid gap-10 md:grid-cols-2">
              {selectedProjects.slice(1).map((project, index) => <Reveal key={project.slug} delay={index * 0.08}><ProjectCard project={project} /></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow mb-5">Recent experience</p>
              <h2 className="balance text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">Responsibility at every stage.</h2>
              <Link href="/experience" className="button-quiet mt-7">Full career history <ArrowRightIcon /></Link>
            </div>
          </Reveal>
          <div>
            {experience.slice(0, 3).map((item) => (
              <Reveal key={`${item.company}-${item.period}`}>
                <article className="border-t border-[var(--line)] py-8 first:border-t-0 first:pt-0">
                  <p className="text-[0.88rem] font-semibold text-accent">{item.period}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{item.role}</h3>
                  <p className="mt-1 text-base font-medium text-ink-soft">{item.company}</p>
                  <p className="pretty mt-4 max-w-2xl text-base leading-8 text-muted">{item.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
