import { site } from "@/lib/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen scroll-mt-24 items-end px-5 pb-16 pt-28 md:px-10 md:pb-24"
    >
      <div className="w-full max-w-3xl">
        <p className="font-mono text-[11px] tracking-[0.32em] text-cyan-200/75">
          04 / OPEN CHANNEL
        </p>
        <h2 className="mt-4 text-4xl font-medium tracking-tight text-white md:text-6xl">
          Send a signal.
        </h2>
        <p className="mt-5 max-w-lg text-base leading-8 text-white/60">
          For space optical AIT, quantum-comms hardware, biomedical imaging, or
          software that has to live next to a laser — write me.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}?subject=Hello%20Farrukh`}
            className="inline-flex items-center rounded-full border border-cyan-200/30 bg-cyan-300/10 px-5 py-3 text-sm text-cyan-100 transition-colors hover:bg-cyan-300/20"
          >
            {site.email}
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 transition-colors hover:bg-white/10"
          >
            {site.phone}
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-6 font-mono text-[11px] tracking-[0.2em] text-white/45">
          {site.socials.map((social) => {
            const external = social.href.startsWith("http");
            return (
              <a
                key={social.label}
                href={social.href}
                className="hover:text-white"
                {...(external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {social.label.toUpperCase()}
              </a>
            );
          })}
        </div>
        <p className="mt-10 text-sm text-white/40">
          Off the bench: {site.interests.join(", ").toLowerCase()}.
        </p>
        <p className="mt-16 font-mono text-[10px] tracking-[0.22em] text-white/30">
          {site.location.toUpperCase()} · LOCAL PREVIEW · VERCEL WHEN READY
        </p>
      </div>
    </section>
  );
}
