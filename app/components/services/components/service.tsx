"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceCard({ service, onClick }: any) {
  const Icon = service.icon;

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -12, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-slate-100 overflow-hidden transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <span className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-110 transition duration-700"
            priority
          />
        </span>
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        <div
          className={`absolute -bottom-5.5 left-6 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg ${service.color} group-hover:scale-110 transition`}
        >
          <Icon size={22} />
        </div>
      </div>
      <div className="pt-10 pb-6 px-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
          {service.description}
        </p>
        <div className="text-spalla-green font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          Learn More
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
        <div className="mt-6 h-0.75 w-0 bg-linear-to-r from-green-500 to-orange-400 group-hover:w-full transition-all duration-500 rounded-full" />
      </div>
    </motion.div>
  );
}
