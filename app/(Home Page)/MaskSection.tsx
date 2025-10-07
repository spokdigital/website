"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardDistribution = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const total = cardsRef.current.length;
      const vw = window.innerWidth;
      const isMobile = vw <= 768; // breakpoint for mobile
      const cardWidth = 350;
      const leftPadding = 50;
      const rightPadding = 50;
      const availableWidth = vw - cardWidth - leftPadding - rightPadding;

      // Stack all cards in center initially
      gsap.set(cardsRef.current, {
        y: 600,
        scale: 0.9,
        x: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        rotate: 0,
      });

      // Timeline controlled by scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3500", // total scroll distance for text + cards
          scrub: 1,
          pin: true,
        },
      });

      // --- Text animation (first part of scroll) ---
      tl.to("#line1", { x: isMobile ? 100 : 300, duration: 1 }, 0);
      tl.to("#line2", { x: isMobile ? -100 : -300, duration: 1 }, 0);
      tl.to("#line3", { x: isMobile ? 100 : 300, duration: 1 }, 0);

      if (isMobile) {
        // --- Cards animation one by one ---
        cardsRef.current.forEach((card, i) => {
          tl.to(
            card,
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              rotate: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            i * 0.5 + 1 // stagger by 0.5 scroll units after text animation
          );
        });
      } else {
        // --- Desktop animation ---
        tl.to(
          cardsRef.current,
          {
            y: 0,
            x: (i) => {
              if (total === 1) return vw / 2 - cardWidth / 2;
              const step = availableWidth / (total - 1);
              return -vw / 2 + leftPadding + i * step + cardWidth / 2;
            },
            rotate: (i) => (i % 2 === 0 ? 5 : -5),
            scale: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
          1
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
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
      <h1
        className="absolute top-0 py-10 lg:py-14 left-1/2 -translate-x-1/2 text-4xl lg:text-[10rem] font-bold opacity-20 pointer-events-none select-none text-center leading-[1]"
        id="bg-text"
      >
        <span className="block !text-slate-950" id="line1">
          See Our
        </span>
        <span className="block !text-slate-50" id="line2">
          Best UGC
        </span>
        <span className="block !text-slate-950" id="line3">
          Content
        </span>
      </h1>
      {/* Full viewport container */}
      <div className="relative w-full h-screen">
        {[
          "Business Setup/Bizgrowth 4th Render-compressed.mov",
          "FandB/4.mp4",
          "FandB/12.mp4",
          "Marketing/IKEA CO WORKER V2-compressed.mov",
          "Real Estate/Ram_Podcast_Final-compressed.mov",
          "Real Estate/Salwa_Javed_Meraas_with new qr-compressed.mov",
        ].map((card, i) => (
          <div
            key={card}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="w-[370px] h-[550px] border-4 overflow-hidden border-white rounded-2xl shadow-xl  flex items-center justify-center text-2xl font-bold"
          >
            <video
              className="w-full h-full object-cover"
              muted
              loop
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            >
              <source src={`/media/PhotosVideos/${card}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardDistribution;
