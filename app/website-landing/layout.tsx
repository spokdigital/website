// components/ui/SmoothScrollWrapper.tsx
"use client";

import NavBar from "../(main)/App chunks/components/Navbar";
export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
 

  return (
    < >
      <NavBar />
      {children}
    </ >
  );
}
