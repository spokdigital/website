"use client";

import { useLayoutEffect, useRef } from "react";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let smoother: any;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      const ScrollSmoother = (await import("gsap/ScrollSmoother")).default;

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      // 🔥 VERY IMPORTANT: kill existing instance
      const existing = ScrollSmoother.get();
      if (existing) {
        existing.kill();
      }

      if (!wrapperRef.current || !contentRef.current) return;

      smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 0.5,
        effects: true,
        normalizeScroll: true,
      });
    };

    init();

    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
