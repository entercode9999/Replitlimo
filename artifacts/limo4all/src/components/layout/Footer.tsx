import { Link } from "wouter";
import { CITY_SLUGS, CITY_NAMES } from "@/lib/content";

// Show 8 cities in footer; all are linked to their hub page
const FOOTER_CITIES = CITY_SLUGS.slice(0, 8);

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-display text-3xl font-bold tracking-tight text-white">
                Limo4<span className="text-primary">All</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional limo and chauffeur service across the Greater Toronto Area. Licensed, insured and trusted by thousands of GTA passengers.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+18001234567" className="font-caps font-bold text-xl text-white hover:text-primary transition-colors">
                1-800-XXX-XXXX
              </a>
              <a href="mailto:info@limo4all.ca" className="text-sm text-primary hover:text-white transition-colors">
                info@limo4all.ca
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl font-semibold text-white mb-6">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground font-sans">
              <li><Link href="/airport" className="hover:text-primary transition-colors">Airport Transfers</Link></li>
              <li><Link href="/corporate" className="hover:text-primary transition-colors">Corporate Limo</Link></li>
              <li><Link href="/wedding" className="hover:text-primary transition-colors">Wedding Transportation</Link></li>
              <li><Link href="/car-service" className="hover:text-primary transition-colors">Car Service</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events & Concerts</Link></li>
              <li><Link href="/hourly" className="hover:text-primary transition-colors">Hourly Charter</Link></li>
              <li><Link href="/tours" className="hover:text-primary transition-colors">Wine & City Tours</Link></li>
              <li><Link href="/airports" className="hover:text-primary transition-colors">Local Airports</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground font-sans">
              <li><Link href="/booking" className="hover:text-primary transition-colors">Book Online</Link></li>
              <li><Link href="/quote" className="hover:text-primary transition-colors">Get a Quote</Link></li>
              <li><Link href="/fleet" className="hover:text-primary transition-colors">Our Fleet</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">All Locations</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Top Cities */}
          <div>
            <h4 className="font-display text-xl font-semibold text-white mb-6">Top Cities</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground font-sans">
              {FOOTER_CITIES.map((slug) => (
                <Link
                  key={slug}
                  href={`/locations/${slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {CITY_NAMES[slug]}
                </Link>
              ))}
              <Link href="/locations" className="hover:text-primary transition-colors col-span-2 font-semibold text-primary/70 mt-1">
                All 16 Cities →
              </Link>
            </div>
          </div>

          {/* Legal / Pages */}
          <div>
            <h4 className="font-display text-xl font-semibold text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground font-sans">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Limo4All</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">General FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Airport quick links */}
        <div className="mb-10 pt-8 border-t border-border/50">
          <h5 className="text-xs font-caps font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Airport Limo Service
          </h5>
          <div className="flex flex-wrap gap-4 text-xs font-sans text-muted-foreground">
            <Link href="/airports/toronto-pearson" className="hover:text-primary transition-colors">Toronto Pearson (YYZ)</Link>
            <span className="text-border">·</span>
            <Link href="/airports/billy-bishop" className="hover:text-primary transition-colors">Billy Bishop (YTZ)</Link>
            <span className="text-border">·</span>
            <Link href="/airports/hamilton" className="hover:text-primary transition-colors">Hamilton Airport (YHM)</Link>
            <span className="text-border">·</span>
            <Link href="/airports/buffalo" className="hover:text-primary transition-colors">Buffalo Niagara (BUF)</Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-sans">
          <span>&copy; {new Date().getFullYear()} Limo4All. Premium Worldwide Ground Transportation.</span>
          <div className="flex flex-wrap gap-4 justify-center">
            <span>Licensed & Insured</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>GTAA Certified</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Serving the GTA 24/7</span>
            <span className="hidden sm:inline">&bull;</span>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <span className="hidden sm:inline">&bull;</span>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
