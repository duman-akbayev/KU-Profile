"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--nav-bg)] backdrop-blur-xl">
      <div className="shell flex h-20 items-center justify-between gap-5">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 font-semibold tracking-[-0.025em]" aria-label="Kanat Umertayev, home">
          <span className="grid size-9 place-items-center rounded-xl bg-ink text-sm font-bold text-[var(--canvas)]">K</span>
          <span className="hidden sm:block">Kanat Umertayev</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {links.map((link) => {
            const active = pathname === link.href || (link.href === "/projects" && pathname.startsWith("/projects/"));
            return (
              <Link key={link.href} href={link.href} className={`relative py-2 text-[0.9rem] font-medium transition-colors ${active ? "text-ink" : "text-muted hover:text-ink"}`}>
                {link.label}
                {active && <motion.span layoutId="nav-active" className="absolute inset-x-0 -bottom-[1.42rem] h-0.5 bg-accent" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Link href="/contact" className="nav-contact-button button-primary !min-h-11 !px-4">
            Contact <ArrowUpRightIcon className="size-4" />
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl border border-[var(--line)] bg-[var(--surface)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-[var(--line)] bg-[var(--canvas)] lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="shell py-4">
              {[...links, { href: "/contact", label: "Contact" }].map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-[var(--line)] py-5 text-2xl font-semibold tracking-[-0.04em]">
                  {link.label}<ArrowUpRightIcon className="text-muted" />
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
