// This is the layout for the contact page
export const metadata = {
  title: " Custom App Development Services | Spok Digital",
  description:
    "Spok Digital offers top-notch app development services in India, specializing in Android, iOS, and cross-platform solutions. Build high-performance, user-friendly apps customized to your business needs. Get a free consultation today!",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
