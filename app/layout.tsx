import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PageTransition } from "@/components/page-transition";
import { ScrollProgress } from "@/components/scroll-progress";
import { profile } from "@/data/portfolio";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Project & Civil Engineer`,
    template: `%s — ${profile.name}`,
  },
  description: profile.shortBio,
  keywords: [
    "project engineer",
    "civil engineer",
    "employer representative",
    "industrial construction",
    "EPC project management",
    "Primavera P6",
    "Kazakhstan engineer",
    "power plant construction",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${profile.name} — Clarity for complex projects`,
    description: profile.shortBio,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Project & Civil Engineer`,
    description: profile.shortBio,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('kanat-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {}
})();`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Project and Civil Engineer",
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karaganda",
    addressCountry: "KZ",
  },
  sameAs: [profile.linkedin],
  knowsAbout: [
    "EPC project management",
    "Civil engineering",
    "Industrial construction",
    "Design management",
    "Primavera P6",
    "Quality control",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">{themeScript}</Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body>
        <a href="#main-content" className="fixed left-3 top-3 z-[100] -translate-y-20 rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-ink transition focus:translate-y-0">Skip to content</a>
        <ScrollProgress />
        <Navigation />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
