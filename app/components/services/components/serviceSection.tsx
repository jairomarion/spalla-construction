"use client";

import { useState } from "react";
import { services } from "@/app/components/services/data/service";
import ServiceCard from "@/app/components/services/components/service";
import ServiceModal from "@/app/components/services/components/serviveModal";

export default function ServicesSection() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="services" className="py-20 px-4 md:px-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="tracking-[6px] text-green-600 text-sm font-semibold">
          WHAT WE DO
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-2">
          Our <span className="text-spalla-green">Services</span>
        </h1>

        <p className="text-slate-600 mt-4">
          From concept to completion, we provide comprehensive construction and
          infrastructure solutions.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onClick={() => setSelected(service)}
          />
        ))}
      </div>

      {selected && (
        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
