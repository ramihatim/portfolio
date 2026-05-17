"use client";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { contactLinks } from "@/data/site";
import { Github, Linkedin, Mail } from "lucide-react";

const iconMap = {
  Mail,
  Github,
  Linkedin,
} as const;

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6">
      <ScrollReveal>
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-soft)] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--muted)]">Contact</p>
          <h2 className="mt-3 text-2xl font-semibold">Contact me at anytime!</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">Based in Dubai, collaborating globally.</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {contactLinks.map((link, index) => {
              const Icon = link.icon ? iconMap[link.icon] : null;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={index === 0 ? undefined : "_blank"}
                  rel={index === 0 ? undefined : "noreferrer"}
                  aria-label={link.label}
                  title={link.label}
                >
                  <Button
                    variant={index === 0 ? "subtle" : "ghost"}
                    size="sm"
                    className="h-12 w-12 p-0"
                  >
                    {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                  </Button>
                </a>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
