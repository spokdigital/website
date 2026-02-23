"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, animate, AnimatePresence } from "framer-motion";
import BreadCrumb from "../App chunks/components/BreadCrumb";
import { BackgroundGradientAnimation } from "../App chunks/components/HeroGradient";
import SliderForm from "../App chunks/components/SliderForm";
import { ArrowUpRight, Pause, Play } from "@phosphor-icons/react";
import Image from "next/image";
const Page = () => {
  const [height, setHeight] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mediaRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const rect = document
      .getElementsByClassName("HeadNavigation")[0]
      .getBoundingClientRect();
    setHeight(rect.height);
  }, []);

  const tabs = [
    "F&B",
    "Real Estate",
    "Marketing",
    "Corporate Photographs",
    "Business Setup",
  ];
  const para =
    "Showcasing Creativity and Craft: A Portfolio of Innovative Design and Thoughtful Solutions";
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const FandBRef = React.useRef<HTMLDivElement>(null);
  const RealEstateRef = React.useRef<HTMLDivElement>(null);
  const MarketingRef = React.useRef<HTMLDivElement>(null);
  const CorporatePhotosRef = React.useRef<HTMLDivElement>(null);
  const BusinessSetupRef = React.useRef<HTMLDivElement>(null);

  const RealEstate = [
    "1.jpg",
    "10.mp4",
    "7.jpg",
    "DSC00004.jpg",
    "DSC00044.jpg",
    "DSC00056.jpg",
    "DSC00060.jpg",
    "DSC00082.jpg",
    "DSC09971.jpg",
    "Damac Island 1st Draft with text-compressed.mov",
    "Hand_Draft01-compressed.mov",
    "IMG_8784.JPG",
    "Javed_Leos_draft01-compressed.mov",
    "Masaar_Rahil_Draft03-compressed.mov",
    "Ram_Podcast_Final-compressed.mov",
    "Rubab_D2_Draft01-compressed.mov",
    "SALWA DECA FINAL-compressed.mov",
    "Salwa_Arabic_draft02-compressed.mov",
    "Salwa_CG_Final-compressed.mov",
    "Salwa_Javed_Meraas_with new qr-compressed.mov",
    "salwa_office_Video_Draft03-compressed.mov",
  ];

  const businessSetup = [
    "4th Draft - Bizgrowth-compressed.mov",
    "Bizgrowth 4th Render-compressed.mov",
  ];

  const FandB = [
    "11.jpg",
    "12.mp4",
    "13.jpg",
    "14.mp4",
    "15.jpg",
    "2.mp4",
    "3.jpg",
    "4.mp4",
    "5.jpg",
    "6.mp4",
    "8.mp4",
    "9.jpg",
  ];
  const marketing = [
    "IKEA CO WORKER V2-compressed.mov",
    "starbucks misspelling-compressed.mov",
  ];
  const corporatePhotographs = [
    "Slide 2.jpg",
    "Slide 4 - Milestone Homes Office.jpg",
    "Slide 5 - Investment Advisory Services.jpg",
    "Slide 5 - Mortgage Approval Services.jpg",
    "Slide 5 - Property Evaluation.jpg",
    "Slide 5 - Property Management.jpg",
    "Slide 5 - Real Estate Investment.jpg",
    "Slide 5 - Short Term & Long Term Leasing.jpg",
  ];

  const refs = [
    FandBRef,
    RealEstateRef,
    MarketingRef,
    CorporatePhotosRef,
    BusinessSetupRef,
  ];

  const scrollToWithEasing = (targetY: number) => {
    const start = window.scrollY;
    const distance = targetY - start;

    animate(0, 1, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1], // easeOutCubic
      onUpdate: (latest) => {
        window.scrollTo(0, start + distance * latest);
      },
    });
  };

  const handleTabClick = (idx: number) => {
    const target = refs[idx]?.current;
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 100;
      scrollToWithEasing(top);
    }
  };

  return (
    <motion.div className="  bg-white" ref={containerRef}>
      <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <motion.div>
        <div className="w-full h-screen overflow-hidden bg-gradient-to-tr from-blue-200 from-10% to-[#81C784] relative">
          <div className="w-full h-full flex relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <BackgroundGradientAnimation
                gradientBackgroundStart="white"
                gradientBackgroundEnd="blue"
              />
            </div>
            <div
              style={{ marginTop: `${height + 50}px` }}
              className="container relative z-[99]"
            >
              <BreadCrumb />
              <div
                style={{ height: `calc(100vh - ${height + 200}px)` }}
                className="w-full flex flex-col  items-center text-slate-100 justify-center"
              >
                <motion.h1 className="text-4xl lg:text-6xl lg:w-[90%] text-center leading-[100%] font-Grostek font-[600] tracking-tight break-words">
                  {para.split(" ").map((item, index) => (
                    <motion.span
                      key={index}
                      className="mr-2 xl:mr-2 xxl:mr-4 overflow-hidden h-[35px] lg:h-[70px]"
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
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="group mt-5 relative h-12 rounded-full bg-black px-5 font-Synonym font-[500]  text-neutral-50"
                >
                  <span className="relative inline-flex overflow-hidden">
                    <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[130%] group-hover:skew-y-12 flex items-center gap-2">
                      Get Expert Help <ArrowUpRight />
                    </div>
                    <div className="absolute  translate-y-[134%] flex items-center gap-2 skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      Get Expert Help <ArrowUpRight />
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative">
        <h2 className="text-3xl mt-20 lg:text-5xl font-[500] text-center ">
          Portfolio images and videos
        </h2>

        <div className="lg:sticky container top-0 left-0 z-50">
          <div className="flex  mt-5 justify-center items-center">
            <ul className=" flex bg-slate-100 text-nowrap whitespace-nowrap shadow-sm border border-slate-100 mt-6 overflow-auto rounded-lg lg:rounded-full justify-start lg:justify-center items-center">
              {tabs.map((tab, idx) => (
                <li
                  onClick={() => handleTabClick(idx)}
                  key={idx}
                  className={`cursor-pointer  hover:bg-indigo-100 transition-all duration-300 px-8 py-3 ${
                    idx !== tabs.length - 1 ? "border-r  pr-5" : "pr-8 "
                  }    `}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div ref={mediaRef} className=" mt-14">
          <div className="container">
            <div ref={FandBRef} className=" mt-4 border-b pb-12">
              <h2 className="text-xl lg:text-3xl mb-4">F&B</h2>
              {RenderMedia(FandB, "media/PhotosVideos/F&B/")}
            </div>
          </div>
          <div className="container">
            <div ref={RealEstateRef} className=" mt-3 pt-4 border-b pb-12">
              <h2 className="text-xl lg:text-3xl mb-4">Real Estate</h2>
              {RenderMedia(RealEstate, "media/PhotosVideos/Real Estate/")}
            </div>
          </div>
          <div className="container">
            <div ref={MarketingRef} className=" mt-3 pt-4 border-b pb-12">
              <h2 className="text-xl lg:text-3xl mb-4">Marketing</h2>
              {RenderMedia(marketing, "media/PhotosVideos/Marketing/")}
            </div>
          </div>
          <div className="container">
            <div ref={CorporatePhotosRef} className=" mt-3 pt-4 border-b pb-12">
              <h2 className="text-xl lg:text-3xl mb-4">
                Corporate Photographs
              </h2>
              {RenderMedia(
                corporatePhotographs,
                "media/PhotosVideos/Corporate Photographs/",
              )}
            </div>
          </div>
          <div className="container">
            <div ref={BusinessSetupRef} className="  mt-3 pt-4  border-b pb-12">
              <h2 className="text-xl lg:text-3xl mb-4">Business Setup</h2>
              {RenderMedia(businessSetup, "media/PhotosVideos/Business Setup/")}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="py-16 container">
        <div className=" ">
          <div className=" p-7  w-full bg-[#b53f3f] text-slate-100 rounded-xl">
            <h2 className="text-3xl font-SplineSans font-[500]">
              Let&nbsp;s Drive Performance Together
            </h2>
            <p className="mt-3 font-Synonym font-[400] text-lg">
              If you`re ready to take your marketing to the next level and see
              measurable growth, contact us today. Whether you`re looking to
              scale quickly or improve your marketing ROI, we have the tools and
              expertise to get you there.
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

const VideoPlayer = ({
  src,
  thumbnail,
}: {
  src: string;
  thumbnail: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  const handleToggle = () => {
    const video = videoRef.current;

    if (!isPlaying) {
      setIsPlaying(true); // Show video
    } else if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsVideoPaused(false);
    const onPause = () => setIsVideoPaused(true);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [isPlaying]);

  return (
    <div className="h-[500px] w-full relative group rounded-md overflow-hidden">
      {isPlaying ? (
        <>
          {isLoading == null && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <motion.div className="flex">
            <video
              ref={videoRef}
              onPlaying={() => setIsLoading(false)}
              style={{ opacity: isLoading ? 0 : 1 }}
              autoPlay
              muted
              controls={false}
              className="w-full h-full object-cover"
            >
              <source src={src} />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </>
      ) : (
        <Image
          width={300}
          height={400}
          src={`/media/PhotosVideos/Thumbnails/${
            thumbnail.split(".")[0] + ".jpg"
          }`}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
      )}

      <AnimatePresence>
        {!isLoading && (
          <div
            key="playpause"
            className={`${
              isPlaying ? "hover:bg-slate-950/10" : ""
            } absolute inset-0 w-full group h-full flex justify-center items-center`}
          >
            <button
              onClick={handleToggle}
              className={`cursor-pointer rounded-full backdrop-blur-md bg-white/60 size-[60px] ${
                isPlaying && !isVideoPaused ? "group-hover:flex hidden" : "flex"
              } justify-center items-center group-hover:opacity-100`}
            >
              {isPlaying && !isVideoPaused ? (
                <Pause weight="fill" className="text-3xl text-white" />
              ) : (
                <Play weight="fill" className="text-3xl text-white" />
              )}
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
const RenderMedia = (MediaArr: string[], path: string) => {
  const thumbnails = [
    "12.jpg",
    "10.jpg",
    "14.jpg",
    "2.jpg",
    "4.jpg",
    "4th Draft - Bizgrowth-compressed.jpg",
    "6.jpg",
    "8.jpg",
    "Al-Barari-Walkthrought---afroz-8th-Draft.jpg",
    "Bizgrowth 4th Render-compressed.jpg",
    "Damac Island 1st Draft with text-compressed.jpg",
    "Hand_Draft01-compressed.jpg",
    "IKEA CO WORKER V2-compressed.jpg",
    "Javed_Leos_draft01-compressed.jpg",
    "Masaar_Rahil_Draft03-compressed.jpg",
    "Ram_Podcast_Final-compressed.jpg",
    "Rubab_D2_Draft01-compressed.jpg",
    "SALWA DECA FINAL-compressed.jpg",
    "Salwa_Arabic_draft02-compressed.jpg",
    "Salwa_CG_Final-compressed.jpg",
    "Salwa_Javed_Meraas_with new qr-compressed.jpg",
    "salwa_office_Video_Draft03-compressed.jpg",
    "starbucks misspelling-compressed.jpg",
  ];

  const repoURL = "/";

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full">
      {MediaArr.map((media, idx) => {
        const extension = media.split(".").pop()?.toLowerCase();

        if (extension === "png" || extension === "jpg") {
          return (
            <div key={idx} className="h-[500px] w-full relative">
              <Image
                width={300}
                height={400}
                className="w-full h-full object-cover transition-opacity duration-500"
                alt={`Media ${idx}`}
                loading="lazy"
                src={"/" + path + media}
              />
            </div>
          );
        } else if (extension === "mov" || extension === "mp4") {
          const mediaBase = media.split(".")[0];
          const thumbnailsBase = thumbnails.map((name) => name.split(".")[0]);
          return (
            <VideoPlayer
              key={idx}
              src={repoURL + path + media}
              thumbnail={
                thumbnailsBase.includes(mediaBase)
                  ? mediaBase
                  : mediaBase + ".jpg"
              }
            />
          );
        }
        return null;
      })}
    </div>
  );
};
