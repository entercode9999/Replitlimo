import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { AppLayout } from '@/components/layout/AppLayout';
import { CTABand } from '@/components/home/CTABand';
import { SEOHead } from '@/components/seo/SEOHead';
import {
  Plane, Briefcase, Heart, Car, Clock, MapPin,
  FlightTakeoff, Shield, CheckCircle, Star, Phone,
  Navigation, Users, CreditCard, Calendar, Wifi,
  LucideIcon,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface HubStat {
  value: string;
  label: string;
  sub: string;
}

interface HubFeature {
  title: string;
  desc: string;
  Icon: LucideIcon;
}

interface HubConfig {
  image: string;
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  stats: HubStat[];
  features: HubFeature[];
  cities: string[];
  canonical: string;
  seoTitle: string;
  seoDescription: string;
}

// ─── Hub Configs ──────────────────────────────────────────────────────────────

export const HUB_CONFIGS: Record<string, HubConfig> = {
  airport: {
    image: 'service-airport.png',
    label: 'Airport Limo Service',
    title: 'Airport Transportation',
    titleAccent: 'Services',
    subtitle:
      'Your trusted door-to-door airport transfer partner. Serving Toronto Pearson (YYZ), Billy Bishop (YTZ), Hamilton (YHM), and Buffalo Niagara (BUF) — flat rates, live flight tracking, and 60 minutes of free wait time included on every booking.',
    stats: [
      { value: '60 min', label: 'Free Wait Time', sub: 'Included every flight' },
      { value: '4.9★', label: 'Google Rating', sub: '500+ verified reviews' },
      { value: '24/7', label: 'Dispatch Available', sub: 'GTAA licensed' },
    ],
    features: [
      {
        title: 'Real-Time Flight Tracking',
        desc: 'We monitor your live arrival so your chauffeur is always on time — even when flights are delayed. You never wait at the curb.',
        Icon: Plane,
      },
      {
        title: '60-Minute Free Wait Time',
        desc: 'Industry-best wait time policy. Your driver waits up to 60 minutes after landing at no extra charge.',
        Icon: Clock,
      },
      {
        title: 'Inside Terminal Meet & Greet',
        desc: 'Your uniformed chauffeur meets you in the arrivals hall with a personalized name board. No searching for your ride.',
        Icon: Users,
      },
      {
        title: 'Flat-Rate Pricing',
        desc: 'Your fare is locked at booking. No surge pricing, no surprise fees — ever. What you see is exactly what you pay.',
        Icon: CreditCard,
      },
      {
        title: '24/7 Live Dispatch',
        desc: 'Our local dispatch team is available around the clock — not an algorithm. A real person answers, every time.',
        Icon: Phone,
      },
      {
        title: 'GTAA-Certified Chauffeurs',
        desc: 'All drivers hold GTAA airport permits with criminal record checks, clean driving abstracts, and full commercial insurance.',
        Icon: Shield,
      },
    ],
    cities: [
      'Toronto', 'Mississauga', 'Vaughan', 'Oakville', 'Markham',
      'Hamilton', 'London', 'Niagara Falls', 'Waterloo-Kitchener',
      'Richmond Hill', 'Brampton', 'Aurora', 'King City', 'Burlington',
      'Milton', 'Guelph',
    ],
    canonical: '/airport',
    seoTitle: 'Airport Transportation Services | Limo4All — Toronto & GTA',
    seoDescription:
      'Flat-rate airport limo service to YYZ, YTZ, YHM and BUF. 60-min free wait, live flight tracking, inside terminal meetup. 24/7 dispatch across the GTA.',
  },

  corporate: {
    image: 'service-corporate.png',
    label: 'Corporate Limo Service',
    title: 'Corporate Transportation',
    titleAccent: 'Services',
    subtitle:
      'Executive car service built for businesses. Monthly invoicing, dedicated account managers, and consistent late-model vehicles for every trip — across Toronto, the GTA, and beyond.',
    stats: [
      { value: '15%', label: 'Corporate Savings', sub: 'On recurring bookings' },
      { value: 'NET 30', label: 'Monthly Billing', sub: 'Invoiced accounts' },
      { value: '24/7', label: 'Priority Dispatch', sub: 'Dedicated line' },
    ],
    features: [
      {
        title: 'Dedicated Account Manager',
        desc: 'One point of contact for all bookings, invoices, and changes. No call centres — your account manager knows your preferences.',
        Icon: Briefcase,
      },
      {
        title: 'Monthly Invoicing',
        desc: 'Consolidate all corporate trips into a single monthly invoice. NET 30 billing available for pre-approved accounts.',
        Icon: CreditCard,
      },
      {
        title: 'Priority Dispatch',
        desc: 'Corporate accounts get priority access to the fleet during peak hours, ensuring your executives are never left waiting.',
        Icon: Star,
      },
      {
        title: 'Consistent Executive Fleet',
        desc: 'Late-model Cadillac Escalades, Lincoln Navigators, and Mercedes — every vehicle cleaned and inspected before every trip.',
        Icon: Car,
      },
      {
        title: 'On-Time Guarantee',
        desc: 'Real-time traffic routing with 24/7 dispatch monitoring ensures punctuality for board meetings, client visits, and flights.',
        Icon: CheckCircle,
      },
      {
        title: 'In-Vehicle Amenities',
        desc: 'Complimentary Wi-Fi, device chargers, bottled water, and a privacy partition on request. Your office on wheels.',
        Icon: Wifi,
      },
    ],
    cities: [
      'Toronto', 'Mississauga', 'Vaughan', 'Oakville', 'Markham',
      'Hamilton', 'London', 'Niagara Falls', 'Waterloo-Kitchener',
      'Richmond Hill', 'Brampton', 'Aurora', 'King City', 'Burlington',
      'Milton', 'Guelph',
    ],
    canonical: '/corporate',
    seoTitle: 'Corporate Car Service Toronto & GTA | Limo4All',
    seoDescription:
      'Executive corporate car service with monthly billing, dedicated account managers, and priority dispatch. Serving Toronto, Mississauga, and all GTA cities 24/7.',
  },

  wedding: {
    image: 'service-wedding.png',
    label: 'Wedding Limo Service',
    title: 'Wedding Transportation',
    titleAccent: 'Services',
    subtitle:
      'Arrive in elegance on your most important day. Stretch limousines, Cadillac Escalades, and Suburbans — single vehicles or full wedding-party packages with multi-vehicle coordination across Ontario.',
    stats: [
      { value: '100+', label: 'Weddings Served', sub: 'Across Ontario' },
      { value: 'Multi', label: 'Vehicle Packages', sub: 'Full party coordination' },
      { value: '24/7', label: 'Day-of Support', sub: 'Dedicated coordinator' },
    ],
    features: [
      {
        title: 'Multi-Vehicle Coordination',
        desc: 'From the bride and groom to the full wedding party — we coordinate multiple vehicles so everyone arrives together, on time.',
        Icon: Users,
      },
      {
        title: 'Stretch Limousines Available',
        desc: 'Classic stretch limos, Escalade SUVs, and luxury Suburbans for groups of any size. All vehicles are fully detailed before every booking.',
        Icon: Car,
      },
      {
        title: 'Custom Itinerary',
        desc: 'Ceremony, photos, reception, after-party — your chauffeur follows your timeline. We arrive early and stay until the night is over.',
        Icon: Calendar,
      },
      {
        title: 'Red Carpet Treatment',
        desc: 'Uniformed chauffeur, in-car refreshments, red carpet service, and complimentary decorations available on request.',
        Icon: Star,
      },
      {
        title: 'On-Time Arrival Guarantee',
        desc: 'We track all venues, traffic conditions, and ceremony schedules to ensure every vehicle is exactly where it needs to be.',
        Icon: CheckCircle,
      },
      {
        title: 'Dedicated Wedding Coordinator',
        desc: 'A dedicated point of contact manages your booking from quote to day-of execution — so nothing is left to chance.',
        Icon: Heart,
      },
    ],
    cities: [
      'Toronto', 'Mississauga', 'Vaughan', 'Oakville', 'Markham',
      'Hamilton', 'London', 'Niagara Falls', 'Waterloo-Kitchener',
      'Richmond Hill', 'Brampton', 'Aurora', 'King City', 'Burlington',
      'Milton', 'Guelph',
    ],
    canonical: '/wedding',
    seoTitle: 'Wedding Limo & Transportation Services Ontario | Limo4All',
    seoDescription:
      'Stretch limousines, Escalades, and full wedding-party packages across Ontario. Multi-vehicle coordination, on-time guarantee, and 24/7 day-of support.',
  },

  'car-service': {
    image: 'service-airport.png',
    label: 'Car Service',
    title: 'Car Service',
    titleAccent: 'Toronto & GTA',
    subtitle:
      'Professional point-to-point car service for any occasion. Flat rates, late-model vehicles, and licensed chauffeurs across Toronto, Mississauga, and all 16 GTA service areas.',
    stats: [
      { value: 'Flat', label: 'Rate Pricing', sub: 'No surge, no surprises' },
      { value: '16+', label: 'Cities Served', sub: 'Southern Ontario' },
      { value: '24/7', label: 'Available', sub: 'GTAA licensed' },
    ],
    features: [
      {
        title: 'Point-to-Point Transfers',
        desc: 'Reliable door-to-door transfers for any destination — city, suburbs, or out-of-town. We handle the route, you relax.',
        Icon: Navigation,
      },
      {
        title: 'Flat-Rate Pricing',
        desc: 'Your fare is quoted upfront and never changes. No metered rates, no surge pricing — guaranteed.',
        Icon: CreditCard,
      },
      {
        title: 'Late-Model Fleet',
        desc: 'Cadillac Escalades, Suburbans, sedans, and Sprinter vans — every vehicle under 3 years old and inspected before every trip.',
        Icon: Car,
      },
      {
        title: 'Licensed Chauffeurs',
        desc: 'All drivers hold valid commercial licenses with clean abstracts, GTAA permits, and criminal background checks.',
        Icon: Shield,
      },
      {
        title: 'On-Time Guarantee',
        desc: 'We arrive before you need to leave — every time. Live traffic monitoring ensures zero delays.',
        Icon: CheckCircle,
      },
      {
        title: '24/7 Local Dispatch',
        desc: 'Our local dispatch team is available around the clock. Book online or call — instant confirmation guaranteed.',
        Icon: Phone,
      },
    ],
    cities: [
      'Toronto', 'Mississauga', 'Vaughan', 'Oakville', 'Markham',
      'Hamilton', 'London', 'Niagara Falls', 'Waterloo-Kitchener',
      'Richmond Hill', 'Brampton', 'Aurora', 'King City', 'Burlington',
      'Milton', 'Guelph',
    ],
    canonical: '/car-service',
    seoTitle: 'Car Service Toronto & GTA | Limo4All Professional Chauffeurs',
    seoDescription:
      'Flat-rate point-to-point car service across Toronto and the GTA. Licensed chauffeurs, late-model fleet, 24/7 dispatch. Book online or call now.',
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

interface HubPageProps {
  hub: keyof typeof HUB_CONFIGS;
}

export function HubPage({ hub }: HubPageProps) {
  const cfg = HUB_CONFIGS[hub];
  if (!cfg) return null;

  return (
    <AppLayout>
      <SEOHead
        title={cfg.seoTitle}
        description={cfg.seoDescription}
        canonical={cfg.canonical}
        schemas={[]}
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] flex items-end pb-16 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/${cfg.image}`}
            alt={cfg.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <nav className="flex gap-2 text-xs font-sans text-white/50 mb-6 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/80">{cfg.title}</span>
          </nav>

          <span className="block font-caps text-xs font-bold text-primary uppercase tracking-[0.15em] mb-4">
            {cfg.label}
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] text-white mb-6 max-w-3xl">
            {cfg.title}{' '}
            <span className="italic text-primary font-normal">{cfg.titleAccent}</span>
          </h1>

          <p className="text-lg text-white/75 font-sans font-light leading-relaxed max-w-2xl mb-10">
            {cfg.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Link href="/booking">
              <Button size="lg" className="px-10 py-6 h-auto text-base shadow-[0_0_24px_rgba(15,168,224,0.35)]">
                Book Now
              </Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" variant="ghost" className="px-10 py-6 h-auto text-base border border-white/30 text-white hover:bg-white/10">
                Get a Free Quote
              </Button>
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-0 border-t border-white/20 pt-8">
            {cfg.stats.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col pr-8 mr-8 mb-4 ${
                  i < cfg.stats.length - 1 ? 'border-r border-white/20' : ''
                }`}
              >
                <span className="font-display text-3xl font-bold text-white leading-none">
                  {s.value}
                </span>
                <span className="text-xs font-caps uppercase tracking-widest text-white/50 mt-1">
                  {s.label}
                </span>
                <span className="text-xs text-white/30 mt-0.5">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-[#0a0a0a] py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">THE LIMO4ALL ADVANTAGE</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Why Choose Limo4All For{' '}
              <span className="italic text-primary font-normal">{cfg.title}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cfg.features.map((f, i) => (
              <div
                key={i}
                className="bg-background border border-border p-8 rounded-sm hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <f.Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cities Served ── */}
      <section className="bg-card py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">SERVICE AREAS</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              The Greater Toronto Area's{' '}
              <span className="italic text-primary font-normal">Most Popular</span>
            </h2>
            <p className="mt-3 text-muted-foreground font-sans text-lg">{cfg.title}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {cfg.cities.map((city, i) => (
              <span
                key={i}
                className="px-5 py-2.5 border border-border rounded-full text-sm font-caps font-bold uppercase tracking-wider text-white/80 hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {city}
              </span>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground font-sans mt-10 max-w-2xl mx-auto">
            Don't see your city? We serve all of Southern Ontario and can accommodate custom routes.{' '}
            <Link href="/quote" className="text-primary hover:underline font-semibold">
              Request a custom quote &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ── Book CTA strip ── */}
      <section className="bg-primary/5 py-16 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="font-display text-3xl font-bold text-white mb-2">
              Ready to Book Your {cfg.title}?
            </h3>
            <p className="text-muted-foreground font-sans">
              Flat rates, 24/7 dispatch, and a licensed professional chauffeur — every ride.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/booking">
              <Button size="lg" className="w-full sm:w-auto">Book Online Now &rarr;</Button>
            </Link>
            <a href="tel:+18001234567">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 bg-transparent">
                Call 24/7
              </Button>
            </a>
          </div>
        </div>
      </section>

      <CTABand />
    </AppLayout>
  );
}
