// This is the layout for the contact page
export const metadata = {
  title: "Our Team | Spok Digital - 360-Degree Marketing Experts ",
  description:
    " Discover Spok Digital, a top digital marketing agency in India, specializing in SEO, PPC, social media, and branding. Learn about our mission, expertise, and commitment to driving business growth.",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
