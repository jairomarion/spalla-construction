import Hero from "@/app/components/hero/hero"; // Assuming you kept the hero we perfected earlier
import About from "@/app/components/about/about"; // Assuming you kept the about section we perfected earlier 

import Projects from "@/app/components/projects/projects"; // Assuming you kept the projects section we perfected earlier
import Contact from "@/app/components/contact/contact"; // Assuming you kept the contact section we perfected earlier
import StatsSection from "./components/stats/stats";
import ServicesSection from "./components/services/components/serviceSection";
import Clients from "./components/clients/clients";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <About />
      <StatsSection />
      <ServicesSection/>
      <Projects />
      <Clients />
      <Contact />
    </main>
  );
}
