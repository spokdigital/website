// app/(main)/services/influencer-marketing/layout.tsx
// Adjust PATH to this page's real URL.
import type { Metadata } from "next";

const SITE_URL = "https://www.spok.digital";
const PATH = "/services/influencer-marketing";
const URL = `${SITE_URL}${PATH}`;

const TITLE = "Influencer Marketing Agency in UAE | Spok Digital";
const DESCRIPTION =
  "Spok Digital connects your brand with the right creators in the UAE. Build awareness, reach targeted audiences and generate leads with influencer campaigns.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "influencer marketing agency UAE",
    "influencer marketing Dubai",
    "influencer agency Dubai",
    "creator campaigns UAE",
    "UGC content UAE",
    "Instagram influencer marketing Dubai",
    "TikTok influencer marketing UAE",
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
    // images: [{ url: `${SITE_URL}/og/influencer-marketing.jpg`, width: 1200, height: 630, alt: TITLE }],
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
      name: "Influencer Marketing in the UAE",
      serviceType: "Influencer Marketing",
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
          name: "Influencer Marketing",
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