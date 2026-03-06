"use client";

import React, { useRef } from "react";

const VideoSection = () => {
  const sectionRef = useRef(null);
  const videoWrapRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="border-[6px] border-gray-300 h-[75vh] overflow-hidden max-w-4xl mx-auto rounded-3xl w-full">
        {/* Animated video wrapper */}
        <div
          ref={videoWrapRef}
          className="overflow-hidden will-change-transform w-full h-full "
        >
          <video
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
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
