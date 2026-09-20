import { site } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen scroll-mt-24 items-center px-5 py-28 md:px-10"
    >
      <div className="max-w-xl rounded-3xl border border-white/10 bg-black/40 p-7 backdrop-blur-xl md:p-10">
        <p className="font-mono text-[11px] tracking-[0.32em] text-cyan-200/75">
          01 / APPROACH
        </p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-5xl">
          {site.about.heading}
        </h2>
        <p className="mt-6 text-base leading-8 text-white/70">{site.about.lead}</p>
        <p className="mt-4 text-base leading-8 text-white/55">{site.about.body}</p>
        <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
          {site.about.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-[10px] tracking-[0.22em] text-white/40">
                {stat.label.toUpperCase()}
              </dt>
              <dd className="mt-2 text-sm text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
          {site.education.map((item) => (
            <div key={item.school}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-sm text-white">{item.school}</h3>
                <span className="shrink-0 font-mono text-[10px] tracking-[0.12em] text-white/40">
                  {item.when}
                </span>
              </div>
              <p className="mt-1 text-sm text-white/60">{item.degree}</p>
              <p className="mt-1 text-xs text-white/40">
                {item.detail} · {item.where}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
