"use client";

import * as React from "react";

import { Modal } from "@/components/Modal";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

interface PersonalSectionProps {
  projects: Project[];
}

export function PersonalSection({ projects }: PersonalSectionProps) {
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);

  return (
    <section id="personal" className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--muted)]">Personal projects</p>
        <h2 className="section-heading">Selected personal projects.</h2>
        <p className="section-description">
          A curated set of builds that highlight practical problem-solving, clean UI, and reliable engineering. Each
          project includes the goal, what I shipped, and the stack used.
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
