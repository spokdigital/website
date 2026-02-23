// This is the layout for the contact page
export const metadata = {
  title: "Contact Us| Get in Touch with Our Expert Team",
  description:
    "Reach out to Spok Digital for digital marketing, app development, branding, and more. Our team is ready to help your business grow. Contact us today for a free consultation or any inquiries!",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
