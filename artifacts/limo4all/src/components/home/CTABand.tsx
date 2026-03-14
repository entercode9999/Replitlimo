import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function CTABand() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden border-y border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(20,183,244,0.15)_0%,transparent_60%)]" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Ready to Book Your <span className="italic text-primary font-normal">Limo Service?</span>
        </h2>
        <p className="text-lg text-white/70 font-sans font-light mb-10">
          Flat rates, flight tracking and a uniformed chauffeur. Airport, corporate, wedding and events — 24/7 across the GTA.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/booking">
            <Button size="lg" className="px-8">Book Online Now</Button>
          </Link>
          <a href="tel:+18001234567">
            <Button size="lg" variant="ghost" className="px-8 border-white/20 text-white hover:bg-white/10">
              Call 1-800-XXX-XXXX
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
