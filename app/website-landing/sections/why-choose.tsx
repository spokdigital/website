"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export default function WhyChooseMasterclassSection() {
  const textBlock = {
    title: ["Why", "Choose This", "Masterclass"],
    description:
      "This isn’t just another online course. It’s a transformation.",
  };

  const topCards = [
    {
      title: "AI-First Approach",
      description:
        "Learn how to use tools like ChatGPT, Notion, and Zapier to run your business smarter.",
      bg: "bg-[#E6E2DA]",
      duration: 0.6,
      id: 0,
    },
    {
      title: "Plug & play templates",
      description: "Get access to ready to use funnels, scripts and workflows.",
      bg: "bg-[#EFEFEF]",
      duration: 0.7,
      id: 1,
    },
  ];

  const bottomCards = [
    {
      title: "Real Results",
      description: "Built by a coach who’s done it — not just taught it.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
      gradient: "from-black/40",
      span: "md:col-span-2",
      duration: 0.8,
      id: 2,
    },
    {
      title: "Zero Audience Needed",
      description:
        "No followers? No problem. This system works even if you’re starting from zero.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradient: "from-black/50",
      span: "",
      duration: 0.9,
      id: 3,
    },
  ];

  return (
    <section className="w-full bg-[#EAE7E1] py-20 pt-28  px-4 flex justify-center">
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
            <h2 className="text-4xl  font-Cormorant text-center lg:text-start md:text-5xl lg:font-Grostek font-semibold text-[#0E2B2B] leading-tight">
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
              <Card
                className={`rounded-2xl border-0 shadow-sm h-full ${card.bg}`}
              >
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <h3 className="text-xl lg:text-lg font-Satoshi font-semibold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mt-8">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ─── BOTTOM GRID ─── */}
        <div className="grid grid-cols-1  md:grid-cols-3 gap-10 mt-10">
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
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm max-w-md">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
