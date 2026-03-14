import { BookingWidget } from "./BookingWidget";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, ShieldCheck, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Hero({ isLight }: { isLight?: boolean }) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Luxury Black SUV Limo" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark wash gradient for text legibility — always dark regardless of theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        {isLight ? (
          <Link href="/">
            <span className="text-sm font-sans font-medium text-white/80 hover:text-white transition-colors cursor-pointer bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
              View Dark Version &rarr;
            </span>
          </Link>
        ) : (
          <Link href="/light">
            <span className="text-sm font-sans font-medium text-white/80 hover:text-white transition-colors cursor-pointer bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
              View Light Version &rarr;
            </span>
          </Link>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div>
              <span className="section-label">GTA's Premier Chauffeur Service</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-white">
                Arrive in Style.<br />
                <span className="italic text-primary">Every Time.</span>
              </h1>
            </div>
            
            <p className="text-lg text-white/80 font-sans font-light leading-relaxed max-w-xl">
              Executive Cadillac Escalade, Suburban & Mercedes fleet. Background-checked chauffeurs. Upfront flat rates — no surge, no surprises. Serving Toronto & the GTA 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
              <Link href="/booking">
                <Button size="lg" className="w-full sm:w-auto text-lg px-10 py-6 h-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(20,183,244,0.3)] transition-all">
                  Book Your Ride
                </Button>
              </Link>
              <div className="flex flex-col gap-1 items-start">
                <Link href="/quote">
                  <span className="text-white hover:text-primary transition-colors cursor-pointer font-medium underline underline-offset-4 decoration-white/30 hover:decoration-primary">
                    Get a Free Quote &rarr;
                  </span>
                </Link>
                <span className="text-xs text-white/60 font-sans">
                  Free cancellation &middot; No credit card required &middot; Instant confirmation
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-0 mt-8 border-t border-white/20 pt-8">
              <div className="flex flex-col pr-6 sm:pr-8 mr-6 sm:mr-8 border-r border-white/20 mb-4 sm:mb-0">
                <span className="font-display text-4xl font-bold text-white leading-none">4.9<span className="text-primary text-xl">★</span></span>
                <span className="text-xs font-caps uppercase tracking-widest text-white/50 mt-1">Google Rating</span>
                <span className="text-xs text-white/30 mt-0.5">500+ verified reviews</span>
              </div>
              <div className="flex flex-col pr-6 sm:pr-8 mr-6 sm:mr-8 border-r border-white/20 mb-4 sm:mb-0">
                <span className="font-display text-4xl font-bold text-white leading-none">10K+</span>
                <span className="text-xs font-caps uppercase tracking-widest text-white/50 mt-1">Rides Completed</span>
                <span className="text-xs text-white/30 mt-0.5">Since 2018</span>
              </div>
              <div className="flex flex-col pr-6 sm:pr-8 mr-6 sm:mr-8 border-r sm:border-r border-white/20 mb-4 sm:mb-0">
                <span className="font-display text-4xl font-bold text-white leading-none">60<span className="text-primary text-xl font-sans text-2xl"> min</span></span>
                <span className="text-xs font-caps uppercase tracking-widest text-white/50 mt-1">Free Wait Time</span>
                <span className="text-xs text-white/30 mt-0.5">Industry-best policy</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-4xl font-bold text-white leading-none">24<span className="text-primary text-xl">/7</span></span>
                <span className="text-xs font-caps uppercase tracking-widest text-white/50 mt-1">Available</span>
                <span className="text-xs text-white/30 mt-0.5">GTAA Licensed</span>
              </div>
            </div>
          </motion.div>

          {/* Right Booking Widget */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <BookingWidget />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
