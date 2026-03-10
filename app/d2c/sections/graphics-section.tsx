"use client";

import Image from "next/image";
import React, { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
const slides = [
  {
    id: 1,
    src: "/landing/d2c/ads/img-1.png",
    label: "A SUMMIT",
    sub: "FOR A NEW META",
    tag: "Curator Summit",
    accent: "#a8d8ea",
  },
  {
    id: 2,
    src: "/landing/d2c/ads/img-2.png",
    label: "CURATOR",
    sub: "SUMMIT",
    tag: "ETH CC · Cannes · March 31",
    accent: "#c8a97e",
  },
  {
    id: 3,
    src: "/landing/d2c/ads/img-3.png",
    label: "YOU CREATE",
    sub: "A RIPPLE",
    tag: "Make an impact",
    accent: "#e8734a",
  },
  {
    id: 4,
    src: "/landing/d2c/ads/img-4.png",
    label: "NEXT",
    sub: "GENERATION",
    tag: "Web3 infrastructure",
    accent: "#9b89dc",
  },
  {
    id: 5,
    src: "/landing/d2c/ads/img-5.png",
    label: "NEXT",
    sub: "GENERATION",
    tag: "Web3 infrastructure",
    accent: "#9b89dc",
  },
  {
    id: 6,
    src: "/landing/d2c/ads/img-6.png",
    label: "A SUMMIT",
    sub: "FOR A NEW META",
    tag: "Curator Summit",
    accent: "#a8d8ea",
  },
  {
    id: 7,
    src: "/landing/d2c/ads/img-1.png",
    label: "A SUMMIT",
    sub: "FOR A NEW META",
    tag: "Curator Summit",
    accent: "#a8d8ea",
  },
  {
    id: 8,
    src: "/landing/d2c/ads/img-2.png",
    label: "CURATOR",
    sub: "SUMMIT",
    tag: "ETH CC · Cannes · March 31",
    accent: "#c8a97e",
  },
  {
    id: 9,
    src: "/landing/d2c/ads/img-3.png",
    label: "YOU CREATE",
    sub: "A RIPPLE",
    tag: "Make an impact",
    accent: "#e8734a",
  },
  {
    id: 10,
    src: "/landing/d2c/ads/img-4.png",
    label: "NEXT",
    sub: "GENERATION",
    tag: "Web3 infrastructure",
    accent: "#9b89dc",
  },
  {
    id: 11,
    src: "/landing/d2c/ads/img-5.png",
    label: "NEXT",
    sub: "GENERATION",
    tag: "Web3 infrastructure",
    accent: "#9b89dc",
  },
  {
    id: 12,
    src: "/landing/d2c/ads/img-6.png",
    label: "A SUMMIT",
    sub: "FOR A NEW META",
    tag: "Curator Summit",
    accent: "#a8d8ea",
  },
];

const allSlides = [...slides, ...slides, ...slides];

const CARD_WIDTH =
  typeof window !== "undefined" && window.innerWidth < 768
    ? Math.round(window.innerWidth * 1.4)
    : 340;
const CARD_GAP = 20;
const CARD_TOTAL = CARD_WIDTH + CARD_GAP;
const SINGLE_SET_WIDTH = CARD_TOTAL * slides.length;
const AUTO_SPEED = 0.9;

const Graphics = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const sliderWrapRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorVisible = useRef(false);

  const isDragging = useRef(false);
  const isDecelerating = useRef(false);
  const currentX = useRef(-SINGLE_SET_WIDTH);
  const targetX = useRef(-SINGLE_SET_WIDTH);
  const rafId = useRef<number>(0);
  const velocity = useRef(0);
  const lastMouseX = useRef(0);

  const [mounted, setMounted] = React.useState(false);
  useEffect(() => setMounted(true), []);

  const hideCursorFn = useCallback(() => {
    if (!cursorVisible.current) return;
    cursorVisible.current = false;
    isDragging.current = false;
    isDecelerating.current = false;
    document.body.style.cursor = "";
    if (cursorRef.current) {
      gsap.killTweensOf(cursorRef.current);
      gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.2 });
    }
  }, []);

  const showCursorFn = useCallback(() => {
    if (cursorVisible.current) return;
    cursorVisible.current = true;
    if (cursorRef.current) {
      gsap.killTweensOf(cursorRef.current);
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(2)",
      });
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const sliderWrap = sliderWrapRef.current;
    if (!track || !sliderWrap) return;

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
      if (cursorRef.current) {
        gsap.set(cursorRef.current, { x: e.clientX, y: e.clientY });
      }

      // ── BOUNDS CHECK: hide cursor if pointer drifted outside the slider ──
      // This catches the fast-scroll case where mouseleave never fires.
      if (cursorVisible.current && !isDragging.current) {
        const rect = sliderWrap.getBoundingClientRect();
        const outside =
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom;
        if (outside) {
          hideCursorFn();
          return;
        }
      }

      if (!isDragging.current) return;
      const delta = e.clientX - lastMouseX.current;
      velocity.current = delta;
      lastMouseX.current = e.clientX;
      targetX.current += delta;
      currentX.current += delta;
    };

    const onMouseUp = (e: MouseEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      document.body.style.cursor = "";
      targetX.current += velocity.current * 6;
      isDecelerating.current = true;

      // Only hide cursor if the mouse was released outside the slider bounds.
      // If still inside, keep it visible so the user can keep dragging.
      const rect = sliderWrap.getBoundingClientRect();
      const outside =
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom;
      if (outside) hideCursorFn();
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

    // ── KEY FIX: hide cursor on any scroll (fast or slow) ──────────────────
    // When the user scrolls rapidly, the mouse never "moves" over the element,
    // so mouseleave / mousemove don't fire. Listening on scroll (capture phase,
    // so it catches scrolls inside nested scrollable elements too) and on the
    // window blur event covers all remaining edge-cases.
    const onScroll = () => hideCursorFn();
    const onBlur = () => hideCursorFn();
    const onVisibilityChange = () => {
      if (document.hidden) hideCursorFn();
    };

    track.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true,
    });
    window.addEventListener("blur", onBlur);
    document.addEventListener("visibilitychange", onVisibilityChange);
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
      window.removeEventListener("scroll", onScroll, {
        capture: true,
      } as EventListenerOptions);
      window.removeEventListener("blur", onBlur);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", onTouchEnd);
    };
  }, [hideCursorFn]);

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
      {mounted && createPortal(cursorEl, document.body)}

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-5xl md:text-6xl font-Cormorant text-center leading-none tracking-tight text-neutral-900">
          <span className="text-primary">Real</span> Numbers,{" "}
          <span className="text-primary">Real</span> Returns
        </h2>
      </div>

      {/* Slider — ref attached here for bounds detection */}
      <div
        ref={sliderWrapRef}
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={showCursorFn}
        onMouseLeave={hideCursorFn}
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
              style={{ width: CARD_WIDTH, height: 500 }}
            >
              <Image
                fill
                alt={slide.label}
                src={slide.src}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ opacity: 0.72 }}
                draggable={false}
              />
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
