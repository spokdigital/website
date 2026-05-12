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

    ScrollSmoother.get()?.kill();
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.clearScrollMemory();

    timeout = setTimeout(() => {
      if (!wrapperRef.current || !contentRef.current) return;

      // ✅ Skip ScrollSmoother entirely on mobile
      const isMobile = window.innerWidth < 1024;
      if (isMobile) return;

      smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1,
        effects: true,
        normalizeScroll: true,
      });

      ScrollTrigger.refresh();
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
}, [mounted]);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
