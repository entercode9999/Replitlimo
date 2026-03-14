import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";

const TOURS = [
  {
    title: "Niagara Falls & Wine Country",
    subtitle: "Canada's Most Iconic Day Trip",
    desc: "Visit Horseshoe Falls, then tour 4 award-winning Niagara-on-the-Lake wineries with private tastings and a gourmet lunch stop.",
    duration: "Full Day · 8–10 hrs",
    price: "$450",
    from: "Toronto",
    image: "tour-niagara.png",
    highlights: ["Horseshoe Falls viewpoint", "4 winery tastings", "NOTL heritage town walk"]
  },
  {
    title: "Muskoka & Georgian Bay",
    subtitle: "Ontario Cottage Country Escape",
    desc: "Escape to cottage country through Gravenhurst, Bracebridge and Huntsville with lakeside photo stops and optional lunch on the water.",
    duration: "Full Day · 9–10 hrs",
    price: "$550",
    from: "Toronto",
    image: "tour-muskoka.png",
    highlights: ["Lake Muskoka lookouts", "Bracebridge waterfall", "Optional lake cruise"]
  },
  {
    title: "Stratford Festival & Heritage",
    subtitle: "Canada's Cultural Gem",
    desc: "Experience the legendary Stratford Festival, Avon River swans, quaint downtown shops and superb farm-to-table dining.",
    duration: "Full Day · 7–8 hrs",
    price: "$400",
    from: "Toronto",
    image: "tour-stratford.png",
    highlights: ["Festival theatre tour", "Avon River walk", "Fine dining reservation"]
  },
  {
    title: "Niagara-on-the-Lake Wine Tour",
    subtitle: "Boutique Winery Immersion",
    desc: "Intimate half-day tour of 3–4 boutique NOTL wineries with guided tastings, cellar tours and a curated charcuterie pairing.",
    duration: "Half Day · 5–6 hrs",
    price: "$350",
    from: "Toronto",
    image: "tour-notl.png",
    highlights: ["3–4 boutique wineries", "Cellar tours", "Charcuterie pairing"]
  }
];

export function ToursSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector("[data-tour-card]") as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 24 : 400;
    scrollRef.current.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-[#f5f7fa] border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="section-label">Discover Ontario</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Curated <span className="italic text-primary font-normal">Day Trips</span><br className="hidden md:block" /> from Toronto
            </h2>
            <p className="mt-4 text-muted-foreground font-sans max-w-xl">
              Every tour is chauffeured door-to-door in an executive vehicle, with flexible itineraries tailored to your pace.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-sm border border-border bg-white flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-sm border border-border bg-white flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 pl-4 sm:pl-6 lg:pl-[calc((100vw-80rem)/2+2rem)] pr-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {TOURS.map((t, i) => (
          <div
            key={i}
            data-tour-card
            className="min-w-[320px] sm:min-w-[380px] max-w-[420px] snap-start bg-white border border-border rounded-sm overflow-hidden flex flex-col shrink-0 group hover:border-primary/50 hover:shadow-lg transition-all"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <img
                src={`${import.meta.env.BASE_URL}images/${t.image}`}
                alt={t.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="block font-caps text-[10px] uppercase tracking-widest text-white/80 mb-1">{t.subtitle}</span>
                  <h3 className="font-display text-xl font-bold text-white leading-tight">{t.title}</h3>
                </div>
                <div className="shrink-0 text-right ml-3">
                  <span className="block text-[10px] font-caps text-white/70 uppercase tracking-widest">From</span>
                  <span className="font-display text-2xl font-bold text-primary leading-none">{t.price}</span>
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-xs font-caps uppercase tracking-widest text-muted-foreground">{t.duration}</span>
              </div>

              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-5">
                {t.desc}
              </p>

              <div className="space-y-1.5 mb-6">
                {t.highlights.map((h, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-foreground/70 font-sans">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Link href="/booking">
                  <Button className="w-full" variant="outline">Book This Tour &rarr;</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
