import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { getProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description: "Selected builds: AI products, computer vision, robotics, and AR.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="relative z-10 mx-auto min-h-screen max-w-5xl px-5 pb-24 pt-32 text-center">
      <p className="font-mono text-[11px] tracking-[0.32em] text-cyan-200/80">
        PAYLOADS
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-white md:text-6xl">
        Projects
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/75">
        Click a card for the visual. Demos, source, and the notes behind the
        build.
      </p>
      <div className="mt-12 text-left">
        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
