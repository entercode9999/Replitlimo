import { Plane, Briefcase, Heart, Music, Clock, MapPin } from "lucide-react";
import { Link } from "wouter";

const SERVICES = [
  {
    title: "Airport Transfers",
    icon: Plane,
    desc: "Flat-rate door-to-door service to YYZ, YTZ, YHM, BUF. 60 min free wait, live flight tracking, inside terminal meetup.",
    price: "$75",
    link: "/airport"
  },
  {
    title: "Corporate Car Service",
    icon: Briefcase,
    desc: "Monthly billing, dedicated account manager. Consistent premium vehicles for executives and business travel.",
    price: "$85/hr",
    link: "/corporate"
  },
  {
    title: "Wedding Transportation",
    icon: Heart,
    desc: "Stretch limos, Escalades and Suburbans for the full wedding party. Coordinated multi-vehicle packages available.",
    price: "$175",
    link: "/wedding"
  },
  {
    title: "Events & Concerts",
    icon: Music,
    desc: "Sporting events, concerts, galas and private functions. Drop-off and pickup coordination at all major GTA venues.",
    price: "$85",
    link: "/events"
  },
  {
    title: "Hourly Charter",
    icon: Clock,
    desc: "Your chauffeur on demand. Ideal for business meetings, shopping, medical appointments or as-directed use.",
    price: "$85/hr",
    link: "/hourly"
  },
  {
    title: "Wine & City Tours",
    icon: MapPin,
    desc: "Niagara wine country, Muskoka, Stratford and beyond. Full-day tours with a knowledgeable, professional chauffeur.",
    price: "$350/day",
    link: "/tours"
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Premium <span className="italic text-primary font-normal">Transportation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <div key={i} className="flex flex-col sm:flex-row bg-card border border-border rounded-sm overflow-hidden hover:border-primary/50 transition-colors group relative">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary transform origin-left transition-transform group-hover:scale-x-150" />
              <div className="p-8 flex flex-col flex-1 pl-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                </div>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6 flex-1">
                  {s.desc}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-caps uppercase tracking-widest text-muted-foreground">Starting From</span>
                    <span className="font-display text-xl font-bold text-foreground">{s.price}</span>
                  </div>
                  <Link href={s.link}>
                    <span className="text-sm font-sans font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer flex items-center gap-1 group-hover:translate-x-1 transform duration-200">
                      Learn More &rarr;
                    </span>
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
