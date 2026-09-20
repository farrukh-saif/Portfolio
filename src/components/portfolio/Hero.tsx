import { site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen scroll-mt-24 flex-col justify-end px-5 pb-16 pt-28 md:px-10 md:pb-24"
    >
      <div className="max-w-3xl">
        <p className="mb-5 font-mono text-[11px] tracking-[0.38em] text-cyan-200/80">
          HONEYWELL AEROSPACE / CAMBRIDGE
        </p>
        <h1 className="text-5xl font-medium tracking-tight text-white sm:text-7xl md:text-8xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
          {site.role}. {site.tagline}
        </p>
        <div className="mt-10 flex items-center gap-6 font-mono text-[11px] tracking-[0.24em] text-white/50">
          <span className="h-px w-10 bg-cyan-300/70" />
          SCROLL TO ENTER ORBIT
        </div>
      </div>
    </section>
  );
}
