"use client";
import { useLayoutEffect } from "react";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 0.5,
      effects: true,
      normalizeScroll: true,
    });

    return () => smoother.kill();
  }, []);

  return (
    <div ref={wrapperRef}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
