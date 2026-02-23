// This is the layout for the contact page
export const metadata = {
  title: "Data-Driven Media Buying Services | Spok Digital",
  description:
    "Maximize your ad spend with Spok Digital’ expert media buying services in India. We strategize and optimize campaigns across digital and traditional platforms to ensure high ROI and brand growth. Get in touch today!",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function MediaBuying({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
