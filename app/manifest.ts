import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kanat Umertayev — Project & Civil Engineer",
    short_name: "Kanat Umertayev",
    description: "Professional portfolio of Kanat Umertayev, project engineer, Employer’s representative, and civil engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#0a0a0a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
