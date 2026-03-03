"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export default function WhyChooseMasterclassSection() {
  const textBlock = {
    title: ["1 System. 4 Steps.", "Predictable Growth."],
    description:
      "Most agencies do one piece. We build the full stack — from your first impression to your final sale.",
  };

  const topCards = [
    {
      title: "Your Conversion-Ready Website",
      description:
        "We custom-build websites and landing pages that establish instant credibility, sharpen your positioning, and turn visitors into leads — before you spend a single dirham on ads.",
      duration: 0.6,
      id: 0,
    },
    {
      title: " Creatives Built to Convert",
      description:
        "We produce scroll-stopping videos and ad creatives engineered around your buyer's psychology — designed to grab attention in 2 seconds, communicate your value clearly, and drive measurable action.",
      duration: 0.7,
      id: 1,
    },
  ];

  const bottomCards = [
    {
      title: "Ads. Funnels. Revenue.",
      description:
        "We build and manage data-driven ad campaigns across Meta, Google, and TikTok — backed by a complete sales funnel strategy that captures attention, nurtures interest, and converts strangers into paying customers. Every campaign is tracked, tested, and optimized in real time — so your ad spend works harder, your cost per acquisition drops, and your revenue grows predictably and at scale.",
      image: "/landing/img-1.webp",
      gradient: "from-black/40",
      span: "md:col-span-2",
      duration: 0.8,
      id: 2,
    },
    {
      title: "Scale What's Working",
      description:
        "We dig into your funnel data, cut what's losing, and double down on what's winning — reducing your cost per acquisition while compounding your revenue month over month.",
      image:
        "https://images.unsplash.com/photo-1771732267119-3eb910f8be9c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradient: "from-black/50",
      span: "",
      duration: 0.9,
      id: 3,
    },
  ];

  return (
    <section className="w-full py-20 px-4 flex justify-center">
      <div className="max-w-6xl w-full">
        {/* ─── TOP GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 mb-8 lg:mb-0 flex flex-col justify-center"
          >
            <h2 className="text-5xl font-Cormorant text-center lg:text-start md:text-4xl lg:font-Grostek  font-semibold text-[#0E2B2B] leading-tight">
              1 System. 4 Steps. <br /> Predictable Growth.
            </h2>
            <p className="mt-6 text-center lg:text-start text-gray-600 text-lg max-w-sm">
              {textBlock.description}
            </p>
          </motion.div>

          {/* Top Cards */}
          {topCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: card.duration }}
              className="relative"
            >
              <span className="absolute font-Satoshi top-0 text-7xl z-10 text-black/55 -translate-y-1/2 left-4 font-bold">
                {card.id + 1}
              </span>
              <Card className="rounded-2xl border-0 shadow-sm h-full bg-gradient-to-tr from-primary/90 via-red-500 to-red-400 ">
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <h3 className="text-xl lg:text-2xl font-Satoshi font-semibold text-gray-50">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 mt-8">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ─── BOTTOM GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {bottomCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: card.duration }}
              className={`${card.span} bg-black rounded-2xl relative`}
            >
              <span className="absolute font-Satoshi text-primary top-0 text-7xl z-10 -translate-y-1/2 left-4 font-bold">
                {card.id + 1}
              </span>
              <div className="relative rounded-2xl overflow-hidden h-[280px]">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl lg:text-2xl font-semibold">
                    {card.title}
                  </h3>
                  <p className="mt-2 ">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
