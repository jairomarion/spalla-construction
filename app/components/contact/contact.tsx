import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-spalla-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-spalla-orange font-bold tracking-widest uppercase text-sm mb-3">
            Get in Touch
          </h2>
          <h3 className="text-4xl font-extrabold mb-8">
            Let's build with purpose together.
          </h3>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="text-spalla-green w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Call Us</h4>
                <p className="text-slate-400 mt-1">+254-713-916 963</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-spalla-green w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email Us</h4>
                <p className="text-slate-400 mt-1">info@spallaltd.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-spalla-green w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Head Office</h4>
                <p className="text-slate-400 mt-1">
                  Trio Complex Nairobi, 4th Floor
                  <br />
                  Nairob, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-spalla-green focus:ring-2 focus:ring-spalla-green/20 transition-all"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-spalla-green focus:ring-2 focus:ring-spalla-green/20 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-spalla-green focus:ring-2 focus:ring-spalla-green/20 transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-spalla-green focus:ring-2 focus:ring-spalla-green/20 transition-all resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button className="w-full bg-spalla-green hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
