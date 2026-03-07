"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const OrbitingLogos = () => {
  const orbit1 = useRef<HTMLDivElement>(null);
  const orbit2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbit1.current || !orbit2.current) return;

    gsap.to(orbit1.current, {
      rotation: 360,
      transformOrigin: "center center",
      repeat: -1,
      duration: 20,
      ease: "linear",
    });

    gsap.to(orbit2.current, {
      rotation: -360,
      transformOrigin: "center center",
      repeat: -1,
      duration: 30,
      ease: "linear",
    });

    // keep inner icons upright
    gsap.to(".icon1", {
      rotation: -360,
      repeat: -1,
      duration: 20,
      ease: "linear",
      transformOrigin: "center center",
    });

    // keep outer icons upright
    gsap.to(".icon2", {
      rotation: 360,
      repeat: -1,
      duration: 30,
      ease: "linear",
      transformOrigin: "center center",
    });
  }, []);

  return (
    <div className="relative w-[420px]   h-[350px] flex items-center justify-center">
      {/* Inner Circle */}
      <div className="absolute w-[200px] h-[200px] border border-gray-300 rounded-full"></div>

      {/* Outer Circle */}
      <div className="absolute w-[380px] h-[380px] border border-gray-300 rounded-full"></div>

      {/* Inner Orbit */}
      <div ref={orbit1} className="absolute w-[200px] h-[200px]">
        <div className="icon1 absolute -top-4 left-1/2 -translate-x-1/2">
          <Image src="/landing/logos/meta.jpg" alt="" width={36} height={36} />
        </div>

        <div className="icon1 absolute bottom-0 left-0">
          <Image src="/landing/logos/ads.png" alt="" width={36} height={36} />
        </div>

        <div className="icon1 absolute bottom-0 right-0">
          <Image
            src="/landing/logos/google.png"
            alt=""
            width={36}
            height={36}
          />
        </div>
      </div>

      {/* Outer Orbit */}
      <div ref={orbit2} className="absolute w-[380px] h-[380px]">
        <div className="icon2 absolute -top-4 left-1/2 -translate-x-1/2">
          <Image
            src="/landing/logos/tiktok.avif"
            alt=""
            width={40}
            height={40}
          />
        </div>

        <div className="icon2 absolute left-0 top-1/2 -translate-y-1/2">
          <Image
            src="/landing/logos/instagram.png"
            alt=""
            width={40}
            height={40}
          />
        </div>

        <div className="icon2 absolute right-0 top-1/2 -translate-y-1/2">
          <Image
            src="/landing/logos/shopify.png"
            alt=""
            width={40}
            height={40}
          />
        </div>

        <div className="icon2 absolute bottom-0 left-1/2 -translate-x-1/2">
          <Image
            src="/landing/logos/analytics.webp"
            alt=""
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default OrbitingLogos;
