"use client";
import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowElbowLeftUp } from "@phosphor-icons/react";

const ToTop = () => {
  const [isBtnShown, setIsBtnShown] = useState<boolean>(false);
  const { scrollYProgress } = useScroll(); // This will track the scroll progress

  // Use useMotionValueEvent to observe changes in scrollYProgress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Show button if scroll progress exceeds 100vh (1.0 or 100%)
    if (latest > 0.1) {
      // Adjust this threshold based on your needs
      setIsBtnShown(true);
    } else {
      setIsBtnShown(false);
    }
  });

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll effect
      });
    }
  };
  

  return (
    <AnimatePresence>
      {isBtnShown && (
        <motion.button
          className="px-4 fixed z-[9999999999999] text-white mix-blend-difference hover:mix-blend-normal group w-40 h-10 font-Satoshi right-10 bottom-10 overflow-hidden py-2 bg-white/20 backdrop-filter backdrop-blur-lg rounded-full"
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="flex justify-center group-hover:-top-full transition-all duration-300 top-0  items-center w-full h-full gap-2 absolute left-1/2 -translate-x-1/2 ">
            <ArrowElbowLeftUp /> Back to Top
          </p>
          <p className="flex items-center justify-center w-full h-full rounded-full scale-[.8] group-hover:scale-[1] text-black transition-all duration-300 gap-2 absolute group-hover:top-0 top-full bg-lime-300 left-1/2 -translate-x-1/2 ">
            <ArrowElbowLeftUp /> Back to Top
          </p>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ToTop;
