// app/(main)/seo-services/page.tsx
import type { Metadata } from "next";
import SeoLanding from "./seo-services";

const SITE_URL = "https://www.spok.digital";
const PATH = "/seo-services";
const URL = `${SITE_URL}${PATH}`;

const TITLE = "SEO Services in Dubai & UAE | Rank Higher, Get More Leads";
const DESCRIPTION =
  "Spok Digital delivers SEO services in Dubai and the UAE: technical SEO, content, local SEO and link building that turn Google rankings into inbound leads. Get a free SEO audit.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Spok Digital",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const FAQS = [
  {
    q: "How long does SEO take to show results?",
    a: "Most sites see early movement in 2 to 3 months, with meaningful gains in traffic and leads between months 4 and 6. Timelines depend on your competition, your site’s history, and how much needs fixing at the start.",
  },
  {
    q: "Do you offer Arabic and English SEO?",
    a: "Yes. We optimise bilingual sites for the UAE market, including Arabic keyword research, localised content, and correct hreflang setup so each audience finds the right version of your site.",
  },
  {
    q: "How much do SEO services cost in Dubai?",
    a: "It depends on the size of your site, your market, and the scope of work. We scope every project after a free audit, so you get a clear plan and a fixed monthly price before you commit.",
  },
  {
    q: "Do you guarantee first-page rankings?",
    a: "No. Anyone who guarantees specific rankings is either misleading you or using tactics that risk a Google penalty. We commit to a clear plan, transparent reporting, and agreed targets for traffic and leads.",
  },
  {
    q: "Will I be locked into a long contract?",
    a: "No. Our SEO retainers run month to month after an initial setup period, so we earn your business every month.",
  },
  {
    q: "What do I get in the free SEO audit?",
    a: "A review of your technical health, current rankings, content gaps, and top competitors, with a prioritised list of the fixes that would move the needle most.",
  },
];

// Escape "<" so the JSON can never close the script tag
const jsonLd = (data: object) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

export default function SeoServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${URL}#service`,
        name: "SEO Services in Dubai",
        serviceType: "Search Engine Optimization",
        description: DESCRIPTION,
        url: URL,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Place", name: "Dubai" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${URL}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "SEO Services", item: URL },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      <SeoLanding faqs={FAQS} />
    </>
  );
}