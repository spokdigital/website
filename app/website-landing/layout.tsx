// components/ui/SmoothScrollWrapper.tsx
"use client";
import { usePathname } from "next/navigation";
import SmoothScrollProvider from "@/components/ui/Smooth-Scroll-Provider";

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return <SmoothScrollProvider key={pathname}>{children}</SmoothScrollProvider>;
}
