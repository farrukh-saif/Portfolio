import { site } from "@/lib/content";

export function Skills() {
  return (
    <section
      id="stack"
      className="relative flex min-h-screen scroll-mt-24 items-center justify-center px-5 py-28 md:px-10"
    >
      <div className="panel mx-auto w-full max-w-3xl p-7 text-center md:p-10">
        <p className="font-mono text-[11px] tracking-[0.32em] text-cyan-200/80">
          03 / INSTRUMENTS
        </p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-5xl">
          Optics, code, and the bench
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {site.skills.map((group) => (
            <div key={group.group}>
              <h3 className="font-mono text-[11px] tracking-[0.24em] text-white/45">
                {group.group.toUpperCase()}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 font-mono text-[11px] tracking-[0.16em] text-white/45">
          {site.languages.join(" · ")}
        </p>
      </div>
    </section>
  );
}
