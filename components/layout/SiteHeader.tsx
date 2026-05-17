"use client";

import Link from "next/link";

import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { href: "#home", label: "Home", mobileLabel: "Home" },
  { href: "#work", label: "Work", mobileLabel: "Work" },
  { href: "#personal", label: "Personal Projects", mobileLabel: "Projects" },
  { href: "#about", label: "About", mobileLabel: "About" },
  { href: "#contact", label: "Contact", mobileLabel: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg-soft)]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <Link href="#home" className="text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm sm:tracking-[0.4em]">
          rami hassan
        </Link>

        <nav
          aria-label="Primary"
          className="order-3 -mx-1 flex w-full items-center gap-1 overflow-x-auto px-1 text-xs font-medium text-[var(--muted)] sm:order-none sm:mx-0 sm:w-auto sm:flex-1 sm:justify-center sm:gap-4 sm:px-0 sm:text-sm"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 whitespace-nowrap transition hover:bg-[var(--border)]/30 hover:text-[var(--fg)] sm:bg-transparent sm:px-0 sm:py-0"
            >
              <span className="sm:hidden">{item.mobileLabel}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
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
