import { AppLayout } from "@/components/layout/AppLayout";
import { CTABand } from "@/components/home/CTABand";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface GenericPageProps {
  title: string;
  subtitle: string;
}

export function GenericPage({ title, subtitle }: GenericPageProps) {
  return (
    <AppLayout>
      {/* Minimal Hero for subpages */}
      <section className="pt-32 pb-20 bg-card border-b border-border text-center px-4">
        <span className="section-label mb-4 inline-block">Limo4All Services</span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          {title.split(' ').map((word, i) => (
            <span key={i} className={i % 2 !== 0 ? "italic text-primary font-normal" : ""}>
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto mb-10">
          {subtitle}
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/booking">
            <Button>Book Now</Button>
          </Link>
          <Link href="/quote">
            <Button variant="outline">Request Quote</Button>
          </Link>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-24 bg-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Premium {title} Solutions</h2>
          <p className="text-gray-600 font-sans text-lg leading-relaxed mb-8">
            Experience the pinnacle of luxury ground transportation. Our fleet of immaculate vehicles and professional chauffeurs ensures a seamless, comfortable journey across the Greater Toronto Area and beyond. All rates are flat, upfront, and guaranteed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 border border-gray-200 rounded-sm">
              <h4 className="font-bold font-display text-xl mb-2 text-gray-900">Reliable</h4>
              <p className="text-sm text-gray-600 font-sans">24/7 dispatch and real-time tracking.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-sm">
              <h4 className="font-bold font-display text-xl mb-2 text-gray-900">Luxurious</h4>
              <p className="text-sm text-gray-600 font-sans">Late-model Executive SUVs and Sedans.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-sm">
              <h4 className="font-bold font-display text-xl mb-2 text-gray-900">Transparent</h4>
              <p className="text-sm text-gray-600 font-sans">Flat rates with zero hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </AppLayout>
  );
}
