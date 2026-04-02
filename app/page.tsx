import Hero from "@/app/components/hero/hero";


import Contact from "@/app/components/contact/components/contact";
import StatsSection from "./components/stats/stats";
import ServicesSection from "./components/services/components/serviceSection";
import Clients from "./components/clients/clients";
import AboutSection from "./components/about/components/AboutSection";
import ProjectsSection from "./components/projects/components/ProjectSection";
import SocialImpactSection from "./components/socialImpact/socialImpact";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <Clients />
      <SocialImpactSection />
      <Contact />
    </main>
  );
}
