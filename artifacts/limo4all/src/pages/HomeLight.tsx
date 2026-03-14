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
import { Check, X, Shield, Star, Clock, Banknote } from "lucide-react";

export function HomeLight() {
  return (
    <AppLayout>
      <Hero />
      <PromoBanner />
      <TrustStrip />
      <ServicesTicker />
      <IntroSection />

      {/* Promise Cards */}
      <section className="bg-[#f5f7fa] py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Banknote, title: "Flat Rate Promise", desc: "Your rate is locked at booking. No surprise surcharges or surge pricing ever." },
              { icon: Clock, title: "Live Flight Tracking", desc: "We monitor your live arrival time. Delays are handled automatically at no extra charge." },
              { icon: Shield, title: "Inside Terminal Meetup", desc: "Your chauffeur waits inside the arrivals hall with a personalized name board." },
              { icon: Star, title: "Always On Time", desc: "Guaranteed on-time pickup through live traffic routing and 24/7 operations center." }
            ].map((p, i) => (
              <div key={i} className="bg-white border border-border p-8 rounded-sm hover:border-primary/50 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-3">{p.title}</h4>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VehiclesSection />
      <ServicesSection />

      {/* Corporate Account CTA */}
      <section className="bg-[#0a1628] py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <span className="block font-caps text-xs font-bold text-primary uppercase tracking-[0.15em] mb-3">For Business Travellers</span>
            <h3 className="font-display text-3xl font-bold text-white mb-3">Open a Corporate Account</h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed">
              Save 15% on recurring bookings. Monthly invoicing, dedicated account manager, priority dispatch, and consolidated billing for your entire team.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">Set Up Corporate Account &rarr;</Button>
            </Link>
            <a href="mailto:info@limo4all.ca" className="text-sm text-center text-white/40 hover:text-primary transition-colors">
              info@limo4all.ca
            </a>
          </div>
        </div>
      </section>

      <ToursSection />

      {/* FIFA 2026 Promo Strip */}
      <section className="bg-primary py-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="font-caps text-xs font-bold uppercase tracking-widest text-white/80 mb-2">FIFA 2026 Official Transportation</div>
            <h3 className="font-display text-2xl font-bold text-white">
              Book your World Cup transfers now — before availability fills up.
            </h3>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <div className="hidden lg:flex flex-col items-center">
              <span className="font-display text-3xl font-bold text-white leading-none">Limited</span>
              <span className="text-xs font-caps text-white/80 uppercase tracking-widest">Availability</span>
            </div>
            <Link href="/booking">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold whitespace-nowrap">
                Reserve My FIFA Transfer &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CitiesSection />

      {/* Comparison Table */}
      <section className="bg-white py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">The Limo4All Difference</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Why Choose <span className="italic text-primary font-normal">Us</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-sans">
              See how Limo4All stacks up against rideshare apps and taxis on what actually matters.
            </p>
          </div>

          <div className="rounded-sm border border-border overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f5f7fa]">
                  <th className="p-5 border-b border-border font-sans text-sm font-semibold text-muted-foreground uppercase tracking-wider w-2/5">Feature</th>
                  <th className="p-5 border-b border-border bg-primary text-white font-display text-base font-bold text-center w-1/5">
                    <span className="block text-[10px] font-caps uppercase tracking-widest font-normal mb-0.5 text-white/70">Best Choice</span>
                    Limo4All
                  </th>
                  <th className="p-5 border-b border-border font-sans text-sm font-semibold text-muted-foreground text-center w-1/5">Rideshare</th>
                  <th className="p-5 border-b border-border font-sans text-sm font-semibold text-muted-foreground text-center w-1/5">Taxi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Flat Rate — No Surge Pricing", limo: true, ride: false, taxi: false },
                  { feature: "Live Flight Tracking", limo: true, ride: false, taxi: false },
                  { feature: "Inside Terminal Meetup", limo: true, ride: false, taxi: false },
                  { feature: "60 Min Free Wait Time", limo: true, ride: false, taxi: false },
                  { feature: "Luggage Assistance", limo: true, ride: true, taxi: true },
                  { feature: "24/7 Dispatch Team", limo: true, ride: false, taxi: true },
                  { feature: "Licensed Professional Chauffeur", limo: true, ride: false, taxi: true },
                  { feature: "Corporate Billing Available", limo: true, ride: false, taxi: true },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-white" : "bg-[#fafbfc]"} hover:bg-primary/5 transition-colors`}>
                    <td className="p-5 font-sans text-sm font-medium text-foreground">{row.feature}</td>
                    <td className="p-5 bg-primary/5 border-x border-primary/10 text-center">
                      {row.limo
                        ? <span className="inline-flex items-center justify-center w-6 h-6 bg-primary rounded-full"><Check className="w-3.5 h-3.5 text-white" /></span>
                        : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                    <td className="p-5 text-center">
                      {row.ride
                        ? <Check className="w-5 h-5 text-gray-400 mx-auto" />
                        : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                    <td className="p-5 text-center">
                      {row.taxi
                        ? <Check className="w-5 h-5 text-gray-400 mx-auto" />
                        : <X className="w-5 h-5 text-gray-300 mx-auto" />}
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
