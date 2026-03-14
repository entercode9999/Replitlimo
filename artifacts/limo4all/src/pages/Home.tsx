import { AppLayout } from "@/components/layout/AppLayout";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesTicker } from "@/components/home/ServicesTicker";
import { PromoBanner } from "@/components/home/PromoBanner";
import { IntroSection } from "@/components/home/IntroSection";
import { VehiclesSection } from "@/components/home/VehiclesSection";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { FAQSection } from "@/components/home/FAQSection";
import { CTABand } from "@/components/home/CTABand";

export function Home() {
  return (
    <AppLayout>
      <Hero />
      <PromoBanner />
      <TrustStrip />
      <ServicesTicker />
      <IntroSection />
      
      {/* Promise Cards (Inline to save files, it's small) */}
      <section className="bg-secondary py-16 border-y border-border">
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
      <ReviewsCarousel />
      <FAQSection />
      <CTABand />
    </AppLayout>
  );
}
