import type { Metadata } from "next";
import { DownloadIcon, LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { PrintButton } from "@/components/print-button";
import { credentials, education, experience, languages, profile, projects, strengths, tools } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "Curriculum vitae of Kanat Umertayev, Project Engineer, Employer’s Representative, and Civil Engineer.",
  alternates: { canonical: "/cv" },
};

export default function CVPage() {
  return (
    <div className="pb-24 pt-32 sm:pt-36">
      <div className="print-hidden shell mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="eyebrow mb-3">Curriculum vitae</p><h1 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Full career record</h1></div>
        <div className="flex flex-col gap-3 sm:flex-row"><a href={profile.cvPath} download className="button-primary"><DownloadIcon /> Download PDF</a><PrintButton /></div>
      </div>

      <article className="cv-sheet mx-auto w-[min(100%-1.5rem,64rem)] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow-soft)]">
        <header className="border-b border-[var(--line)] p-7 sm:p-12">
          <p className="eyebrow mb-5">Project · Civil · Owner-side</p>
          <h2 className="text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">{profile.name}</h2>
          <p className="mt-4 text-lg font-medium text-ink-soft">{profile.title}</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[0.9rem] text-muted">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2"><MailIcon className="size-4" /> {profile.email}</a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-2"><PhoneIcon className="size-4" /> {profile.phoneDisplay}</a>
            <span className="flex items-center gap-2"><MapPinIcon className="size-4" /> {profile.location}</span>
            <a href={profile.linkedin} className="flex items-center gap-2"><LinkedInIcon className="size-4" /> LinkedIn</a>
          </div>
        </header>

        <div className="p-7 sm:p-12">
          <section className="cv-avoid-break grid gap-5 border-b border-[var(--line)] pb-10 sm:grid-cols-[10rem_1fr] sm:gap-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-accent">Profile</h2>
            <div><p className="text-lg leading-9 text-ink-soft">{profile.shortBio} Experienced in project-documentation analysis, industrial design and construction management, constructability, planning, quality, and technical risk control.</p><div className="mt-5 flex flex-wrap gap-2">{strengths.slice(0, 6).map((item) => <span key={item} className="rounded-lg bg-[var(--canvas-soft)] px-3 py-1.5 text-[0.82rem] text-muted">{item}</span>)}</div></div>
          </section>

          <section className="pt-10">
            <div className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-10"><h2 className="text-sm font-bold uppercase tracking-[0.08em] text-accent">Experience</h2><p className="text-base text-muted">Selected responsibilities and outcomes across 17+ years</p></div>
            <div className="mt-5">
              {experience.map((item, index) => (
                <article key={`${item.company}-${item.period}`} className="cv-avoid-break grid gap-4 border-t border-[var(--line)] py-7 sm:grid-cols-[10rem_1fr] sm:gap-10">
                  <div><p className="text-[0.82rem] font-semibold text-ink-soft">{item.period}</p><p className="mt-1 text-[0.8rem] text-muted">{item.location}</p></div>
                  <div><h3 className="text-xl font-semibold tracking-[-0.03em]">{item.role}</h3><p className="mt-1 font-medium text-accent">{item.company}</p><p className="mt-3 text-[0.95rem] leading-7 text-ink-soft">{item.summary}</p>{index < 5 && <ul className="mt-3 space-y-2">{item.achievements.map((achievement) => <li key={achievement} className="flex gap-3 text-[0.9rem] leading-7 text-muted"><span>—</span><span>{achievement}</span></li>)}</ul>}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="cv-page-break pt-10">
            <div className="grid gap-3 border-b border-[var(--line)] pb-5 sm:grid-cols-[10rem_1fr] sm:gap-10"><h2 className="text-sm font-bold uppercase tracking-[0.08em] text-accent">Projects</h2><p className="text-base text-muted">Representative capital and industrial assignments</p></div>
            {projects.slice(0, 6).map((project) => <article key={project.slug} className="cv-avoid-break grid gap-3 border-b border-[var(--line)] py-6 sm:grid-cols-[10rem_1fr] sm:gap-10"><div><p className="text-[0.8rem] font-semibold text-ink-soft">{project.period}</p><p className="mt-1 text-[0.78rem] text-muted">{project.sector}</p></div><div><h3 className="text-lg font-semibold">{project.shortTitle}</h3><p className="mt-2 text-[0.92rem] leading-7 text-muted">{project.intro}</p></div></article>)}
          </section>

          <section className="cv-avoid-break grid gap-5 border-b border-[var(--line)] py-10 sm:grid-cols-[10rem_1fr] sm:gap-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-accent">Education</h2>
            <div className="space-y-6">{education.map((item) => <div key={`${item.degree}-${item.period}`}><div className="flex flex-wrap justify-between gap-2"><h3 className="text-lg font-semibold">{item.degree}</h3><span className="text-[0.82rem] text-muted">{item.period}</span></div><p className="font-medium text-accent">{item.institution} · {item.location}</p><p className="mt-2 text-[0.9rem] leading-7 text-muted">{item.detail}</p></div>)}</div>
          </section>

          <section className="cv-avoid-break grid gap-5 border-b border-[var(--line)] py-10 sm:grid-cols-[10rem_1fr] sm:gap-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-accent">Credentials</h2>
            <div className="grid gap-6 sm:grid-cols-2">{credentials.map((item) => <div key={item.title}><p className="font-semibold">{item.title}</p><p className="mt-1 text-[0.85rem] font-medium text-accent">{item.issuer} · {item.date}</p><p className="mt-2 text-[0.88rem] leading-6 text-muted">{item.detail}</p></div>)}</div>
          </section>

          <section className="cv-avoid-break grid gap-5 pt-10 sm:grid-cols-[10rem_1fr] sm:gap-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-accent">Tools & languages</h2>
            <div><div className="flex flex-wrap gap-2">{tools.map((tool) => <span key={tool} className="rounded-lg border border-[var(--line)] px-3 py-1.5 text-[0.82rem] text-muted">{tool}</span>)}</div><div className="mt-5 flex gap-6">{languages.map((language) => <p key={language.name}><strong>{language.name}</strong> <span className="text-muted">· {language.level}</span></p>)}</div></div>
          </section>
        </div>
      </article>
    </div>
  );
}
