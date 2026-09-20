import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Work } from "@/components/portfolio/Work";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Work />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
