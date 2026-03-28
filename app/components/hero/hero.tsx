"use client";

import { useScrollReveal } from "@/app/hooks/useHooks";

export default function Hero() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-70"
      >
        <source src="/construction.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div
        ref={ref}
        className={`relative z-20 text-center px-4 max-w-6xl mx-auto mt-20 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 uppercase leading-tight drop-shadow-lg"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Leaders in Quality <br className="hidden md:block" /> Construction &
          Infrastructure
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-12 font-medium max-w-3xl mx-auto drop-shadow-md">
          - We don't just build structures, We build confidence -
        </p>

        <a
          href="#projects"
          className="inline-block bg-spalla-green text-white hover:bg-green-600 hover:text-spalla-orange font-bold py-4 px-10 transition-all duration-300 text-sm uppercase tracking-widest shadow-xl hover:-translate-y-1 cursor-pointer"
        >
          Explore Our Projects
        </a>
      </div>
    </section>
  );
}
