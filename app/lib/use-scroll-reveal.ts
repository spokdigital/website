"use client";

// lib/use-scroll-reveal.ts
import { useEffect } from "react";
import { gsap } from "gsap";

/**
 * Reveals `.reveal-up` elements and the children of `.reveal-stagger`
 * when they enter the viewport.
 *
 * Uses IntersectionObserver instead of ScrollTrigger. The browser reports
 * where elements actually are on screen, so it keeps working with smooth
 * scrollers, late-loading fonts or images, and client-side navigation, with
 * no position measuring to go stale. GSAP only does the animation.
 */
export function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-up, .reveal-stagger"),
    );
    if (!nodes.length) return;

    const isGroup = (el: HTMLElement) => el.classList.contains("reveal-stagger");
    const itemsOf = (el: HTMLElement): Element[] =>
      isGroup(el) ? Array.from(el.children) : [el];
    const allItems = nodes.flatMap(itemsOf);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return; // stay visible

    // Hide now; reveal when seen
    nodes.forEach((el) =>
      gsap.set(itemsOf(el), { opacity: 0, y: isGroup(el) ? 40 : 50 }),
    );

    const done = new WeakSet<Element>();
    const reveal = (el: HTMLElement) => {
      if (done.has(el)) return;
      done.add(el);
      gsap.to(itemsOf(el), {
        opacity: 1,
        y: 0,
        duration: isGroup(el) ? 0.6 : 0.75,
        stagger: isGroup(el) ? 0.13 : 0,
        ease: "power3.out",
        // hand control back to CSS (hover transforms etc.) when finished
        clearProps: "opacity,transform",
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target as HTMLElement);
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
    nodes.forEach((el) => io.observe(el));

    // Safety net: anything on screen after 3s must not stay hidden
    const safety = setTimeout(() => {
      nodes.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) reveal(el);
      });
    }, 3000);

    return () => {
      clearTimeout(safety);
      io.disconnect();
      gsap.killTweensOf(allItems);
      gsap.set(allItems, { clearProps: "opacity,transform" });
    };
  }, []);
}