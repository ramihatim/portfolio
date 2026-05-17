"use client";

import * as React from "react";

import { ProjectDetailOverlay, type OverlayOrigin } from "@/components/ProjectDetailOverlay";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Project } from "@/data/projects";

interface WorkSectionProps {
  projects: Project[];
}

export function WorkSection({ projects }: WorkSectionProps) {
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);
  const [overlayOrigin, setOverlayOrigin] = React.useState<OverlayOrigin | null>(null);

  return (
    <section id="work" className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6">
      <ScrollReveal className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--muted)]">Featured work</p>
        <h2 className="section-heading">Product partnerships with measurable lift.</h2>
        <p className="section-description">
          Multi-disciplinary initiatives covering research, UX, and front-of-house engineering. Every project below pairs
          tangible problem statements with accountable delivery.
        </p>
      </ScrollReveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ScrollReveal key={project.slug} delay={index * 0.08}>
            <ProjectCard
              project={project}
              onOpen={(selectedProject, origin) => {
                setActiveProject(selectedProject);
                setOverlayOrigin(origin);
              }}
            />
          </ScrollReveal>
        ))}
      </div>

      <ProjectDetailOverlay
        open={Boolean(activeProject)}
        project={activeProject}
        origin={overlayOrigin}
        onClose={() => {
          setActiveProject(null);
          setOverlayOrigin(null);
        }}
      />
    </section>
  );
}
