import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Search, MapPin, MapPinned, Calendar, Users, Plane, Briefcase, Heart, Clock } from "lucide-react";
import { useLocation } from "wouter";

const SERVICES = [
  { id: "Airport", icon: Plane },
  { id: "Corporate", icon: Briefcase },
  { id: "Wedding", icon: Heart },
  { id: "Hourly", icon: Clock },
];

export function BookingWidget() {
  const [activeService, setActiveService] = useState("Airport");
  const [, setLocation] = useLocation();

  const handleCheckPrice = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/quote");
  };

  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 p-6 md:p-8 rounded-lg shadow-2xl relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-primary" />
      
      <h3 className="font-display text-2xl font-bold text-white mb-6 relative z-10">Check Your Price</h3>
      
      <form onSubmit={handleCheckPrice} className="flex flex-col gap-6 relative z-10">
        {/* Service Tabs */}
        <div className="flex bg-black/40 p-1 rounded-md border border-white/5">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveService(s.id)}
              className={cn(
                "flex-1 py-2.5 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-caps font-bold uppercase tracking-wider transition-all rounded-sm",
                activeService === s.id 
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(20,183,244,0.3)]" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              <s.icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{s.id}</span>
            </button>
          ))}
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-3">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <Input className="pl-10 bg-black/50 border-white/10 text-white placeholder:text-white/40 focus:border-primary" placeholder="Pickup City or Address" required />
          </div>
          
          <div className="relative">
            <MapPinned className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <Input className="pl-10 bg-black/50 border-white/10 text-white placeholder:text-white/40 focus:border-primary" placeholder="Drop-off / Airport" required />
          </div>

          {activeService === "Airport" && (
            <div className="relative animate-in fade-in slide-in-from-top-2 duration-300">
              <Plane className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <Input className="pl-10 bg-black/50 border-white/10 text-white placeholder:text-white/40 focus:border-primary" placeholder="Flight Number (Optional)" />
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 z-10" />
              <Input type="date" className="pl-10 bg-black/50 border-white/10 text-white focus:border-primary w-full [&::-webkit-calendar-picker-indicator]:invert" required />
            </div>
            
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 z-10" />
              <Select defaultValue="1">
                <SelectTrigger className="pl-10 bg-black/50 border-white/10 text-white focus:border-primary w-full">
                  <SelectValue placeholder="Passengers" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                  {["1", "2", "3", "4", "5", "6", "7-14"].map(num => (
                    <SelectItem key={num} value={num} className="focus:bg-primary focus:text-white cursor-pointer">
                      {num} {num === "1" ? "Passenger" : "Passengers"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Action */}
        <Button 
          type="submit" 
          size="lg"
          className="w-full text-lg h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(20,183,244,0.3)] transition-all"
        >
          <Search className="w-5 h-5 mr-2" />
          Check Price
        </Button>
        
        <p className="text-[11px] text-white/50 text-center flex items-center justify-center gap-1.5 font-medium">
          <span>🔒</span> Price locked at booking &middot; No credit card required &middot; Free cancellation 24h+
        </p>
      </form>
    </div>
  );
}
