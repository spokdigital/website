"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

const slides = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200&auto=format&fit=crop",
    label: "A SUMMIT",
    sub: "FOR A NEW META",
    tag: "Curator Summit",
    accent: "#a8d8ea",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    label: "CURATOR",
    sub: "SUMMIT",
    tag: "ETH CC · Cannes · March 31",
    accent: "#c8a97e",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    label: "YOU CREATE",
    sub: "A RIPPLE",
    tag: "Make an impact",
    accent: "#e8734a",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
    label: "NEXT",
    sub: "GENERATION",
    tag: "Web3 infrastructure",
    accent: "#9b89dc",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    label: "BUILD",
    sub: "THE FUTURE",
    tag: "Innovation · Design",
    accent: "#6ecf8e",
  },
];

const allSlides = [...slides, ...slides, ...slides];

const CARD_WIDTH =
  typeof window !== "undefined" && window.innerWidth < 768
    ? Math.round(window.innerWidth * 0.78)
    : 420;
const CARD_GAP = 20;
const CARD_TOTAL = CARD_WIDTH + CARD_GAP;
const SINGLE_SET_WIDTH = CARD_TOTAL * slides.length;
const AUTO_SPEED = 0.9;

const Graphics = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const isDecelerating = useRef(false);
  const currentX = useRef(-SINGLE_SET_WIDTH);
  const targetX = useRef(-SINGLE_SET_WIDTH);
  const rafId = useRef<number>(0);
  const velocity = useRef(0);
  const lastMouseX = useRef(0);

  // Track mounted state for portal
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    gsap.set(track, { x: currentX.current });

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const normalize = (x: number): number => {
      if (x > -SINGLE_SET_WIDTH * 0.5) return x - SINGLE_SET_WIDTH;
      if (x < -SINGLE_SET_WIDTH * 1.5) return x + SINGLE_SET_WIDTH;
      return x;
    };

    const tick = () => {
      if (isDragging.current) {
        currentX.current = targetX.current;
      } else if (isDecelerating.current) {
        currentX.current = lerp(currentX.current, targetX.current, 0.12);
        targetX.current -= AUTO_SPEED;
        currentX.current -= AUTO_SPEED;
        if (Math.abs(currentX.current - targetX.current) < 0.3) {
          isDecelerating.current = false;
          targetX.current = currentX.current;
        }
      } else {
        currentX.current -= AUTO_SPEED;
        targetX.current = currentX.current;
      }

      currentX.current = normalize(currentX.current);
      targetX.current = normalize(targetX.current);

      gsap.set(track, { x: currentX.current });
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      isDecelerating.current = false;
      lastMouseX.current = e.clientX;
      velocity.current = 0;
      document.body.style.cursor = "grabbing";
    };

    const onMouseMove = (e: MouseEvent) => {
      // ── KEY FIX ──────────────────────────────────────────────────────────────
      // Use e.clientX / e.clientY — these are always relative to the VIEWPORT,
      // unaffected by ScrollSmoother's translateY on the page wrapper.
      // The cursor lives in a portal directly on <body>, outside the smoothed
      // container, so viewport coordinates are exactly what we need.
      // ─────────────────────────────────────────────────────────────────────────
      if (cursorRef.current) {
        gsap.set(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
        });
      }

      if (!isDragging.current) return;
      const delta = e.clientX - lastMouseX.current;
      velocity.current = delta;
      lastMouseX.current = e.clientX;
      targetX.current += delta;
      currentX.current += delta;
    };

    const onMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      document.body.style.cursor = "";
      targetX.current += velocity.current * 6;
      isDecelerating.current = true;

      // Hide cursor if mouse is outside the slider track
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.25 });
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      isDragging.current = true;
      isDecelerating.current = false;
      lastMouseX.current = e.touches[0].clientX;
      velocity.current = 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const delta = e.touches[0].clientX - lastMouseX.current;
      velocity.current = delta;
      lastMouseX.current = e.touches[0].clientX;
      targetX.current += delta;
      currentX.current += delta;
    };

    const onTouchEnd = () => {
      isDragging.current = false;
      targetX.current += velocity.current * 6;
      isDecelerating.current = true;
    };

    track.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove", onTouchMove, { passive: true });
    track.addEventListener("touchend", onTouchEnd);

    gsap.fromTo(
      Array.from(track.children).slice(slides.length, slides.length * 2),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.09,
        ease: "expo.out",
        delay: 0.1,
      },
    );

    return () => {
      cancelAnimationFrame(rafId.current);
      track.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const showCursor = () => {
    if (cursorRef.current)
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(2)",
      });
  };

  const hideCursor = () => {
    isDragging.current = false;
    isDecelerating.current = false;
    document.body.style.cursor = "";
    if (cursorRef.current)
      gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.25 });
  };

  const cursorEl = (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] flex items-center justify-center rounded-full bg-white"
      style={{
        width: 88,
        height: 88,
        top: 0,
        left: 0,
        transform: "translate(-50%, -50%) scale(0)",
        opacity: 0,
        mixBlendMode: "difference",
        willChange: "transform",
      }}
    >
      <span
        className="text-black font-bold uppercase tracking-widest"
        style={{ fontFamily: "monospace", fontSize: 9 }}
      >
        DRAG →
      </span>
    </div>
  );

  return (
    <div className="relative mt-5 lg:mt-10 mb-10 w-full overflow-hidden select-none">
      {/* Portal cursor — lives on <body>, zero scroll-smoother influence */}
      {mounted && createPortal(cursorEl, document.body)}

      {/* Header */}
      <div className="flex items-end justify-between px-6 mb-8">
        <div>
          <p className="text-[10px] tracking-[0.3em] font-Grostek uppercase text-neutral-400 mb-2">
            Selected Works
          </p>
          <h2 className="text-4xl  md:text-6xl font-[500] font-Cormorant leading-none tracking-tight text-neutral-900">
            Featured{" "}
            <span className="text-neutral-300 font-Grostek">Projects</span>
          </h2>
        </div>
        <div className="hidden md:flex flex-col items-end gap-1">
          <span
            className="text-[10px] tracking-[0.25em] uppercase text-neutral-400"
            style={{ fontFamily: "monospace" }}
          >
            {slides.length} projects · ∞ loop
          </span>
          <div className="w-14 h-px bg-neutral-200 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-neutral-800"
              style={{ animation: "shimmer 1.6s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>

      {/* Slider */}
      <div
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={showCursor}
        onMouseLeave={hideCursor}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{
            gap: CARD_GAP,
            paddingLeft: 24,
            paddingRight: 24,
            willChange: "transform",
          }}
        >
          {allSlides.map((slide, idx) => (
            <div
              key={`${slide.id}-${idx}`}
              className="relative will-change-transform flex-shrink-0 overflow-hidden rounded-sm bg-neutral-900 group"
              style={{ width: CARD_WIDTH, height: 460 }}
            >
              <Image
                fill
                alt={slide.label}
                src={slide.src}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ opacity: 0.72 }}
                draggable={false}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.04) 55%)",
                }}
              />
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                <div
                  className="px-3 py-1 rounded-sm border border-white/20 backdrop-blur-md"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <span
                    className="text-white/90 uppercase tracking-[0.18em]"
                    style={{ fontFamily: "monospace", fontSize: 9 }}
                  >
                    {slide.tag}
                  </span>
                </div>
                <span
                  className="text-white/30 tabular-nums"
                  style={{ fontFamily: "monospace", fontSize: 11 }}
                >
                  {String((idx % slides.length) + 1).padStart(2, "0")}/
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute bottom-7 left-6 right-6">
                <div
                  className="mb-4 h-0.5 w-8 rounded-full"
                  style={{ background: slide.accent }}
                />
                <p
                  className="text-white leading-none"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.55rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    lineHeight: 0.93,
                  }}
                >
                  {slide.label}
                  <br />
                  <span style={{ color: slide.accent }}>{slide.sub}</span>
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <span
                    className="text-white/30 uppercase tracking-widest"
                    style={{ fontFamily: "monospace", fontSize: 9 }}
                  >
                    View →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 px-6 mt-5">
        <span
          className="text-neutral-400 uppercase tracking-[0.22em]"
          style={{ fontFamily: "monospace", fontSize: 10 }}
        >
          Drag or scroll
        </span>
        <div className="relative w-16 h-px overflow-hidden bg-neutral-200">
          <div
            className="absolute inset-0 bg-neutral-800"
            style={{ animation: "shimmer 1.6s ease-in-out infinite" }}
          />
        </div>
        <span className="text-neutral-400 text-xs">→</span>
        <span
          className="ml-auto text-neutral-300 text-xs"
          style={{ fontFamily: "monospace" }}
        >
          ∞
        </span>
      </div>
    </div>
  );
};

export default Graphics;
