export function ContactInfoItem({ icon: Icon, title, value }: any) {
  return (
    <div className="flex items-start gap-4 group">
      <span className="w-12 h-12 rounded-xl bg-linear-to-br from-spalla-green to-spalla-orange flex items-center justify-center shadow-md group-hover:scale-105 transition">
        <Icon className="text-white w-5 h-5" />
      </span>

      <div>
        <h4 className="font-semibold text-lg text-spalla-dark">{title}</h4>
        <p className="text-slate-500 mt-1 text-sm leading-relaxed">{value}</p>
      </div>
    </div>
  );
}
