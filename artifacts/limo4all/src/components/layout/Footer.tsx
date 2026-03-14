import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <span className="font-display text-3xl font-bold tracking-tight text-white">
                Limo4<span className="text-primary">All</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional limo and chauffeur service across the Greater Toronto Area. Licensed, insured and trusted by thousands of GTA passengers.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+18001234567" className="font-caps font-bold text-xl text-white hover:text-primary transition-colors">1-800-XXX-XXXX</a>
              <a href="mailto:info@limo4all.ca" className="text-sm text-primary hover:text-white transition-colors">info@limo4all.ca</a>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="font-display text-xl font-semibold text-white mb-6">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground font-sans">
              <li><Link href="/airport" className="hover:text-primary transition-colors">Airport Transfers</Link></li>
              <li><Link href="/corporate" className="hover:text-primary transition-colors">Corporate Accounts</Link></li>
              <li><Link href="/wedding" className="hover:text-primary transition-colors">Wedding Limousines</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events & Concerts</Link></li>
              <li><Link href="/hourly" className="hover:text-primary transition-colors">Hourly Charter</Link></li>
              <li><Link href="/tours" className="hover:text-primary transition-colors">City to City Transfers</Link></li>
              <li><Link href="/fleet" className="hover:text-primary transition-colors">Sprinter Van Groups</Link></li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-display text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground font-sans">
              <li><Link href="/booking" className="hover:text-primary transition-colors">Book Online</Link></li>
              <li><Link href="/quote" className="hover:text-primary transition-colors">Get a Quote</Link></li>
              <li><Link href="/fleet" className="hover:text-primary transition-colors">Our Fleet</Link></li>
              <li><Link href="/quote" className="hover:text-primary transition-colors">FIFA 2026 Transport</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">All Locations</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Top Cities Col */}
          <div>
            <h4 className="font-display text-xl font-semibold text-white mb-6">Top Cities</h4>
            <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground font-sans">
              <Link href="/airport" className="hover:text-primary transition-colors">Toronto</Link>
              <Link href="/airport" className="hover:text-primary transition-colors">Mississauga</Link>
              <Link href="/airport" className="hover:text-primary transition-colors">Brampton</Link>
              <Link href="/airport" className="hover:text-primary transition-colors">Markham</Link>
              <Link href="/airport" className="hover:text-primary transition-colors">Vaughan</Link>
              <Link href="/airport" className="hover:text-primary transition-colors">Oakville</Link>
              <Link href="/airport" className="hover:text-primary transition-colors">Burlington</Link>
              <Link href="/airport" className="hover:text-primary transition-colors">Hamilton</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-sans">
          <span>&copy; {new Date().getFullYear()} Limo4All. Premium Worldwide Ground Transportation.</span>
          <div className="flex gap-4">
            <span>Licensed & Insured</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>GTAA Certified</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Serving the GTA 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
