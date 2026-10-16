import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();
  const staticRoutes = ["", "/about", "/experience", "/projects", "/contact", "/cv"];

  return [
    ...staticRoutes.map((route, index) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: index === 0 ? ("monthly" as const) : ("yearly" as const),
      priority: index === 0 ? 1 : route === "/projects" ? 0.9 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.75,
    })),
  ];
}
