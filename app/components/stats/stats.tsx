"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "@/app/hooks/useHooks";

function Counter({ end, duration = 1500 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal();

  const stats = [
    { value: 2013, label: "Year Established", suffix: "" },
    { value: 40, label: "Projects Completed", suffix: "+" },
    { value: 30, label: "Contractors Appointed", suffix: "" },
    { value: 15, label: "Awards Won", suffix: "" },
  ];

  return (
    <section className="bg-white py-28 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-slate-50 to-transparent pointer-events-none"></div>

      <div
        ref={ref}
        className="w-full px-6 md:px-12 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-y-16 text-center"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-700 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <h2 className="text-[52px] md:text-[64px] font-extrabold text-spalla-green leading-none">
              {isVisible && <Counter end={stat.value} />}
              {stat.suffix}
            </h2>

            <div className="flex items-center gap-2 my-4">
              <div className="w-6 h-px bg-spalla-orange"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-spalla-orange"></div>
              <div className="w-6 h-px bg-spalla-orange"></div>
            </div>

            <p className="text-[12px] tracking-[0.25em] uppercase text-slate-500 font-semibold text-center max-w-40">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
