"use client";
import Image from "next/image";
import { ArrowUpRight, Briefcase, DollarSign, Globe } from "lucide-react";
import React from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import gsap from "gsap";
import LogoMarquee from "./logo-marquee";
import LeadForm from "@/app/(main)/shopify/sections/Lead-form";
gsap.registerPlugin(ScrollToPlugin);

const HeroSection = () => {
  const scrollToBooking = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: "#booking",
      ease: "power3.out",
    });
    window.fbq?.("track", "Contact", { content_name: "book_a_call" });
  };

  return (
    <div className="max-w-[94%]! mx-auto pb-16 pt-24 lg:pt-40">
      {/* Two-column grid: copy left, form right */}
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,540px)] lg:gap-12">
        {/* Left */}
        <div className="min-w-0">
          <h1 className="max-w-3xl text-4xl sm:text-5xl xl:text-7xl leading-[1.05] mb-4 font-Grostek font-medium text-balance">
            From Your First Sale to{" "}
            <span className="whitespace-nowrap">AED 1M</span> — We Scale D2C
            Brands.
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            For growing startups and established brands ready to scale their
            digital presence.
          </p>

          <div className="mt-8 flex flex-col items-start gap-6">
            <button
              onClick={scrollToBooking}
              className="text-white flex items-center gap-2 rounded bg-primary px-7 py-[.6rem]"
            >
              <ArrowUpRight />
              Book a call
            </button>

            <ul className="flex flex-wrap items-center gap-y-3 text-gray-700">
              <li className="flex items-center gap-2 pr-4 border-r border-gray-300">
                <div className="relative w-8 h-5">
                  <Image
                    alt="dubai flag"
                    src="/flag/dubai.png"
                    fill
                    className="rounded object-cover"
                  />
                </div>
                <span>Based in Dubai</span>
              </li>
              <li className="flex items-center gap-2 px-4 border-r border-gray-300">
                <Briefcase size={18} className="text-gray-600" />
                <span>10+ Industries</span>
              </li>
              <li className="flex items-center gap-2 px-4 border-r border-gray-300">
                <Globe size={18} className="text-gray-600" />
                <span>50+ Websites</span>
              </li>
              <li className="flex items-center gap-2 pl-4">
                <DollarSign size={18} className="text-gray-600" />
                <span>10M+ Revenue</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right */}
        <div className="w-full">
          <LeadForm />
        </div>
      </div>

      {/* Marquee sits below the hero, full width */}
      <div className="mt-16 lg:mt-20">
        <LogoMarquee />
      </div>
    </div>
  );
};

export default HeroSection;