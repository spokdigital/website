import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    image: "/home/d2c.png",
    tag: "D2C Growth",
    number: "01",
    title: "Turn Browsers Into Buyers, Buyers Into Fans",
    description:
      "We build the conversion engine behind high-growth D2C brands — from storefront to post-purchase loyalty loops that keep customers coming back.",
    pointers: [
      "Conversion-optimised Shopify & headless storefronts",
      "Performance marketing & paid acquisition funnels",
      "Email & SMS retention systems (Klaviyo, Attentive)",
      "Subscription & loyalty programme architecture",
    ],
    link: "/d2c",
  },
  {
    image: "/home/website-landing.webp",
    tag: "Brand & Digital",
    number: "02",
    title: "Build a Brand Consumers Choose Over and Over",
    description:
      "Great products deserve great presence. We craft digital identities that stand out on the shelf, the feed, and every screen in between.",
    pointers: [
      "Brand strategy, identity & packaging design",
      "Social-first content systems & UGC playbooks",
      "SEO, marketplace listings & channel expansion",
      "Customer journey audits & CRO sprints",
    ],
    link: "/website-landing",
  },
];

const stats = [
  { num: "120+", label: "Brands Accelerated" },
  { num: "₹480Cr", label: "GMV Generated" },
  { num: "3.8×", label: "Avg. ROAS Improvement" },
];

const Whatwedobest = () => {
 

  return (
    <div  className="bg-[#0A0A0A] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ── HEADING ── */}
        <div className="gsap-reveal opacity-0 translate-y-10 text-center mb-20">
          <p className="font-mono text-[10px] tracking-[0.35em] text-primary uppercase mb-4 flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-px bg-primary opacity-40" />
            Our Expertise
            <span className="inline-block w-8 h-px bg-primary opacity-40" />
          </p>
          <h2 className="font-Cormorant text-5xl md:text-6xl font-[500] text-[#F5F2EC] leading-none tracking-tight">
            What We Do <em className="text-primary">Best</em>
          </h2>
          <p className="mt-4 text-sm text-[#888070] font-light max-w-md mx-auto leading-relaxed">
            End-to-end acceleration for consumer brands ready to scale — from
            first sale to category leader.
          </p>
        </div>

        {/* ── CARDS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {cards.map((card) => (
            <div
              key={card.tag}
              className="gsap-reveal group rounded-2xl overflow-hidden border border-primary/20 bg-[#111010] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_24px_48px_rgba(0,0,0,0.6)]"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover "
                />

                <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest uppercase text-primary bg-white border border-primary/30 px-3 py-1 rounded-full backdrop-blur-sm z-10">
                  {card.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="font-mono text-[10px] text-primary/40 tracking-widest mb-2">
                  {card.number} /
                </p>
                <h3 className="font-serif text-xl font-bold text-[#F5F2EC] leading-snug mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[13px] text-[#888070] leading-relaxed mb-5 font-light">
                  {card.description}
                </p>

                <div className="h-px bg-gradient-to-r from-primary/20 to-transparent mb-5" />

                <ul className="space-y-2 mb-6">
                  {card.pointers.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2.5 text-[13px] text-[#B8B0A0]"
                    >
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-primary opacity-70 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <a
                  href={card.link}
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/30 px-4 py-2.5 rounded-full transition-all duration-300 hover:bg-primary hover:text-black hover:border-primary"
                >
                  Explore Service
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM STRIP ── */}
        <div className="gsap-reveal opacity-0 translate-y-6 mt-16 border-t border-primary/15 pt-10 flex flex-wrap gap-5 items-center justify-between">
          <div className="flex gap-10 flex-wrap">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-serif text-3xl font-black text-primary leading-none">
                  {s.num}
                </span>
                <span className="text-[11px] text-[#888070] tracking-wide font-light">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="font-mono text-[10px] tracking-widest uppercase text-[#F5F2EC] border border-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#F5F2EC] hover:text-black"
          >
            Book a Strategy Call →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Whatwedobest;
