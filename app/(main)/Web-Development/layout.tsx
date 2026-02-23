// This is the layout for the contact page
export const metadata = {
  title: "Expert Web Development Services | Spok Digital",
  description:
    "nterzens provides top-tier web development services in India, crafting responsive, SEO-friendly, and high-performance websites. From custom designs to eCommerce solutions, we build websites that drive success. Get started today!",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
