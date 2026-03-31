import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="First Name" placeholder="John" />
          <Input label="Last Name" placeholder="Doe" />
        </div>

        <Input
          label="Email Address"
          type="email"
          placeholder="john@example.com"
        />

        <Input label="Phone" type="tel" placeholder="+254..." />

        <div className="space-y-2">
          <label className="text-sm font-semibold text-spalla-dark">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-spalla-light border border-slate-200 focus:outline-none focus:border-spalla-green focus:ring-2 focus:ring-spalla-green/20 transition resize-none"
            placeholder="How can we help you?"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-linear-to-r from-spalla-green to-spalla-orange hover:from-green-700 hover:to-orange-500 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-1"
        >
          <Send className="w-5 h-5" />
          Send Message
        </button>
      </form>
    </div>
  );
}

function Input({ label, type = "text", placeholder }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-spalla-dark">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-spalla-light border border-slate-200 focus:outline-none focus:border-spalla-green focus:ring-2 focus:ring-spalla-green/20 transition"
      />
    </div>
  );
}
