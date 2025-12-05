"use client";

import * as React from "react";

import { Modal } from "@/components/Modal";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

interface WorkSectionProps {
  projects: Project[];
}

export function WorkSection({ projects }: WorkSectionProps) {
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);

  return (
    <section id="work" className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--muted)]">Featured work</p>
        <h2 className="section-heading">Product partnerships with measurable lift.</h2>
        <p className="section-description">
          Multi-disciplinary initiatives covering research, UX, and front-of-house engineering. Every project below pairs
          tangible problem statements with accountable delivery.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={setActiveProject} />
        ))}
      </div>

      <Modal
        open={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title ?? ""}
        description={activeProject?.subtitle}
        footer={
          activeProject && (
            <p className="text-sm text-[var(--muted)]">Stack: {activeProject.stack.join(", ")}</p>
          )
        }
      >
        {activeProject && (
          <ul className="list-disc space-y-2 pl-5">
            {activeProject.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
      </Modal>
    </section>
  );
}
