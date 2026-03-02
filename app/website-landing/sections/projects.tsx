"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    index: "01",
    title: "Dimondra",
    category: "Business Process Outsourcing",
    image: "/projects/dimondra.jpg",
    conversion: "3.7x",
    link: "https://dimondra.com",
    roi: "4x",
    description:
      "Comprehensive back-office solutions spanning HR, recruitment, IT, legal, and government relations — empowering businesses to scale compliantly across global markets.",
  },
  {
    index: "02",
    title: "Milestone Homes RE",
    category: "Real Estate",
    image: "/projects/milestonehre.jpg",
    conversion: "3.1x",
    link: "https://milestonehomesre.com/",
    roi: "3.8x",
    description:
      "Trusted real estate agency in Dubai connecting buyers with villas, apartments, and townhouses from top developers like Emaar, DAMAC, and Nakheel.",
  },
  {
    index: "03",
    title: "Insight Vision",
    category: "Digital Marketing",
    image: "/projects/insight-vision.jpg",
    conversion: "4.2x",
    roi: "5x",
    description:
      "Result-driven marketing agency in Dubai delivering smart strategies across web development, app development, and performance campaigns that elevate brand visibility and growth.",
    link: "https://insightvision.marketing/",
  },
  {
    index: "04",
    title: "Advanz Tech",
    category: "Luxury Auto Care",
    image: "/projects/advanz-tech.jpg",
    conversion: "2.9x",
    roi: "3.5x",
    link: "https://advanztech.co/",
    description:
      "Premium luxury car repair, maintenance, and advanced diagnostics in Dubai — trusted by owners of BMW, Mercedes-Benz, Porsche, Lamborghini, and Rolls-Royce.",
  },
  {
    index: "05",
    title: "Biz Growth Consultancy",
    category: "Business Setup",
    image: "/projects/bizgrowth.jpg",
    conversion: "3.7x",
    roi: "4x",
    link: "https://www.bizgrowthconsultancy.com/",
    description:
      "End-to-end business setup partner in the UAE helping entrepreneurs navigate mainland, free zone, and offshore company formation with ease.",
  },
  {
    index: "06",
    title: "Flavors Street",
    category: "Food & Hospitality",
    image: "/projects/flavor-street.jpg",
    conversion: "3.1x",
    roi: "3.8x",
    link: "https://flavorsstreet.com/",
    description:
      "Global street food restaurant in Midland, MI blending East and West flavors — freshly prepared, halal-friendly dishes with bold, homestyle creativity.",
  },
  {
    index: "07",
    title: "Zaaviyan Contracting",
    category: "Fit-Out & Interiors",
    image: "/projects/zaaviyan.jpg",
    conversion: "4.2x",
    roi: "5x",
    link: "https://www.zaaviyancontracting.com/",
    description:
      "Leading UAE fit-out and contracting company transforming residential, commercial, and hospitality spaces into bespoke interiors — from concept to completion.",
  },
  {
    index: "08",
    title: "MenloCloud",
    category: "Tech & Cloud",
    image: "/projects/menlocloud.jpg",
    conversion: "2.9x",
    roi: "3.5x",
    link: "https://menlocloud.ai/",
    description:
      "Staff augmentation and cloud expertise firm specializing in Azure, AWS, Power BI, Snowflake, and Looker — elevating businesses through scalable tech talent.",
  },
];

// Header height must match the rendered DOM height.
// pt-10 (40px) + "OUR WORK" label (~16px) + gap-1 (4px) + h2 at text-6xl (~72px) = ~132px
// Tweak HEADER_H if your font sizes differ.
const HEADER_H = 132;
const GAP_TOP = 24; // gap between header bottom and card top
const GAP_BOT = 24; // gap between card bottom and viewport bottom

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

  const trackHeight = `calc(100svh - ${HEADER_H}px - ${GAP_TOP}px - ${GAP_BOT}px)`;

  return (
    <section ref={sectionRef} className="relative bg-[#0a0a0a]">
      <div
        ref={viewportRef}
        className="relative h-[100svh] min-h-[560px] overflow-hidden"
      >
        {/* Header — fixed pixel height so track calc is exact */}
        <div
          className="px-6 sm:px-10 flex flex-col justify-end gap-1 z-10"
          style={{ height: HEADER_H, paddingTop: 40 }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-red-500">
            Our Work
          </p>
          <h2 className="font-Cormorant text-5xl  lg:text-6xl font-light text-white/90 leading-none tracking-tight">
            Selected <em className="italic text-primary">Projects</em>
          </h2>
        </div>

        {/* Track — explicit height so h-full on cards is unambiguous */}
        <div
          ref={trackRef}
          className="flex items-stretch gap-5 sm:gap-6 pl-6 sm:pl-10"
          style={{ marginTop: GAP_TOP, height: trackHeight }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
          <div className="flex-shrink-0 w-6 sm:w-10" aria-hidden="true" />
        </div>
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
  link,
}: {
  index: string;
  title: string;
  category: string;
  image: string;
  conversion: string;
  roi: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <div
        className="flex-shrink-0 will-change-transform group h-full"
        style={{ width: "clamp(350px, 55vw, 650px)" }}
      >
        <div
          className="h-full rounded-2xl overflow-hidden bg-[#141414] border border-white/[0.06]
          shadow-[0_32px_80px_rgba(0,0,0,0.6)]
          transition-transform duration-500 ease-out group-hover:-translate-y-1.5
          flex flex-col"
        >
          {/* Image area — grows to fill space the card body doesn't use */}
          <div className="relative overflow-hidden flex-1 min-h-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-[transform,filter] duration-700 ease-out
              group-hover:scale-[1.03] brightness-75 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

            <div className="absolute top-4 left-5">
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/30">
                {index}
              </span>
            </div>

            <div className="absolute top-4 right-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/50">
                  {category}
                </span>
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-Cormorant text-[clamp(20px,2.2vw,34px)] font-light text-white leading-tight tracking-tight">
                {title}
              </h3>
            </div>
          </div>

          {/* Card body — shrink-0 so it never grows, never clips */}
          <div className="flex-shrink-0 px-5 pt-4 pb-5">
            <p className="text-white/40 text-[12px] sm:text-[13px] font-light leading-relaxed mb-4 line-clamp-2">
              {description}
            </p>
            <div className="h-px bg-white/[0.06] mb-4" />
            <div className="flex items-center justify-between">
              <div className="flex gap-5 sm:gap-8">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/30 mb-1">
                    Conversion Rate
                  </p>
                  <p className="font-Cormorant text-[28px] sm:text-[32px] font-light text-white leading-none">
                    {conversion}
                  </p>
                </div>
                <div className="w-px bg-white/10 self-stretch" />
                <div>
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/30 mb-1">
                    ROI within 30 days
                  </p>
                  <p className="font-Cormorant text-[28px] sm:text-[32px] font-light text-primary leading-none">
                    {roi}
                  </p>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-[border-color,background] duration-300 group-hover:border-red-300/50 group-hover:bg-red-300/10">
                <ArrowUpRight size={15} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectsHorizontalScroll;
