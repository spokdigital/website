"use client";
import Image from "next/image";
import { ArrowUpRight, Play, Pause, Maximize } from "lucide-react";
import React, { useRef, useState } from "react";
import { Briefcase, Globe, BotOff } from "lucide-react";
const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;

    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="!max-w-[94%] mx-auto pb-16 pt-12 lg:pt-24">
      <div className="relative flex flex-col gap-4 lg:flex-row justify-between items-end">
        <div>
          <h1 className="max-w-4xl text-4xl lg:text-6xl mb-2 font-Grostek font-[500]">
            Custom Websites and Conversion-Focused Lead Funnels Built to
            Generate Real Revenue
          </h1>
          <p className="text-lg text-gray-700">
            For growing startups and established brands ready to scale their
            digital presence.
          </p>

          <div className=" flex  flex-col-reverse items-start 2xl:flex-row 2xl:items-center mt-6 gap-6 2xl:gap-10">
            <div className="flex items-center gap-4">
              <button className="text-white flex items-center gap-2 rounded bg-primary px-7 py-[.6rem]">
                <ArrowUpRight />
                View Pricing
              </button>
              <button className="text-white flex items-center gap-2 rounded bg-black px-7 py-[.6rem]">
                <ArrowUpRight />
                Book a call
              </button>
            </div>
            <div className="flex flex-nowrap xl:flex-wrap items-center text-gray-700">
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
                <span>200+ Websites</span>
              </div>

              {/* No AI */}
              <div className="flex items-center gap-2 pl-4">
                <BotOff size={18} className="text-gray-600" />
                <span>No AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO */}
        <div className="w-full mt-10 lg:mt-0 lg:max-w-sm relative group">
          <div className="absolute w-full h-full inset-0  bg-gradient-to-r from-amber-400 via-pink-500 to-blue-500 blur-xl opacity-60  animate-pulse" />
          <div className="overflow-hidden relative rounded-2xl">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://www.pexels.com/download/video/18702571/"
                type="video/mp4"
              />
            </video>

            {/* CONTROLS */}
            <div className="absolute inset-0 flex items-end justify-between p-3 opacity-0 group-hover:opacity-100 transition">
              {/* Play / Pause */}
              <button
                onClick={togglePlay}
                className="bg-black/60 text-white p-2 rounded-full"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>

              {/* Fullscreen */}
              <button
                onClick={handleFullscreen}
                className="bg-black/60 text-white p-2 rounded-full"
              >
                <Maximize size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
