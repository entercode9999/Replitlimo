import type { FAQ } from './faq-parser';

const SITE_URL = 'https://www.limo4all.ca';
const BUSINESS_NAME = 'Limo4All Transportation';
const PHONE = '+18001234567';

// ─── LimousineService / LocalBusiness ─────────────────────────────────────────

export function buildServiceSchema(opts: {
  title: string;
  description: string;
  cityName?: string;
  pageUrl: string;
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'LimousineService'],
    name: BUSINESS_NAME,
    description: opts.description || opts.title,
    url: opts.pageUrl,
    telephone: PHONE,
    priceRange: '$$',
    serviceType: opts.title,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    openingHours: 'Mo-Su 00:00-24:00',
    sameAs: [SITE_URL],
  };

  if (opts.cityName) {
    schema.areaServed = { '@type': 'City', name: opts.cityName };
  } else {
    schema.areaServed = { '@type': 'State', name: 'Ontario' };
  }

  return schema;
}

// ─── FAQPage ──────────────────────────────────────────────────────────────────

export function buildFAQSchema(faqs: FAQ[]): object | null {
  if (faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

// ─── BreadcrumbList ───────────────────────────────────────────────────────────

export function buildBreadcrumbSchema(
  breadcrumbs: { label: string; href?: string }[],
): object {
  const all = [{ label: 'Home', href: '/' }, ...breadcrumbs];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
}
