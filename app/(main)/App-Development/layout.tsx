
import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
