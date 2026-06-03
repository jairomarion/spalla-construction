"use client";

import { useScrollReveal } from "@/app/hooks/useHooks";

export default function Hero() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 sm:opacity-70"
      >
        <source src="/construction.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/80 sm:bg-black/70 z-10"></div>

      <div
        ref={ref}
        className={`relative z-20 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto py-20 sm:py-24 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 sm:mb-8 uppercase leading-tight sm:leading-none drop-shadow-lg"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Leaders in Quality
          <span className="block sm:inline"> Construction & Infrastructure</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 sm:mb-12 font-medium max-w-3xl mx-auto drop-shadow-md leading-relaxed">
          We don't just build structures — we build confidence, long-term value,
          and a stronger future for communities across Africa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-spalla-green text-white hover:bg-green-600 hover:text-spalla-orange font-bold py-4 px-10 transition-all duration-300 text-sm uppercase tracking-widest rounded-full shadow-xl hover:-translate-y-1"
          >
            Explore Our Projects
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto border border-white text-white px-10 py-4 font-bold uppercase text-sm tracking-widest rounded-full hover:bg-white hover:text-spalla-orange transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}