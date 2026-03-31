"use client";

export default function AboutContent({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
      }`}
    >
      <p className="text-spalla-green font-semibold tracking-[0.2em] uppercase text-xs mb-4">
        About Us
      </p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
        Building Kenya’s <span className="text-spalla-green">Future</span>
      </h2>
      <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-xl">
        <p>
          Spalla Limited is a wholly owned Kenyan company delivering a full
          spectrum of construction services including building works, civil and
          structural engineering, borehole drilling, water infrastructure, and
          road construction projects.
        </p>
        <p>
          Since 2013, we’ve grown from a sole proprietorship into a fully
          incorporated company in 2022, serving clients across Trans Nzoia,
          Nairobi, Kisumu, Siaya, Bungoma, and Mombasa.
        </p>
      </div>
    </div>
  );
}
