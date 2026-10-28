import type { Metadata } from "next";

import { MetaPixel } from "@/app/lib/MetaPixel";

export const metadata: Metadata = {
  title: "Spok Digital — The Best Shopify Developers | Build, Design & Scale Your Store",
  description: "Spok Digital is UAE's top Shopify development agency. We build, design, and scale Shopify stores for 800+ brands. Custom themes, migrations, B2B, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MetaPixel pixelId="1531539528595725" />
      {children}
    </>
  );
}
