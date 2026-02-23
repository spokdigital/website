"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const VideoPortfolio = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [".2%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] py-20 bg-red-100">
      <motion.article className="flex container justify-center lg:justify-start items-center text-purple-950 gap-3">
        {["Videography"].map((text, index) => (
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
      <motion.div className="sticky top-0 flex h-screen   items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

const Card = ({
  card,
}: {
  card: { url: string; title: string; id: number; color: string };
}) => {
  return (
    <motion.div
      key={card.id}
      className="group overflow-hidden bg-gray-800 relative rounded-xl ml-10 h-[500px] w-[calc(50vw)] py-20"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={`media/videos/${card.id}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export default VideoPortfolio;

const cards = [
  {
    url: "media/video/1.mp4",
    title: "Portfolio 1",
    id: 1,
    color: "red",
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Portfolio 2",
    id: 2,
    color: "yellow",
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Portfolio 3",
    id: 3,
    color: "green",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Portfolio 4",
    id: 4,
    color: "blue",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Portfolio 4",
    id: 5,
    color: "blue",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Portfolio 4",
    id: 6,
    color: "blue",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Portfolio 7",
    id: 7,
    color: "blue",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Portfolio 7",
    id: 8,
    color: "blue",
  },
];
