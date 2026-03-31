import Footer from "../footer/footer";
import { ContactHeader } from "@/app/components/contact/ContactHeader";
import { ContactInfo } from "@/app/components/contact/ContactInfo";
import { ContactForm } from "@/app/components/contact/ContactForm";

export default function Contact() {
  return (
    <>
      <section className="py-24 bg-spalla-light text-spalla-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactHeader />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
       <Footer />
    </>
  );
}
