"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import "../App chunks/components/textAnim.css";
import "keen-slider/keen-slider.min.css";
import SliderForm from "../App chunks/components/SliderForm";
import { ArrowUpRight } from "lucide-react";
export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = React.useState<boolean>(false);

  return (
    <>
      <main className="relative ">
        <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        <Section1 setIsFormOpen={setIsFormOpen} />
      </main>
    </>
  );
}

const Section1 = ({
  setIsFormOpen,
}: {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const tags = [
    "360 Marketing Agency",
    "Strategic Branding",
    "Campaign Management",
  ];
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const btnHandler = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };
  const [size, setSize] = useState({ width: 0, height: 0 });

  const getWindowSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  useEffect(() => {
    const handleResize = () => {
      setSize(getWindowSize());
    };

    // Set initial size
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.section className="sticky bg-black overflow-hidden top-0 h-[80vh] lg:h-screen">
      <div className="absolute opacity-[.7] top-0 left-0 h-full w-full -z-[1]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1900 1900"
          width="1900"
          height="1900"
        >
          <defs>
            <linearGradient
              gradientTransform="rotate(-0, 0.5, 0.5)"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="gggrain-gradient2"
            >
              <stop
                stopColor="hsla(0, 94%, 53%, 1.00)"
                stopOpacity="1"
                offset="-0%"
              ></stop>
              <stop
                stopColor="rgba(255,255,255,0)"
                stopOpacity="0"
                offset="100%"
              ></stop>
            </linearGradient>
            <linearGradient
              gradientTransform="rotate(0, 0.5, 0.5)"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="gggrain-gradient3"
            >
              <stop stopColor="hsl(0, 100%, 50%)" stopOpacity="1"></stop>
              <stop
                stopColor="rgba(255,255,255,0)"
                stopOpacity="0"
                offset="100%"
              ></stop>
            </linearGradient>
            <filter
              id="gggrain-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.66"
                numOctaves="2"
                seed="215"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              ></feTurbulence>
              <feColorMatrix
                type="saturate"
                values="0"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                result="colormatrix"
              ></feColorMatrix>
              <feComponentTransfer
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="colormatrix"
                result="componentTransfer"
              >
                <feFuncR type="linear" slope="3"></feFuncR>
                <feFuncG type="linear" slope="3"></feFuncG>
                <feFuncB type="linear" slope="3"></feFuncB>
              </feComponentTransfer>
              <feColorMatrix
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="componentTransfer"
                result="colormatrix2"
                type="matrix"
                values="1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 23 -15"
              ></feColorMatrix>
            </filter>
          </defs>
          <g>
            <rect width="100%" height="100%" fill="hsl(0, 100%, 50%)"></rect>
            <rect
              width="100%"
              height="100%"
              fill="url(#gggrain-gradient3)"
            ></rect>
            <rect
              width="100%"
              height="100%"
              fill="url(#gggrain-gradient2)"
            ></rect>
            <rect
              width="100%"
              height="100%"
              fill="transparent"
              filter="url(#gggrain-filter)"
              opacity="0.43"
              style={{ mixBlendMode: "overlay" }}
            ></rect>
          </g>
        </svg>
      </div>

      <div className="container relative flex flex-col items-center   justify-center  py-28 w-full h-full">
        <div className="absolute  yellowButton bottom-10  right-7 ">
          <motion.button
            onClick={btnHandler}
            initial={{ scale: 0 }}
            transition={{
              delay: 1,
              duration: 0.6,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            animate={{
              scale: isHovered ? 1.5 : 1,
              transition: { duration: 0.3, delay: 0 },
            }}
            className="size-28 relative origin-center cursor-pointer rounded-full "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.img
              animate={{ rotate: -360 }}
              transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
              src="roundShape.svg"
              className="w-full h-full"
            />
            <ArrowUpRight className="absolute pointer-events-none -rotate-180 text-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </motion.button>
        </div>

        <div className="relative">
          <div className="absolute -top-20 lg:-top-16 lg:left-20 ">
            <motion.div
              initial={{ scale: 0 }}
              transition={{
                delay: 1,
                duration: 0.3,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              animate={{
                scale: 1,
                transition: { duration: 0.6, delay: 1 },
              }}
              style={{ transformOrigin: "center" }}
              className="size-24 lg:size-28 relative rounded-full "
            >
              <svg
                width="67"
                height="68"
                viewBox="0 0 67 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.5625 39.4375L61.5625 55.4375L47.5625 67.8125L34 50.0625L19.9375 67.8125L6.5 55.4375L20.1875 39.5625L0.5 28.25L8.8125 13.3125L24.6875 21.625V0.625H42.5625V21.625L59.75 13.3125L66.9375 28.9375L46.5625 39.4375Z"
                  fill="#A4CA92"
                />
              </svg>
            </motion.div>
          </div>
          <div
            style={{
              perspective: "6144px",
              perspectiveOrigin: "bottom center",
            }}
            className="flex items-center w-full gap-3 lg:gap-6 h-[50px] lg:h-[100px] overflow-hidden"
          >
            {["Elevate", "Your", "Brand", "&"].map((text, index) => (
              <motion.div
                key={index}
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                style={{
                  textShadow: "0px 0px 2px #000000F",
                  transformStyle: "preserve-3d",
                }}
                className="textContainer text-[8.6vw] lg:text-[7rem] w-full relative leading-[6.5rem] font-Grostek  font-[700] text-red-100"
              >
                <motion.p className="primary">{text}</motion.p>

                <motion.p className="absolute  secondary  top-0 left-0">
                  {text}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className=" flex items-center gap-3 lg:gap-6 h-[50px] lg:h-[100px]  overflow-hidden">
          {["Dominate", "the", "Market"].map((text, index) => (
            <motion.div
              key={index}
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              style={{
                textShadow: "0px 0px 2px #000000F",
              }}
              className="textContainer text-[8.6vw] lg:text-[7rem] w-full relative leading-[6.5rem] font-Grostek  font-[700] text-red-100"
            >
              <motion.p className="primary">{text}</motion.p>

              <motion.p className="absolute  secondary  top-0 left-0">
                {text}
              </motion.p>
            </motion.div>
          ))}
        </div>
        <div className="flex max-w-4xl text-center text-[.7rem] lg:text-[.97rem] justify-between items-center font-[500] font-Synonym mt-2 text-red-100 ">
          <p className="">
            We’re not just another agency—we’re your growth partner. At Spok
            Digital, we blend creativity, technology, and strategy to help
            ambitious businesses build powerful brands, cutting-edge websites,
            and high-performing campaigns.
          </p>
        </div>
        <div className="mt-6">
          <button
            onClick={() => setIsFormOpen(true)}
            className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-red-100 to-red-300  font-medium text-red-950   transition-all duration-300 hover:w-[340px]"
          >
            <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
              Let&apos;s Build Something Extraordinary
            </div>
            <div className="absolute right-3.5">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </motion.section>
  );
};
