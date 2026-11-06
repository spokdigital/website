// app/(main)/Portfolio/layout.tsx
// PATH must match the real URL exactly, including capital "P" (URLs are case-sensitive).
import type { Metadata } from "next";

const SITE_URL = "https://www.spok.digital";
const PATH = "/Portfolio";
const URL = `${SITE_URL}${PATH}`;

const TITLE = "Digital Marketing & Web Development Portfolio | Spok Digital";
const DESCRIPTION =
  "Explore Spok Digital's portfolio of website development, SEO, social media and D2C growth projects that deliver measurable results for brands.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "digital marketing portfolio UAE",
    "web development portfolio Dubai",
    "marketing agency case studies Dubai",
    "D2C growth case studies",
    "Spok Digital portfolio",
  ],
  alternates: { canonical: URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Spok Digital",
    type: "website",
    locale: "en_AE",
    // Add an image (1200x630) here, or drop an opengraph-image.jpg
    // file next to this layout and Next will wire it up automatically.
    // images: [{ url: `${SITE_URL}/og/portfolio.jpg`, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// Escape "<" so the JSON can never close the script tag
const jsonLd = (data: object) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${URL}#webpage`,
      name: TITLE,
      description: DESCRIPTION,
      url: URL,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-AE",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: URL },
      ],
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      {children}
    </>
  );
}