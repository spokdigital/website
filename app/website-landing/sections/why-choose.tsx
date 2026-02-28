"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export default function WhyChooseMasterclassSection() {
  const textBlock = {
    title: ["From Brand To", "Business Growth"],
    description:
      "This isn’t just marketing. It’s a structured system built to generate consistent, measurable growth.",
  };

  const topCards = [
    {
      title: "Authority First",
      description:
        "Build Your Digital Foundation We craft your positioning, messaging, and custom website to establish authority and trust from day one.",
      bg: "bg-[#E6E2DA]",
      duration: 0.6,
      id: 0,
    },
    {
      title: "Conversion Engine ",
      description:
        "Scale With Strategy Through SEO and performance-driven marketing, we turn visibility into predictable revenue.",
      bg: "bg-[#EFEFEF]",
      duration: 0.7,
      id: 1,
    },
  ];

  const bottomCards = [
    {
      title: "Revenue Engine",
      description:
        "Engineer Your Lead System We design structured funnels and conversion paths that capture and qualify the right audience.",
      image:
        "https://images.pexels.com/photos/17486101/pexels-photo-17486101.png",
      gradient: "from-black/40",
      span: "md:col-span-2",
      duration: 0.8,
      id: 2,
    },
    {
      title: "Demand On Autopilot",
      description:
        "Once live, the system continuously attracts, nurtures, and converts high-intent prospects — reducing manual marketing.",
      image:
        "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png",
      gradient: "from-black/50",
      span: "",
      duration: 0.9,
      id: 3,
    },
  ];

  return (
    <section className="w-full  py-20 pt-14 px-4 flex justify-center">
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
                  <h3 className="text-xl lg:text-2xl font-Satoshi font-semibold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mt-8">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ─── BOTTOM GRID ─── */}
        <div className="grid grid-cols-1  md:grid-cols-3 gap-6 mt-10">
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
                  <p className="mt-2  ">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
