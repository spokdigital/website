"use client";
import Image from "next/image";
import { ArrowUpRight, DollarSign } from "lucide-react";
import React from "react";
import { Briefcase, Globe } from "lucide-react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import FloatingIcons from "./orbit";
import gsap from "gsap";
import LogoMarquee from "./logo-marquee";
gsap.registerPlugin(ScrollToPlugin);

const HeroSection = () => {
  const scrollToBooking = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: "#booking",
      ease: "power3.out",
    });
  };

  return (
    <div className="!max-w-[94%] mx-auto pb-16 pt-12 lg:pt-24">
      <div className="relative flex flex-col gap-4 lg:flex-row justify-between items-center">
        <div className="">
          <h1 className="max-w-4xl text-4xl lg:text-7xl mb-2 font-Grostek font-[500]">
            From Your First Sale to AED 1M 
— We Scale D2C Brands.
          </h1>
          <p className="text-lg text-gray-700">
            For growing startups and established brands ready to scale their
            digital presence.
          </p>

          <div className="flex flex-col-reverse items-start 2xl:flex-row 2xl:items-center mt-6 gap-6 2xl:gap-10">
            <div className="">
              <button
                onClick={scrollToBooking}
                className="text-white flex items-center gap-2 rounded bg-primary px-7 py-[.6rem]"
              >
                <ArrowUpRight />
                Book a call
              </button>
            </div>
            <div className="flex gap-8 lg:gap-0 flex-wrap items-center text-gray-700">
              {/* Dubai */}
              <div className="flex items-center gap-2 pr-4 border-r border-gray-300">
                <div className="relative w-8 h-5">
                  <Image
                    alt="dubai flag"
                    src="/flag/dubai.png"
                    fill
                    className="rounded object-cover"
                  />
                </div>
                <span>Based in Dubai</span>
              </div>

              {/* Industries */}
              <div className="flex items-center gap-2 px-4 border-r border-gray-300">
                <Briefcase size={18} className="text-gray-600" />
                <span>10+ Industries</span>
              </div>

              {/* Websites */}
              <div className="flex items-center gap-2 px-4 border-r border-gray-300">
                <Globe size={18} className="text-gray-600" />
                <span>50+ Websites</span>
              </div>

              {/* Revenue */}
              <div className="flex items-center gap-2 pl-4">
                <DollarSign size={18} className="text-gray-600" />
                <span>10M+ Revenue</span>
              </div>
            </div>
          </div>
        </div>

        <LogoMarquee />

        {/* Floating icons — desktop only */}

        <FloatingIcons />
      </div>
    </div>
  );
};

export default HeroSection;
