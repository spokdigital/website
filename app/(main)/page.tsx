"use client";
import HeroSection from "./(Home Page)/HeroSection";
import Testimonials from "./(Home Page)/Testimonials";
import { TextMarquee } from "./(Home Page)/Text-Marquee";
import Blogs from "../components/Blogs";
import { AnimatePresence, motion } from "framer-motion";
import { MarqueeLogo } from "./App chunks/components/MarqueeLogo";
import Service from "./(Home Page)/Service";
import Portfolio from "./(Home Page)/Portfolio";
import VideoCarousel from "./(Home Page)/videoCarousel";
import Whatwedobest from "./(Home Page)/whatwedobest";
import Services2 from "./(Home Page)/service2";
import FAQSection from "./(Home Page)/FAQ";
export default function Home() {
  return (
    <AnimatePresence mode="wait">
      D
      <motion.div
        exit={{
          scaleX: 0.2,
          scaleY: 0.05,
          borderRadius: "99px",
          y: -500,
        }}
        transition={{
          duration: 1,
          ease: [0.33, 0.88, 0.25, 0.91],
          delay: 0.2,
        }}
      >
        <HeroSection />
        <Service />
        <TextMarquee />
        <Portfolio />
        <VideoCarousel />
        <Testimonials />
        <Whatwedobest />
        <Blogs />
        <MarqueeLogo />
        <FAQSection />
      </motion.div>
    </AnimatePresence>
  );
}
