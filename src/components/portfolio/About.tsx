import { BrandMark } from "@/components/portfolio/BrandMark";
import { site } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen scroll-mt-24 items-center justify-center px-5 py-28 md:px-10"
    >
      <div className="panel mx-auto w-full max-w-3xl p-7 text-center md:p-10">
        <p className="font-mono text-[11px] tracking-[0.32em] text-cyan-200/80">
          01 / APPROACH
        </p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-5xl">
          {site.about.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80">
          {site.about.lead}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/70">
          {site.about.body}
        </p>
        <dl className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
          {site.about.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-[10px] tracking-[0.22em] text-white/45">
                {stat.label.toUpperCase()}
              </dt>
              <dd className="mt-2 text-sm text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mx-auto mt-8 max-w-xl space-y-6 border-t border-white/10 pt-6">
          {site.education.map((item) => (
            <div key={item.school} className="space-y-2">
              {"logo" in item && item.logo ? (
                <div className="flex justify-center">
                  <BrandMark brand={item.logo} size="md" />
                </div>
              ) : null}
              <h3 className="text-sm text-white">{item.school}</h3>
              <p className="text-sm text-white/70">{item.degree}</p>
              <p className="text-xs text-white/45">
                {item.detail} · {item.where} · {item.when}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
