import type { Metadata } from "next";
import { ContactStrip } from "@/components/contact-strip";
import { PageHero } from "@/components/page-hero";
import { ProjectFilter } from "@/components/project-filter";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected power, steel, oil and gas, construction, and infrastructure projects by Kanat Umertayev.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Selected projects" title="The work, made visual." copy="Eight assignments that show how technical review, coordination, and owner-side assurance changed delivery." note="Images are illustrative of each project type; confidential project material is not reproduced." />
      <section className="section-pad">
        <div className="shell"><ProjectFilter /></div>
      </section>
      <ContactStrip />
    </>
  );
}
