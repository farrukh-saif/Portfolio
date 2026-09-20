"use client";

import { site } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-5 md:px-10">
      <a
        href="#top"
        className="font-mono text-[11px] tracking-[0.28em] text-white/80"
      >
        {site.firstName.toUpperCase()}
      </a>
      <nav className="flex items-center gap-5 rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-xl md:gap-7">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-mono text-[10px] tracking-[0.22em] text-white/70 transition-colors hover:text-white"
          >
            {link.label.toUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
}
