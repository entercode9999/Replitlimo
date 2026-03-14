import { Plane, Users, DollarSign, ShieldCheck, Headset, Clock } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Plane, label: "Real-Time Flight Tracking" },
  { icon: Users, label: "Meet & Greet Inside Terminal" },
  { icon: DollarSign, label: "Flat Rate — No Surge Pricing" },
  { icon: ShieldCheck, label: "GTAA Licensed & Insured" },
  { icon: Headset, label: "24/7 Dispatch Available" },
  { icon: Clock, label: "60 Min Free Wait" },
];

export function TrustStrip() {
  return (
    <div className="bg-secondary border-y border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
          {TRUST_ITEMS.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <strong className="text-xs font-sans text-muted-foreground group-hover:text-white transition-colors max-w-[120px]">
                {item.label}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
