import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";
import { MyDialog } from '../components/project-dialog';

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
          <MyDialog 
                        src={project.src || ""} // Add your image path here
                        desc={project.dialogDesc || ""} 
                        link={project.dialogLink || ""} 
                        buttonText={project.buttonText || ""} 
                        dimensions={project.dimensions}
                      >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {project.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {/* {project.startDate} - {project.endDate} */}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {project.description}
              </p>
            </div>
            </MyDialog>
          </div>
        ))}
      </div>
    </section>
  );
}
