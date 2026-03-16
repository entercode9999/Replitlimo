import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { AppLayout } from '@/components/layout/AppLayout';
import { CTABand } from '@/components/home/CTABand';
import { MarkdownRenderer } from '@/components/content/MarkdownRenderer';
import { extractTitle, extractSubtitle, CITY_NAMES, CITY_SLUGS } from '@/lib/content';
import { extractFAQs } from '@/lib/faq-parser';
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from '@/lib/schema';
import { SEOHead } from '@/components/seo/SEOHead';

const SITE_URL = 'https://www.limo4all.ca';

const PAGE_CANONICAL: Record<string, string> = {
  'about-us': '/about',
  'faq-general': '/faq',
  'privacy-policy': '/privacy',
  'terms-conditions-enhanced': '/terms',
  'why-choose-us': '/why-choose-us',
  'airport-transportation': '/airport',
  'corporate-transportation': '/corporate',
  'wedding-transportation': '/wedding',
  'car-service': '/car-service',
  'local-airports': '/airports',
};

function buildCanonical(category: Category, slug: string): string {
  if (category === 'page') return PAGE_CANONICAL[slug] ?? `/${slug}`;
  if (category === 'city') return `/locations/${slug}`;
  if (category === 'airport') return `/airports/${slug}`;
  return `/${category}/${slug}`;
}

type Category = 'corporate' | 'wedding' | 'car-service' | 'city' | 'airport' | 'page';

interface ContentPageProps {
  content: string;
  category: Category;
  slug: string;
}

// Labels for the service tag in the hero
const CATEGORY_LABELS: Record<Category, string> = {
  corporate: 'Corporate Limo Service',
  wedding: 'Wedding Transportation',
  'car-service': 'Car Service',
  city: 'Limo4All Locations',
  airport: 'Airport Transportation',
  page: 'Limo4All',
};

// Related services for city service pages (cross-linking)
const SERVICE_CROSS_LINKS: Partial<Record<Category, { label: string; href: (slug: string) => string }[]>> = {
  corporate: [
    { label: 'Wedding Limo', href: (s) => `/wedding/${s}` },
    { label: 'Car Service', href: (s) => `/car-service/${s}` },
    { label: 'City Overview', href: (s) => `/locations/${s}` },
  ],
  wedding: [
    { label: 'Corporate Limo', href: (s) => `/corporate/${s}` },
    { label: 'Car Service', href: (s) => `/car-service/${s}` },
    { label: 'City Overview', href: (s) => `/locations/${s}` },
  ],
  'car-service': [
    { label: 'Corporate Limo', href: (s) => `/corporate/${s}` },
    { label: 'Wedding Limo', href: (s) => `/wedding/${s}` },
    { label: 'City Overview', href: (s) => `/locations/${s}` },
  ],
  city: [
    { label: 'Corporate Limo', href: (s) => `/corporate/${s}` },
    { label: 'Wedding Limo', href: (s) => `/wedding/${s}` },
    { label: 'Car Service', href: (s) => `/car-service/${s}` },
  ],
};

export function ContentPage({ content, category, slug }: ContentPageProps) {
  const title = extractTitle(content);
  const subtitle = extractSubtitle(content);
  const serviceLabel = CATEGORY_LABELS[category];
  const crossLinks = SERVICE_CROSS_LINKS[category];
  const cityName = CITY_NAMES[slug];

  // Breadcrumb path
  const breadcrumb = buildBreadcrumb(category, slug, cityName);

  // SEO
  const canonical = buildCanonical(category, slug);
  const pageUrl = `${SITE_URL}${canonical}`;
  const faqs = extractFAQs(content);

  return (
    <AppLayout>
      <SEOHead
        title={title || 'Limo4All Transportation'}
        description={subtitle || 'Premium limo & chauffeur service across Ontario. 24/7 dispatch, flat-rate pricing.'}
        canonical={canonical}
        schemas={[
          buildServiceSchema({ title, description: subtitle, cityName, pageUrl }),
          buildFAQSchema(faqs),
          buildBreadcrumbSchema(breadcrumb),
        ]}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 bg-card border-b border-border text-center px-4">
        {/* Breadcrumb */}
        <nav className="flex justify-center gap-2 text-xs font-sans text-muted-foreground mb-5 flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-border">/</span>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-primary transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-foreground">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <span className="section-label mb-3 inline-block">{serviceLabel}</span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5 max-w-3xl mx-auto leading-tight">
          {title || 'Limo4All'}
        </h1>
        {subtitle && (
          <p className="text-base text-muted-foreground font-sans max-w-2xl mx-auto mb-8 leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="flex justify-center gap-3 flex-wrap">
          <Link href="/booking">
            <Button size="lg">Book Now</Button>
          </Link>
          <Link href="/quote">
            <Button variant="outline" size="lg">Get a Quote</Button>
          </Link>
          <a href="tel:+18001234567">
            <Button variant="ghost" size="lg" className="text-foreground border border-border hover:bg-muted">
              Call 24/7
            </Button>
          </a>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12 items-start">
            {/* Main content */}
            <article className="flex-1 min-w-0">
              <MarkdownRenderer content={content} hideH1 />
            </article>

            {/* Sidebar */}
            {(crossLinks || category === 'city') && (
              <aside className="hidden xl:flex flex-col gap-6 w-64 shrink-0 sticky top-32">
                {/* Cross-service links for same city */}
                {crossLinks && cityName && (
                  <div className="bg-card border border-border p-5 rounded-sm">
                    <h3 className="font-display font-bold text-base text-foreground mb-4">
                      More in {cityName}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {crossLinks.map((link, i) => (
                        <li key={i}>
                          <Link
                            href={link.href(slug)}
                            className="text-sm font-sans font-semibold text-primary hover:underline flex items-center gap-1"
                          >
                            → {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* City hub page sidebar: links to other cities for the same service */}
                {category === 'city' && (
                  <div className="bg-card border border-border p-5 rounded-sm">
                    <h3 className="font-display font-bold text-base text-foreground mb-4">
                      All Service Areas
                    </h3>
                    <ul className="flex flex-col gap-1.5">
                      {CITY_SLUGS.map((s) => (
                        <li key={s}>
                          <Link
                            href={`/locations/${s}`}
                            className={`text-sm font-sans hover:text-primary transition-colors ${
                              s === slug ? 'font-semibold text-primary' : 'text-muted-foreground'
                            }`}
                          >
                            {CITY_NAMES[s]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Book CTA card */}
                <div className="bg-primary/10 border border-primary/30 p-5 rounded-sm">
                  <p className="text-sm font-sans text-foreground mb-4 leading-relaxed">
                    Ready to book? Our 24/7 dispatch team is standing by.
                  </p>
                  <Link href="/booking" className="block">
                    <Button size="sm" className="w-full mb-2">Book Now</Button>
                  </Link>
                  <a href="tel:+18001234567" className="block">
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      Call 1-800-XXX-XXXX
                    </Button>
                  </a>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      <CTABand />
    </AppLayout>
  );
}

// ─── Breadcrumb builder ───────────────────────────────────────────────────────

function buildBreadcrumb(
  category: Category,
  slug: string,
  cityName?: string,
): { label: string; href?: string }[] {
  switch (category) {
    case 'corporate':
      return [
        { label: 'Corporate Limo', href: '/corporate' },
        { label: cityName ?? slug },
      ];
    case 'wedding':
      return [
        { label: 'Wedding', href: '/wedding' },
        { label: cityName ?? slug },
      ];
    case 'car-service':
      return [
        { label: 'Car Service', href: '/car-service' },
        { label: cityName ?? slug },
      ];
    case 'city':
      return [
        { label: 'Locations', href: '/locations' },
        { label: cityName ?? slug },
      ];
    case 'airport':
      return [
        { label: 'Airports', href: '/airports' },
        { label: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) },
      ];
    case 'page':
      return [{ label: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) }];
    default:
      return [];
  }
}
