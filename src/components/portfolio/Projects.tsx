import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { getFeaturedProjects } from "@/lib/projects";

export function Projects() {
  const projects = getFeaturedProjects();
  if (!projects.length) return null;

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 px-5 py-28 md:px-10"
    >
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="font-mono text-[11px] tracking-[0.32em] text-cyan-200/80">
          03 / PAYLOADS
        </p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-5xl">
          Projects
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/75">
          Click a card for the visual. Demos, source, and the notes behind the
          build.
        </p>
      </div>
      <div className="mx-auto max-w-5xl">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
