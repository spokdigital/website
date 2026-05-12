"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import SliderForm from "../App chunks/components/SliderForm";
import Image from "next/image";

// ─── Types ───────────────────────────────────────────────────────────────────

type Tab =
  | "Website Design"
  | "Lead Generation"
  | "D2C Growth"
  | "Content Creation"
  | "Social Media Marketing"
  | "SEO";

interface PortfolioItem {
  id: number;
  title: string;
  desc: string;
  tags: Tab[];
  siteUrl: string;
  // swap these placeholder bg colors for real image srcs when ready
  bgColor: string;
  img: string;
}

// ─── Placeholder Data ─────────────────────────────────────────────────────────
// Each item has a `tags` array — add as many categories as apply.
// Replace bgColor with image src when real assets are ready.

// Drop-in replacement for your portfolioData array
// All descriptions written from visiting each live site

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Teeser",
    desc: "UAE-based graphic & custom printed t-shirt brand with collections for men, women, and kids — built for discovery-led D2C shopping.",
    tags: ["Website Design", "D2C Growth", "SEO"],
    siteUrl: "https://teeser.ae/",
    bgColor: "bg-rose-200",
    img: "",
  },
  {
    id: 2,
    title: "Milestone Homes",
    desc: "Full-service Dubai real estate agency showcasing villas, apartments, and off-plan properties across all major UAE developers.",
    tags: ["Website Design", "Lead Generation", "SEO", "Content Creation"],
    siteUrl: "https://milestonehomesre.com/",
    bgColor: "bg-stone-300",
    img: "milestone.jpeg",
  },
  {
    id: 3,
    title: "Opto Watch Co.",
    desc: "Dubai-based premium watch strap store offering leather, exotic, rubber, and non-leather straps with worldwide DHL shipping.",
    tags: ["Website Design", "D2C Growth", "SEO", "Social Media Marketing"],
    siteUrl: "https://optowatchco.com/",
    bgColor: "bg-sky-200",
    img: "optowatch.jpeg",
  },
  {
    id: 4,
    title: "Dimondra",
    desc: "UAE business solutions firm offering HR, recruitment, IT, legal, and back-office outsourcing — backed by 20+ years of industry expertise.",
    tags: ["Website Design", "Content Creation"],
    siteUrl: "https://dimondra.com/",
    bgColor: "bg-amber-200",
    img: "dimondra.jpeg",
  },
  {
    id: 5,
    title: "BizGrowth Consultancy",
    desc: "UAE business setup specialists helping entrepreneurs incorporate on the mainland, in free zones, and offshore — with a built-in cost calculator.",
    tags: ["Website Design", "Lead Generation", "SEO", "Content Creation"],
    siteUrl: "https://bizgrowthconsultancy.com",
    bgColor: "bg-emerald-200",
    img: "bizgrwoth.jpeg",
  },
  {
    id: 6,
    title: "Menlocloud",
    desc: "AI-powered staff augmentation and cloud consultancy specialising in Azure, AWS, Power BI, Snowflake, and enterprise data solutions.",
    tags: ["Website Design", "Lead Generation"],
    siteUrl: "https://menlocloud.ai/",
    bgColor: "bg-violet-200",
    img: "",
  },
  {
    id: 7,
    title: "Flavors Street",
    desc: "Global street food restaurant in Midland, MI — blending East and West flavours with a fresh, homestyle menu available on DoorDash.",
    tags: ["Website Design", "SEO"],
    siteUrl: "http://flavorsstreet.com/",
    bgColor: "bg-cyan-200",
    img: "flavorstreet.jpeg",
  },
  {
    id: 8,
    title: "Advanz Tech",
    desc: "Premium luxury auto care centre in Dubai specialising in repair, maintenance, and advanced diagnostics for BMW, Mercedes, Audi, Porsche, and Range Rover.",
    tags: ["Website Design", "Lead Generation"],
    siteUrl: "https://advanztech.co/",
    bgColor: "bg-pink-200",
    img: "advanztech.png",
  },
  {
    id: 9,
    title: "Zaaviyan Contracting",
    desc: "UAE fit-out and contracting company transforming residential, commercial, and hospitality spaces with bespoke interior design from concept to completion.",
    tags: ["Website Design", "Lead Generation"],
    siteUrl: "https://www.zaaviyancontracting.com/",
    bgColor: "bg-orange-200",
    img: "zaaviyan.jpeg",
  },
  {
    id: 10,
    title: "Noir Perfumes",
    desc: "Dubai-made premium fragrance brand offering long-lasting perfumes for men, women, and unisex — crafted with ingredients sourced from France.",
    tags: ["Website Design", "D2C Growth", "SEO", "Social Media Marketing"],
    siteUrl: "https://noirperfumes.com/",
    bgColor: "bg-neutral-300",
    img: "noir.jpeg",
  },
  {
    id: 11,
    title: "BS Holiday Homes",
    desc: "Short-term rental platform with 300+ premium Dubai properties — featuring live availability search, area filters, and a host onboarding portal.",
    tags: ["Website Design", "Lead Generation"],
    siteUrl: "https://bsholidayhomes.com/",
    bgColor: "bg-teal-200",
    img: "bssh.jpeg",
  },
  {
    id: 12,
    title: "Perfume Oasis",
    desc: "UAE fragrance e-store carrying niche, Arabian, and designer perfumes for men and women, with multi-currency support across AED, SAR, USD, and EUR.",
    tags: [
      "Website Design",
      "D2C Growth",
      "Social Media Marketing",
      "SEO",
      "Content Creation",
    ],
    siteUrl: "https://perfumeoasis.ae/",
    bgColor: "bg-purple-200",
    img: "oasis.jpeg",
  },
  {
    id: 13,
    title: "Meet Trading",
    desc: "UAE-based B2B commercial distribution company supplying energy-efficient products — from EV solutions and batteries to home appliances and apparel — globally.",
    tags: ["Website Design", "SEO"],
    siteUrl: "https://tradingmeet.com/",
    bgColor: "bg-lime-200",
    img: "meet.jpeg",
  },
  {
    id: 14,
    title: "ME Universal",
    desc: "Smart building and infrastructure solutions provider offering building automation, DC lighting, centralised vacuum, mirror TV, and air purification systems.",
    tags: ["Website Design", "Lead Generation", "SEO"],
    siteUrl: "http://meuniversal.com/",
    bgColor: "bg-indigo-200",
    img: "meuniversal.jpeg",
  },
];

// ─── Tabs ─────────────────────────────────────────────────────────────────────

const tabs: Tab[] = [
  "Website Design",
  "Lead Generation",
  "D2C Growth",
  "Content Creation",
  "Social Media Marketing",
  "SEO",
];

// ─── Card ─────────────────────────────────────────────────────────────────────

const PortfolioCard = ({ item }: { item: PortfolioItem }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.97 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {/* Thumbnail */}
    <div
      className={`aspect-[6/4] relative overflow-hidden rounded-xl border ${item.bgColor}`}
    >
      <Image
        src={`/portfolio/${item.img}`}
        alt={item.title}
        fill
        className="w-full h-full object-cover"
      />
    </div>

    {/* Meta */}
    <div className="mt-3 flex flex-col justify-between items-stretch">
      <h4 className="font-Synonym mb-1 font-[500] text-xl">{item.title}</h4>
      <p className="text-gray-700 text-sm">{item.desc}</p>

      {/* Tag pills */}
      <div className="flex flex-wrap mt-3 items-center gap-2">
        {item.tags.map((tag) => (
          <div
            key={tag}
            className="bg-gray-100 text-xs text-gray-600 px-3 py-1 rounded-full border border-gray-200"
          >
            {tag}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-4 mb-auto w-full">
        <a href={item.siteUrl} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center justify-center gap-2 text-sm text-primary border border-primary/30 transition-colors duration-200 hover:bg-primary w-full px-4 py-1.5 rounded-full hover:text-white">
            Visit Site <ArrowUpRightIcon className="size-5" />
          </button>
        </a>
      </div>
    </div>
  </motion.div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const Page = () => {
  const [activeTab, setActiveTab] = useState<Tab | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const para =
    "Showcasing Creativity and Craft: A Portfolio of Innovative Design and Thoughtful Solutions";

  // null = show all
  const filtered =
    activeTab === null
      ? portfolioData
      : portfolioData.filter((item) => item.tags.includes(activeTab));

  return (
    <div>
      <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />

      {/* ── Hero ── */}
      <div className="w-full h-screen flex flex-col justify-center items-center overflow-hidden relative">
        <div className="absolute inset-0 w-full h-full">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="bgGradient" cx="50%" cy="35%" r="70%">
                <stop offset="0%" stopColor="#de0f3f" stopOpacity="0.25" />
                <stop offset="40%" stopColor="#de0f3f" stopOpacity="0.10" />
                <stop offset="70%" stopColor="#de0f3f" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#fdf7f7" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="65%" stopColor="#fdf7f7" stopOpacity="0" />
                <stop offset="100%" stopColor="#fdf7f7" stopOpacity="1" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="#ffffff" />
            <rect width="100%" height="100%" fill="url(#bgGradient)" />
            <rect width="100%" height="100%" fill="url(#bottomFade)" />
          </svg>
        </div>

        <div className="container relative z-[99]">
          <div className="w-full mt-8 flex flex-col items-center text-slate-800 justify-center">
            <motion.h1 className="text-4xl lg:text-6xl lg:w-[90%] text-center leading-[100%] font-Grostek font-[600] tracking-tight break-words">
              {para.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  className="mr-2 xl:mr-2 xxl:mr-4 overflow-hidden h-[35px] lg:h-[70px]"
                  style={{ display: "inline-block" }}
                >
                  <motion.span
                    initial={{ y: 300, opacity: 0, rotate: 20, x: -10 }}
                    animate={{ y: 0, opacity: 1, rotate: 0, x: 0 }}
                    style={{ display: "inline-block" }}
                    transition={{
                      ease: [0, 0, 0.2, 1],
                      duration: 1,
                      delay: index * 0.1,
                    }}
                    className="origin-top-right"
                  >
                    {word}
                  </motion.span>
                </motion.span>
              ))}
            </motion.h1>

            <button
              onClick={() => setIsFormOpen(true)}
              className="group mt-5 relative h-12 rounded-full bg-black hover:bg-primary transition-colors duration-300 px-5 font-Synonym font-[500] text-neutral-50"
            >
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[130%] group-hover:skew-y-12 flex items-center gap-2">
                  Get Expert Help <ArrowUpRight />
                </div>
                <div className="absolute translate-y-[134%] flex items-center gap-2 skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Get Expert Help <ArrowUpRight />
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Portfolio Section ── */}
      <div className="relative">
        <h2 className="text-4xl container mx-auto lg:text-5xl font-Cormorant font-[500] text-center">
          Portfolio We're <span className="text-primary">Proud of</span>
        </h2>
        <p className="text-center  mt-2 container lg:max-w-3xl mx-auto">
          Strategic solutions crafted to drive visibility, engagement, and real
          business growth.
        </p>

        {/* ── Sticky Tab Bar ── */}
        {/* ── Sticky Tab Bar ── */}
        <div className="lg:sticky top-0 left-0 container z-50 w-full">
          {/* Scrollable track — full width on mobile, centered on desktop */}
          <div className="overflow-x-auto rounded-xl scrollbar-hide w-full mt-6 lg:flex lg:justify-center">
            <ul className="flex w-max lg:w-auto bg-primary/20 backdrop-blur-lg shadow-sm border border-primary/20 rounded-lg lg:rounded-full">
              <li
                onClick={() => setActiveTab(null)}
                className={`cursor-pointer whitespace-nowrap transition-all duration-300 px-6 py-3 border-r
          ${activeTab === null ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}`}
              >
                All
              </li>

              {tabs.map((tab, idx) => (
                <li
                  key={idx}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer whitespace-nowrap transition-all duration-300 px-6 py-3
            ${idx !== tabs.length - 1 ? "border-r" : ""}
            ${activeTab === tab ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}`}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="container mt-16">
          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 py-24 font-Synonym"
            >
              No projects in this category yet.
            </motion.p>
          )}

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="container mt-20 pb-20">
        <motion.div className="p-10 lg:p-16 w-full bg-gradient-to-tr from-red-400 to-red-600 text-slate-100 rounded-2xl relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-widest text-white/60 font-Grostek mb-3">
              Ready to scale?
            </p>
            <h2 className="text-4xl lg:text-5xl font-Grostek font-[600] leading-tight max-w-xl">
              Let's Grow Together
            </h2>
            <p className="mt-4 font-Synonym font-[400] text-lg max-w-2xl text-white/80">
              At Spok Digital, we don't just market products — we build
              connections that last.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/contact">
                <button className="px-6 py-3 bg-white text-slate-900 font-SplineSans rounded-full text-sm font-[500] hover:bg-white/90 transition-colors">
                  Contact us
                </button>
              </Link>
              <Link href="/Portfolio">
                <button className="px-6 py-3 border border-white/30 text-white font-SplineSans rounded-full text-sm hover:bg-white/10 transition-colors">
                  View our work
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute right-20 bottom-20 w-32 h-32 bg-white/5 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
