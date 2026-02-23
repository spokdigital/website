// This is the layout for the contact page
export const metadata = {
  title: "High-Impact Performance Marketing Services | Spok Digital",
  description:
    " Drive measurable results with Spok Digital’ performance marketing services in India. Our expert strategies focus on PPC, paid media, and conversion optimization to boost ROI and accelerate business growth. Start seeing results today!",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function PerformanceMarketing({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
