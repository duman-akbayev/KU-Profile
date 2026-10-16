import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { getProjectPhoto, type Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const photo = getProjectPhoto(project.slug);

  return (
    <article className={`group ${featured ? "grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14" : "card-surface overflow-hidden"}`}>
      <div className={`photo-frame ${featured ? "aspect-[16/10]" : "aspect-[16/10] rounded-none!"}`}>
        <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-[1]" aria-label={`View ${project.shortTitle} case study`} />
        {photo && <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 768px) 50vw, 100vw"} />}
        {photo && <a href={photo.sourceUrl} target="_blank" rel="noreferrer" className="photo-credit">Illustrative photo · Pexels</a>}
      </div>
      <div className={featured ? "py-2" : "p-6 sm:p-7"}>
        <p className="text-sm font-semibold text-accent">{project.sector} · {project.period}</p>
        <h3 className={`balance mt-4 font-semibold leading-[1.06] tracking-[-0.05em] ${featured ? "text-4xl sm:text-5xl" : "text-3xl"}`}>
          <Link href={`/projects/${project.slug}`} className="transition hover:text-accent">{project.shortTitle}</Link>
        </h3>
        <p className={`pretty mt-5 leading-8 text-muted ${featured ? "text-lg" : "text-base"}`}>{project.intro}</p>
        <Link href={`/projects/${project.slug}`} className="button-quiet mt-7">View case study <ArrowRightIcon /></Link>
      </div>
    </article>
  );
}
