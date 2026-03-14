import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Briefcase, Check, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const FLEET = [
  {
    id: "s-class",
    name: "Mercedes S-Class",
    category: "EXECUTIVE SEDAN",
    tagline: "The pinnacle of luxury motoring",
    pax: 3, bags: 2, price: 85,
    features: ["Rear climate control", "Massage seats", "Ambient lighting", "Wi-Fi hotspot"],
    image: "fleet-sedan.png",
    featured: false
  },
  {
    id: "escalade",
    name: "Cadillac Escalade",
    category: "EXECUTIVE SUV",
    tagline: "Commanding presence. Effortless luxury.",
    pax: 6, bags: 6, price: 95,
    features: ["Theatre-row seating", "4K rear display", "Bose audio", "Panoramic roof"],
    image: "fleet-suv.png",
    featured: true,
    badge: "Most Popular"
  },
  {
    id: "suburban",
    name: "Chevrolet Suburban",
    category: "EXECUTIVE SUV",
    tagline: "Maximum space, premium comfort",
    pax: 7, bags: 8, price: 100,
    features: ["Extra cargo space", "Rear entertainment", "Full leather interior", "Running boards"],
    image: "fleet-suv.png",
    featured: false
  },
  {
    id: "sprinter",
    name: "Mercedes Sprinter",
    category: "EXECUTIVE VAN",
    tagline: "Premium group transportation",
    pax: 14, bags: 20, price: 135,
    features: ["Individual captain chairs", "USB at every seat", "Dual climate zones", "Executive table"],
    image: "fleet-sprinter.png",
    featured: false
  },
  {
    id: "stretch",
    name: "Stretch Limousine",
    category: "STRETCH LIMO",
    tagline: "The ultimate celebration vehicle",
    pax: 10, bags: 0, price: 175,
    features: ["Full bar setup", "LED lighting system", "Privacy partition", "Premium sound system"],
    image: "fleet-sedan.png",
    featured: false,
    badge: "Weddings & Events"
  }
];

export function VehiclesSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeVehicle = FLEET[activeIndex];

  const nextVehicle = () => setActiveIndex((prev) => (prev + 1) % FLEET.length);
  const prevVehicle = () => setActiveIndex((prev) => (prev - 1 + FLEET.length) % FLEET.length);

  return (
    <section className="border-y border-border overflow-hidden">
      {/* Mobile Layout */}
      <div className="block lg:hidden py-16 bg-[#0a0a0a]">
        <div className="px-4 mb-8 text-center">
          <span className="block font-caps text-xs font-bold text-primary uppercase tracking-[0.15em] mb-3">OUR PREMIUM FLEET</span>
          <h2 className="text-3xl font-display font-bold text-white mb-2">
            The <span className="italic text-primary font-normal">Collection</span>
          </h2>
          <Link href="/fleet">
            <span className="text-sm text-primary hover:text-white transition-colors cursor-pointer">View Full Fleet &rarr;</span>
          </Link>
        </div>

        <div
          className="flex overflow-x-auto snap-x snap-mandatory px-4 gap-4 pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {FLEET.map((v) => (
            <div key={v.id} className="min-w-[85vw] sm:min-w-[350px] snap-center bg-white/5 border border-white/10 rounded-sm overflow-hidden flex flex-col shrink-0">
              <div className="relative aspect-[4/3] bg-black/50 overflow-hidden flex items-center justify-center p-6">
                {v.badge && (
                  <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-caps px-2 py-1 uppercase tracking-widest z-10">
                    {v.badge}
                  </div>
                )}
                <img
                  src={`${import.meta.env.BASE_URL}images/${v.image}`}
                  alt={v.name}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.3"; }}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[10px] font-caps uppercase tracking-widest text-primary mb-1">{v.category}</span>
                <h3 className="font-display text-xl font-bold text-white mb-1">{v.name}</h3>
                <p className="text-sm text-white/50 font-sans mb-4">{v.tagline}</p>
                <div className="flex gap-4 mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-white/70">
                    <Users className="w-3.5 h-3.5 text-primary" /> {v.pax} Pax
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/70">
                    <Briefcase className="w-3.5 h-3.5 text-primary" /> {v.bags} Bags
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-caps uppercase tracking-widest text-white/40">From</span>
                    <span className="font-display text-2xl font-bold text-white">${v.price}</span>
                  </div>
                  <Link href="/booking">
                    <Button variant={v.featured ? "default" : "outline"} size="sm" className={v.featured ? "" : "border-white/20 text-white hover:bg-white/10"}>
                      Book
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-[680px]">
        {/* Left Vehicle List */}
        <div className="w-[340px] xl:w-[380px] flex flex-col bg-[#050505] border-r border-white/5 shrink-0">
          <div className="p-10 xl:p-12 pb-6">
            <span className="block font-caps text-xs font-bold text-primary uppercase tracking-[0.15em] mb-3">OUR PREMIUM FLEET</span>
            <h2 className="text-3xl xl:text-4xl font-display font-bold text-white">
              Select Your <span className="italic text-primary font-normal">Vehicle</span>
            </h2>
          </div>

          <div className="flex flex-col gap-1 px-4 flex-1 pb-4">
            {FLEET.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "flex flex-col items-start text-left px-6 py-4 rounded-sm transition-all border group relative overflow-hidden",
                  activeIndex === i
                    ? "bg-primary/10 border-primary/40"
                    : "bg-transparent border-transparent hover:bg-white/5"
                )}
              >
                {activeIndex === i && (
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary" />
                )}
                <div className="flex items-center justify-between w-full">
                  <span className={cn(
                    "font-display text-lg font-bold transition-colors",
                    activeIndex === i ? "text-white" : "text-white/60 group-hover:text-white"
                  )}>
                    {v.name}
                  </span>
                  {v.badge && (
                    <span className="text-[9px] font-caps uppercase tracking-widest bg-white/10 text-white/70 px-2 py-0.5 rounded-sm">
                      {v.badge}
                    </span>
                  )}
                </div>
                <span className={cn(
                  "text-xs font-caps uppercase tracking-widest mt-0.5",
                  activeIndex === i ? "text-primary" : "text-white/30"
                )}>
                  {v.category}
                </span>
              </button>
            ))}
          </div>

          <div className="px-10 pb-10">
            <Link href="/fleet">
              <Button variant="link" className="text-white/50 hover:text-white p-0 text-sm">
                View Full Fleet Specs &rarr;
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Active Panel */}
        <div className="flex-1 relative bg-gradient-to-br from-[#111] to-[#0a0a0a] flex items-center justify-center p-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeVehicle.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-xl relative z-10 flex flex-col items-center"
            >
              {/* Vehicle Image */}
              <div className="w-full h-[260px] flex items-center justify-center mb-8">
                <img
                  src={`${import.meta.env.BASE_URL}images/${activeVehicle.image}`}
                  alt={activeVehicle.name}
                  className="w-full max-w-[460px] h-full object-contain drop-shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.3"; }}
                />
              </div>

              {/* Vehicle Detail Card */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-sm w-full relative">
                <div className="absolute -top-4 left-6 bg-primary text-white text-[10px] font-caps font-bold px-3 py-1 uppercase tracking-widest">
                  {activeVehicle.category}
                </div>

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-display text-3xl font-bold text-white mb-1">{activeVehicle.name}</h3>
                    <p className="text-white/60 font-sans text-sm">{activeVehicle.tagline}</p>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <span className="block text-[10px] font-caps uppercase tracking-widest text-white/40">Starting From</span>
                    <span className="font-display text-4xl font-bold text-primary">${activeVehicle.price}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-white/10">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <Users className="w-4 h-4 text-primary shrink-0" />
                      <span className="font-sans font-medium">Up to {activeVehicle.pax} Passengers</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <Briefcase className="w-4 h-4 text-primary shrink-0" />
                      <span className="font-sans font-medium">{activeVehicle.bags > 0 ? `Up to ${activeVehicle.bags} Bags` : "Entertainment focus"}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {activeVehicle.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/booking">
                  <Button size="lg" className="w-full">Book This Vehicle &rarr;</Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next arrows */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            <button onClick={prevVehicle} className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors bg-black/40 backdrop-blur-sm">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={nextVehicle} className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors bg-black/40 backdrop-blur-sm">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
