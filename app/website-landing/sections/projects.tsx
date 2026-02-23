"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cormorant_Garamond, DM_Mono } from "next/font/google";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    index: "01",
    title: "Tag Associates",
    category: "B2B Distribution",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1600",
    conversion: "3.7x",
    roi: "4x",
    description: "End-to-end supply chain transformation across 14 markets.",
  },
  {
    index: "02",
    title: "GCC Market Expansion",
    category: "Regional Growth",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600",
    conversion: "3.1x",
    roi: "3.8x",
    description:
      "Strategic product entry into Gulf Cooperation Council markets.",
  },
  {
    index: "03",
    title: "Energy Brand Launch",
    category: "Product Launch",
    image:
      "https://images.unsplash.com/photo-1611095564984-0c6f9c9c6f7d?q=80&w=1600",
    conversion: "4.2x",
    roi: "5x",
    description: "Full-scale brand launch with category-leading results.",
  },
  {
    index: "04",
    title: "Logistics Overhaul",
    category: "Operations",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600",
    conversion: "2.9x",
    roi: "3.5x",
    description: "Rebuilt fulfillment infrastructure for enterprise clients.",
  },
];

export function ProjectsHorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const viewport = viewportRef.current;

    if (!section || !track || !viewport) return;

    const getMaxScroll = () =>
      Math.max(0, track.scrollWidth - viewport.offsetWidth);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getMaxScroll(),
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getMaxScroll()}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#0a0a0a]">
      <div
        ref={viewportRef}
        className="relative h-screen overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex-shrink-0 pt-10 px-10 pb-0 z-10 flex flex-col gap-1">
          <p
            className={`$ text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]`}
          >
            Our Work
          </p>
          <h2
            className={`font-Cormorant text-6xl font-light text-white/90 leading-none tracking-tight`}
          >
            Selected <em className="italic text-[#C9A84C]">Projects</em>
          </h2>
        </div>

        {/* Track — spacer div at end solves right-clip with overflow-hidden */}
        <div
          ref={trackRef}
          className="flex mt-[10%] lg:mt-0 lg:flex-1 items-center gap-8 pl-10"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
          <div className="flex-shrink-0 w-10 h-1" aria-hidden="true" />
        </div>

        {/* Footer */}
      </div>
    </section>
  );
}

function ProjectCard({
  index,
  title,
  category,
  image,
  conversion,
  roi,
  description,
}: {
  index: string;
  title: string;
  category: string;
  image: string;
  conversion: string;
  roi: string;
  description: string;
}) {
  return (
    <div className="flex-shrink-0 will-change-transform h-[380px] lg:h-[500px] aspect-square group">
      <div className="rounded-2xl overflow-hidden bg-[#141414] border border-white/[0.06] shadow-[0_32px_80px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
        {/* Image */}
        <div className="relative h-[280px] lg:h-[380px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.03] brightness-75 group-hover:brightness-90"
          />

          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

          {/* Index — top left on image */}
          <div className="absolute top-5 left-6">
            <span className="font-mono text-[11px] tracking-[0.2em] text-white/30">
              {index}
            </span>
          </div>

          {/* Category pill — top right */}
          <div className="absolute top-5 right-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
              <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/50">
                {category}
              </span>
            </span>
          </div>

          {/* Title on image bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3
              className={`font-Cormorant text-[clamp(26px,3vw,38px)] font-light text-white leading-tight tracking-tight`}
            >
              {title}
            </h3>
          </div>
        </div>

        {/* Card body */}
        <div className="px-6 pt-5 pb-6">
          {/* Description */}
          <p className="text-white/40 text-sm font-light leading-relaxed mb-6">
            {description}
          </p>

          {/* Divider */}
          <div className="h-px bg-white/[0.06] mb-5" />

          {/* Stats row */}
          <div className="flex items-center justify-between">
            <div className="flex gap-10">
              {/* Stat 1 */}
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/30 mb-1.5">
                  Conversion Rate
                </p>
                <div className="flex items-baseline gap-1">
                  <p
                    className={`font-Cormorant text-[36px] font-light text-white leading-none`}
                  >
                    {conversion}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px bg-white/10 self-stretch" />

              {/* Stat 2 */}
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/30 mb-1.5">
                  ROI within 30 days
                </p>
                <p
                  className={`font-Cormorant text-[36px] font-light text-[#C9A84C] leading-none`}
                >
                  {roi}
                </p>
              </div>
            </div>

            {/* Arrow CTA */}
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-[border-color,background] duration-300 group-hover:border-[#C9A84C]/50 group-hover:bg-[#C9A84C]/10">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M3 11L11 3M11 3H5M11 3v6"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-[stroke] duration-300 group-hover:stroke-[#C9A84C]"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsHorizontalScroll;
