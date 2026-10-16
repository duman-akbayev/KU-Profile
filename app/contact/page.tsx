import type { Metadata } from "next";
import { LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { CopyEmail } from "@/components/copy-email";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kanat Umertayev about senior project engineering and civil engineering opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Start with the project, role, or challenge." copy="For senior engineering roles, owner-side assignments, and industrial project conversations." note="Kanat typically replies within one to two business days." />
      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <aside className="space-y-10 lg:sticky lg:top-32">
              <div>
                <p className="text-sm font-semibold text-muted">Email</p>
                <a href={`mailto:${profile.email}`} className="mt-2 block break-all text-2xl font-semibold tracking-[-0.04em] transition hover:text-accent">{profile.email}</a>
                <div className="mt-4"><CopyEmail /></div>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted">Phone</p>
                <a href={`tel:${profile.phone}`} className="mt-2 inline-flex items-center gap-3 text-lg font-medium transition hover:text-accent"><PhoneIcon className="size-5" /> {profile.phoneDisplay}</a>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted">Location</p>
                <p className="mt-2 flex items-center gap-3 text-lg"><MapPinIcon className="size-5" /> {profile.location}</p>
              </div>
              <div className="flex gap-3">
                <a href={`mailto:${profile.email}`} className="grid size-12 place-items-center rounded-xl border border-[var(--line)] bg-[var(--surface)] transition hover:border-[var(--line-strong)]" aria-label="Email Kanat"><MailIcon /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="grid size-12 place-items-center rounded-xl border border-[var(--line)] bg-[var(--surface)] transition hover:border-[var(--line-strong)]" aria-label="Kanat on LinkedIn"><LinkedInIcon /></a>
              </div>
            </aside>
          </Reveal>
          <Reveal delay={0.08}>
            <div><h2 className="mb-7 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Send a short brief</h2><ContactForm /></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
