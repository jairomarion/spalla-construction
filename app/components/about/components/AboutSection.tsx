"use client";

import { useScrollReveal } from "@/app/hooks/useHooks";
import { features } from "@/app/components/about/data/featuresData";
import FeatureCard from "./FeatureCard";
import AboutContent from "./AboutContent";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-28 bg-slate-50 w-full">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <AboutContent isVisible={isVisible} />

          {/* Right Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
                delay={idx * 120}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
