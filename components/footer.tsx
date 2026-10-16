import Link from "next/link";
import { LinkedInIcon, MailIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="shell py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.7fr_0.9fr]">
          <div>
            <p className="text-xl font-semibold tracking-[-0.035em]">{profile.name}</p>
            <p className="mt-3 max-w-sm text-[0.95rem] leading-7 text-muted">Project and civil engineering leadership for complex industrial environments.</p>
          </div>
          <nav className="flex flex-col items-start gap-3 text-[0.9rem]" aria-label="Footer navigation">
            <Link className="text-muted transition hover:text-ink" href="/about">About</Link>
            <Link className="text-muted transition hover:text-ink" href="/experience">Experience</Link>
            <Link className="text-muted transition hover:text-ink" href="/projects">Projects</Link>
            <Link className="text-muted transition hover:text-ink" href="/cv">CV</Link>
          </nav>
          <div className="flex flex-col items-start gap-3 text-[0.9rem]">
            <a className="inline-flex items-center gap-2 text-muted transition hover:text-ink" href={`mailto:${profile.email}`}><MailIcon className="size-4" /> Email</a>
            <a className="inline-flex items-center gap-2 text-muted transition hover:text-ink" href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon className="size-4" /> LinkedIn</a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-[0.78rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kanat Umertayev</p>
          <p>Illustrative project photography sourced from <a className="underline decoration-[var(--line-strong)] underline-offset-4 hover:text-ink" href="https://www.pexels.com/" target="_blank" rel="noreferrer">Pexels</a>.</p>
        </div>
      </div>
    </footer>
  );
}
