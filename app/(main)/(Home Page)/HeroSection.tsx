"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import FilmCarousel from "./filmcarousel";
import SliderForm from "../App chunks/components/SliderForm";
import { ArrowRight } from "lucide-react";
import { Star } from "lucide-react";

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className="relative">
      <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <Section1 setIsFormOpen={setIsFormOpen} />
      <FilmCarousel />
    </main>
  );
}

const Section1 = ({
  setIsFormOpen,
}: {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const headingRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split1 = new SplitText(".heading-1", {
        type: "chars",
        charsClass: "char1",
      });

      const split2 = new SplitText(".heading-2", {
        type: "chars",
        charsClass: "char2",
      });

      gsap.set(".char1", {
        y: -120,
        z: -200,
        force3D: true,
      });

      gsap.set(".char2", {
        y: 120,
        z: -200,
        force3D: true,
      });

      gsap.set(descRef.current, { opacity: 0, y: 30 });
      gsap.set(btnRef.current, { opacity: 0, y: 20, scale: 0.95 });

      // 👇 IMPORTANT: hide bg initially
      gsap.set(".market-bg", { scaleX: 0, transformOrigin: "left" });

      const tl = gsap.timeline();

      tl.to(
        ".char1",
        {
          y: 0,
          z: 0,
          opacity: 1,
          stagger: 0.032,
          duration: 0.9,
          ease: "power3.out",
        },
        0.7,
      )
        .to(
          ".char2",
          {
            y: 0,
            z: 0,
            opacity: 1,
            stagger: 0.032,
            duration: 0.9,
            ease: "power3.out",
          },
          0.7,
        )

        // DESCRIPTION
        .to(
          descRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          1.4,
        )

        // BUTTON
        .to(
          btnRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
          },
          1.65,
        )

        // 🔥 MARKET BG ANIMATION (AFTER EVERYTHING)
        .to(
          ".market-bg",
          {
            scaleX: 1,
            duration: 0.7,
            ease: "power4.out",
          },
          "+=0.2",
        ); // slight delay after text
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="h-[65dvh] lg:h-auto">
      <div className="container flex flex-col pt-16 lg:pt-36 items-center justify-center h-full">
        <div className="inline-flex items-center mb-4 gap-3 rounded-full border border-black/10 backdrop-blur-md px-5 py-2.5 shadow-md">
          {/* Stars */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <p className="font-Grostek text-sm text-gray-700 font-[500] whitespace-nowrap">
            Rating on
          </p>
          {/* Logo */}
          <img
            src="/landing/clutch-logo.png"
            className="w-10 lg:w-14 object-contain opacity-90"
            alt="Clutch"
          />
        </div>
        <div
          ref={headingRef}
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
          className="flex flex-col items-center overflow-hidden"
        >
          {/* LINE 1 */}
          <div className="flex gap-3 lg:gap-6 overflow-hidden">
            {["Elevate", "Your", "Brand", "&"].map((text, i) => (
              <h1
                key={i}
                className="heading-1 text-[8.6vw] lg:text-[7.2rem] font-Grostek font-[500] leading-none"
              >
                {text}
              </h1>
            ))}
          </div>

          {/* LINE 2 */}
          <div className="flex gap-3 lg:gap-6 overflow-hidden">
            {["Dominate", "the", "Market"].map((text, i) => (
              <h1
                key={i}
                className="heading-2 text-[8.6vw] lg:text-[7.2rem] tracking-tighter font-Grostek font-[500] leading-none"
              >
                {text === "Market" ? (
                  <span className="relative inline-block px-3">
                    {/* TEXT */}
                    <span className="relative z-10 text-red-50">Market</span>

                    {/* 🔥 ANIMATED BG */}
                    <span className="market-bg absolute inset-0 bg-primary rounded-3xl origin-left will-change-transform"></span>
                  </span>
                ) : (
                  text
                )}
              </h1>
            ))}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div
          ref={descRef}
          className="max-w-4xl text-center text-[.7rem] lg:text-[.97rem] font-[500] font-Synonym mt-7"
        >
          <p>
            We’re not just another agency—we’re your growth partner. At Spok
            Digital, we blend creativity, technology, and strategy to help
            ambitious businesses build powerful brands, cutting-edge websites,
            and high-performing campaigns.
          </p>
        </div>

        {/* BUTTON */}
        <div ref={btnRef} className="mt-9">
          <button
            onClick={() => setIsFormOpen(true)}
            className="group relative text-sm inline-flex hover:bg-primary font-Synonym items-center p-2 justify-center overflow-hidden rounded-full bg-black font-medium text-red-50 transition-all duration-300"
          >
            <span className="pl-3">
              Let&apos;s Build Something Extraordinary
            </span>
            <ArrowRight className="bg-primary group-hover:bg-black group-hover:-rotate-45 transition-all duration-200 size-9 p-1 rounded-full ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
};
