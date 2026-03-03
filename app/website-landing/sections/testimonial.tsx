"use client";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const VIDEOS = [
  {
    src: "/landing/testimonial/menlocloud.mp4",
    poster:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=70",
    name: "Chirag",
    role: "Co-Founder, MenloCloud",
    quote: "Transformed how we source globally.",
  },
];

function VideoCard({
  src,
  poster,
  name,
  role,
  quote,
  index,
}: {
  src: string;
  poster: string;
  name: string;
  role: string;
  quote: string;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleEnter = useCallback(() => {
    videoRef.current?.play();
    setPlaying(true);
  }, []);

  const handleLeave = useCallback(() => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
    setPlaying(false);
  }, []);

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative h-[370px] lg:h-[480px] rounded-2xl overflow-hidden cursor-pointer bg-[#0e0e0e]"
    >
      <video
        ref={videoRef}
        playsInline
        preload="metadata"
        className={`w-full h-full object-cover block transition-[transform,filter] duration-500 ease-in-out ${
          playing
            ? "scale-[1.04] brightness-[0.55]"
            : "scale-100 brightness-[0.7] saturate-80"
        }`}
      >
        <source src={src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

      <div className="absolute top-[18px] left-5 text-[11px] text-white/35 tracking-[0.15em]">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/60 flex items-center justify-center transition-[transform,opacity] duration-300 ease-in-out ${
          playing ? "scale-0 opacity-0" : "scale-100 opacity-70"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
          <path d="M5 3l10 5-10 5V3z" />
        </svg>
      </div>

      <div
        className={`absolute left-0 right-0 px-6 text-center transition-[opacity,transform] duration-[400ms] ease-in-out ${
          playing
            ? "opacity-100 -translate-y-1/2 top-1/2 delay-100"
            : "opacity-0 top-1/2 -translate-y-[40%]"
        }`}
      >
        <p className="font-[Cormorant,Georgia,serif] text-[22px] italic font-light text-white/95 leading-snug">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-5 pb-[22px] pt-5">
        <div
          className={`h-px bg-red-300 mb-2.5 transition-[width] duration-[400ms] ease-in-out ${
            playing ? "w-10" : "w-5"
          }`}
        />
        <p className="font-[Cormorant,Georgia,serif] text-[17px] font-semibold text-white tracking-[0.01em] mb-0.5">
          {name}
        </p>
        <p className="text-[10px] text-white/45 tracking-[0.12em] uppercase">
          {role}
        </p>
      </div>
    </div>
  );
}

export default function Testimonial() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  const progressPercent = count > 1 ? (current / (count - 1)) * 100 : 0;
  return (
    <section className="relative bg-[#0a0a0a] pt-1 pb-20 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,600;0,700;1,400;1,600&display=swap');
        .testimonial-nav {
          width: 48px !important;
          height: 48px !important;
          border-radius: 50% !important;
          background: transparent !important;
          border: 1px solid rgba(255,255,255,0.25) !important;
          color: rgba(255,255,255,0.8) !important;
          transition: border-color 0.2s, background 0.2s !important;
          position: static !important;
          transform: none !important;
        }
        .testimonial-nav:hover {
          border-color: #fca5a5 !important;
          background: rgba(252,165,165,0.08) !important;
        }
        .testimonial-nav:disabled {
          opacity: 0.25 !important;
          cursor: default !important;
        }
        .testimonial-nav svg { width: 16px; height: 16px; }
      `}</style>

      {/* Top accent line */}

      {/* Header */}
      <div className="w-[93%] mx-auto mb-12">
        <div>
          <p className="text-[10px] text-center tracking-[0.3em] uppercase text-red-500 mb-3">
            Client Stories
          </p>
          <h2 className="text-6xl font-Cormorant text-center font-light text-[#FEFCF8] leading-[0.95] tracking-tighter">
            What They <em className=" italic text-primary">Say About Us</em>
          </h2>
        </div>
      </div>

      {/* Carousel — loop:false so progress has clear start/end */}
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: false, dragFree: true }}
        className="w-full"
      >
        <CarouselContent className="ml-0 pl-10 gap-4">
          {VIDEOS.map((v, i) => (
            <CarouselItem
              key={i}
              className="pl-0 basis-[clamp(240px,25vw,300px)] shrink-0"
            >
              <VideoCard {...v} index={i} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="px-6 sm:px-10 mt-8 flex items-center gap-6">
        {/* Prev / Next buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={scrollPrev}
            disabled={current === 0}
            aria-label="Previous project"
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center
              text-white/40 bg-primary/60 transition-all duration-200
              hover:border-white/30 hover:text-white/80
              disabled:bg-white/10 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={scrollNext}
            disabled={current === count - 1}
            aria-label="Next project"
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center
              text-white/70 transition-all duration-200
              hover:border-white/30 bg-primary/60 hover:text-white/80
              disabled:bg-white/10 disabled:cursor-not-allowed"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="flex-1 h-px bg-white/[0.08] relative overflow-hidden rounded-full">
          <div
            className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Counter */}
        <span className="font-mono text-[11px] tracking-[0.15em] text-white/25 shrink-0 tabular-nums">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(count).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
