"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import ReactCardFlip from "react-card-flip";
import { AuroraBackground } from "@/components/ui/aurora-background";
const Slider = () => {
  const containerRef = useRef(null);
  const images = [
    {
      name: "Real Estate",
      image: "industries/realEstate.jpg",
      text: "We help the real estate industry connect with the right audience by enhancing online visibility, creating engaging content like virtual tours, and leveraging data-driven strategies to generate quality leads. ",
    },
    {
      name: "Technology",
      image: "industries/technology.jpg",
      text: "We empower technology companies to showcase innovation by enhancing online presence, creating impactful content, and driving targeted campaigns to connect with the right audience.",
    },
    {
      name: "Business Consulting",
      image: "industries/consulting.jpg",
      text: "We help business consulting firms establish authority by amplifying their expertise, reaching potential clients, and delivering tailored strategies for lead generation and brand growth.",
    },
    {
      name: "Corporate Services",
      image: "industries/corporateServices.jpg",
      text: "We support corporate service providers by refining their digital presence, building trust through targeted messaging, and driving meaningful engagement with their ideal clients.",
    },
    {
      name: "F&B",
      image: "industries/F&B.jpg",
      text: "We help F&B businesses stand out by creating appetizing content, leveraging social media, and implementing data-driven campaigns to attract loyal customers",
    },
    {
      name: "Events & Shows",
      image: "industries/shows.jpg",
      text: "We elevate events and shows by crafting visually stunning campaigns, engaging audiences through creative content, and maximizing ticket sales with targeted marketing.",
    },
    {
      name: "Hospitality",
      image: "industries/hospitality.jpg",
      text: "We help hospitality brands attract guests by showcasing their unique experiences, building trust online, and driving bookings through data-driven strategies.",
    },
    {
      name: "Retail",
      image: "industries/retail.jpg",
      text: "We boost retail businesses by enhancing e-commerce platforms, driving foot traffic, and creating compelling campaigns to reach shoppers both online and offline.",
    },
    {
      name: "Entertainment & Media",
      image: "industries/media.jpg",
      text: "We amplify entertainment and media brands by creating captivating content, engaging audiences across platforms, and driving awareness for shows, films, and more.",
    },
    {
      name: "Automotive",
      image: "industries/automative.jpg",
      text: "We drive success for automotive brands by creating compelling campaigns, showcasing vehicles through stunning visuals, and connecting with the right buyers through precision targeting.",
    },
  ];

  const [viewportWidth, setViewportWidth] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); 
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: viewportWidth > 450 ? 4 : 1,
      spacing: 45,
      
    },
    created: () => setLoaded(true),
    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel); // Update current slide index
    },
  });

  const inView = useInView(containerRef, { once: true });
  const hoverRef = useRef<HTMLDivElement | null>(null);
  const [hoverId, setHoverId] = useState<number | null>(null);
  const cardRef = useRef<(HTMLImageElement | null)[]>([]);
  const [cardHeight, setCardHeight] = React.useState(0);
  useEffect(() => {
    if (cardRef.current.length > 0) {
      const heights = cardRef.current.map((ref) =>
        ref ? ref.clientHeight : 0
      );
      setCardHeight(Math.max(...heights));
    }
  }, [images]);
  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden py-12 bg-red-100"
    >
      <motion.article className="flex container justify-center lg:justify-start items-center text-black gap-3">
        {["Industry", "Usage"].map((text, index) => (
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
            className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight"
          >
            {text}
          </motion.h1>
        ))}
      </motion.article>

      <div className=" px-10 relative">
        {loaded && (
          <>
            
            <ArrowLeft
              className={`absolute cursor-pointer size-10 p-2 rounded-full z-[99999] top-1/2 -translate-y-1/2 left-0 ${
                currentSlide === 0
                  ? "bg-gray-300 border-gray-400" // Gray when at the first slide
                  : "bg-gradient-to-tr border-2 border-purple-300 from-green-300 to-blue-300" // Default style
              }`}
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
            />

            <ArrowRight
              className={`absolute cursor-pointer size-10 p-2 rounded-full z-[99999] top-1/2 -translate-y-1/2 right-0 ${
                currentSlide === images.length - 1
                  ? "bg-gray-300 border-gray-400" // Gray when at the last slide
                  : "bg-gradient-to-tr from-green-300 to-blue-300" // Default style
              }`}
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
            />
          </>
        )}
        <motion.div
          animate={{ x: inView ? "0%" : "100%" }}
          transition={{ ease: [0.29, 1.08, 0.67, 0.98], duration: 1.4 }}
          ref={ref}
          className="keen-slider overflow-hidden w-full mt-7"
        >
          {images.map(
            (image: { name: string; image: string; text: string }, index) => {
              return (
                <div
                  ref={hoverRef}
                  key={index}
                  onMouseEnter={() => setHoverId(index)}
                  onMouseLeave={() => setHoverId(null)}
                  className="w-full group keen-slider__slide"
                >
                  <ReactCardFlip
                    isFlipped={hoverId === index}
                    flipDirection="horizontal"
                  >
                    <div className="relative">
                      <div className="">
                        <motion.div className="relative overflow-hidden w-full aspect-[3/4] ">
                          <motion.img
                            src={image.image}
                            ref={(el) => {
                              cardRef.current[index] = el;
                            }}
                            alt={`slide-${index}`}
                            transition={{ duration: 0.5 }}
                            className="w-full top-0 left-0  h-full object-cover absolute "
                            style={{ scale: 1.2 }}
                          />
                        </motion.div>
                      </div>

                      <div className="absolute top-1/2 left-1/2 flex justify-center w-full -translate-x-1/2 -translate-y-1/2 text-slate-50">
                        <p className="font-[600] font-Grostek text-md lg:text-xl p-3 bg-white/50 text-slate-950 shadow-lg rounded-lg">
                          {image.name}
                        </p>
                      </div>
                    </div>

                    <div className="w-full">
                      <div
                        className=" flex flex-col justify-center items-center "
                        style={{ height: `${cardHeight}px` }}
                      >
                        <AuroraBackground>
                          <div className="relative px-5 py-6">
                            <h2 className="font-Grostek text-slate-950 text-start text-lg lg:text-xl xl:text-2xl  font-[600]">
                              {image.name}
                            </h2>
                            <motion.div className=" mt-1">
                              <p className="font-[300] font-Synonym text-black text-lg lg:text-sm xl:text-xl">
                                {image.text}
                              </p>
                            </motion.div>
                          </div>
                        </AuroraBackground>
                      </div>
                    </div>
                  </ReactCardFlip>
                </div>
              );
            }
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
