import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShieldCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICES = [
  { href: "/airport", label: "Airport Transfers" },
  { href: "/corporate", label: "Corporate Limo" },
  { href: "/wedding", label: "Wedding Transportation" },
  { href: "/car-service", label: "Car Service" },
  { href: "/events", label: "Events & Concerts" },
  { href: "/hourly", label: "Hourly Charter" },
  { href: "/tours", label: "Wine & City Tours" },
];

interface DropdownProps {
  label: string;
  children: React.ReactNode;
  isActive?: boolean;
}

function NavDropdown({ label, children, isActive }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-sm font-sans font-semibold transition-colors hover:text-primary",
          isActive || open ? "text-primary" : "text-foreground/80"
        )}
      >
        {label}
        <ChevronDown
          className={cn("w-3.5 h-3.5 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-1 min-w-[220px] bg-background border border-border shadow-xl rounded-sm z-50 py-1"
          onClick={() => setOpen(false)}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [location] = useLocation();
  return (
    <Link
      href={href}
      className={cn(
        "block px-4 py-2 text-sm font-sans transition-colors hover:bg-primary/10 hover:text-primary",
        location === href ? "text-primary font-semibold bg-primary/5" : "text-foreground/80"
      )}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-glass shadow-lg"
          : "bg-gradient-to-b from-background/90 to-transparent pt-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span className="font-display text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              Limo4<span className="text-primary group-hover:text-foreground transition-colors">All</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {/* Services dropdown */}
            <NavDropdown
              label="Services"
              isActive={SERVICES.some((s) => location.startsWith(s.href) && s.href !== "/")}
            >
              {SERVICES.map((s) => (
                <DropdownLink key={s.href} href={s.href}>
                  {s.label}
                </DropdownLink>
              ))}
            </NavDropdown>

            {/* Flat links */}
            {[
              { href: "/airports", label: "Airports" },
              { href: "/fleet", label: "Fleet" },
              { href: "/about", label: "About" },
            ].map((link) => (
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-caps uppercase tracking-widest text-primary font-bold">
                Reservations 24/7
              </span>
              <a href="tel:+18001234567" className="font-caps text-base font-bold hover:text-primary transition-colors">
                1-800-XXX-XXXX
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/quote">
                <Button variant="ghost" size="sm" className="hidden xl:flex">Get Quote</Button>
              </Link>
              <Link href="/booking">
                <Button size="sm">Book Now</Button>
              </Link>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[104px] bg-background/95 backdrop-blur-xl transition-all duration-300 ease-in-out border-t border-border overflow-y-auto",
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <div className="flex flex-col p-6 gap-4">
          {/* Services collapsible */}
          <div className="border-b border-border/50 pb-4">
            <button
              onClick={() => setMobileServices((v) => !v)}
              className="w-full flex items-center justify-between text-xl font-display font-semibold text-foreground mb-2"
            >
              Services
              <ChevronDown className={cn("w-5 h-5 transition-transform", mobileServices && "rotate-180")} />
            </button>
            {mobileServices && (
              <div className="flex flex-col gap-2 pl-2 mt-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="text-base font-sans text-muted-foreground hover:text-primary transition-colors py-1"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Flat links */}
          {[
            { href: "/airports", label: "Airports" },
            { href: "/fleet", label: "Fleet" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl font-display font-semibold border-b border-border/50 pb-4 text-foreground"
            >
              {link.label}
            </Link>
          ))}

          {/* CTAs */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-3 text-primary mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-caps font-bold tracking-wider">FIFA 2026 Ready</span>
            </div>
            <a
              href="tel:+18001234567"
              className="flex flex-col gap-1 bg-white/5 p-4 border border-white/10 text-center"
            >
              <span className="text-xs font-caps uppercase tracking-widest text-muted-foreground">
                Reservations 24/7
              </span>
              <span className="text-xl font-caps font-bold">1-800-XXX-XXXX</span>
            </a>
            <Link href="/quote">
              <Button variant="outline" className="w-full" size="lg">Get a Quote</Button>
            </Link>
            <Link href="/booking">
              <Button className="w-full" size="lg">Book Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
