"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [viewportWidth, setViewPortWidth] = React.useState(0);
  React.useEffect(() => {
    if (typeof window !== undefined) {
      setViewPortWidth(window.innerWidth);
    }
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timeoutId);
  }, []);
  const stairs = 5;
  return (
    <AnimatePresence mode="wait">
      <div>
        {isLoading && (
          <div className="fixed overflow-hidden top-0 left-0 transparent z-999 w-screen h-screen">
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
                  className="bg-black w-full h-full"
                />
              ))}
            </div>
          </div>
        )}

        {children}
      </div>
    </AnimatePresence>
  );
};

export default Template;
