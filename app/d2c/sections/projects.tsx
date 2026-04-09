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
    title: "Billionaire Mansions",
    category: "Luxury Furniture & Interior Design",
    image: "/landing/d2c/projects/1.jpg",
    link: "https://www.billionaire-mansions.com/",
    spend: "12,500",
    multiplier: "8.6x",
    revenue: "106,250",
    description:
      "Dubai-based luxury interior brand specialising in bespoke marble furniture, custom bedroom suites, and full home renovations. We drove high-intent traffic to statement collections — from Armani marble dining tables to custom kitchen islands — growing their Shopify store into a destination for premium UAE homeowners.",
  },
  {
    index: "02",
    title: "Opto Watch Co.",
    category: "Luxury Watch Accessories — E-Commerce",
    image: "/landing/d2c/projects/2.jpg",
    link: "https://optowatchco.com/",
    spend: "92,000",
    multiplier: "9.2x",
    revenue: "76,26,000",
    description:
      "Dubai-born watch strap brand built for serious collectors — offering alligator, shell cordovan, FKM rubber, and sailcloth straps with worldwide DHL shipping. We scaled their paid acquisition across Meta and Google, targeting niche watch enthusiast communities globally and turning a passion-led brand into a recognised international name.",
  },
  {
    index: "03",
    title: "Teeser",
    category: "Fashion & Apparel — D2C",
    image: "/landing/d2c/projects/3.jpg",
    link: "https://teeser.ae/",
    spend: "18,000",
    multiplier: "3.7x",
    revenue: "1,15,200",
    description:
      "UAE's go-to graphic tee brand for pop culture, nostalgia, and custom printing — serving men, women, and kids with oversized fits, official licensed merch, and made-to-order designs. We built a full-funnel paid social strategy on TikTok and Instagram that matched their bold brand voice, driving consistent orders and repeat buyers across the Emirates.",
  },
  {
    index: "04",
    title: "Noir",
    category: "Luxury Perfume & Fragrance — D2C",
    image: "/landing/d2c/projects/4.jpeg",
    link: "https://noirperfumes.com/",
    spend: "18,000",
    multiplier: "4.8x",
    revenue: "1,15,200",
    description:
      "A UAE-based luxury fragrance house crafting bold, oriental scents inspired by the region's rich oud heritage. We built a targeted paid social strategy across Meta and TikTok, connecting Noir's dark, sophisticated identity with fragrance enthusiasts across the Emirates and beyond.",
  },
  {
    index: "05",
    title: "Oasis",
    category: "Luxury Perfume & Fragrance — D2C",
    image: "/landing/d2c/projects/5.jpeg",
    link: "https://perfume-oasis-uae.myshopify.com/",
    spend: "18,000",
    multiplier: "6.4x",
    revenue: "1,15,200",
    description:
      "A UAE perfume brand bottling the essence of desert blooms and fresh citrus into everyday luxury. We scaled their D2C presence through full-funnel paid advertising on Instagram and Google, turning first-time visitors into loyal scent seekers across the GCC.",
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
                  Spent
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
                  ROAS
                </p>
                <p className="font-Cormorant text-xl md:text-3xl flex items-center font-light text-primary leading-none">
                  {multiplier}
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
