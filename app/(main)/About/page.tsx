"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { Target, BarChart3, Handshake, Trophy } from "lucide-react";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
});

const SectionHeading = ({ words }: { words: string[] }) => (
  <motion.article className="flex flex-wrap justify-center lg:justify-start items-center text-black gap-3 overflow-hidden mb-10">
    {words.map((text, i) => (
      <motion.h1
        key={i}
        {...fadeUp(i * 0.1)}
        className="text-5xl lg:text-6xl leading-none font-Grostek font-[600] tracking-tight"
      >
        {text}
      </motion.h1>
    ))}
  </motion.article>
);

const selfPraise = [
  {
    title: "Expert Team Support",
    content:
      "Our professionals bring years of experience and industry knowledge to every project.",
    icon: Target,
  },
  {
    title: "Measurable Results",
    content:
      "We combine creativity with analytics to deliver strategies that work.",
    icon: BarChart3,
  },
  {
    title: "Client-First Approach",
    content:
      "We prioritize your vision and values, ensuring campaigns align with your brand's identity.",
    icon: Handshake,
  },
  {
    title: "Proven Success",
    content:
      "Our track record speaks for itself, with satisfied clients across various industries.",
    icon: Trophy,
  },
];

const points = [
  {
    title: "Innovators",
    desc: "Who embrace emerging trends and cutting-edge technology.",
  },
  {
    title: "Storytellers",
    desc: "Who craft compelling narratives to spark emotional connections.",
  },
  {
    title: "Problem-solvers",
    desc: "Who thrive on turning challenges into opportunities.",
  },
  {
    title: "Collaborators",
    desc: "Who believe the best ideas are born through partnership.",
  },
];

const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "200+", label: "Clients served" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3x", label: "Average ROI delivered" },
];

const Page = () => {
  const [height, setHeight] = React.useState(0);
  const whoContainerRef = React.useRef<HTMLDivElement>(null);
  const selfPrasiseContainer = React.useRef<HTMLDivElement>(null);
  const whoInView = useInView(whoContainerRef, { once: true });
  const boxInView = useInView(selfPrasiseContainer, { once: true });

  React.useEffect(() => {
    const el = document.getElementsByClassName("HeadNavigation")[0];
    if (el) setHeight(el.getBoundingClientRect().height);
  }, []);

  return (
    <div>
      {/* ── Hero ── */}
      <div
        className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4"
        style={{ paddingTop: height + 40 }}
      >
        <motion.p
          {...fadeUp(0)}
          className="text-xs uppercase tracking-[0.3em] text-black/40 font-Grostek mb-6"
        >
          Welcome to Spok Digital
        </motion.p>

        <motion.h1 className="font-[600] text-slate-950 text-4xl lg:text-7xl font-Grostek max-w-4xl leading-tight">
          {"Transforming Brands with Digital Excellence"
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3 overflow-hidden"
                style={{ verticalAlign: "bottom" }}
              >
                <motion.span
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    ease: [0, 0, 0.2, 1],
                    duration: 0.9,
                    delay: i * 0.08,
                  }}
                  style={{ display: "inline-block" }}
                >
                  {word}
                </motion.span>
              </motion.span>
            ))}
        </motion.h1>

        <motion.p
          {...fadeUp(0.6)}
          className="text-slate-500 text-lg lg:text-xl font-SplineSans mt-5 max-w-xl"
        >
          Beyond Marketing — We build connections that drive real, measurable
          growth for your brand.
        </motion.p>

        <motion.div {...fadeUp(0.8)} className="flex gap-4 mt-8">
          <Link href="/contact">
            <button className="px-6 py-3 bg-black text-white font-SplineSans rounded-full text-sm hover:bg-black/80 transition-colors">
              Work with us
            </button>
          </Link>
          <Link href="/Portfolio">
            <button className="px-6 py-3 border border-black/20 text-black font-SplineSans rounded-full text-sm hover:bg-black/5 transition-colors">
              See our work
            </button>
          </Link>
        </motion.div>

        {/* stats strip */}
        <motion.div
          {...fadeUp(1)}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden mt-16 w-full max-w-3xl"
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-white px-6 py-5 text-center">
              <p className="text-3xl lg:text-4xl font-Grostek font-[600] text-primary">
                {s.value}
              </p>
              <p className="text-xs text-black/40 mt-1 font-Satoshi">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── About Us ── */}
      <section className="bg-black py-24">
        <div className="container ">
          <div className="grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] gap-16 items-center">
            {/* left — sticky text block */}
            <div className="">
              <motion.p
                {...fadeUp(0)}
                className="text-xs uppercase tracking-[0.3em] text-gray-50/70 font-Grostek mb-5"
              >
                About Spok Digital
              </motion.p>

              <motion.h2
                {...fadeUp(0.1)}
                className="text-5xl lg:text-7xl font-Grostek font-[600] text-gray-100 tracking-tight leading-[1.05] mb-8"
              >
                We turn bold <br />
                <span className="text-primary">ideas</span> into <br />
                real growth.
              </motion.h2>

              <motion.p
                {...fadeUp(0.2)}
                className="text-base font-Satoshi leading-relaxed text-white/55 max-w-lg"
              >
                Spok Digital is a full-service digital marketing agency built
                for brands that refuse to be ordinary. We blend creativity,
                data, and strategy to deliver campaigns that actually move the
                needle.
              </motion.p>

              <motion.div
                {...fadeUp(0.3)}
                className="flex items-center gap-6 mt-10"
              >
                <Link href="/contact">
                  <button className="px-6 py-3 bg-primary text-white font-SplineSans rounded-full text-sm hover:bg-black/80 transition-colors">
                    Work with us
                  </button>
                </Link>
                <Link href="/Portfolio">
                  <span className="text-sm !bg-white !text-black px-7 py-3 rounded-full font-SplineSans text-white/50 hover:text-white transition-colors underline underline-offset-4 cursor-pointer">
                    See our work →
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* right — cards stack */}
            <div className="flex flex-col gap-5">
              {[
                {
                  num: "01",
                  label: "Our Vision",
                  body: "To be the driving force behind transformative marketing — building brands that connect, inspire, and endure in an ever-evolving digital world.",
                  accent: "bg-primary/8",
                },
                {
                  num: "02",
                  label: "Our Mission",
                  body: "To empower businesses with tailored strategies that amplify their voice, connect with their audience, and deliver sustainable, measurable growth.",
                  accent: "bg-black/[0.03]",
                },
                {
                  num: "03",
                  label: "Our Promise",
                  body: "Radical transparency, relentless creativity, and a client-first mindset — every campaign we run is built around your success, not vanity metrics.",
                  accent: "bg-black/[0.03]",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.15 + i * 0.15)}
                  className={`group rounded-2xl p-6 ${item.accent} border border-white/20 hover:border-white/35 transition-all duration-300`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-Grostek text-white/25 tracking-widest uppercase">
                          {item.num}
                        </span>
                        <div className="h-px flex-1 bg-black/8" />
                      </div>
                      <h3 className="font-Grostek text-xl text-gray-100 font-[600] mb-2">
                        {item.label}
                      </h3>
                      <p className="text-sm font-Satoshi leading-relaxed text-white/55">
                        {item.body}
                      </p>
                    </div>
                    <span className="text-white/10 text-4xl font-Grostek font-[700] leading-none group-hover:text-primary/20 transition-colors select-none mt-1">
                      →
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}

      <div ref={whoContainerRef} className="container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 items-start">
          {/* Image column */}
          <div className="order-2 lg:order-1 space-y-4">
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
              <motion.div
                animate={{ y: whoInView ? "-100%" : "0%" }}
                transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
                className="absolute inset-0 bg-primary z-10"
              />
              <img
                src="/media/we_are_image.jpg"
                className="w-full h-full object-cover"
                alt="Who we are"
              />
            </div>

            {/* Stat strip below image */}
            <motion.div
              {...fadeUp(0.5)}
              className="grid grid-cols-3 divide-x divide-black/20 border border-black/20 rounded-2xl overflow-hidden"
            >
              {[
                { value: "8+", label: "Years active" },
                { value: "200+", label: "Projects delivered" },
                { value: "98%", label: "Client satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="py-5 px-4 bg-primary text-center">
                  <p className="font-Grostek font-[700] text-2xl text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs font-Satoshi text-white/80 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Content column */}
          <div className="order-1 lg:order-2 pt-2">
            <motion.p
              {...fadeUp(0)}
              className="text-xs uppercase tracking-widest text-black/30 font-Grostek mb-4"
            >
              Our story
            </motion.p>

            <motion.h2
              {...fadeUp(0.1)}
              className="text-4xl lg:text-[3.25rem] font-Grostek font-[600] tracking-tight leading-[1.1] mb-6"
            >
              We craft brands that people actually remember.
            </motion.h2>

            <motion.div
              {...fadeUp(0.2)}
              className="w-12 h-0.5 bg-primary mb-6"
            />

            <motion.p
              {...fadeUp(0.25)}
              className="text-base font-Satoshi leading-relaxed text-black/60 mb-10 max-w-lg"
            >
              At Spok Digital, every brand has a unique story waiting to be
              told. Founded on passion, creativity, and a deep understanding of
              marketing trends, we deliver solutions that produce measurable
              results — helping you grow, connect, and stand out.
            </motion.p>

            <div className="space-y-3">
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  {...fadeUp(0.3 + idx * 0.08)}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-black/20 hover:border-black/16 hover:bg-black/30 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/15 transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="font-Grostek font-[600] text-base mb-0.5">
                      {point.title}
                    </p>
                    <p className="text-sm  font-Satoshi text-black/50 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ── */}
      <div ref={selfPrasiseContainer} className="container pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeading words={["Why", "Choose", "us?"]} />
          <motion.p
            {...fadeUp(0.3)}
            className="text-base text-black/50 font-Satoshi max-w-sm lg:text-right mb-10"
          >
            Four reasons why leading brands trust Spok Digital to drive their
            growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {selfPraise.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                animate={{
                  y: boxInView ? "0%" : "40%",
                  opacity: boxInView ? 1 : 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.175, 0.885, 0.32, 1],
                }}
                className="group relative rounded-2xl p-6 bg-black text-slate-50 flex flex-col gap-5 overflow-hidden"
              >
                {/* large number watermark */}
                <span className="absolute top-3 right-4 text-7xl font-Grostek font-[700] text-white/20 select-none leading-none">
                  {i + 1}
                </span>

                <div className="p-3 rounded-xl w-fit bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-SplineSans font-[500] capitalize leading-snug mb-3">
                    {item.title}
                  </h2>
                  <p className="text-sm font-Grostek text-slate-400 leading-relaxed">
                    {item.content}
                  </p>
                </div>

                {/* bottom accent line */}
                <div className="h-px w-0 group-hover:w-full bg-primary transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="container pb-20">
        <motion.div
          {...fadeUp(0.2)}
          className="p-10 lg:p-16 w-full bg-gradient-to-tr from-red-400 to-red-600 text-slate-100 rounded-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-widest text-white/60 font-Grostek mb-3">
              Ready to scale?
            </p>
            <h2 className="text-4xl lg:text-5xl font-Grostek font-[600] leading-tight max-w-xl">
              Let's Grow Together
            </h2>
            <p className="mt-4 font-Synonym font-[400] text-lg max-w-2xl text-white/80">
              At Spok Digital, we don't just market products — we build
              connections that last. Whether you're a startup making your first
              move or an established brand ready to level up, we're here to
              help.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/contact">
                <button className="px-6 py-3 bg-white text-slate-900 font-SplineSans rounded-full text-sm font-[500] hover:bg-white/90 transition-colors">
                  Contact us
                </button>
              </Link>
              <Link href="/Portfolio">
                <button className="px-6 py-3 border border-white/30 text-white font-SplineSans rounded-full text-sm hover:bg-white/10 transition-colors">
                  View our work
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute right-20 bottom-20 w-32 h-32 bg-white/5 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
