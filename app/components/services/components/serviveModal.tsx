"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Building2, Droplets, HardHat, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  service: any;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: Props) {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  if (!service) return null;

  // Prevent modal close when clicking inside modal content
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden"
          onClick={handleContentClick}
        >
          {/* Image Header */}
          <div className="relative h-56">
            <span className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </span>
            <div className="absolute inset-0 bg-linear-to-t from-white via-white/70 to-transparent" />

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 shadow flex items-center justify-center"
            >
              ✕
            </button>

            {/* Title */}
            <div className="absolute bottom-4 left-6 flex items-center gap-3">
              <div className={`p-3 rounded-lg text-white ${service.color}`}>
                {service.icon === Building2 && <Building2 size={24} />}
                {service.icon === Droplets && <Droplets size={24} />}
                {service.icon === HardHat && <HardHat size={24} />}
                {service.icon === Briefcase && <Briefcase size={24} />}
              </div>
              <h2 className="text-xl font-semibold text-slate-800">
                {service.title}
              </h2>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            <p className="text-slate-600 mb-6">{service.description}</p>

            <h4 className="font-semibold mb-3">What's Included</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {service.details.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✔</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-end">
              <button onClick={onClose} className="border px-5 py-2 rounded-lg">
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
