"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--bg-soft)]">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-4 px-4 py-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Rami </p>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="#home" className="font-medium text-[var(--fg)] underline-offset-4 hover:underline">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
