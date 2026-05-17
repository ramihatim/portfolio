"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { createPortal } from "react-dom";

import { Button } from "@/components/Button";
import type { Project } from "@/data/projects";

export type OverlayOrigin = {
  x: number;
  y: number;
};

type ProjectDetailOverlayProps = {
  open: boolean;
  project: Project | null;
  origin: OverlayOrigin | null;
  onClose: () => void;
};

const defaultOrigin: OverlayOrigin = { x: 0, y: 0 };

export function ProjectDetailOverlay({ open, project, origin, onClose }: ProjectDetailOverlayProps) {
  const [mounted, setMounted] = React.useState(false);
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const previousFocusRef = React.useRef<Element | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const titleId = React.useId();
  const descriptionId = React.useId();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const getFocusableElements = React.useCallback(() => {
    if (!overlayRef.current) return [] as HTMLElement[];
    const selectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    return Array.from(overlayRef.current.querySelectorAll<HTMLElement>(selectors));
  }, []);

  const trapFocus = React.useCallback(
    (event: KeyboardEvent) => {
      const focusable = getFocusableElements();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    },
    [getFocusableElements]
  );

  React.useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement;
    document.body.style.overflow = "hidden";

    const focusable = getFocusableElements();
    focusable[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        trapFocus(event);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus();
      }
    };
  }, [getFocusableElements, onClose, open, trapFocus]);

  if (!mounted) {
    return null;
  }

  const revealOrigin = origin ?? defaultOrigin;
  const clipPath = `circle(150vmax at ${revealOrigin.x}px ${revealOrigin.y}px)`;
  const collapsedClipPath = `circle(0px at ${revealOrigin.x}px ${revealOrigin.y}px)`;

  return createPortal(
    <AnimatePresence>
      {open && project ? (
        <div className="fixed inset-0 z-50">
          <motion.div
            className="absolute inset-0 bg-black/55 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.24, ease: "easeOut" }}
            onClick={onClose}
          />

          <motion.div
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="absolute inset-0 overflow-y-auto bg-[var(--bg)] text-[var(--fg)]"
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : {
                    clipPath: collapsedClipPath,
                    opacity: 1,
                  }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1 }
                : {
                    clipPath,
                    opacity: 1,
                  }
            }
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : {
                    clipPath: collapsedClipPath,
                    opacity: 1,
                  }
            }
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-4 py-4 sm:px-6 lg:px-8">
              <div className="grid min-h-[calc(100vh-2rem)] grid-cols-1 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg-soft)] shadow-2xl lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[22rem] overflow-hidden border-b border-[var(--border)] lg:min-h-full lg:border-b-0 lg:border-r">
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 56vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.3),transparent_36%),linear-gradient(180deg,rgba(8,12,18,0.1),rgba(8,12,18,0.75))]" />

                  <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="max-w-xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">Project spotlight</p>
                        <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-5xl" id={titleId}>
                          {project.title}
                        </h2>
                        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/78 sm:text-base" id={descriptionId}>
                          {project.subtitle}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="border border-white/20 bg-black/25 text-white backdrop-blur-sm hover:bg-black/35"
                        aria-label="Close project details"
                        onClick={onClose}
                      >
                        Close
                      </Button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-white/18 bg-white/10 p-4 backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/60">Role</p>
                        <p className="mt-2 text-lg font-medium text-white">{project.role}</p>
                      </div>
                      <div className="rounded-[1.5rem] border border-white/18 bg-white/10 p-4 backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/60">Impact</p>
                        <p className="mt-2 text-lg font-medium text-white">{project.metric ?? project.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,255,255,0.92))] dark:bg-[linear-gradient(180deg,rgba(10,12,16,0.9),rgba(6,7,11,0.98))]">
                  <div className="grid gap-4 border-b border-[var(--border)] p-6 sm:p-8">
                    <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--bg)]/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">Overview</p>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.impact}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--bg)]">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={project.image}
                            alt={`${project.title} interface overview`}
                            fill
                            className="object-cover object-left-top"
                            sizes="(max-width: 1024px) 50vw, 24vw"
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Interface</p>
                          <p className="mt-1 text-sm text-[var(--fg)]">Main workflow view and product shell.</p>
                        </div>
                      </div>

                      <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--bg)]">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={project.image}
                            alt={`${project.title} detail crop`}
                            fill
                            className="object-cover object-right-top scale-110"
                            sizes="(max-width: 1024px) 50vw, 24vw"
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Detail</p>
                          <p className="mt-1 text-sm text-[var(--fg)]">Closer look at the visual system and states.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid flex-1 gap-6 overflow-y-auto p-6 sm:p-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">What shipped</p>
                      <div className="mt-4 grid gap-3">
                        {project.details.map((detail, index) => (
                          <motion.div
                            key={detail}
                            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
                            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                            transition={{ delay: prefersReducedMotion ? 0 : 0.1 + index * 0.06, duration: 0.35 }}
                            className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--bg)]/72 p-4"
                          >
                            <p className="text-sm leading-7 text-[var(--muted)]">{detail}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">Stack</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm text-[var(--fg)] shadow-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
