import React from "react";
import type { Metadata } from "next";
import { experiences } from "./experience-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Experience</h1>
      <div className="space-y-6">
      {experiences.map((project, index) => (
        <div className="flex flex-col">
          <div className="w-full flex justify-between items-baseline">
          <span className="text-black dark:text-white font-medium tracking-tight">
            {project.title}
          </span>
          <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
            {project.startDate} - {project.endDate}
          </span>
          </div>
          <span className="text-neutral-600 dark:text-neutral-400 text-sm">
            <a className="hover:opacity-80 transition-opacity duration-200" href={project.url}>
              {project.company}
            </a>
          </span>
          <p className="prose prose-neutral dark:prose-invert pt-3">
          {project.description}
          </p>
        </div>
      ))}
      </div>
    </section>
  );
}
