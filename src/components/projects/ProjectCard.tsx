"use client";

import { useRef } from "react";
import type { Project } from "@/lib/projects";

function isVideo(src: string) {
  return /\.(mp4|webm|mov)$/i.test(src);
}

function Preview({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className: string;
}) {
  if (isVideo(src)) {
    return (
      <video
        className={className}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        aria-label={title}
      />
    );
  }

  return <img className={className} src={src} alt={title} />;
}

export function ProjectCard({ project }: { project: Project }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const external = Boolean(project.href?.startsWith("http"));

  function open() {
    dialog.current?.showModal();
  }

  function close() {
    dialog.current?.close();
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="panel group w-full overflow-hidden text-left transition-colors hover:border-white/25"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-black/50">
          <Preview
            src={project.image}
            title={project.title}
            className="h-full w-full object-cover object-top opacity-85 brightness-[0.92] saturate-[0.8] transition-[transform,opacity,filter] duration-500 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:brightness-100 group-hover:saturate-100"
          />
          <div className="pointer-events-none absolute inset-0 bg-[#02010a]/12 transition-opacity duration-500 group-hover:opacity-0" />
        </div>
        <div className="p-5 md:p-6">
          <h3 className="text-xl font-medium text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/75">
            {project.summary}
          </p>
          {project.tags.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </button>

      <dialog
        ref={dialog}
        className="project-dialog w-[min(92vw,760px)] max-h-[88vh] flex-col overflow-auto rounded-2xl border border-white/12 bg-[#05040f] p-5 text-white shadow-2xl md:p-7"
        onClick={(event) => {
          if (event.target === dialog.current) close();
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-[11px] tracking-[0.28em] text-cyan-200/80">
            PROJECT
          </p>
          <div className="flex items-center gap-2">
            {project.href ? (
              <a
                href={project.href}
                className="inline-flex items-center rounded-full border border-cyan-200/30 bg-cyan-300/10 px-4 py-1.5 text-sm text-cyan-100 transition-colors hover:bg-cyan-300/20"
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {project.cta ?? "Open"}
              </a>
            ) : null}
            <button
              type="button"
              onClick={close}
              className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-white/70 hover:text-white"
              aria-label="Close project preview"
            >
              CLOSE
            </button>
          </div>
        </div>
        <h3 className="mt-3 text-2xl font-medium tracking-tight text-white">
          {project.title}
        </h3>
        <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/40">
          <Preview
            src={project.image}
            title={project.title}
            className="mx-auto max-h-[min(52vh,460px)] w-full object-contain"
          />
        </div>
        <p className="mt-5 text-sm leading-7 text-white/75">{project.summary}</p>
      </dialog>
    </>
  );
}
