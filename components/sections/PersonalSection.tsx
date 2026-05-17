"use client";

import * as React from "react";

import { ProjectDetailOverlay, type OverlayOrigin } from "@/components/ProjectDetailOverlay";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Project } from "@/data/projects";

interface PersonalSectionProps {
  projects: Project[];
}

export function PersonalSection({ projects }: PersonalSectionProps) {
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);
  const [overlayOrigin, setOverlayOrigin] = React.useState<OverlayOrigin | null>(null);

  return (
    <section id="personal" className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6">
      <ScrollReveal className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--muted)]">Personal projects</p>
        <h2 className="section-heading">Selected personal projects.</h2>
        <p className="section-description">
          A curated set of builds that highlight practical problem-solving, clean UI, and reliable engineering. Each
          project includes the goal, what I shipped, and the stack used.
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
