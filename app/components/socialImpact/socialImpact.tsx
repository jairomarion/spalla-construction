"use client";

import Image from "next/image";
import { useScrollReveal } from "@/app/hooks/useHooks";

export default function SocialImpactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="social-impact"
      ref={ref}
      
      className="relative py-24 md:py-32 px-6 md:px-16 bg-spalla-light w-full overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Image Column */}
        <div
          className={`relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[550px] rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <Image
            src="/socialImpact.jpg"
            alt="Construction workers and community members collaborating on a Spalla Limited project"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
        </div>

        
        <div
          className={`flex flex-col justify-center transition-all duration-1000 ease-out delay-150 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-spalla-green rounded-full"></span>
            <p className="text-spalla-green font-bold tracking-widest uppercase text-sm">
              SPALLA SKILLS UPLIFT PROGRAM
            </p>
          </div>

          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6">
            Powering the next generation of careers <span className="text-spalla-green">in skilled trades.</span>
          </h2>

          
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            At Spalla Limited, we are committed to creating a lasting positive impact across Kenya. Through apprenticeship programs, community partnerships, and sustainable building practices, we empower the next generation of skilled professionals while promoting responsible construction.
          </p>

          {/* Call-to-action Button */}
          <div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSexPLms5vTuw2T8m8VsQwmPobnwXNQ-Cmr7sYEIBv_gE4zSXg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-spalla-green text-white hover:text-spalla-orange text-base font-semibold rounded-xl shadow-md hover:shadow-xl active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spalla-green"
              aria-label="Join our apprenticeship program"
            >
              Join Our Program
              <svg 
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

     
    </section>
  );
}