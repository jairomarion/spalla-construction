import { MapPin, Phone, Mail, Send } from "lucide-react";
import Footer from "../footer/footer";

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 bg-spalla-light text-spalla-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading (matches Clients page) */}
          <div className="text-center mb-16">
            <p className="tracking-[6px] text-spalla-green text-sm font-semibold">
              GET IN TOUCH
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mt-2">
              Let's <span className="text-spalla-green">Talk</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <p className="text-slate-600 mb-10 max-w-md">
                Reach out to us for any inquiries, project discussions, or
                partnership opportunities. We're here to help you build with
                purpose.
              </p>
              <div className="space-y-7">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-lg bg-linear-to-br from-spalla-green to-spalla-orange flex items-center justify-center">
                    <MapPin className="text-white w-6 h-6" />
                  </span>
                  <div>
                    <h4 className="font-bold text-lg text-spalla-dark">
                      Head Office
                    </h4>
                    <p className="text-slate-500 mt-1 text-sm">
                      Trio Complex Nairobi, 4th Floor
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-lg bg-linear-to-br from-spalla-green to-spalla-orange flex items-center justify-center">
                    <Phone className="text-white w-6 h-6" />
                  </span>
                  <div>
                    <h4 className="font-bold text-lg text-spalla-dark">
                      Call Us
                    </h4>
                    <p className="text-slate-500 mt-1 text-sm">
                      +254-713-916 963
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-lg bg-linear-to-br from-spalla-green to-spalla-orange flex items-center justify-center">
                    <Mail className="text-white w-6 h-6" />
                  </span>
                  <div>
                    <h4 className="font-bold text-lg text-spalla-dark">
                      Email Us
                    </h4>
                    <p className="text-slate-500 mt-1 text-sm">
                      spallaltd@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-spalla-dark">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-spalla-light border border-slate-200 text-spalla-dark focus:outline-none focus:border-spalla-green focus:ring-2 focus:ring-spalla-green/20 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-spalla-dark">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-spalla-light border border-slate-200 text-spalla-dark focus:outline-none focus:border-spalla-green focus:ring-2 focus:ring-spalla-green/20 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-spalla-dark">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-spalla-light border border-slate-200 text-spalla-dark focus:outline-none focus:border-spalla-green focus:ring-2 focus:ring-spalla-green/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-spalla-dark">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-spalla-light border border-slate-200 text-spalla-dark focus:outline-none focus:border-spalla-green focus:ring-2 focus:ring-spalla-green/20 transition-all"
                    placeholder="+254..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-spalla-dark">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-spalla-light border border-slate-200 text-spalla-dark focus:outline-none focus:border-spalla-green focus:ring-2 focus:ring-spalla-green/20 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-spalla-green to-spalla-orange hover:from-green-700 hover:to-orange-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
