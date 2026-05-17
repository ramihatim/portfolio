"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/Button";
import type { Project } from "@/data/projects";

export type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project, origin: { x: number; y: number }) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    onOpen(project, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  };

  return (
    <motion.article
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 32 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative min-h-[22rem] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-soft)] shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:shadow-lg focus-within:ring-[var(--accent)]"
    >
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          width={640}
          height={400}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          priority={project.featured}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

      <div className="relative flex min-h-[22rem] flex-col justify-end p-6 text-white">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="pointer-events-auto translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
            <Button
              variant="subtle"
              size="sm"
              className="border-white/30 bg-white/12 text-white backdrop-blur-sm hover:border-white hover:bg-white/18"
              onClick={handleOpen}
            >
              See more details
            </Button>
          </div>
        </div>

        <div className="max-w-[26rem]">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/78">{project.subtitle}</p>
        </div>
      </div>
    </motion.article>
  );
}
