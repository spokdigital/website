// This is the layout for the contact page


import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function Branding({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
