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
    title: "Teeser",
    category: "Fashion & Apparel — D2C",
    image: "/landing/d2c/projects/9.jpg",
    link: "https://teeser.ae/",
    spend: "22,000",
    multiplier: "4.2x",
    revenue: "92,400",
    description:
      "UAE graphic tee brand covering pop culture, humour, and official licensed Marvel, DC, and Disney merch, with oversized and regular fits plus made-to-order custom prints. Priced from AED 49 with free UAE shipping and bundle offers, it needed ads that matched its playful voice. We built a full-funnel paid social strategy on TikTok and Instagram that drove steady orders and repeat buyers across the Emirates and into Saudi Arabia.",
  },
  {
    index: "02",
    title: "Gazelle glam",
    category: "Luxury Perfume & Fragrance — D2C",
    image: "/landing/d2c/projects/4.jpg",
    link: "https://gazelleglam.com/",
    spend: "18,000",
    multiplier: "5.6x",
    revenue: "100,800",
    description:
      "Dubai-made fragrance house (Noir Perfumes) with oud, floral, and fresh scents at 25%+ oil concentration, priced from AED 79. Its AED 49 discovery sets lower the barrier to a first purchase. We ran a targeted paid social strategy across Meta and TikTok that used the trial-set offer to bring in first-time buyers and move them to full-size bottles across the UAE.",
  },
  {
    index: "03",
    title: "Perfume Oasis",
    category: "Luxury Perfume & Fragrance — Retail",
    image: "/landing/d2c/projects/1.jpg",
    link: "https://perfumeoasis.ae",
    spend: "30,000",
    multiplier: "6.4x",
    revenue: "192,000",
    description:
      "UAE fragrance retailer selling 100% authentic designer, niche, and Arabian perfumes from brands like Chanel, Dior, Tom Ford, YSL, Armaf, and Lattafa. It ships across the UAE and GCC with multi-currency checkout and Tabby and Tamara payment options. We scaled it with full-funnel paid advertising on Instagram and Google, turning browsers into repeat buyers across the GCC.",
  },
  {
    index: "04",
    title: "Opto Watch Co.",
    category: "Luxury Watch Accessories — E-Commerce",
    image: "/landing/d2c/projects/2.jpg",
    link: "https://optowatchco.com/",
    spend: "85,000",
    multiplier: "8.4x",
    revenue: "714,000",
    description:
      "Dubai watch strap brand started in 2020, with alligator, Epsom, Alcantara, rubberised sailcloth, and FKM rubber straps. Straps are hand saddle-stitched and come with a lifetime warranty and worldwide DHL shipping. We scaled paid acquisition across Meta and Google, targeting collector communities globally and turning a passion-led brand into an internationally recognised name.",
  },
  {
    index: "05",
    title: "Confianza",
    category: "Luxury Furniture & Interior Design",
    image: "/landing/d2c/projects/3.jpg",
    link: "https://confianza.ae/",
    spend: "14,000",
    multiplier: "7.5x",
    revenue: "105,000",
    description:
      "Dubai-based luxury interior brand specialising in bespoke marble furniture, custom bedroom suites, and full home renovations. We drove high-intent traffic to statement collections — from Armani marble dining tables to custom kitchen islands — growing their Shopify store into a destination for premium UAE homeowners.",
  },
  {
    index: "06",
    title: "Khazayan",
    category: "Luxury Furniture & Interior Design",
    image: "/landing/d2c/projects/5.jpg",
    link: "https://khazayan.com/",
    spend: "20,000",
    multiplier: "5.5x",
    revenue: "110,000",
    description:
      "Dubai-based luxury interior brand specialising in bespoke marble furniture, custom bedroom suites, and full home renovations. We drove high-intent traffic to statement collections — from Armani marble dining tables to custom kitchen islands — growing their Shopify store into a destination for premium UAE homeowners.",
  },
  {
    index: "07",
    title: "Tylu Kreations",
    category: "Luxury Furniture & Interior Design",
    image: "/landing/d2c/projects/6.jpg",
    link: "https://tylukreations.com/",
    spend: "16,000",
    multiplier: "6.8x",
    revenue: "108,800",
    description:
      "Dubai-based luxury interior brand specialising in bespoke marble furniture, custom bedroom suites, and full home renovations. We drove high-intent traffic to statement collections — from Armani marble dining tables to custom kitchen islands — growing their Shopify store into a destination for premium UAE homeowners.",
  },
  {
    index: "09",
    title: "suyu",
    category: "Luxury Furniture & Interior Design",
    image: "/landing/d2c/projects/8.jpg",
    link: "http://suyuindia.com/",
    spend: "10,000",
    multiplier: "4.4x",
    revenue: "44,000",
    description:
      "Dubai-based luxury interior brand specialising in bespoke marble furniture, custom bedroom suites, and full home renovations. We drove high-intent traffic to statement collections — from Armani marble dining tables to custom kitchen islands — growing their Shopify store into a destination for premium UAE homeowners.",
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
        <div className="flex-1 h-px bg-white/8 relative overflow-hidden rounded-full">
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
        className="rounded-2xl overflow-hidden bg-[#141414] border border-white/6
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
          <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-transparent to-transparent" />

          <div className="absolute top-4 left-5">
            <span className="font-mono text-[11px] tracking-[0.2em] text-white/30">
              {index}
            </span>
          </div>

          <div className="absolute top-4 right-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-xs border border-white/10">
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/50">
                {category}
              </span>
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-Cormorant capitalize text-[clamp(20px,2.2vw,34px)] font-light text-white leading-tight tracking-tight">
              {title}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="shrink-0 px-5 pt-4 pb-5">
          <p className="text-white/40 text-[12px] sm:text-[13px] font-light leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
          <div className="h-px bg-white/6 mb-4" />
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
