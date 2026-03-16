import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Limo4All Transportation';
const SITE_URL = 'https://www.limo4all.ca';
const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  schemas?: (object | null)[];
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  schemas = [],
}: SEOHeadProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const fullCanonical = canonical.startsWith('http')
    ? canonical
    : `${SITE_URL}${canonical}`;

  const validSchemas = schemas.filter(Boolean) as object[];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {validSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
