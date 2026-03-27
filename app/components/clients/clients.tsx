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
    <section className="py-20 bg-linear-to-br from-white to-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-spalla-green font-bold tracking-widest uppercase text-sm mb-2">
            TRUSTED BY
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2 tracking-tight bg-linear-to-r from-spalla-green via-black to-spalla-orange bg-clip-text text-transparent inline-block">
            Our Clients
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center items-center">
          {CLIENTS.map((logo, idx) => (
            <div
              key={logo}
              className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg border border-slate-100 px-8 py-10 min-h-40 min-w-55 mx-auto hover:shadow-xl transition-all duration-200"
              style={{ boxShadow: "0 4px 24px 0 rgba(16,30,54,0.07)" }}
            >
              <Image
                src={logo}
                alt={`Client logo ${idx + 1}`}
                width={64}
                height={64}
                className="object-contain mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 max-h-16 max-w-16"
                loading="lazy"
              />
              <span className="text-base font-medium text-slate-700 text-center mt-2"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
