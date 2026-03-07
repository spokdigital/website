"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const ICONS = [
  {
    src: "/landing/logos/meta.jpg",
    alt: "Meta",
    size: 72,
    x: "70%",
    y: "6%",
    rotate: -6,
  },

  {
    src: "/landing/logos/instagram.png",
    alt: "Instagram",
    size: 64,
    x: "85%",
    y: "76%",
    rotate: -3,
  },
  {
    src: "/landing/logos/ads.png",
    alt: "Google Ads",
    size: 54,
    x: "55%",
    y: "50%",
    rotate: 5,
  },
  {
    src: "/landing/logos/shopify.png",
    alt: "Shopify",
    size: 72,
    x: "40%",
    y: "0%",
    rotate: -5,
  },
  {
    src: "/landing/logos/tiktok.avif",
    alt: "TikTok",
    size: 66,
    x: "92%",
    y: "40%",
    rotate: 3,
  },
  {
    src: "/landing/logos/analytics.webp",
    alt: "Analytics",
    size: 56,
    x: "25%",
    y: "80%",
    rotate: 6,
  },
  {
    src: "/landing/logos/google.png",
    alt: "Google 2",
    size: 64,
    x: "20%",
    y: "25%",
    rotate: -4,
  },
];

export default function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(refs.current, {
        opacity: 0,
        scale: 0,
        duration: 0.7,
        ease: "back.out(2)",
        stagger: 0.08,
      });

      refs.current.forEach((el, i) => {
        gsap.to(el, {
          y: "+=14",
          duration: 2.5 + i * 0.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative hidden lg:block flex-1 w-full h-[300px]"
    >
      {ICONS.map((icon, i) => (
        <div
          key={icon.alt}
          ref={(el) => {
            if (el) refs.current[i] = el;
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden bg-white"
          style={{
            left: icon.x,
            top: icon.y,
            width: icon.size,
            height: icon.size,
            transform: `translate(-50%, -50%) rotate(${icon.rotate}deg)`,
            boxShadow:
              "0 12px 30px rgba(0,0,0,0.12), 0 3px 8px rgba(0,0,0,0.06)",
          }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={icon.size}
            height={icon.size}
            className="object-contain p-2"
            priority
          />
        </div>
      ))}
    </div>
  );
}
