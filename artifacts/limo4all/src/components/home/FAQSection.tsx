import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "What makes Limo4All different from rideshare or taxi services?",
    a: "We provide flat-rate pricing locked at booking with no surge pricing, unlike rideshare platforms. Our uniformed professional chauffeurs pass background checks and are licensed professionals, not gig workers. We offer 60 minutes free wait time vs industry standard of 5-10 minutes. Plus, we cover airport, corporate, weddings and events — all with the same premium service standard."
  },
  {
    q: "How do I get a quote and book a ride?",
    a: "Use the Check Price widget at the top of this page, call 1-800-XXX-XXXX, or visit our booking page. Provide your location, destination and date. You'll receive an instant flat-rate quote that's locked in — no surprises at the end of the ride. Simply confirm and you're booked."
  },
  {
    q: "What services do you offer beyond airport transfers?",
    a: "We offer airport transfers, corporate hourly charters, wedding transportation, event coordination, city-to-city transfers, Niagara wine tours, and executive group transportation. Whether you need a sedan for a business meeting, a stretch limo for a wedding, or a Sprinter van for a corporate group, we've got you covered 24/7 across the GTA."
  },
  {
    q: "Are there hidden fees or extra charges?",
    a: "No. Our pricing is completely transparent. The rate you see at booking includes all tolls, fuel surcharges, airport fees, gratuity and waiting time. There are no hidden fees, surprise charges or add-ons. We're upfront about what you pay so you can budget with confidence."
  },
  {
    q: "Can I modify or cancel my booking?",
    a: "Yes. You can modify your booking up to 24 hours before your scheduled pickup at no charge. Cancellations made 24 hours or more in advance are free. Late cancellations (within 24 hours) may incur a fee. We're flexible — just contact us as soon as your plans change."
  },
  {
    q: "Do you serve corporate accounts with recurring bookings?",
    a: "Yes. We offer business accounts with dedicated account managers, monthly billing, priority dispatch and consistent vehicle provisioning. Perfect for companies with recurring travel needs. Contact us at info@limo4all.ca or call 1-800-XXX-XXXX to discuss your corporate transportation program."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">GENERAL FAQ</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            Frequently Asked <span className="italic text-primary font-normal">Questions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={cn(
                  "border rounded-sm transition-all duration-200 overflow-hidden",
                  isOpen ? "border-primary bg-[#f0fbff]" : "border-gray-200 bg-white hover:border-primary/50"
                )}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className={cn("font-sans font-semibold text-sm pr-4", isOpen ? "text-primary" : "text-gray-900")}>
                    {faq.q}
                  </span>
                  <ChevronDown className={cn("w-5 h-5 shrink-0 transition-transform duration-300", isOpen ? "text-primary rotate-180" : "text-gray-400")} />
                </button>
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 pt-0 text-sm text-gray-600 font-sans leading-relaxed border-t border-primary/10 mt-2">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
