import { useState } from "react";
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
    features: ["Rear climate control", "Massage seats", "Ambient lighting", "Wi-Fi"],
    image: "fleet-sedan.png",
    featured: false
  },
  {
    id: "escalade", 
    name: "Cadillac Escalade",
    category: "EXECUTIVE SUV",
    tagline: "Commanding presence. Effortless luxury.",
    pax: 6, bags: 6, price: 95,
    features: ["Theatre-row seating", "4K display", "Bose audio", "Panoramic roof"],
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
    features: ["Extra cargo space", "Rear entertainment", "Leather throughout", "Running boards"],
    image: "fleet-suv.png",
    featured: false
  },
  {
    id: "sprinter",
    name: "Mercedes Sprinter",
    category: "EXECUTIVE VAN",
    tagline: "Premium group transportation",
    pax: 14, bags: 20, price: 135,
    features: ["Individual captains chairs", "USB at every seat", "Climate zones", "Executive table"],
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

  const nextVehicle = () => {
    setActiveIndex((prev) => (prev + 1) % FLEET.length);
  };

  const prevVehicle = () => {
    setActiveIndex((prev) => (prev - 1 + FLEET.length) % FLEET.length);
  };

  return (
    <section className="bg-[#0a0a0a] border-y border-white/10 overflow-hidden">
      {/* Mobile Layout (Horizontal Snap Scroll) */}
      <div className="block lg:hidden py-16">
        <div className="px-4 mb-8 text-center">
          <span className="section-label">OUR PREMIUM FLEET</span>
          <h2 className="text-3xl font-display font-bold text-white mb-2">
            The <span className="italic text-primary font-normal">Collection</span>
          </h2>
          <Link href="/fleet">
            <span className="text-sm text-primary hover:text-white transition-colors cursor-pointer">View Full Fleet &rarr;</span>
          </Link>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-4 gap-4 pb-8">
          {FLEET.map((v, i) => (
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

      {/* Desktop Layout (Split Panel) */}
      <div className="hidden lg:flex min-h-[700px]">
        {/* Left Fixed Panel */}
        <div className="w-2/5 p-12 xl:p-16 flex flex-col bg-[#050505] relative z-10 border-r border-white/5 shadow-2xl">
          <span className="section-label">OUR PREMIUM FLEET</span>
          <h2 className="text-4xl font-display font-bold text-white mb-12">
            Select Your <span className="italic text-primary font-normal">Vehicle</span>
          </h2>

          <div className="flex flex-col gap-2 mb-12 flex-1">
            {FLEET.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "flex flex-col items-start text-left px-6 py-4 rounded-sm transition-all border group relative overflow-hidden",
                  activeIndex === i 
                    ? "bg-primary/10 border-primary/50" 
                    : "bg-transparent border-transparent hover:bg-white/5"
                )}
              >
                {activeIndex === i && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                )}
                <div className="flex items-center justify-between w-full">
                  <span className={cn(
                    "font-display text-xl font-bold transition-colors",
                    activeIndex === i ? "text-white" : "text-white/60 group-hover:text-white"
                  )}>
                    {v.name}
                  </span>
                  {v.badge && (
                    <span className="text-[9px] font-caps uppercase tracking-widest bg-white/10 text-white/80 px-2 py-0.5 rounded-sm">
                      {v.badge}
                    </span>
                  )}
                </div>
                <span className={cn(
                  "text-xs font-caps uppercase tracking-widest mt-1",
                  activeIndex === i ? "text-primary" : "text-white/30"
                )}>
                  {v.category}
                </span>
              </button>
            ))}
          </div>

          <Link href="/fleet">
            <Button variant="link" className="text-white/60 hover:text-white p-0 self-start">
              View Full Fleet Specifications &rarr;
            </Button>
          </Link>
        </div>

        {/* Right Active Content Area */}
        <div className="w-3/5 relative bg-gradient-to-br from-[#111] to-[#0a0a0a] flex items-center justify-center p-12 overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div 
            key={activeVehicle.id}
            className="w-full max-w-2xl relative z-10 animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col items-center"
          >
            {/* Vehicle Image */}
            <div className="relative w-full h-[300px] flex items-center justify-center mb-8">
              <img 
                src={`${import.meta.env.BASE_URL}images/${activeVehicle.image}`} 
                alt={activeVehicle.name}
                className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Vehicle Details Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-sm w-full relative">
              <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-[10px] font-caps font-bold px-3 py-1 uppercase tracking-widest">
                {activeVehicle.category}
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display text-3xl font-bold text-white mb-1">{activeVehicle.name}</h3>
                  <p className="text-white/60 font-sans">{activeVehicle.tagline}</p>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-caps uppercase tracking-widest text-white/40">Starting From</span>
                  <span className="font-display text-4xl font-bold text-primary">${activeVehicle.price}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8 pb-8 border-b border-white/10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/80">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-sans font-medium">Up to {activeVehicle.pax} Passengers</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="font-sans font-medium">Up to {activeVehicle.bags} Bags</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {activeVehicle.features.slice(0,3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/booking">
                <Button size="lg" className="w-full text-lg">Book This Vehicle</Button>
              </Link>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            <button 
              onClick={prevVehicle}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors bg-black/40 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextVehicle}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors bg-black/40 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
