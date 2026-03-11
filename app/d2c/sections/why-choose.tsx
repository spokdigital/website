"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export default function WhyChooseMasterclassSection() {
  const textBlock = {
    title: ["1 System. 4 Steps.", "Predictable Growth."],
    description:
      "Most agencies hand you one piece and call it a day. We own the entire growth engine — from your store to your creatives to your campaigns to your scale.",
  };

  const topCards = [
    {
      title: "A Shopify Store That Sells While You Sleep",
      description:
        "Your store is your best salesperson. We build Shopify stores where every element — the layout, the copy, the checkout flow — is engineered to convert cold traffic into paying customers. No leaks. No confusion. Just sales.",
      duration: 0.6,
      id: 0,
    },
    {
      title: "  Performance Videos Built to Stop the Scroll",
      description:
        "We've produced hundreds of video ads for D2C brands and we know one truth: creative is the biggest lever in paid advertising. We script, shoot, and edit performance videos built around your buyer's psychology — hook in 2 seconds, value in 5, purchase intent by the end. Not brand content. Revenue content.",
      duration: 0.7,
      id: 1,
    },
  ];

  const bottomCards = [
    {
      title: "Ads That Scale, Not Just Spend",
      description:
        "We run full-funnel paid campaigns across Meta, Google, and TikTok — with one obsession: profitable growth. Every dirham tracked. Every creative tested. Every week we cut what's losing and double down on what's winning. Your CAC drops. Your ROAS climbs. Your revenue compounds.",
      image: "/landing/img-1.webp",
      gradient: "from-black/40",
      span: "md:col-span-2",
      duration: 0.8,
      id: 2,
    },
    {
      title: "Scale What's Working. Kill What Isn't.",
      description:
        "Finding what works is step one. Most brands stop there. We dig into your funnel data every single week — ruthlessly cutting losing creatives, doubling winning audiences, and compounding your growth month over month. This is how ₹20L months become ₹1Cr months.",
      image:
        "https://images.unsplash.com/photo-1771732267119-3eb910f8be9c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradient: "from-black/50",
      span: "",
      duration: 0.9,
      id: 3,
    },
  ];

  return (
    <section className="w-full pt-14  pb-16 px-4 flex justify-center">
      <div className="max-w-7xl w-full">
        {/* ─── TOP GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-6">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 mb-8 lg:mb-0 flex flex-col justify-center"
          >
            <h2 className="text-5xl font-Cormorant  text-center lg:text-start md:text-5xl lg:font-Grostek tracking-tighter lg:font-semibold text-[#0E2B2B] leading-tight">
              1 System. 4 Steps. <br /> Predictable D2C Growth.
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
              className="relative "
            >
              <img
                src={"/landing/cta.svg"}
                className="w-full h-full rounded-2xl object-cover absolute inset-0"
              />
              <span className="absolute font-Satoshi top-0 text-7xl z-10 text-black/55 -translate-y-1/2 left-4 font-bold">
                {card.id + 1}
              </span>
              <Card className="rounded-2xl relative bg-transparent! border-0 shadow-sm h-full  ">
                <CardContent className="p-8  flex flex-col justify-between h-full">
                  <h3 className="text-2xl lg:text-2xl font-Satoshi font-semibold text-gray-50">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 mt-8">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ─── BOTTOM GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-6 mt-10">
          {bottomCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: card.duration }}
              className={`${card.span}  relative`}
            >
              <img
                src={"/landing/cta.svg"}
                className="w-full h-full rounded-2xl  object-cover absolute inset-0"
              />
              <span className="absolute font-Satoshi text-black/55 top-0 text-7xl z-10 -translate-y-1/2 left-4 font-bold">
                {card.id + 1}
              </span>
              <div className="relative rounded-2xl   min-h-[280px]">
                <div className="lg:absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl mb-7 lg:mb-0 lg:text-2xl font-semibold">
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
