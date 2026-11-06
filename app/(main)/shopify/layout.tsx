import type { Metadata } from "next";

import { MetaPixel } from "@/app/lib/MetaPixel";

export const metadata: Metadata = {
  title: "Shopify Development Agency UAE | Store Design & Development",
  description: "Build a high-converting Shopify store with Spok Digital. Get custom Shopify development, store migration, Shopify Plus solutions and conversion-focused design in UAE.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MetaPixel pixelId="1531539528595725" />
      {children}
    </>
  );
}
