import { site } from "@/lib/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[70vh] scroll-mt-24 items-center justify-center px-5 py-28 text-center md:px-10"
    >
      <div className="mx-auto w-full max-w-3xl">
        <p className="font-mono text-[11px] tracking-[0.32em] text-cyan-200/80">
          05 / OPEN CHANNEL
        </p>
        <h2 className="mt-4 text-4xl font-medium tracking-tight text-white md:text-6xl">
          Send a signal.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-white/75">
          Whether it's space optics or microscopes, if it's optics, hit me up.
          Computer engineering undergrad, so I can do both the hardware and the
          code.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
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
        <div className="mt-10 flex flex-wrap justify-center gap-6 font-mono text-[11px] tracking-[0.2em] text-white/50">
          {site.socials.map((social) => {
            const external = social.href.startsWith("http");
            return (
              <a
                key={social.label}
                href={social.href}
                className="hover:text-white"
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {social.label.toUpperCase()}
              </a>
            );
          })}
        </div>
        <p className="mt-10 text-sm text-white/45">
          Off the bench: {site.interests.join(", ").toLowerCase()}.
        </p>
        <p className="mt-16 font-mono text-[10px] tracking-[0.22em] text-white/30">
          {site.location.toUpperCase()}
        </p>
      </div>
    </section>
  );
}
