import { BrandMark } from "@/components/portfolio/BrandMark";
import { site } from "@/lib/content";

export function Work() {
  return (
    <section
      id="work"
      className="relative scroll-mt-24 px-5 py-28 md:px-10"
    >
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="font-mono text-[11px] tracking-[0.32em] text-cyan-200/80">
          02 / FLIGHT LOG
        </p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-5xl">
          Experience
        </h2>
      </div>
      <div className="mx-auto flex max-w-3xl flex-col gap-5">
        {site.experience.map((job) => (
          <article key={job.code} className="panel p-6 text-center md:p-8">
            <p className="font-mono text-[11px] text-white/45">
              {job.code} · {job.when}
            </p>
            {"logo" in job && job.logo === "everpixel" ? (
              <h3 className="mt-5 flex justify-center">
                <BrandMark brand="everpixel" size="lg" />
              </h3>
            ) : (
              <>
                {"logo" in job && job.logo ? (
                  <div className="mt-5 flex justify-center">
                    <BrandMark brand={job.logo} size="md" />
                  </div>
                ) : null}
                <h3 className="mt-4 text-2xl font-medium text-white">
                  {job.company}
                </h3>
              </>
            )}
            <p className="mt-1 text-sm text-white/70">
              {job.role} · {job.where}
            </p>
            <ul className="mx-auto mt-5 max-w-2xl space-y-3 text-left text-sm leading-7 text-white/80">
              {job.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-cyan-300/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-white/60"
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
