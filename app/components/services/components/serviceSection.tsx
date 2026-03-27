"use client";

import { useState } from "react";
import { services } from "@/app/components/services/data/service";
import ServiceCard from "@/app/components/services/components/service";
import ServiceModal from "@/app/components/services/components/serviveModal";

export default function ServicesSection() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="py-20 px-4 md:px-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm text-spalla-green tracking-widest uppercase">
          What We Do
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Our <span className="text-spalla-green">Services</span>
        </h2>

        <p className="text-slate-600 mt-4">
          From concept to completion, we provide comprehensive construction and
          infrastructure solutions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onClick={() => setSelected(service)}
          />
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
