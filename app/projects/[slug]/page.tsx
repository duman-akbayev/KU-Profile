import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, CheckIcon, ChevronLeftIcon } from "@/components/icons";
import { ContactStrip } from "@/components/contact-strip";
import { Reveal } from "@/components/reveal";
import { getProject, getProjectPhoto, projects } from "@/data/portfolio";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const photo = getProjectPhoto(slug);
  return {
    title: project.shortTitle,
    description: project.intro,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: `${project.shortTitle} — Case Study`, description: project.intro, images: photo ? [{ url: photo.src, alt: photo.alt }] : undefined },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const photo = getProjectPhoto(slug);
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <article>
        <header className="pt-36 sm:pt-44">
          <div className="shell pb-16 sm:pb-20">
            <Reveal>
              <Link href="/projects" className="mb-12 inline-flex items-center gap-2 text-[0.9rem] font-medium text-muted transition hover:text-ink"><ChevronLeftIcon className="size-4" /> All projects</Link>
              <p className="eyebrow mb-6">{project.sector}</p>
              <h1 className="balance max-w-5xl text-[clamp(3.6rem,7.5vw,7rem)] font-semibold leading-[0.97] tracking-[-0.064em]">{project.shortTitle}</h1>
              <p className="pretty mt-8 max-w-3xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10">{project.intro}</p>
              <div className="mt-10 grid gap-6 border-t border-[var(--line)] pt-8 sm:grid-cols-3">
                <div><p className="text-sm text-muted">Role</p><p className="mt-1 font-semibold">{project.role}</p></div>
                <div><p className="text-sm text-muted">Organization</p><p className="mt-1 font-semibold">{project.company}</p></div>
                <div><p className="text-sm text-muted">Location & period</p><p className="mt-1 font-semibold">{project.location} · {project.period}</p></div>
              </div>
            </Reveal>
          </div>
        </header>

        <div className="shell">
          <Reveal>
            <div className="photo-frame aspect-[16/9] sm:aspect-[16/8]">
              {photo && <Image src={photo.src} alt={photo.alt} fill priority className="object-cover" sizes="(min-width: 1200px) 1152px, 100vw" />}
              {photo && <a href={photo.sourceUrl} target="_blank" rel="noreferrer" className="photo-credit">Illustrative photo · Pexels</a>}
            </div>
          </Reveal>
          <div className="grid py-10 sm:grid-cols-3 sm:py-12">
            {project.metrics.map((metric, index) => <div key={metric.label} className={`py-5 sm:px-8 sm:py-0 ${index ? "border-t border-[var(--line)] sm:border-l sm:border-t-0" : ""}`}><p className="text-3xl font-semibold tracking-[-0.05em]">{metric.value}</p><p className="mt-2 text-[0.92rem] text-muted">{metric.label}</p></div>)}
          </div>
        </div>

        <section className="section-pad border-y border-[var(--line)] bg-[var(--surface)]">
          <div className="shell grid gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <div><p className="eyebrow mb-5">The challenge</p><h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">What had to become clear.</h2><p className="pretty mt-6 text-lg leading-9 text-muted">{project.challenge}</p></div>
            </Reveal>
            <Reveal delay={0.08}>
              <div><p className="eyebrow mb-5">The outcome</p><h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">What changed.</h2><ul className="mt-7 space-y-5">{project.impact.map((item) => <li key={item} className="flex gap-4 text-lg leading-8 text-ink-soft"><span className="mt-1.5 grid size-7 shrink-0 place-items-center rounded-full bg-[var(--accent-soft)] text-accent"><CheckIcon className="size-4" /></span><span>{item}</span></li>)}</ul></div>
            </Reveal>
          </div>
        </section>

        <section className="section-pad">
          <div className="shell grid gap-14 lg:grid-cols-[0.68fr_1.32fr] lg:gap-24">
            <Reveal><div><p className="eyebrow mb-5">Contribution</p><h2 className="balance text-4xl font-semibold leading-[1.06] tracking-[-0.05em]">The work behind the result.</h2><p className="mt-5 text-base leading-8 text-muted">Core actions first. Supporting detail is available when useful.</p></div></Reveal>
            <Reveal delay={0.08}>
              <ol>
                {project.response.slice(0, 3).map((item, index) => <li key={item} className="grid grid-cols-[2rem_1fr] gap-4 border-t border-[var(--line)] py-6"><span className="text-sm font-semibold text-accent">0{index + 1}</span><p className="text-base leading-8 text-ink-soft sm:text-lg">{item}</p></li>)}
              </ol>
              {project.response.length > 3 && <details className="minimal-details"><summary>Additional responsibilities</summary><div className="minimal-details-content"><ul className="space-y-4">{project.response.slice(3).map((item) => <li key={item} className="flex gap-3 leading-8"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" /><span>{item}</span></li>)}</ul></div></details>}
              <details className="minimal-details"><summary>Tools, standards, and methods</summary><div className="minimal-details-content"><div className="flex flex-wrap gap-2.5">{project.technologies.map((technology) => <span key={technology} className="rounded-xl border border-[var(--line)] px-4 py-2.5 text-[0.92rem] text-ink-soft">{technology}</span>)}</div></div></details>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-20 sm:py-24">
          <div className="shell">
            <Reveal>
              <p className="eyebrow mb-6">Next project</p>
              <Link href={`/projects/${nextProject.slug}`} className="group flex flex-col justify-between gap-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-7 transition hover:border-[var(--line-strong)] hover:shadow-[var(--shadow-soft)] sm:flex-row sm:items-end sm:p-10">
                <div><p className="text-sm font-semibold text-accent">{nextProject.sector}</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">{nextProject.shortTitle}</h2></div>
                <span className="button-quiet shrink-0">View case study <ArrowRightIcon /></span>
              </Link>
            </Reveal>
          </div>
        </section>
      </article>
      <ContactStrip />
    </>
  );
}
