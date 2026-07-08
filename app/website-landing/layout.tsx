import { Suspense } from "react";
import { PixelPageView } from "../lib/pageView";
import { MetaPixel } from "../lib/MetaPixel";
import NavBar from "../(main)/App chunks/components/Navbar";
export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MetaPixel pixelId="1531539528595725" />
      <Suspense fallback={null}>
        <PixelPageView />
      </Suspense>
      <NavBar />
      {children}
    </>
  );
}
