"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);


export default function StatsBar() {
  const root = useRef<HTMLDListElement>(null);



  return (
    <dl
      ref={root}
      className="grid grid-cols-2 overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 sm:grid-cols-4"
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="stat-item cursor-default border-primary/20 px-5 py-5 text-center
            [&:nth-child(even)]:border-l [&:nth-child(n+3)]:border-t
            sm:[&:nth-child(n+3)]:border-t-0 sm:[&:not(:first-child)]:border-l"
        >
          <dt className="stat-value text-3xl font-semibold font-Satoshi text-primary tabular-nums">{s.value}</dt>
          <dd className="mt-1 text-sm text-foreground/70">{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}