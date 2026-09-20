import { BrandMark } from "@/components/portfolio/BrandMark";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen scroll-mt-24 items-center justify-center px-6 pb-20 pt-32 text-center"
    >
      <div className="w-full max-w-3xl">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-5">
          <BrandMark brand="honeywell" size="lg" />
          <BrandMark brand="uw" size="lg" />
        </div>
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 overflow-hidden rounded-full bg-zinc-300 ring-1 ring-white/20 md:h-28 md:w-28">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portrait.png"
              alt={site.name}
              className="h-full w-full object-cover object-center -translate-x-[3px]"
            />
          </div>
        </div>
        <p className="mb-5 font-mono text-[11px] tracking-[0.38em] text-cyan-200/80">
          HONEYWELL AEROSPACE / UW
        </p>
        <h1 className="text-5xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl">
          {site.name}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
          {site.role}. {site.tagline}
        </p>
        <div className="mt-10 flex items-center justify-center gap-6 font-mono text-[11px] tracking-[0.24em] text-white/50">
          <span className="h-px w-10 bg-cyan-300/70" />
          SCROLL TO LAUNCH
        </div>
      </div>
    </section>
  );
}
