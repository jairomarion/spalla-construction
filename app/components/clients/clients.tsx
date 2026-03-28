"use client";

import Image from "next/image";

export const CLIENTS = [
  "/mpesa.png",
  "/safaricom.png",
  "/ryzen.png",
  "/vulcan.png",
  "/plateau.png",
  "/inum.png",
  "/jumbo.png",
  "/linear.png",
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="tracking-[6px] text-green-600 text-sm font-semibold">
            TRUSTED BY 
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-2">
            Our <span className="text-green-600">Clients</span>
          </h1>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {CLIENTS.map((logo, idx) => (
            <div
              key={logo}
              className="group flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-100 p-6 h-32 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-full flex items-center justify-center max-h-20">
                <Image
                  src={logo}
                  alt={`Client logo ${idx + 1}`}
                  fill
                  className="object-contain h-full w-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
