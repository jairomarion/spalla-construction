import { MapPin, Phone, Mail } from "lucide-react";
import { ContactInfoItem } from "./ContactInfoItem";

export function ContactInfo() {
  return (
    <div>
      <p className="text-slate-600 mb-10 max-w-md">
        Reach out to us for any inquiries, project discussions, or partnership
        opportunities. We're here to help you build with purpose.
      </p>

      <div className="space-y-8">
        <ContactInfoItem
          icon={MapPin}
          title="Head Office"
          value={
            <>
              Trio Complex Nairobi, 4TH Floor, West Wing. <br />
              Nairobi, Kenya
            </>
          }
        />

        <ContactInfoItem
          icon={Phone}
          title="Call Us"
          value="+254-713-916 963"
        />

        <ContactInfoItem
          icon={Mail}
          title="Email Us"
          value="spallaltd@gmail.com"
        />
      </div>
    </div>
  );
}
