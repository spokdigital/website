// This is the layout for the contact page
export const metadata = {
  title: "Strategic Content Marketing Services | Spok Digital",
  description:
    "Spok Digital offers expert content marketing services in India, creating high-quality blogs, articles, and copy that engage audiences and boost SEO. Drive traffic and conversions with our tailored content strategies!",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContentMarketing({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
