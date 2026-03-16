/**
 * SSG Prerender Script
 *
 * Run after `pnpm build` and `pnpm build:ssr`:
 *   pnpm prerender   (uses tsx to run this file directly)
 *
 * For each known route:
 *   1. Calls render(url) from the SSR bundle
 *   2. Replaces <!--app-head--> with Helmet output (title/meta/JSON-LD)
 *   3. Replaces <!--app-html--> with the server-rendered body HTML
 *   4. Writes dist/public/[route]/index.html
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

// ─── All known static routes ──────────────────────────────────────────────────

const CITY_SLUGS = [
  'toronto', 'mississauga', 'vaughan', 'oakville', 'markham', 'hamilton',
  'london', 'niagara-falls', 'waterloo-kitchener', 'richmond-hill', 'brampton',
  'aurora', 'king-city', 'burlington', 'milton', 'guelph',
];

const AIRPORT_SLUGS = ['toronto-pearson', 'billy-bishop', 'hamilton', 'buffalo'];

const STATIC_ROUTES = [
  '/',
  '/booking',
  '/quote',
  '/airport',
  '/corporate',
  '/wedding',
  '/car-service',
  '/events',
  '/hourly',
  '/tours',
  '/fleet',
  '/contact',
  '/locations',
  '/airports',
  '/about',
  '/faq',
  '/privacy',
  '/terms',
  '/why-choose-us',
];

function getAllRoutes(): string[] {
  const routes: string[] = [...STATIC_ROUTES];

  for (const city of CITY_SLUGS) {
    routes.push(`/locations/${city}`);
    routes.push(`/corporate/${city}`);
    routes.push(`/wedding/${city}`);
    routes.push(`/car-service/${city}`);
  }

  for (const airport of AIRPORT_SLUGS) {
    routes.push(`/airports/${airport}`);
  }

  return routes;
}

// ─── Prerender ────────────────────────────────────────────────────────────────

async function prerender() {
  const distPublic = resolve(root, 'dist/public');
  const distServer = resolve(root, 'dist/server');

  // Load the SSR bundle (built by vite build --ssr)
  const serverEntry = resolve(distServer, 'entry-server.js');
  const { render } = await import(serverEntry);

  // Read the client HTML shell
  const template = readFileSync(resolve(distPublic, 'index.html'), 'utf-8');

  const routes = getAllRoutes();
  console.log(`\n🔄 Prerendering ${routes.length} routes...\n`);

  let success = 0;
  let errors = 0;

  for (const url of routes) {
    try {
      const { html, helmet } = await render(url);

      // Build head content from Helmet
      const headTags = [
        helmet?.title?.toString() ?? '',
        helmet?.meta?.toString() ?? '',
        helmet?.link?.toString() ?? '',
        helmet?.script?.toString() ?? '',
      ].join('\n  ');

      const finalHtml = template
        .replace('<!--app-head-->', headTags)
        .replace('<!--app-html-->', html);

      // Write to dist/public/[path]/index.html
      const urlPath = url === '/' ? '' : url.replace(/^\//, '');
      const outDir = resolve(distPublic, urlPath);
      mkdirSync(outDir, { recursive: true });
      writeFileSync(resolve(outDir, 'index.html'), finalHtml);

      console.log(`  ✅ ${url}`);
      success++;
    } catch (err) {
      console.error(`  ❌ ${url}:`, (err as Error).message);
      errors++;
    }
  }

  console.log(`\n✅ ${success} pages rendered`);
  if (errors > 0) console.log(`❌ ${errors} pages failed`);
  console.log();
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
