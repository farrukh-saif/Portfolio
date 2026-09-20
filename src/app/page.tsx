import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Hero } from "@/components/portfolio/Hero";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Skills } from "@/components/portfolio/Skills";
import { Work } from "@/components/portfolio/Work";
import { SpaceBackdrop } from "@/components/space/SpaceBackdrop";

export default function Home() {
  return (
    <>
      <SpaceBackdrop />
      <div className="vignette" />
      <SiteNav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
