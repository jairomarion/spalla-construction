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
    <section id="about" className="py-20 md:py-28 bg-slate-50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT: Full About Text */}
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-spalla-green font-bold tracking-[0.25em] uppercase text-sm mb-5">
              About Us
            </p>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.05] mb-8">
              Building Kenya's <br />
              <span className="text-spalla-green">Future</span>
            </h3>

            <div className="space-y-7 text-gray-600 leading-relaxed text-base md:text-lg max-w-prose">
              <p>
                Spalla Limited is a wholly owned Kenyan company dedicated to
                delivering a comprehensive suite of construction services
                encompassing building works, civil and structural works,
                borehole drilling & installations, water tank infrastructure,
                water treatment facilities, water pans, dams, and road
                construction projects.
              </p>
              <p>
                Our expertise spans a wide array of construction endeavors,
                ranging from the development of paved roads, resealing and
                recarpeting initiatives, gravel road construction, bridge
                construction, labor-based construction undertakings, to the
                meticulous execution of routine maintenance tasks. Our esteemed
                company was founded in 2013, initially as a sole proprietorship.
                Over the years, we have steadily advanced and expanded our
                capabilities, evolving into a fully incorporated Limited Company
                in 2022. This transformation has empowered us to provide a more
                diverse and sophisticated array of services while maintaining
                our unwavering commitment to excellence. Spalla Limited operates
                across various regions within Kenya, with a prominent presence
                in the Counties of Trans Nzoia, Nairobi, Kisumu, Siaya, Bungoma,
                and Mombasa. Our extensive reach allows us to effectively serve
                our clients and communities with localized expertise and
                efficiency.
              </p>
            </div>
          </div>

          {/* RIGHT: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-spalla-green to-spalla-orange flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
