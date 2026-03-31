"use client";

type FeatureCardProps = {
  icon: any;
  title: string;
  desc: string;
  delay: number;
  isVisible: boolean;
};

export default function FeatureCard({
  icon: Icon,
  title,
  desc,
  delay,
  isVisible,
}: FeatureCardProps) {
  return (
    <div
      className={`group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } hover:-translate-y-2`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-linear-to-br from-spalla-green to-spalla-orange flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h4 className="font-semibold text-gray-900 text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}
