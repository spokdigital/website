"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

const TechStack = () => {
  const image1 = [
    "media/electron.png",
    "media/bunjs.png",
    "media/hyper.png",
    "media/android.png",
    "media/angular.png",
    "media/appwrite.png",
    "media/meta.png",
    "media/reactjs.png",
    "media/aws.png",
    "media/kotlin.svg",
  ];

  const image2 = [
    "media/bash.png",
    "media/analytics.png",
    "media/django.png",
    "media/docker.png",
    "media/flutter.png",
    "media/go.png",
    "media/gcloud.png",
    "media/wordpress.svg",
    "media/azure.png",
  ];

  const [viewportWidth, setViewportWidth] = useState<number>(0);
  useEffect(() => {
    if (typeof window !== undefined) {
      setViewportWidth(window.innerWidth);
    }
  }, []);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [id, setId] = React.useState<number | null>(null);
  const [id2, setId2] = React.useState<number | null>(null);

  // Update viewportWidth on window resize
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== undefined) {
        setViewportWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine how many images to show based on the viewportWidth
  const image1ToShow = viewportWidth < 450 ? image1.slice(0, 6) : image1;
  const image2ToShow = viewportWidth < 450 ? image2.slice(0, 5) : image2;

  return (
    <div ref={ref} className="w-full overflow-hidden py-16 bg-black ">
      <div className="">
        <motion.article className="container flex justify-center lg:justify-start items-center gap-3 mx-auto z-[50] flex-wrap">
          {["Supercharged", "by", "the", "Right", "Tools"].map(
            (text, index) => (
              <motion.h1
                key={index}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`text-5xl lg:text-6xl leading-[100%] text-red-100 font-Grostek font-[600] tracking-tight ${
                  text.toLowerCase() === "supercharged" &&
                  "bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent"
                }`}
              >
                {text}
              </motion.h1>
            )
          )}
        </motion.article>

        <div className="mt-14 w-full flex justify-center items-center px-2 lg:container">
          {/* Grid Container */}
          <motion.div className="grid grid-cols-6 lg:grid-cols-10 h-[50px] lg:h-32 w-full gap-1 lg:gap-4">
            {image1ToShow.map((src, index) => (
              <motion.div
                onMouseEnter={() => setId(index)}
                onMouseLeave={() => setId(null)}
                animate={{
                  y: isInView ? 0 : 150, // Move to 0 when in view, else stay at 150
                  opacity: isInView ? 1 : 0, // Fade in when in view, else stay invisible
                }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.6,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                key={index}
                className="w-full relative bg-red-100 rounded-xl"
              >
                <div className="w-full h-full bg-red-100 relative p-1 lg:p-3 rounded-xl z-10">
                  <img
                    src={src}
                    className={`w-full bg-red-100 h-full object-contain`}
                  />
                </div>
                <AnimatePresence mode="wait">
                  {index === id && (
                    <motion.p
                      initial={{ y: 50 }}
                      animate={{ y: 0 }}
                      exit={{ y: 50 }}
                      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
                      className="absolute w-full text-center capitalize font-SplineSans font-[500] left-0 rounded-t-xl -top-8 bg-white/20 backdrop-filter backdrop-blur-lg text-red-100 px-2 pb-4 pt-2"
                    >
                      {src.substring(
                        src.lastIndexOf("/") + 1,
                        src.lastIndexOf(".")
                      )}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="px-11 lg:px-40 mt-10 lg:mt-4 flex justify-center">
          <div className="grid grid-cols-5 lg:flex h-[32px] lg:h-32 gap-4">
            {image2ToShow.map((src, index) => (
              <motion.div
                onMouseEnter={() => setId2(index)}
                onMouseLeave={() => setId2(null)}
                animate={{
                  y: isInView ? 0 : 150,
                  opacity: isInView ? 1 : 0,
                }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.6,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                key={index}
                className="w-full relative bg-red-100 rounded-xl"
              >
                <div className="w-full h-full bg-red-100 relative p-1 lg:p-3 rounded-xl z-10">
                  <img
                    src={src}
                    className="w-full bg-red-100 h-full object-contain"
                  />
                </div>
                <AnimatePresence mode="wait">
                  {index === id2 && (
                    <motion.p
                      initial={{ y: -50 }}
                      animate={{ y: 0 }}
                      exit={{ y: -50 }}
                      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
                      className="absolute w-full text-center capitalize font-SplineSans font-[500] left-0 rounded-b-xl -bottom-8 bg-white/20 backdrop-filter backdrop-blur-lg text-red-100 px-2 pt-4 pb-2"
                    >
                      {src.substring(
                        src.lastIndexOf("/") + 1,
                        src.lastIndexOf(".")
                      )}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
