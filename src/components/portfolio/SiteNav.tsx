"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/content";

export function SiteNav() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const links = [
    { href: onHome ? "#about" : "/#about", label: "About" },
    { href: onHome ? "#work" : "/#work", label: "Work" },
    { href: onHome ? "#stack" : "/#stack", label: "Stack" },
    { href: "/blog", label: "Blog" },
  ];

  const contactHref = onHome ? "#contact" : "/#contact";

  return (
    <header className="fixed inset-x-0 top-0 z-30 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/12 bg-black/55 p-1.5 pl-5 backdrop-blur-xl">
        <Link
          href="/"
          className="text-[13px] font-medium tracking-[0.28em] text-white/90"
        >
          {site.firstName.toUpperCase()}
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={contactHref}
          className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[13px] leading-none font-medium text-black transition-colors hover:bg-white/90"
        >
          Contact me
        </a>
      </nav>
    </header>
  );
}
