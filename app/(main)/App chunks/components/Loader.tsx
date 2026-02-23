"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { Suspense, useEffect } from "react";

const Loading = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Loader />
    </Suspense>
  );
};

export default Loading;

const Loader = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [viewportWidth, setViewPortWidth] = React.useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    if (typeof window !== "undefined") {
      setViewPortWidth(window.innerWidth);

      const handleLoad = () => {
        // small delay to smoothen transition
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      };

      // if page is already cached & loaded
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
      }
    }
  }, [pathname]);
  const stairs = 5;
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <div className="fixed overflow-hidden top-0 left-0 transparent z-[999] w-screen h-screen">
          <div className="w-full h-full grid grid-row-5 lg:grid-rows-1 lg:grid-cols-5">
            {[...Array(stairs)].map((_, index) => (
              <motion.div
                animate={{
                  x: viewportWidth > 450 ? 0 : "100%",
                  y: viewportWidth > 450 ? "-100%" : "0%",
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                key={index}
                className="bg-black will-change-transform w-full h-full"
              />
            ))}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
