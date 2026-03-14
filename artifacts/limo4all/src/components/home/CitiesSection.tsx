import { Link } from "wouter";

const CITIES = [
  { name: "Toronto", sub: "Downtown & GTA" },
  { name: "Mississauga", sub: "Pearson YYZ" },
  { name: "Brampton", sub: "Peel Region" },
  { name: "Vaughan", sub: "Woodbridge/Concord" },
  { name: "Oakville", sub: "Halton Region" },
  { name: "Markham", sub: "York Region" },
  { name: "Richmond Hill", sub: "York Region" },
  { name: "Aurora", sub: "York Region" },
  { name: "King City", sub: "York Region" },
  { name: "Burlington", sub: "Halton Region" },
  { name: "Milton", sub: "Halton Region" },
  { name: "Guelph", sub: "Wellington County" },
  { name: "Hamilton", sub: "YHM Airport" },
  { name: "Waterloo/Kitchener", sub: "Tech Hub" },
  { name: "London", sub: "Middlesex County" },
  { name: "Niagara Falls", sub: "Niagara Region" },
  { name: "St. Catharines", sub: "Niagara Region" },
  { name: "Simcoe", sub: "Norfolk County" }
];

export function CitiesSection() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Serving 18+ Cities</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Flat-rate door-to-door service across the <br className="hidden md:block"/>
            <span className="italic text-primary font-normal">Greater Toronto Area</span> and Southern Ontario
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {CITIES.map((c, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-sm text-center hover:border-primary hover:bg-primary/5 transition-colors cursor-default group">
              <div className="font-sans font-bold text-foreground group-hover:text-primary transition-colors text-sm">{c.name}</div>
              <div className="text-[10px] font-caps uppercase tracking-widest text-muted-foreground mt-1">{c.sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-sans text-muted-foreground">
            Don't see your city? We likely serve it — <a href="tel:+18001234567" className="text-primary hover:underline font-semibold">call 1-800-XXX-XXXX for a custom quote.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
