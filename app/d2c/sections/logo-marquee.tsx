"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { TweenMax } from "gsap";
import Image from "next/image";

const LOGOS = [
  { src: "/landing/logos/meta.jpg", alt: "Meta" },
  { src: "/landing/logos/google.png", alt: "Google" },
  { src: "/landing/logos/Instagram.png", alt: "Instagram" },
  { src: "/landing/logos/ads.png", alt: "Google Ads" },
  { src: "/landing/logos/shopify.png", alt: "Shopify" },
  { src: "/landing/logos/tiktok.avif", alt: "TikTok" },
  { src: "/landing/logos/analytics.webp", alt: "Analytics" },
];

// Duplicate logos for seamless loop
const ITEMS = [...LOGOS, ...LOGOS];

export default function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Wait for layout so scrollWidth is accurate
    const init = () => {
      const totalWidth = track.scrollWidth / 2; // half = one set of logos

      tweenRef.current = gsap.to(track, {
        x: -totalWidth,
        duration: 18,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    };

    // Small delay to ensure images have painted and scrollWidth is correct
    const raf = requestAnimationFrame(init);

    return () => {
      cancelAnimationFrame(raf);
      tweenRef.current?.kill();
    };
  }, []);

  const pause = () => tweenRef.current?.pause();
  const resume = () => tweenRef.current?.play();

  return (
    <div
      className="relative block lg:hidden w-full mt-6  overflow-hidden "
      // Fade edges
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      {/* Track — contains 2× logo sets for seamless loop */}
      <div
        ref={trackRef}
        className="flex items-center gap-10 w-max will-change-transform"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        {ITEMS.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-14 h-14 rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={56}
              height={56}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
