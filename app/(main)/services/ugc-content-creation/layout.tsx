// app/(main)/services/ugc-content-creation/layout.tsx
// Adjust PATH to this page's real URL.
import type { Metadata } from "next";

const SITE_URL = "https://www.spok.digital";
const PATH = "/services/ugc-content-creation";
const URL = `${SITE_URL}${PATH}`;

const TITLE = "UGC Content Creation Agency UAE | Spok Digital";
const DESCRIPTION =
  "Create authentic, high-performing UGC videos with Spok Digital. We produce user-generated content in the UAE that builds trust and drives conversions.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "UGC content creation UAE",
    "UGC agency Dubai",
    "UGC videos Dubai",
    "user generated content agency UAE",
    "UGC ads Dubai",
    "UGC creators UAE",
    "Spok Digital",
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
    // images: [{ url: `${SITE_URL}/og/ugc-content-creation.jpg`, width: 1200, height: 630, alt: TITLE }],
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
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "UGC Content Creation in the UAE",
      serviceType: "UGC Content Creation",
      description: DESCRIPTION,
      url: URL,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Place", name: "Dubai" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "UGC Content Creation",
          item: URL,
        },
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