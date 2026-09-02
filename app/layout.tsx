import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/ui/Smooth-Scroll-Provider";

export const metadata: Metadata = {
  title: "Spok Digital | D2C Growth & Performance Marketing Agency, UAE",
  description:
    "Spok Digital is a Dubai-based performance marketing agency helping D2C & ecommerce brands scale with high-converting websites, CRO, and Meta/TikTok/Google ads.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.spok.digital/#organization",
      name: "Spok Digital",
      url: "https://www.spok.digital/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.spok.digital/spok-balck.png",
      },
      description:
        "Spok Digital is a UAE-based digital marketing and growth agency helping brands grow through branding, website development, content creation, SEO, social media marketing, performance marketing and D2C growth strategies.",
      telephone: "+971507121707",
      email: "info@spok.digital",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1701, Churchill Towers, Business Bay",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "United Arab Emirates",
        },
        {
          "@type": "Place",
          name: "Dubai",
        },
      ],
      knowsAbout: [
        "Digital Marketing",
        "Performance Marketing",
        "Search Engine Optimization",
        "Social Media Marketing",
        "Pay-Per-Click Advertising",
        "D2C Marketing",
        "E-commerce Marketing",
        "Website Development",
        "Branding",
        "Content Creation",
        "Conversion Rate Optimization",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://www.spok.digital/#website",
      url: "https://www.spok.digital/",
      name: "Spok Digital",
      description: "Digital marketing and growth agency in Dubai, UAE.",
      publisher: {
        "@id": "https://www.spok.digital/#organization",
      },
      inLanguage: "en-AE",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.spok.digital/#webpage",
      url: "https://www.spok.digital/",
      name: "Spok Digital | D2C Growth & Performance Marketing Agency, UAE",
      isPartOf: {
        "@id": "https://www.spok.digital/#website",
      },
      about: {
        "@id": "https://www.spok.digital/#organization",
      },
      publisher: {
        "@id": "https://www.spok.digital/#organization",
      },
      description:
        "Spok Digital is a UAE-based digital marketing and growth agency specializing in branding, website development, content creation, SEO, social media marketing, performance marketing and D2C growth.",
      inLanguage: "en-AE",
    },

    {
      "@type": "Service",
      "@id": "https://www.spok.digital/#digital-marketing",
      name: "Digital Marketing Services",
      provider: {
        "@id": "https://www.spok.digital/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      serviceType: [
        "SEO",
        "Social Media Marketing",
        "Performance Marketing",
        "PPC Advertising",
        "Email Marketing",
        "Conversion Rate Optimization",
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.spok.digital/#website-development",
      name: "Website Development",
      provider: {
        "@id": "https://www.spok.digital/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      serviceType: [
        "Corporate Website Development",
        "E-commerce Website Development",
        "Landing Page Development",
        "Web Application Development",
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.spok.digital/#branding",
      name: "Branding Services",
      provider: {
        "@id": "https://www.spok.digital/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      serviceType: [
        "Brand Identity",
        "Brand Strategy",
        "Brand Guidelines",
        "UI/UX Design",
        "Photography and Videography",
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.spok.digital/#content-creation",
      name: "Content Creation",
      provider: {
        "@id": "https://www.spok.digital/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      serviceType: [
        "Brand Videos",
        "Product Photography",
        "Social Media Content",
        "Motion Graphics",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&f[]=synonym@200,300,400,500,600,700&f[]=spline-sans@300,400,500,600,700&f[]=cabinet-grotesk@100,200,300,400,500,700,800,900&f[]Cormorant:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        />

        <meta name="google-site-verification" content="5dSsgcQ3f--1m2q2DXclpLqLZ7xaHJy_pM-WG1lWAMU" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className="antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
