import { AppLayout } from "@/components/layout/AppLayout";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesTicker } from "@/components/home/ServicesTicker";
import { PromoBanner } from "@/components/home/PromoBanner";
import { IntroSection } from "@/components/home/IntroSection";
import { VehiclesSection } from "@/components/home/VehiclesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ToursSection } from "@/components/home/ToursSection";
import { CitiesSection } from "@/components/home/CitiesSection";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { FAQSection } from "@/components/home/FAQSection";
import { CTABand } from "@/components/home/CTABand";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export function Home() {
  return (
    <AppLayout>
      <Hero />
      <PromoBanner />
      <TrustStrip />
      <ServicesTicker />
      <IntroSection />
      
      {/* Full-width CTA strip after Intro */}
      <section className="bg-secondary py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-display text-3xl font-bold text-white text-center md:text-left">
            Ready to experience Limo4All?
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg">Book Online Now &rarr;</Button>
            </Link>
            <a href="tel:+18001234567">
              <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                Call 24/7: 1-800-XXX-XXXX
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Promise Cards (Inline) */}
      <section className="bg-secondary py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Flat Rate Promise", desc: "Your rate is locked at booking. No surprise surcharges or surge pricing." },
              { title: "Flight Tracking", desc: "We monitor your live arrival time. Delays are handled automatically." },
              { title: "Inside Terminal Meetup", desc: "Your chauffeur waits inside the arrivals hall with a personalized name board." },
              { title: "Always On Time", desc: "Guaranteed on-time pickup through live traffic routing and 24/7 operations." }
            ].map((p, i) => (
              <div key={i} className="bg-background border border-border p-8 rounded-sm hover:border-primary/50 transition-colors">
                <div className="w-10 h-1 bg-primary mb-6" />
                <h4 className="font-display text-xl font-bold text-white mb-3">{p.title}</h4>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VehiclesSection />
      <ServicesSection />

      {/* Corporate CTA */}
      <section className="bg-background py-16 px-4 border-b border-border">
        <div className="max-w-5xl mx-auto bg-secondary p-12 rounded-sm border border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="font-display text-3xl font-bold text-white mb-4">Corporate Account?</h3>
            <p className="text-muted-foreground font-sans">
              Save 15% on recurring bookings. Monthly invoicing, dedicated account manager, priority dispatch.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/contact">
              <Button size="lg" className="w-full">Set Up Corporate Account &rarr;</Button>
            </Link>
            <a href="mailto:info@limo4all.ca" className="text-sm text-center text-muted-foreground hover:text-primary transition-colors">
              info@limo4all.ca
            </a>
          </div>
        </div>
      </section>

      <ToursSection />

      {/* FIFA 2026 Promo Strip */}
      <section className="bg-primary py-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="font-caps text-xs font-bold uppercase tracking-widest text-white/80 mb-2">FIFA 2026 Official Transportation</div>
            <h3 className="font-display text-2xl font-bold text-white">
              Book your World Cup transfers now before rates increase.
            </h3>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col items-center">
              <span className="font-display text-3xl font-bold text-white leading-none">Limited</span>
              <span className="text-xs font-caps text-white/80 uppercase tracking-widest">Availability</span>
            </div>
            <Link href="/booking">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
                Reserve My FIFA Transfer &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CitiesSection />

      {/* Comparison Table Section Inline */}
      <section className="bg-background py-24 border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">THE LIMO4ALL DIFFERENCE</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Why Choose <span className="italic text-primary font-normal">Us</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-card rounded-sm overflow-hidden border border-border">
              <thead>
                <tr>
                  <th className="p-4 border-b border-border font-display text-xl font-bold text-white">Feature</th>
                  <th className="p-4 border-b border-border bg-primary/10 text-primary font-display text-xl font-bold w-1/4 text-center">Limo4All</th>
                  <th className="p-4 border-b border-border font-display text-xl font-bold text-muted-foreground w-1/4 text-center">Rideshare</th>
                  <th className="p-4 border-b border-border font-display text-xl font-bold text-muted-foreground w-1/4 text-center">Taxi</th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm">
                {[
                  { feature: "Flat Rate (No Surge Pricing)", limo: true, ride: false, taxi: false },
                  { feature: "Live Flight Tracking", limo: true, ride: false, taxi: false },
                  { feature: "Inside Terminal Meetup", limo: true, ride: false, taxi: false },
                  { feature: "60 Min Free Wait Time", limo: true, ride: false, taxi: false },
                  { feature: "Luggage Assistance", limo: true, ride: true, taxi: true },
                  { feature: "24/7 Dispatch Team", limo: true, ride: false, taxi: true },
                  { feature: "Licensed Professional Chauffeur", limo: true, ride: false, taxi: true },
                  { feature: "Corporate Billing Available", limo: true, ride: false, taxi: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-semibold text-white/90">{row.feature}</td>
                    <td className="p-4 bg-primary/5 text-center border-l border-r border-border/30">
                      {row.limo ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />}
                    </td>
                    <td className="p-4 text-center border-r border-border/30">
                      {row.ride ? <Check className="w-5 h-5 text-gray-400 mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {row.taxi ? <Check className="w-5 h-5 text-gray-400 mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ReviewsCarousel />
      <FAQSection />
      <CTABand />
    </AppLayout>
  );
}
