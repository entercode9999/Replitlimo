import { Plane, Briefcase, Heart, Music, Clock, MapPin } from "lucide-react";
import { Link } from "wouter";

const SERVICES = [
  {
    title: "Airport Transfers",
    icon: Plane,
    desc: "Flat-rate door-to-door service to YYZ, YTZ, YHM, BUF. 60 min free wait, live flight tracking, inside terminal meetup.",
    price: "$75",
    link: "/airport",
    image: "service-airport.png"
  },
  {
    title: "Corporate Car Service",
    icon: Briefcase,
    desc: "Monthly billing, dedicated account manager. Consistent premium vehicles for executives and business travel across the GTA.",
    price: "$85/hr",
    link: "/corporate",
    image: "service-corporate.png"
  },
  {
    title: "Wedding Transportation",
    icon: Heart,
    desc: "Stretch limos, Escalades and Suburbans for the full wedding party. Coordinated multi-vehicle packages available.",
    price: "$175",
    link: "/wedding",
    image: "service-wedding.png"
  },
  {
    title: "Events & Concerts",
    icon: Music,
    desc: "Sporting events, concerts, galas and private functions. Drop-off and pickup coordination at all major GTA venues.",
    price: "$85",
    link: "/events",
    image: "service-events.png"
  },
  {
    title: "Hourly Charter",
    icon: Clock,
    desc: "Your chauffeur on demand. Ideal for business meetings, shopping, medical appointments or as-directed use.",
    price: "$85/hr",
    link: "/hourly",
    image: "service-hourly.png"
  },
  {
    title: "Wine & City Tours",
    icon: MapPin,
    desc: "Niagara wine country, Muskoka, Stratford and beyond. Full-day tours with a knowledgeable, professional chauffeur.",
    price: "$350/day",
    link: "/tours",
    image: "service-tours.png"
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Premium <span className="italic text-primary font-normal">Transportation</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans max-w-2xl mx-auto">
            Every journey, every occasion — Limo4All has the right vehicle and service for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Link key={i} href={s.link}>
              <div className="group bg-white border border-border rounded-sm overflow-hidden hover:border-primary/60 hover:shadow-lg transition-all cursor-pointer h-full flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${s.image}`}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-9 h-9 bg-primary rounded-sm flex items-center justify-center">
                      <s.icon className="w-4.5 h-4.5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-4">
                    <span className="font-caps text-[10px] font-bold uppercase tracking-widest bg-black/70 text-white px-2 py-1">
                      From {s.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed flex-1">
                    {s.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/60">
                    <span className="text-sm font-sans font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
