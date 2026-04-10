// components/ui/SmoothScrollWrapper.tsx
"use client";
import { usePathname } from "next/navigation";
import SmoothScrollProvider from "@/components/ui/Smooth-Scroll-Provider";
import NavBar from "../(main)/App chunks/components/Navbar";
export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SmoothScrollProvider key={pathname}>
      <NavBar />
      {children}
    </SmoothScrollProvider>
  );
}
