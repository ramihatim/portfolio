"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";
import type { Project } from "@/data/projects";

export type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 32 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col rounded-3xl border border-[var(--border)] bg-[var(--bg-soft)] p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:shadow-lg focus-within:ring-[var(--accent)]"
    >
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border)]">
        <Image
          src={project.image}
          alt={project.title}
          width={640}
          height={400}
          className="h-48 w-full object-cover"
          priority={project.featured}
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} variant={tag === "systems" ? "accent" : "neutral"}>
            {tag}
          </Tag>
        ))}
      </div>
      <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
      <p className="text-sm text-[var(--muted)]">{project.subtitle}</p>
      <p className="mt-3 flex items-center gap-2 text-sm text-[var(--muted)]">
        <span className="font-semibold text-[var(--fg)]">Role:</span> {project.role}
      </p>
      <p className="mt-2 text-base text-[var(--fg)]">{project.impact}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-[var(--muted)]">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-[var(--border)] px-3 py-1">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <Button variant="subtle" size="sm" onClick={() => onOpen(project)}>
          See more details
        </Button>
        {project.metric && <p className="text-sm font-semibold text-[var(--accent)]">{project.metric}</p>}
      </div>
    </motion.article>
  );
}
