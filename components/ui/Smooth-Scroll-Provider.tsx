"use client";

import { useLayoutEffect, useRef, useState } from "react";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Wait for hydration before doing anything GSAP-related
  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;

    let smoother: any;
    let timeout: ReturnType<typeof setTimeout>;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollSmoother } = await import("gsap/ScrollSmoother");

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      // Kill any existing instance
      ScrollSmoother.get()?.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ScrollTrigger.clearScrollMemory();

      timeout = setTimeout(() => {
        // Double-check refs are still alive after the timeout
        if (!wrapperRef.current || !contentRef.current) return;

        smoother = ScrollSmoother.create({
          wrapper: wrapperRef.current,
          content: contentRef.current,
          smooth: 0.5,
          effects: true,
          normalizeScroll: true,
        });
      }, 50);
    };

    init();

    return () => {
      clearTimeout(timeout);
      smoother?.kill();
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        ScrollTrigger.clearScrollMemory();
      });
    };
  }, [mounted]); // only runs once mounted is true

  // Render children immediately so there's no layout flash,
  // but GSAP won't touch the DOM until after hydration
  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
