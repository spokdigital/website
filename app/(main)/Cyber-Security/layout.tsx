// This is the layout for the contact page
export const metadata = {
  title: "Trusted Cyber Security Services | Spok Digital",
  description:
    " Protect your business with Spok Digital' top-notch cyber security services. We offer comprehensive solutions including risk assessment, threat prevention, and data protection to safeguard your digital assets. Secure your business today!",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function CyberSecurity({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
