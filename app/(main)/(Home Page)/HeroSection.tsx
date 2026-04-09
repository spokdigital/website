"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import FilmCarousel from "./filmcarousel";
import SliderForm from "../App chunks/components/SliderForm";
import { ArrowRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className="relative ">
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split separately
      const split1 = new SplitText(".heading-1", {
        type: "chars",
        charsClass: "char1",
      });

      const split2 = new SplitText(".heading-2", {
        type: "chars",
        charsClass: "char2",
      });

      // Initial state
      gsap.set(".char1", {
        y: -120, // 👈 from top
        z: -200,
        force3D: true,
      });

      gsap.set(".char2", {
        y: 120, // 👈 from bottom
        z: -200,

        force3D: true,
      });

      const tl = gsap.timeline();

      // FIRST LINE
      tl.to(
        ".char1",
        {
          y: 0,
          z: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.8,
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
            stagger: 0.04,
            duration: 0.8,
            ease: "power3.out",
          },
          0.7,
        ); // overlap slightly for smoothness
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className=" h-[65dvh] lg:h-screen ">
      <div className="container flex flex-col pt-24 items-center justify-center h-full">
        {/* HEADING */}
        <div
          ref={headingRef}
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
          className="flex flex-col items-center gap-2 overflow-hidden"
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
                className="heading-2 text-[8.6vw] lg:text-[7.2rem] font-Grostek font-[500] leading-none"
              >
                {text}
              </h1>
            ))}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-4xl text-center text-[.7rem] lg:text-[.97rem] font-[500] font-Synonym mt-7 ">
          <p>
            We’re not just another agency—we’re your growth partner. At Spok
            Digital, we blend creativity, technology, and strategy to help
            ambitious businesses build powerful brands, cutting-edge websites,
            and high-performing campaigns.
          </p>
        </div>

        {/* BUTTON */}
        <div className="mt-9">
          <button
            onClick={() => setIsFormOpen(true)}
            className="group relative inline-flex hover:bg-black font-Synonym items-center p-2 justify-center overflow-hidden rounded-full bg-primary font-medium text-red-50 transition-all duration-300"
          >
            <span className="pl-3">
              Let&apos;s Build Something Extraordinary
            </span>
            <span className="">
              <ArrowRight className="bg-black group-hover:bg-primary group-hover:-rotate-45 transition-all duration-200 size-9 p-1 rounded-full ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
