import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search, MapPin, MapPinned, Calendar, Users, Briefcase } from "lucide-react";
import { useLocation } from "wouter";

const SERVICES = ["Airport", "Corporate", "Wedding", "Hourly"];
const VEHICLES = [
  { name: "Sedan", desc: "Up to 3 pax · 3 bags", icon: Users },
  { name: "SUV", desc: "Up to 6 pax · 6 bags", icon: Briefcase },
  { name: "Sprinter", desc: "Up to 14 pax · 14 bags", icon: Users },
];

export function BookingWidget() {
  const [activeService, setActiveService] = useState("Airport");
  const [activeVehicle, setActiveVehicle] = useState("Sedan");
  const [, setLocation] = useLocation();

  const handleCheckPrice = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would build a query string or submit to a store
    setLocation("/quote");
  };

  return (
    <div className="bg-card-glass p-6 md:p-8 rounded-lg shadow-2xl relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-primary" />
      
      <h3 className="font-display text-2xl font-bold text-white mb-6">Check Your Price</h3>
      
      <form onSubmit={handleCheckPrice} className="flex flex-col gap-6">
        {/* Service Type */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {SERVICES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setActiveService(s)}
              className={cn(
                "py-2 text-xs font-caps font-bold uppercase tracking-wider transition-all border",
                activeService === s 
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_10px_rgba(20,183,244,0.3)]" 
                  : "bg-background/50 text-foreground/80 border-border hover:border-primary/50 hover:text-white"
              )}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Vehicle Selection */}
        <div>
          <div className="flex bg-background/50 border border-border rounded-sm p-1 mb-2">
            {VEHICLES.map((v) => (
              <button
                key={v.name}
                type="button"
                onClick={() => setActiveVehicle(v.name)}
                className={cn(
                  "flex-1 py-2 text-sm font-sans font-semibold transition-all rounded-sm",
                  activeVehicle === v.name 
                    ? "bg-secondary text-white shadow-sm" 
                    : "text-muted-foreground hover:text-white"
                )}
              >
                {v.name}
              </button>
            ))}
          </div>
          <p className="text-xs text-primary font-medium text-center flex items-center justify-center gap-1">
            {VEHICLES.find(v => v.name === activeVehicle)?.desc}
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-3">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input className="pl-10" placeholder="Pickup City or Address" required />
          </div>
          <div className="relative">
            <MapPinned className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input className="pl-10" placeholder="Drop-off / Airport" required />
          </div>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input type="date" className="pl-10" required />
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-3 gap-3">
          <Button type="submit" className="col-span-2">
            <Search className="w-4 h-4 mr-2" />
            Check Price
          </Button>
          <Button type="reset" variant="ghost">Clear</Button>
        </div>
        
        <p className="text-[11px] text-muted-foreground text-center">
          Rates confirmed at booking. No hidden fees.
        </p>
      </form>
    </div>
  );
}
