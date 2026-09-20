import { site } from "@/lib/content";

export function Skills() {
  return (
    <section
      id="stack"
      className="relative flex min-h-screen scroll-mt-24 items-center px-5 py-28 md:px-10"
    >
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-black/40 p-7 backdrop-blur-xl md:ml-auto md:p-10">
        <p className="font-mono text-[11px] tracking-[0.32em] text-cyan-200/75">
          03 / INSTRUMENTS
        </p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-5xl">
          Optics, code, and the bench
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {site.skills.map((group) => (
            <div key={group.group}>
              <h3 className="font-mono text-[11px] tracking-[0.24em] text-white/40">
                {group.group.toUpperCase()}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 font-mono text-[11px] tracking-[0.16em] text-white/40">
          {site.languages.join(" · ")}
        </p>
      </div>
    </section>
  );
}
