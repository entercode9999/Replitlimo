import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const TOURS = [
  {
    title: "Niagara Falls & Wine Country",
    desc: "Visit Canada's most iconic waterfall, then tour 4 award-winning Niagara-on-the-Lake wineries with private tastings.",
    duration: "Full Day (8-10 hrs)",
    price: "$450"
  },
  {
    title: "Muskoka & Georgian Bay",
    desc: "Escape to cottage country. Gravenhurst, Bracebridge and Huntsville with lakeside stops and photo opportunities.",
    duration: "Full Day",
    price: "$550"
  },
  {
    title: "Stratford Festival & Heritage",
    desc: "Experience Canada's legendary Stratford Festival theatre, quaint downtown shops and fine dining.",
    duration: "Full Day",
    price: "$400"
  },
  {
    title: "Niagara-on-the-Lake Wine Tour",
    desc: "Intimate tour of 3-4 boutique wineries in the prestigious NOTL wine region, with a gourmet lunch stop.",
    duration: "Half Day (5-6 hrs)",
    price: "$350"
  }
];

export function ToursSection() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Discover Ontario</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Curated day trips and <span className="italic text-primary font-normal">multi-stop tours</span> from Toronto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TOURS.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-sm overflow-hidden flex flex-col hover:border-primary/50 transition-colors group">
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-secondary via-secondary/50 to-primary/10 relative flex items-center justify-center border-b border-border">
                <span className="font-display text-2xl font-bold text-foreground/30 opacity-50 group-hover:scale-105 transition-transform duration-500">{t.title}</span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-2xl font-bold pr-4">{t.title}</h3>
                  <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-sm shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-caps uppercase tracking-widest font-bold">{t.duration}</span>
                  </div>
                </div>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-8 flex-1">
                  {t.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-caps uppercase tracking-widest text-muted-foreground">From</span>
                    <span className="font-display text-3xl font-bold text-foreground">{t.price}</span>
                  </div>
                  <Link href="/booking">
                    <Button variant="outline" className="border-border hover:border-primary hover:bg-primary/5">Book This Tour &rarr;</Button>
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
