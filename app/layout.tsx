import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spok Digital |  India’s Premier Digital Marketing Agency",
  description:
    "Spok Digital is a top digital marketing agency in India, specializing in SEO, PPC, social media marketing, and branding. Boost your online presence with our expert solutions. Get a free consultation today!",
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
        ></link>
      </head>

      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
