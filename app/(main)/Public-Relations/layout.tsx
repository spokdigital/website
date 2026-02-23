// This is the layout for the contact page
export const metadata = {
  title: "Expert Public Relations Services in India | Spok Digital",
  description:
    " Enhance your brand’s reputation with Spok Digital’ professional public relations services. We specialize in media relations, crisis management, and brand storytelling to build trust and credibility. Let’s shape your brand’s narrative today!",
};

import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function Photography({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
