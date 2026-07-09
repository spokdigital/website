import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/ui/Smooth-Scroll-Provider";

export const metadata: Metadata = {
  title: "Spok Digital | D2C Growth & Performance Marketing Agency, UAE",
  description:
    "Spok Digital is a Dubai-based performance marketing agency helping D2C & ecommerce brands scale with high-converting websites, CRO, and Meta/TikTok/Google ads.",
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

      <body className={`antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
