import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Briefcase } from "lucide-react";

const FLEET = [
  {
    id: "sedan",
    name: "Executive Sedan",
    models: "Lincoln MKT / Genesis G90",
    pax: 3,
    bags: 3,
    price: 75,
    image: "fleet-sedan.png",
    featured: false
  },
  {
    id: "suv",
    name: "Executive SUV",
    models: "Cadillac Escalade / Suburban",
    pax: 6,
    bags: 6,
    price: 95,
    image: "fleet-suv.png",
    featured: true
  },
  {
    id: "sprinter",
    name: "Sprinter Van",
    models: "Mercedes-Benz Sprinter",
    pax: 14,
    bags: 14,
    price: 135,
    image: "fleet-sprinter.png",
    featured: false
  }
];

export function VehiclesSection() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">OUR FLEET</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Premium <span className="italic text-primary font-normal">Vehicles</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-sans">
            Immaculately maintained late-model luxury vehicles. Every car is detailed daily and equipped with complimentary bottled water and Wi-Fi upon request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className={`flex flex-col bg-card border ${vehicle.featured ? 'border-primary shadow-[0_0_30px_rgba(20,183,244,0.15)] relative' : 'border-border'} rounded-sm overflow-hidden group hover:border-primary/50 transition-all`}
            >
              {vehicle.featured && (
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] font-caps font-bold px-3 py-1 uppercase tracking-widest z-10">
                  Most Popular
                </div>
              )}
              
              <div className="relative aspect-video bg-[#050505] overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}images/${vehicle.image}`} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-bold mb-1">{vehicle.name}</h3>
                <p className="text-sm text-muted-foreground font-sans mb-6 pb-6 border-b border-border">{vehicle.models}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Up to {vehicle.pax} Pax</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>{vehicle.bags} Bags</span>
                  </div>
                </div>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-caps uppercase tracking-widest text-muted-foreground">Starting From</span>
                    <span className="font-display text-3xl font-bold text-primary">${vehicle.price}</span>
                  </div>
                  <Link href="/booking">
                    <Button variant={vehicle.featured ? "default" : "outline"}>Select</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
