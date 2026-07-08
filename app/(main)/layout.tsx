import NavBar from "./App chunks/components/Navbar";
import ToTop from "./App chunks/components/ToTop";
import Footer from "./App chunks/components/Footer";
import Template from "../Template";
import Loading from "./App chunks/components/Loader";
import { MetaPixel } from "../lib/MetaPixel";
import { PixelPageView } from "../lib/pageView";
import { Suspense } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MetaPixel pixelId="1531539528595725" />
      <Suspense fallback={null}>
        <PixelPageView />
      </Suspense>
      <Loading />
      <div className="w-full relative">
        <NavBar />
      </div>
      <ToTop />
      <Template>{children}</Template>
      <Footer />
    </>
  );
}
