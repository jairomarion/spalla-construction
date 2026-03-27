"use client";

import { motion } from "framer-motion";

export default function ServiceCard({ service, onClick }: any) {
  const Icon = service.icon;

  return (
    <motion.div
      onClick={onClick} // Click anywhere on the card
      whileHover={{ y: -12, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-slate-100 overflow-hidden transition-all duration-300 cursor-pointer"
    >
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* DARK GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* ICON */}
        <div
          className={`absolute bottom-[-22px] left-6 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg ${service.color} group-hover:scale-110 transition`}
        >
          <Icon size={22} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="pt-10 pb-6 px-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
          {service.description}
        </p>

        {/* CTA */}
        <div className="text-spalla-green font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          Learn More
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>

        {/* PREMIUM BOTTOM LINE */}
        <div className="mt-6 h-0.75 w-0 bg-linear-to-r from-green-500 to-orange-400 group-hover:w-full transition-all duration-500 rounded-full" />
      </div>
    </motion.div>
  );
}
