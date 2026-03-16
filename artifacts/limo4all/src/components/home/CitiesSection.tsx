import { Link } from "wouter";
import { CITY_SLUGS, CITY_NAMES } from "@/lib/content";

// Map city slugs to sub-labels shown on the tile
const CITY_SUB: Record<string, string> = {
  toronto: "Downtown & GTA",
  mississauga: "Pearson YYZ",
  brampton: "Peel Region",
  vaughan: "Woodbridge/Concord",
  oakville: "Halton Region",
  markham: "York Region",
  "richmond-hill": "York Region",
  aurora: "York Region",
  "king-city": "York Region",
  burlington: "Halton Region",
  milton: "Halton Region",
  guelph: "Wellington County",
  hamilton: "YHM Airport",
  "waterloo-kitchener": "Tech Hub",
  london: "Middlesex County",
  "niagara-falls": "Niagara Region",
};

export function CitiesSection() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Serving 16+ Cities</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Flat-rate door-to-door service across the <br className="hidden md:block" />
            <span className="italic text-primary font-normal">Greater Toronto Area</span> and Southern Ontario
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-4">
          {CITY_SLUGS.map((slug) => (
            <Link key={slug} href={`/locations/${slug}`}>
              <div className="bg-card border border-border p-4 rounded-sm text-center hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer group h-full flex flex-col items-center justify-center gap-1">
                <div className="font-sans font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                  {CITY_NAMES[slug]}
                </div>
                <div className="text-[10px] font-caps uppercase tracking-widest text-muted-foreground">
                  {CITY_SUB[slug] ?? "Ontario"}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-sans text-muted-foreground">
            Don&apos;t see your city? We likely serve it —{" "}
            <a href="tel:+18001234567" className="text-primary hover:underline font-semibold">
              call 1-800-XXX-XXXX for a custom quote.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
