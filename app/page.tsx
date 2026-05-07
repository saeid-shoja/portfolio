import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import ScrollLinked from "@/components/scroll-progress";

export default function Home() {
  return (
    <ScrollLinked>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </ScrollLinked>
  );
}
