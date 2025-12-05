"use client";

import Link from "next/link";

import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#work", label: "Personal Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg-soft)]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="#home" className="text-sm font-semibold uppercase tracking-[0.4em]">
          rami hassan
        </Link>

        <nav
          aria-label="Primary"
          className="flex flex-1 items-center justify-center gap-4 overflow-x-auto text-sm font-medium text-[var(--muted)]"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[var(--fg)]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="/rami-hassan-cv.pdf" download className="hidden sm:inline-flex">
            <Button type="button" variant="ghost" size="sm">
              Download CV
            </Button>
          </a>
          <a
            href="/rami-hassan-cv.pdf"
            download
            className="text-sm font-medium text-[var(--fg)] underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 sm:hidden"
          >
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
