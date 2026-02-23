// This is the layout for the contact page
export const metadata = {
  title: "Expert IT Consulting & Advisory Services | Spok Digital",
  description:
    "Unlock your business potential with Spok Digital' IT consulting and advisory services in India. We provide tailored solutions in technology strategy, digital transformation, and system integration to help your business thrive. Get expert advice today!",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ItConsulting({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
