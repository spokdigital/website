"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export default function WhyChooseMasterclassSection() {
  const textBlock = {
    title: ["From Brand To", "Business Growth"],
    description:
      "This isn't just marketing. It's a structured system built to generate consistent, measurable growth.",
  };

  const topCards = [
    {
      title: "Authority Platform",
      description:
        "We create custom high-converting websites that establish your brand authority, sharpen your positioning, and turn visitors into qualified leads from day one.",
      duration: 0.6,
      id: 0,
    },
    {
      title: "Performance Creative",
      description:
        "We produce strategic performance videos and ad creatives designed to stop attention instantly, communicate value clearly and persuasively, and drive measurable action at scale.",
      duration: 0.7,
      id: 1,
    },
  ];

  const bottomCards = [
    {
      title: "Performance Marketing",
      description:
        "Through SEO and data-driven paid advertising, we turn visibility into consistent traffic, qualified leads, and predictable revenue growth.",
      image: "/landing/img-1.webp",
      gradient: "from-black/40",
      span: "md:col-span-2",
      duration: 0.8,
      id: 2,
    },
    {
      title: "Revenue Optimization",
      description:
        "We refine funnels, optimize conversion paths, and improve customer journeys to increase ROI and maximize long-term revenue performance",
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
            <h2 className="text-5xl font-Cormorant text-center lg:text-start md:text-5xl lg:font-Grostek font-semibold text-[#0E2B2B] leading-tight">
              {textBlock.title.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
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
              <span className="absolute font-Satoshi top-0 text-7xl z-10 text-slate-900/40 -translate-y-1/2 left-4 font-bold">
                {card.id + 1}
              </span>
              <Card className="rounded-2xl border-0 shadow-sm h-full bg-primary">
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
              className={`${card.span} relative`}
            >
              <span className="absolute font-Satoshi text-slate-900/40 top-0 text-7xl z-10 -translate-y-1/2 left-4 font-bold">
                {card.id + 1}
              </span>
              <div className="relative rounded-2xl overflow-hidden h-[280px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${card.gradient} to-transparent`}
                />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl lg:text-2xl font-semibold">
                    {card.title}
                  </h3>
                  <p className="mt-2">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
