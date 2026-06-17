import NavBar from "../(main)/App chunks/components/Navbar";
import { Suspense } from "react";
import { PixelPageView } from "../lib/pageView";
import { MetaPixel } from "../lib/MetaPixel";
export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MetaPixel pixelId="962057525363783" />
      <Suspense fallback={null}>
        <PixelPageView />
      </Suspense>
      <NavBar />
      {children}
    </>
  );
}
