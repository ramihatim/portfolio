import { Button } from "@/components/Button";
import { contactLinks } from "@/data/site";
import * as Icons from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-soft)] p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--muted)]">Contact</p>
        <h2 className="mt-3 text-2xl font-semibold">Contact me at anytime!</h2>
        <p className="mt-2 text-sm text-[var(--muted)]">Based in Dubai, collaborating globally.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {contactLinks.map((link, index) => {
            const Icon = link.icon ? (Icons as any)[link.icon] : null;

            return (
              <a
                key={link.label}
                href={link.href}
                target={index === 0 ? undefined : "_blank"}
                rel={index === 0 ? undefined : "noreferrer"}
              >
                <Button
                  variant={index === 0 ? "subtle" : "ghost"}
                  size="lg"
                  className="w-full flex flex-row items-center gap-2"
                >
                  {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
              {link.label}
                </Button>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
