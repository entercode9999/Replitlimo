import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/airport", label: "Airport" },
  { href: "/corporate", label: "Corporate" },
  { href: "/wedding", label: "Wedding" },
  { href: "/events", label: "Events" },
  { href: "/hourly", label: "Hourly" },
  { href: "/tours", label: "Tours" },
  { href: "/fleet", label: "Fleet" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-glass shadow-lg" : "bg-gradient-to-b from-background/90 to-transparent pt-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              Limo4<span className="text-primary group-hover:text-foreground transition-colors">All</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-sans font-semibold transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Phone */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-caps uppercase tracking-widest text-primary font-bold">Reservations 24/7</span>
              <a href="tel:+18001234567" className="font-caps text-lg font-bold hover:text-primary transition-colors">
                1-800-XXX-XXXX
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/quote">
                <Button variant="ghost" className="hidden xl:flex">Get Quote</Button>
              </Link>
              <Link href="/booking">
                <Button>Book Now</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[104px] bg-background/95 backdrop-blur-xl transition-all duration-300 ease-in-out border-t border-border overflow-y-auto",
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <div className="flex flex-col p-6 gap-6">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-xl font-display font-semibold border-b border-border/50 pb-4",
                  location === link.href ? "text-primary" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-3 text-primary mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-caps font-bold tracking-wider">FIFA 2026 Ready</span>
            </div>
            <a href="tel:+18001234567" className="flex flex-col gap-1 bg-white/5 p-4 border border-white/10 text-center">
              <span className="text-xs font-caps uppercase tracking-widest text-muted-foreground">Reservations 24/7</span>
              <span className="text-xl font-caps font-bold">1-800-XXX-XXXX</span>
            </a>
            <Link href="/quote" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full" size="lg">Get a Quote</Button>
            </Link>
            <Link href="/booking" onClick={() => setIsOpen(false)}>
              <Button className="w-full" size="lg">Book Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
