"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const PROJECTS = [
  {
    index: "01",
    title: "Dimondra",
    category: "Business Process Outsourcing",
    image: "/projects/dimondra.jpg",
    link: "https://dimondra.com",
    spend: "12,500",
    multiplier: "8.6x",
    revenue: "107,500",
    description:
      "Comprehensive back-office solutions spanning HR, recruitment, IT, legal, and government relations — empowering businesses to scale compliantly across global markets.",
  },
  {
    index: "02",
    title: "Milestone Homes RE",
    category: "Real Estate",
    image: "/projects/milestonehre.jpg",
    link: "https://milestonehomesre.com/",
    spend: "92,000",
    multiplier: "9.2x",
    revenue: "76,26,000",
    description:
      "Trusted real estate agency in Dubai connecting buyers with villas, apartments, and townhouses from top developers like Emaar, DAMAC, and Nakheel.",
  },
  {
    index: "04",
    title: "Advanz Tech",
    category: "Luxury Auto Care",
    image: "/projects/advanz-tech.jpg",
    link: "https://advanztech.co/",
    spend: "6,500",
    multiplier: "8.4x",
    revenue: "54,600",
    description:
      "Premium luxury car repair, maintenance, and advanced diagnostics in Dubai — trusted by owners of BMW, Mercedes-Benz, Porsche, Lamborghini, and Rolls-Royce.",
  },
  {
    index: "05",
    title: "Biz Growth Consultancy",
    category: "Business Setup",
    image: "/projects/bizgrowth.jpg",
    link: "https://www.bizgrowthconsultancy.com/",
    spend: "10,000",
    multiplier: "9.5x",
    revenue: "95,000",
    description:
      "End-to-end business setup partner in the UAE helping entrepreneurs navigate mainland, free zone, and offshore company formation with ease.",
  },
  {
    index: "06",
    title: "Flavors Street",
    category: "Food & Hospitality",
    image: "/projects/flavor-street.jpg",
    link: "https://flavorsstreet.com/",
    spend: "7,800",
    multiplier: "8.9x",
    revenue: "69,420",
    description:
      "Global street food restaurant in Midland, MI blending East and West flavors — freshly prepared, halal-friendly dishes with bold, homestyle creativity.",
  },
  {
    index: "07",
    title: "Zaaviyan Contracting",
    category: "Fit-Out & Interiors",
    image: "/projects/zaaviyan.jpg",
    link: "https://www.zaaviyancontracting.com/",
    spend: "13,200",
    multiplier: "10x",
    revenue: "132,000",
    description:
      "Leading UAE fit-out and contracting company transforming residential, commercial, and hospitality spaces into bespoke interiors — from concept to completion.",
  },
  {
    index: "08",
    title: "MenloCloud",
    category: "Tech & Cloud",
    image: "/projects/menlocloud.jpg",
    link: "https://menlocloud.ai/",
    spend: "9,500",
    multiplier: "8.7x",
    revenue: "82,650",
    description:
      "Staff augmentation and cloud expertise firm specializing in Azure, AWS, Power BI, Snowflake, and Looker — elevating businesses through scalable tech talent.",
  },
];

export function ProjectsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  const progressPercent = count > 1 ? (current / (count - 1)) * 100 : 0;

  return (
    <section className="relative bg-[#0a0a0a] py-16 md:py-20">
      {/* Header */}
      <div className="px-6 md:px-10 mb-10 flex flex-col gap-1">
        <p className="font-mono text-[10px] text-center tracking-[0.3em] uppercase text-red-500">
          Our Work
        </p>
        <h2 className="font-Cormorant text-5xl text-center lg:text-6xl font-light text-white/90 leading-none tracking-tight">
          <span className="text-primary">Built</span> to Convert.{" "}
          <span className="text-primary">Proven</span> Across UAE
        </h2>
      </div>

      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{ loop: false, align: "start" }}
        className="w-full"
      >
        <CarouselContent className="-ml-5 sm:-ml-6 px-6 sm:px-10">
          {PROJECTS.map((project, i) => (
            <CarouselItem
              key={i}
              className="pl-5 sm:pl-6 basis-[min(90vw,650px)]"
            >
              <ProjectCard {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Controls + Progress */}
      <div className="px-6 sm:px-10 mt-8 flex items-center gap-6">
        {/* Prev / Next buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={scrollPrev}
            disabled={current === 0}
            aria-label="Previous project"
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center
              text-white/40 bg-primary/60 transition-all duration-200
              hover:border-white/30 hover:text-white/80
              disabled:bg-white/10 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={scrollNext}
            disabled={current === count - 1}
            aria-label="Next project"
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center
              text-white/70 transition-all duration-200
              hover:border-white/30 bg-primary/60 hover:text-white/80
              disabled:bg-white/10 disabled:cursor-not-allowed"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="flex-1 h-px bg-white/[0.08] relative overflow-hidden rounded-full">
          <div
            className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Counter */}
        <span className="font-mono text-[11px] tracking-[0.15em] text-white/25 shrink-0 tabular-nums">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(count).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}

function ProjectCard({
  index,
  title,
  category,
  image,
  multiplier,
  description,
  link,
  spend,
  revenue,
}: {
  index: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
  multiplier: string;
  spend: string;
  revenue: string;
}) {
  return (
    <Link href={link} className="block group h-full">
      <div
        className="rounded-2xl overflow-hidden bg-[#141414] border border-white/[0.06]
          shadow-[0_32px_80px_rgba(0,0,0,0.6)]
          transition-transform duration-500 ease-out group-hover:-translate-y-1.5
          flex flex-col"
        style={{ height: "clamp(460px, 70vh, 620px)" }}
      >
        {/* Image */}
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

        {/* Body */}
        <div className="flex-shrink-0 px-5 pt-4 pb-5">
          <p className="text-white/40 text-[12px] sm:text-[13px] font-light leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
          <div className="h-px bg-white/[0.06] mb-4" />
          <div className="flex items-center justify-between">
            <div className="flex gap-5 sm:gap-8">
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/30 mb-1">
                  Spend
                </p>
                <p className="font-Cormorant text-xl md:text-3xl flex items-center font-light text-white leading-none">
                  <img
                    src={"/landing/dirham.png"}
                    className="size-8 lg:size-10 invert "
                  />{" "}
                  {spend}
                </p>
              </div>
              <div className="w-px bg-white/10 self-stretch" />
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/30 mb-1">
                  Revenue
                </p>
                <p className="font-Cormorant text-xl md:text-3xl flex items-center font-light text-primary leading-none">
                  <img
                    src={"/landing/dirham-red.png"}
                    className="size-8 lg:size-10 "
                  />{" "}
                  {revenue}
                </p>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-[border-color,background] duration-300 group-hover:border-red-300/50 group-hover:bg-red-300/10">
              <ArrowUpRight size={15} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectsCarousel;
