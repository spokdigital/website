"use client";
import { useRef, useEffect, useState, useMemo, useId, FC } from "react";

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
}

const CurvedLoop: FC<CurvedLoopProps> = ({
  marqueeText = "",
  speed = 1,
  className,
  curveAmount = 400,
  direction = "left",
  interactive = true,
}) => {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (
      (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0"
    );
  }, [marqueeText]);

  const measureRef = useRef<SVGTextElement | null>(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);
  const [spacing, setSpacing] = useState(0);
  const uid = useId();
  const pathId = `curve-${uid}`;
  const intensity = curveAmount * 0.5;

  const pathD = `M-100,40 Q300,${40 + intensity} 700,40 Q1100,${40 - intensity} 1540,40`;

  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const spacingRef = useRef(0);
  
  const isDraggingRef = useRef(false);
  const lastXRef = useRef(0);
  const dragVelRef = useRef(0);

  // Target velocity — what we're interpolating toward
  const targetVelRef = useRef(0);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
  }, []);

  const BASE_DIR = direction === "left" ? -1 : 1;
  const FRICTION = 0.9;
  // How quickly current velocity chases target velocity (0 = instant, 1 = never)
  const LERP = 0.12;

  const totalText = spacing
    ? Array(Math.ceil(1800 / spacing) + 2)
        .fill(text)
        .join("")
    : text;
  const ready = spacing > 0;

  useEffect(() => {
    if (measureRef.current) {
      const s = measureRef.current.getComputedTextLength();
      setSpacing(s);
      spacingRef.current = s;
      offsetRef.current = -s;
    }
  }, [text, className]);

  const startLoop = () => {
    if (rafRef.current !== null) return;

    const tick = () => {
      // Lerp current velocity toward target for smooth direction transitions
      velocityRef.current +=
        (targetVelRef.current - velocityRef.current) * LERP;

      // Decay target velocity (friction on the "intention")
      targetVelRef.current *= FRICTION;

      offsetRef.current += velocityRef.current;

      const wrap = spacingRef.current;
      if (offsetRef.current <= -wrap) offsetRef.current += wrap;
      if (offsetRef.current > 0) offsetRef.current -= wrap;

      if (textPathRef.current) {
        textPathRef.current.setAttribute(
          "startOffset",
          offsetRef.current.toFixed(2) + "px",
        );
      }

      const settled =
        Math.abs(velocityRef.current) < 0.01 &&
        Math.abs(targetVelRef.current) < 0.01;

      if (settled) {
        rafRef.current = null;
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (!spacing) return;

    const handleScroll = () => {
      const dy = window.scrollY - lastScrollYRef.current;
      lastScrollYRef.current = window.scrollY;

      if (dy === 0) return;

      // Scroll direction maps to marquee direction:
      // scrolling down → natural direction, scrolling up → reverse
      const scrollDir = dy > 0 ? BASE_DIR : -BASE_DIR;
      targetVelRef.current = scrollDir * Math.abs(dy) * speed * 0.5;

      startLoop();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [spacing, speed, BASE_DIR]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!interactive) return;
    isDraggingRef.current = true;
    lastXRef.current = e.clientX;
    dragVelRef.current = 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!interactive || !isDraggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    dragVelRef.current = dragVelRef.current * 0.7 + -dx * 0.3;
    targetVelRef.current = -dx * 0.6;
    startLoop();
  };

  const endDrag = () => {
    if (!interactive || !isDraggingRef.current) return;
    isDraggingRef.current = false;
    // Hand smoothed drag velocity to target so it decays naturally
    targetVelRef.current = dragVelRef.current;
    startLoop();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{
        visibility: ready ? "visible" : "hidden",
        cursor: interactive ? "grab" : "auto",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg
        className="select-none w-full overflow-visible block aspect-[100/12] text-[6rem] font-bold uppercase leading-none"
        viewBox="0 0 1440 120"
      >
        <text
          ref={measureRef}
          xmlSpace="preserve"
          style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
        >
          {text}
        </text>
        <defs>
          <path id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>
        {ready && (
          <text xmlSpace="preserve" className={`fill-white ${className ?? ""}`}>
            <textPath
              ref={textPathRef}
              href={`#${pathId}`}
              startOffset={offsetRef.current + "px"}
              xmlSpace="preserve"
            >
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
