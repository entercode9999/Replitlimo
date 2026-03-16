/**
 * Content registry — loads all markdown files via Vite's import.meta.glob
 * and provides lookup functions by URL slug.
 *
 * City slugs match the limo4all content naming convention:
 *   toronto, mississauga, vaughan, oakville, markham, hamilton, london,
 *   niagara-falls, waterloo-kitchener, richmond-hill, brampton, aurora,
 *   king-city, burlington, milton, guelph
 */

// ─── Raw glob imports (eager = bundled at build time) ─────────────────────────
// Using `as: 'raw'` returns Record<path, string> directly.

const cityRaw = import.meta.glob('../content/airport-limo/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const corporateRaw = import.meta.glob('../content/corporate-car-service/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const weddingRaw = import.meta.glob('../content/wedding/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const carServiceRaw = import.meta.glob('../content/car-service/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const airportsRaw = import.meta.glob('../content/local-airports/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const hubRaw = import.meta.glob('../content/hub/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const pagesRaw = import.meta.glob('../content/pages/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

// ─── City slug → file number mapping ─────────────────────────────────────────

const CITY_NUM: Record<string, string> = {
  toronto: '01',
  mississauga: '02',
  vaughan: '03',
  oakville: '04',
  markham: '05',
  hamilton: '06',
  london: '07',
  'niagara-falls': '08',
  'waterloo-kitchener': '09',
  'richmond-hill': '10',
  brampton: '11',
  aurora: '12',
  'king-city': '13',
  burlington: '14',
  milton: '15',
  guelph: '16',
};

export const CITY_SLUGS = Object.keys(CITY_NUM);

// ─── Lookup functions ─────────────────────────────────────────────────────────

export function getCityContent(slug: string): string | null {
  const num = CITY_NUM[slug];
  if (!num) return null;
  return cityRaw[`../content/airport-limo/${num}-${slug}.md`] ?? null;
}

export function getCorporateContent(slug: string): string | null {
  const num = CITY_NUM[slug];
  if (!num) return null;
  return corporateRaw[`../content/corporate-car-service/corporate-${num}-${slug}.md`] ?? null;
}

export function getWeddingContent(slug: string): string | null {
  return weddingRaw[`../content/wedding/wedding-limo-${slug}.md`] ?? null;
}

export function getCarServiceContent(slug: string): string | null {
  return carServiceRaw[`../content/car-service/car-service-${slug}.md`] ?? null;
}

// Airport slugs: toronto-pearson, billy-bishop, hamilton, buffalo
export function getAirportContent(slug: string): string | null {
  return airportsRaw[`../content/local-airports/airport-${slug}.md`] ?? null;
}

export function getHubContent(slug: string): string | null {
  return hubRaw[`../content/hub/hub-${slug}.md`] ?? null;
}

export function getPageContent(slug: string): string | null {
  return pagesRaw[`../content/pages/${slug}.md`] ?? null;
}

// ─── Utility: extract H1 title from markdown ─────────────────────────────────

export function extractTitle(markdown: string): string {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

// ─── Utility: extract first non-heading paragraph as subtitle ─────────────────

export function extractSubtitle(markdown: string): string {
  const lines = markdown.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed &&
      !trimmed.startsWith('#') &&
      !trimmed.startsWith('*') &&
      !trimmed.startsWith('-') &&
      trimmed.length > 40
    ) {
      return trimmed.length > 180 ? trimmed.slice(0, 177) + '…' : trimmed;
    }
  }
  return '';
}

// ─── City display names ───────────────────────────────────────────────────────

export const CITY_NAMES: Record<string, string> = {
  toronto: 'Toronto',
  mississauga: 'Mississauga',
  vaughan: 'Vaughan',
  oakville: 'Oakville',
  markham: 'Markham',
  hamilton: 'Hamilton',
  london: 'London',
  'niagara-falls': 'Niagara Falls',
  'waterloo-kitchener': 'Waterloo-Kitchener',
  'richmond-hill': 'Richmond Hill',
  brampton: 'Brampton',
  aurora: 'Aurora',
  'king-city': 'King City',
  burlington: 'Burlington',
  milton: 'Milton',
  guelph: 'Guelph',
};

export const AIRPORT_NAMES: Record<string, string> = {
  'toronto-pearson': 'Toronto Pearson International (YYZ)',
  'billy-bishop': 'Billy Bishop Toronto City Airport (YTZ)',
  hamilton: 'John C. Munro Hamilton International (YHM)',
  buffalo: 'Buffalo Niagara International (BUF)',
};
