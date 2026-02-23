"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { Cormorant_Garamond, DM_Mono } from "next/font/google";

// ── VIDEO DATA ──
const VIDEOS = [
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=70",
    name: "Sarah Mitchell",
    role: "CEO, Nexora Group",
    quote: "Transformed how we source globally.",
  },
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=70",
    name: "James Okafor",
    role: "Procurement Lead, Veritas",
    quote: "Reliable, fast, and exceptional quality.",
  },
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=70",
    name: "Priya Sharma",
    role: "Director, Solis Industries",
    quote: "The partner we always needed.",
  },
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=70",
    name: "Luca Ferrara",
    role: "COO, Meridian Co.",
    quote: "Products that truly perform.",
  },
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=70",
    name: "Amara Diallo",
    role: "Head of Ops, Lumis",
    quote: "Honest, transparent, excellent.",
  },
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=70",
    name: "David Chen",
    role: "Founder, Apex Supply",
    quote: "Multi-category done right.",
  },
];

// ── HOVER VIDEO CARD ──
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
      className="relative h-[370px] lg:h-[480px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 bg-[#0e0e0e]"
    >
      {/* Video */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        poster={poster}
        className={[
          "w-full h-full object-cover block transition-[transform,filter] duration-500 ease-in-out",
          playing
            ? "scale-[1.04] brightness-[0.55]"
            : "scale-100 brightness-[0.7] saturate-80",
        ].join(" ")}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

      {/* Index number */}
      <div
        className={` absolute top-[18px] left-5 text-[11px] text-white/35 tracking-[0.15em]`}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Play indicator */}
      <div
        className={[
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          "w-12 h-12 rounded-full border border-white/60",
          "flex items-center justify-center",
          "transition-[transform,opacity] duration-300 ease-in-out",
          playing ? "scale-0 opacity-0" : "scale-100 opacity-70",
        ].join(" ")}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
          <path d="M5 3l10 5-10 5V3z" />
        </svg>
      </div>

      {/* Quote — appears on hover */}
      <div
        className={[
          "absolute left-0 right-0 px-6 text-center",
          "transition-[opacity,transform] duration-[400ms] ease-in-out",
          playing
            ? "opacity-100 -translate-y-1/2 top-1/2 delay-100"
            : "opacity-0 top-1/2 -translate-y-[40%]",
        ].join(" ")}
      >
        <p
          className={` text-[22px] italic font-light text-white/95 leading-snug`}
        >
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-[22px] pt-5">
        {/* Gold rule */}
        <div
          className={[
            "h-px bg-[#C9A84C] mb-2.5 transition-[width] duration-[400ms] ease-in-out",
            playing ? "w-10" : "w-5",
          ].join(" ")}
        />
        <p
          className={`font-Cormorant text-[17px] font-semibold text-white tracking-[0.01em] mb-0.5`}
        >
          {name}
        </p>
        <p className={` text-[10px] text-white/45 tracking-[0.12em] uppercase`}>
          {role}
        </p>
      </div>
    </div>
  );
}

// ── NAV BUTTON ──
function NavButton({
  onClick,
  disabled,
  direction,
}: {
  onClick: () => void;
  disabled: boolean;
  direction: "prev" | "next";
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        "w-12 h-12 rounded-full flex items-center justify-center",
        "transition-[border-color,background,opacity] duration-300 ease-in-out",
        "border",
        disabled
          ? "border-white/10 cursor-default opacity-30"
          : hovered
            ? "border-[#C9A84C] bg-[#C9A84C]/12 cursor-pointer"
            : "border-white/25 cursor-pointer",
      ].join(" ")}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke={hovered && !disabled ? "#C9A84C" : "rgba(255,255,255,0.8)"}
        strokeWidth="1.5"
        className="transition-colors duration-300"
      >
        {direction === "prev" ? (
          <path
            d="M10 3L5 8l5 5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

// ── PROGRESS BAR ──
function ProgressBar({
  trackRef,
  total,
}: {
  trackRef: React.RefObject<HTMLDivElement>;
  total: number;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    el.addEventListener("scroll", update, { passive: true });
    update();
    return () => el.removeEventListener("scroll", update);
  }, [trackRef]);

  return (
    <div className="max-w-[1400px] mx-auto mt-8 px-10 flex items-center gap-4">
      <div className="flex-1 h-px bg-white/[0.08] rounded-sm overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#C9A84C] to-[#E8D08A] rounded-sm transition-[width] duration-100 linear"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <span className="font-mono text-[10px] text-white/25 tracking-[0.1em] whitespace-nowrap">
        {total} stories
      </span>
    </div>
  );
}

// ── MAIN COMPONENT ──
export default function Testimonial() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const SCROLL_AMT = 320;

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateButtons, { passive: true });
    updateButtons();
    return () => el.removeEventListener("scroll", updateButtons);
  }, [updateButtons]);

  const scrollPrev = () =>
    trackRef.current?.scrollBy({ left: -SCROLL_AMT, behavior: "smooth" });
  const scrollNext = () =>
    trackRef.current?.scrollBy({ left: SCROLL_AMT, behavior: "smooth" });

  return (
    <section className="relative bg-[#0a0a0a] pt-24 pb-20 overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      {/* ── HEADER ROW ── */}
      <div className="max-w-[1400px] mx-auto px-10 flex items-end justify-between mb-12">
        {/* Title */}
        <div>
          <p
            className={` text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-3`}
          >
            Client Stories
          </p>
          <h2
            className={`font-Grostek tracking-tighter text-6xl font-light text-[#FEFCF8] leading-[0.95]`}
          >
            What They
            <br />
            <em className="italic font-Cormorant text-[#C9A84C]">
              Say About Us
            </em>
          </h2>
        </div>

        {/* Nav buttons */}
        <div className="hidden lg:flex gap-2.5 pb-1.5">
          <NavButton
            onClick={scrollPrev}
            disabled={!canPrev}
            direction="prev"
          />
          <NavButton
            onClick={scrollNext}
            disabled={!canNext}
            direction="next"
          />
        </div>
      </div>

      {/* ── CAROUSEL TRACK ── */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-10 pb-1 [scroll-snap-type:x_mandatory] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {VIDEOS.map((v, i) => (
          <div
            key={i}
            className="[scroll-snap-align:start] flex-shrink-0 w-[clamp(240px,25vw,300px)]"
          >
            <VideoCard {...v} index={i} />
          </div>
        ))}
      </div>

      {/* ── PROGRESS BAR ── */}
      <div className="flex justify-end lg:hidden gap-2.5 pr-2 pb-1.5">
        <NavButton onClick={scrollPrev} disabled={!canPrev} direction="prev" />
        <NavButton onClick={scrollNext} disabled={!canNext} direction="next" />
      </div>
      <ProgressBar trackRef={trackRef} total={VIDEOS.length} />
    </section>
  );
}
