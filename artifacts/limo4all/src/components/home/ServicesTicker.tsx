import { Link } from "wouter";

const TICKER_ITEMS = [
  "Airport Transfers YYZ", "Corporate Car Service", "Wedding Limo", 
  "Events & Concerts", "Hourly Hire", "City to City Transfers", 
  "Sprinter Van Group Rides", "Niagara Falls Transfers", "Buffalo Airport BUF", 
  "FIFA 2026 Transportation", "Hamilton Airport YHM", "Billy Bishop YTZ", 
  "Niagara Wine Tours", "Executive Road Shows"
];

// Duplicate for seamless loop
const DISPLAY_ITEMS = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

export function ServicesTicker() {
  return (
    <div className="bg-primary/10 border-b border-primary/20 py-3 overflow-hidden relative pause-on-hover">
      {/* Gradients for fading edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex w-max animate-[marquee_40s_linear_infinite]">
        {DISPLAY_ITEMS.map((item, i) => (
          <Link 
            key={i} 
            href="/services" 
            className="px-6 text-sm font-caps uppercase tracking-widest text-primary hover:text-white whitespace-nowrap flex items-center gap-6 transition-colors"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 block" />
          </Link>
        ))}
      </div>
    </div>
  );
}
