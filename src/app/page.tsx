import { About } from "@/components/portfolio/About";
import { BlogTeaser } from "@/components/portfolio/BlogTeaser";
import { Contact } from "@/components/portfolio/Contact";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Work } from "@/components/portfolio/Work";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Work />
      <Skills />
      <BlogTeaser />
      <Contact />
    </main>
  );
}
