"use client";

import { Circle, Play, Pause, Maximize } from "lucide-react";
import React, { useRef, useState } from "react";

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
          <h1 className="max-w-3xl text-4xl lg:text-7xl mb-2 font-Grostek font-[400]">
            Your shortcut <br /> to a brand that connects meaning with feeling.
          </h1>

          <div className=" flex flex-col lg:flex-row items-center mt-6 gap-6">
            <p>
              for early stage tech startups that need direction and identity
            </p>

            <ul className="flex flex-wrap items-center gap-4">
              {[
                { lable: "Branding", color: "fill-blue-300" },
                { lable: "Design", color: "fill-orange-400" },
                { lable: "Marketing", color: "fill-green-400" },
                { lable: "Content Creation", color: "fill-yellow-400" },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="px-5 flex items-center gap-1 text-xs bg-gray-100 rounded-full py-2"
                >
                  <Circle className={`stroke-gray-100 size-4 ${item.color}`} />
                  {item.lable}
                </li>
              ))}
            </ul>
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
