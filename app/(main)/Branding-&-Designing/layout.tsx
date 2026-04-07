// This is the layout for the contact page
export const metadata = {
  title: "Creative Branding and Designing Services | Spok Digital",
  description:
    " Elevate your brand with Spok Digital’ expert branding and design services. From logo creation to complete brand identity, we craft visually compelling designs that resonate with your audience and enhance brand recognition. Start your branding journey today!",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function Branding({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
