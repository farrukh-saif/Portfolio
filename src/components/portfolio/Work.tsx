import { site } from "@/lib/content";

export function Work() {
  return (
    <section id="work" className="relative min-h-screen scroll-mt-24 px-5 py-28 md:px-10">
      <div className="mb-10 max-w-2xl">
        <p className="font-mono text-[11px] tracking-[0.32em] text-cyan-200/75">
          02 / FLIGHT LOG
        </p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-5xl">
          Experience
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {site.experience.map((job) => (
          <article
            key={job.code}
            className="flex flex-col rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl md:p-7"
          >
            <div className="flex items-center justify-between gap-3 font-mono text-[11px] text-white/45">
              <span>{job.code}</span>
              <span>{job.when}</span>
            </div>
            <h3 className="mt-5 text-2xl font-medium text-white">{job.company}</h3>
            <p className="mt-1 text-sm text-white/55">
              {job.role} · {job.where}
            </p>
            <ul className="mt-4 flex-1 space-y-2 text-sm leading-6 text-white/65">
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-white/55"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
