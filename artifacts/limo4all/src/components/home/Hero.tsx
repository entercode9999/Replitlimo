import { BookingWidget } from "./BookingWidget";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, ShieldCheck, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Luxury Black SUV Limo" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark wash gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
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
            
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-sm text-sm">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span><strong className="text-white">4.9/5</strong> Google Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-sm text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span><strong className="text-white">10,000+</strong> Rides</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-sm text-sm">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span><strong className="text-white">Licensed</strong> & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-sm text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span><strong className="text-white">24/7</strong> Dispatch</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <Link href="/booking">
                <Button size="lg" className="w-full sm:w-auto">Book Your Ride</Button>
              </Link>
              <a href="tel:+18001234567">
                <Button size="lg" variant="ghost" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10">
                  Call 1-800-XXX-XXXX
                </Button>
              </a>
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
