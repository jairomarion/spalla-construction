"use client";

import { useScrollReveal } from "@/app/hooks/useHooks";
import { Building, ShieldCheck, Award, Users } from "lucide-react";

const features = [
  {
    icon: Building,
    title: "Quality Construction",
    desc: "Top-tier building standards",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partner",
    desc: "Reliable & transparent",
  },
  { icon: Award, title: "Award Winning", desc: "15+ industry awards" },
  { icon: Users, title: "Expert Team", desc: "30+ contractors" },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-32 bg-slate-50 overflow-hidden w-full">
      <div ref={ref} className="w-full px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-spalla-green font-bold tracking-[0.25em] uppercase text-[13px] mb-5">
              About Us
            </h2>
            <h3 className="text-[48px] lg:text-[64px] font-extrabold text-[#111827] leading-[1.05] tracking-[-0.04em] mb-8">
              Building Kenya's <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-spalla-green to-spalla-orange">
                Future
              </span>
            </h3>
            <div className="space-y-7 text-[#4b5563] leading-[1.7] text-[18px] font-medium max-w-145">
              <p>
                Spalla Limited is a wholly owned Kenyan company dedicated to
                delivering a comprehensive suite of construction services
                encompassing building works, civil and structural works,
                borehole drilling & installations, water tank infrastructure,
                water treatment facilities, water pans, dams, and road
                construction projects.
              </p>
              <p>
                Founded in 2013, we've evolved from a sole proprietorship into a
                fully incorporated Limited Company in 2022, serving clients
                across Trans Nzoia, Nairobi, Kisumu, Siaya, Bungoma, and
                Mombasa.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-4xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100/50 flex flex-col items-center text-center transition-all duration-700 ease-out transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-[20px] bg-linear-to-br from-spalla-green to-spalla-orange flex items-center justify-center mb-6 shadow-inner">
                  <feature.icon
                    className="w-7 h-7 text-white"
                    strokeWidth={2}
                  />
                </div>
                <h4 className="font-bold text-[#111827] text-[20px] mb-2 leading-tight">
                  {feature.title}
                </h4>
                <p className="text-[15px] text-[#6b7280] font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
