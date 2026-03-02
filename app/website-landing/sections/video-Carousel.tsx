"use client";

import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    tag: "Product",
    title: "Explore the all-new Apple Store experience.",
    image: "/landing/videos/Ai-Property-SHow.mp4",
    wide: false,
  },
  {
    tag: "Product",
    title: "Launching the new Apple Vision Pro.",
    image: "/landing/videos/Qumber-Ad.mp4",
    wide: false,
  },
  {
    tag: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    image: "/landing/videos/rahil-bizgrowth-package.mp4",
    wide: false,
  },
  {
    tag: "Product",
    title: "Introducing the new MacBook Pro M3.",
    image: "/landing/videos/Galena-Amaal-Russian-Draft.mp4",
    wide: false,
  },
  {
    tag: "Product",
    title: "Introducing the new MacBook Pro M3.",
    image: "/landing/videos/Business-in-Dubai.mp4",
    wide: false,
  },
  {
    tag: "Product",
    title: "Introducing the new MacBook Pro M3.",
    image: "/landing/videos/Azizi-Milan-Arabic.mp4",
    wide: false,
  },
  {
    tag: "Product",
    title: "Introducing the new MacBook Pro M3.",
    image: "/landing/videos/Binghatti-Flare-Walkthrough.mp4",
    wide: false,
  },
];

function VideoCard({ slide }: { slide: (typeof slides)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <div
      className="group relative h-[520px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="object-cover grayscale group-hover:grayscale-0 w-full h-full"
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={slide.image} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent" />

      {/* Play indicator — fades out on hover */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0 pointer-events-none">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white translate-x-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ProductCarousel() {
  return (
    <section className="pt-12">
      <div className="w-[93%] mx-auto">
        <h1 className="text-gray-900 text-5xl lg:text-6xl capitalize !font-Cormorant md:text-6xl font-[400] mb-7 leading-tight">
          Our <span className="text-primary"> Best Creative</span>
          <br /> Backed by Results
        </h1>

        <div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {slides.map((slide, i) => (
                <CarouselItem
                  key={i}
                  className={`pl-4 min-w-0 ${slide.wide ? "basis-[45%]" : "basis-[86%] lg:basis-[26%]"}`}
                >
                  <VideoCard slide={slide} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-end gap-3 mt-8">
              <CarouselPrevious className="static translate-y-0 w-11 h-11 rounded-full bg-white border border-gray-200 text-black shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-200 [&_svg]:w-4 [&_svg]:h-4" />
              <CarouselNext className="static translate-y-0 w-11 h-11 rounded-full bg-white border border-gray-200 text-black shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-200 [&_svg]:w-4 [&_svg]:h-4" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
