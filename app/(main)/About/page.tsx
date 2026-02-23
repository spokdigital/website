"use client";
import React from "react";
import { motion, useMotionValue, useInView } from "framer-motion";
import { BackgroundGradientAnimation } from "../App chunks/components/HeroGradient";
import { Circle } from "@phosphor-icons/react";

const Page = () => {
  const [height, setHeight] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const scrollY = useMotionValue(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== undefined) {
        scrollY.set(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);
  React.useEffect(() => {
    const rect = document
      .getElementsByClassName("HeadNavigation")[0]
      .getBoundingClientRect();
    setHeight(rect.height);
  }, []);
  const selfPraise = [
    {
      title: "expert team support",
      content:
        " Our professionals bring years of experience and industry knowledge to every project.",
      color: "#D4E157",
    },
    {
      title: "Measurable Results",
      content:
        " We combine creativity with analytics to deliver strategies that work.",
      color: "#4FC3F7",
    },
    {
      title: "Client-First Approach",
      content:
        " We prioritize your vision and values, ensuring campaigns align with your brand’s identity.",
      color: "#FF8A65",
    },
    {
      title: "Proven Success",
      content:
        " Our track record speaks for itself, with satisfied clients across various industries.",
      color: "#FFEE58",
    },
  ];
  const points = [
    {
      title: "Innovators",
      desc: " who embrace emerging trends and cutting-edge technology.",
    },
    {
      title: "Storytellers",
      desc: "who craft compelling narratives to spark emotional connections.",
    },
    {
      title: "Problem-solvers",
      desc: "who thrive on turning challenges into opportunities.",
    },
    {
      title: "Collaborators",
      desc: "who believe the best ideas are born through partnership.",
    },
  ];
  const selfPrasiseContainer = React.useRef<HTMLDivElement>(null);
  const boxInView = useInView(selfPrasiseContainer, { once: true });
  const whoContainerRef = React.useRef<HTMLDivElement>(null);
  const whoInView = useInView(whoContainerRef, { once: true });
  const para = ` Transforming Brands with Digital Excellence`;
  return (
    <motion.div className="  bg-white" ref={containerRef}>
      <motion.div>
        <div className="w-full h-screen overflow-hidden bg-black relative">
          <div className=" w-full h-full flex relative ">
            <div className="absolute top-0 left-0 w-full h-full">
              <BackgroundGradientAnimation
                gradientBackgroundStart="black"
                gradientBackgroundEnd="teal"
              />
            </div>
            <div
              style={{ marginTop: `${height + 50}px` }}
              className="container relative z-[99]"
            >
              <div
                style={{ height: `calc(100vh - ${height + 150}px)` }}
                className="flex  flex-col items-center justify-center "
              >
                <motion.h1 className="text-center font-[600] text-slate-50 flex-wrap text-3xl md:text-3xl lg:text-4xl xl:text-6xl xxl:text-7xl  font-Grostek relative">
                  {para.split(" ").map((item, index) => (
                    <motion.span
                      key={index}
                      className="mr-2 xl:mr-2 xxl:mr-5 overflow-hidden h-[35px] lg:h-[46px] xl:h-[70px]"
                      style={{
                        display: "inline-block", // Ensure words are treated as block elements
                      }}
                    >
                      <motion.span
                        initial={{ y: 300, opacity: 0, rotate: 20, x: -10 }} // Start from below
                        animate={{
                          y: 0, // Move to original position
                          opacity: 1,
                          rotate: 0,
                          x: 0,
                        }}
                        style={{
                          display: "inline-block", // Ensure words are treated as block elements
                        }}
                        transition={{
                          ease: [0, 0, 0.2, 1],
                          duration: 1,
                          delay: index * 0.1, // Increased delay to prevent overlap
                        }}
                        className="origin-top-right"
                      >
                        {item}
                      </motion.span>
                      {"  "}
                    </motion.span>
                  ))}
                </motion.h1>
                <p className="text-slate-50 text-center text-xl lg:text-2xl font-[500] font-SplineSans">
                  Beyond Marketing
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-1/2 gap-10 mt-10">
                  <div className=" p-3 rounded-xl">
                    <h2 className="text-6xl text-center text-lime-300 font-[600] font-Grostek ">
                      10+
                    </h2>
                    <p className="text-lg text-slate-100 text-center font-Satoshi">
                      Years of experience in web development.
                    </p>
                  </div>
                  <div className=" p-3 rounded-xl">
                    <h2 className="text-6xl text-center font-[600] font-Grostek text-lime-300">
                      90+
                    </h2>
                    <p className="text-slate-100 text-lg text-center font-Satoshi">
                      {" "}
                      Clients across various Industries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative">
        <div className="container py-20">
          <motion.article className="flex justify-center lg:justify-start items-center text-black gap-3">
            {["About", "us"].map((text, index) => (
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
                className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight break-words"
              >
                {text}
              </motion.h1>
            ))}
          </motion.article>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="">
              <h3 className="font-Grostek text-3xl font-[400]">Our Vision</h3>
              <p className="mt-1 text-lg">
                Our vision is to be the driving force behind transformative
                marketing that empowers brands to exist in an ever-evolving
                world. We aspire to create meaningful connections between
                businesses and their audiences through innovative strategies,
                authentic storytelling, and measurable impact
              </p>
            </div>
            <div className="">
              <h3 className="font-Grostek text-3xl font-[400]">Our Mission</h3>
              <p className="mt-1 text-lg">
                Our mission at Spok Digital is to empower businesses to reach
                their full potential through innovative marketing solutions that
                deliver measurable results. We are committed to understanding
                the unique needs of every client, creating tailored strategies
                that amplify their voice, connect with their audience, and drive
                sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ref={whoContainerRef} className="w-full bg-white relative mt-5">
        <div className="container ">
          <motion.article className="flex justify-center lg:justify-start items-center text-black gap-3">
            {["Who", "we", "are", "?"].map((text, index) => (
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
                className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight break-words"
              >
                {text}
              </motion.h1>
            ))}
          </motion.article>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10">
            <div>
              <p className="text-[1.4rem] font-Satoshi">
                At Spok Digital, every brand has a unique story waiting to be
                told. Founded on passion, creativity, and a deep understanding
                of marketing trends, we specialize in delivering solutions that
                gives measurable results. Our mission is simple: to help you
                grow, connect, and stand out in a crowded marketplace.{" "}
              </p>
              <div className="mt-3">
                {points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div>
                      <Circle weight="fill" className="text-sm mt-[14px]" />
                    </div>
                    <p className=" mt-2">
                      <span className="text-xl font-Grostek font-[600] ">
                        {point.title}:{" "}
                      </span>
                      <span className="text-lg font-Satoshi">{point.desc}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full relative overflow-hidden">
              <motion.div
                animate={{ y: whoInView ? "-100%" : "0%" }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="w-full min-h-[500px] max-h-[500px] absolute z-[10] top-0 left-0 bg-red-100"
              />
              <img
                src={"media/we_are_image.jpg"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div ref={selfPrasiseContainer} className="w-full py-12 overflow-hidden">
        <div className="container ">
          <motion.article className="flex justify-center lg:justify-start items-center text-black gap-3">
            {["Why", "Choose", "us?"].map((text, index) => (
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
                className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight break-words"
              >
                {text}
              </motion.h1>
            ))}
          </motion.article>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10 !text-red-50">
            {selfPraise.map((item, index) => (
              <motion.div
                animate={{
                  x: boxInView ? "0%" : "100%",
                  y: boxInView ? "0%" : "70%",
                }}
                transition={{ duration: 1.5, ease: [0.175, 0.885, 0.32, 1] }}
                key={index}
                className=" text-slate-950 rounded-lg p-5 bg-gradient-to-tr from-[#59B546]  to-[#0F298A]"
              >
                <h2 className="text-3xl pr-10 capitalize font-SplineSans font-[500] text-slate-50">
                  {item.title}
                </h2>
                <p className="mt-3 text-lg font-Grostek text-slate-50">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 container">
        <div className=" ">
          <div className=" p-7  w-full bg-gradient-to-tr from-red-300 to-red-700 text-slate-100 rounded-xl">
            <h2 className="text-3xl font-SplineSans font-[500]">
              Let’s Grow Together
            </h2>
            <p className="mt-3 font-Synonym font-[400] text-lg">
              At Spok Digital, we don’t just market products—we build
              connections that last. Whether you’re a startup looking to make a
              big growth or an established brand seeking to level up, we’re here
              to help you achieve your goals.
            </p>
            <p className="mt-3 font-Synonym font-[400] text-lg">
              Get in touch today and let’s turn your vision into reality.
            </p>
            <button className="mt-5 px-4 py-2 bg-white text-slate-900 font-SplineSans rounded-lg font-[400]">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
