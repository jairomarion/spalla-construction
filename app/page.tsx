import Hero from "@/app/components/hero/hero";

import Projects from "@/app/components/projects/projects";
import Contact from "@/app/components/contact/components/contact";
import StatsSection from "./components/stats/stats";
import ServicesSection from "./components/services/components/serviceSection";
import Clients from "./components/clients/clients";
import AboutSection from "./components/about/components/AboutSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <Projects />
      <Clients />
      <Contact />
    </main>
  );
}
