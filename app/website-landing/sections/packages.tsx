"use client";

import { Check, Zap, Users } from "lucide-react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
gsap.registerPlugin(ScrollToPlugin);
const plans = [
  {
    name: "Lite",
    badge: "Basic",
    badgeDark: true,
    desc: "Perfect for growing brands that need a high-converting website foundation and clear digital positioning.",
    price: "5,000",
    unit: "month",
    cta: "Book a call",
    dark: false,
    icon: <Zap size={18} />,
    features: [
      "8-page conversion website",
      " Basic SEO setup",
      " 5 performance creatives",
      " 1 campaign angle",
      "Lead gen campaign setup",
      "Pixel & tracking setup",
      "7-day post-launch optimization",
    ],
  },
  {
    name: "Core",
    badge: "Pro",
    badgeDark: false,
    desc: "A complete growth system seamlessly combining website performance with structured lead generation strategies.",
    price: "8,000",
    unit: "month",
    cta: "Book a call",
    dark: true,
    icon: <Users size={18} />,
    features: [
      "Everything in Lite",
      "12–15 page high-conversion website",
      " Advanced SEO",
      " 10 performance creatives",
      " 3 campaign angles",
      " Multi-step funnel setup",
      " Advanced audience targeting",
      "Conversion tracking integration",
      "Creative A/B testing",
      " 30-day scaling & optimization",
    ],
  },
];

const cornerPositions = [
  "top-3.5 left-3.5",
  "top-3.5 right-3.5",
  "bottom-3.5 left-3.5",
  "bottom-3.5 right-3.5",
];

export default function PricingSection() {
  const scrollToBooking = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: "#booking",
      ease: "power3.out",
    });
  };
  return (
    <section id={"pricing"} className="min-h-screen pt-20 pb-20 font-cormorant">
      <style>{`
        .dot-grid::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0);
          background-size: 20px 20px;
          pointer-events: none;
          border-radius: inherit;
        }
      `}</style>

      <div className="w-[93%] lg:max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex justify-center items-center gap-2 mb-3">
          <span className="w-10 h-px bg-gray-300" />
          <span className="text-xs font-semibold text-gray-400 tracking-[0.14em] uppercase font-cormorant">
            Pricing
          </span>
          <span className="w-10 h-px bg-gray-300" />
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-Cormorant font-[400] text-gray-900 leading-tight mb-3 flex flex-wrap items-center tracking-tight justify-center gap-2 font-cormorant">
            Flexible <span className=" text-primary italic">Pricing</span> For
            Every Need
          </h1>
          <p className="text-sm text-gray-500 max-w-[520px] mx-auto leading-relaxed font-mono"></p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-[20px] border overflow-hidden transition-all duration-200 hover:-translate-y-1
                ${
                  plan.dark
                    ? "dot-grid bg-[#111] border-[#222] text-white shadow-[0_12px_48px_rgba(0,0,0,0.35)]"
                    : "bg-white border-gray-200 text-gray-900 shadow-[0_4px_20px_rgba(0,0,0,0.07)]"
                }`}
            >
              {/* Corner dots */}
              {cornerPositions.map((pos, k) => (
                <span
                  key={k}
                  className={`absolute w-1.5 h-1.5 rounded-full z-10 ${pos} ${plan.dark ? "bg-[#333]" : "bg-gray-300"}`}
                />
              ))}

              <div className="relative z-10 p-8">
                {/* Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center
                      ${plan.dark ? "bg-white text-gray-900" : "bg-gray-100 text-gray-600"}`}
                  >
                    {plan.icon}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full text-white font-Satoshi
                      ${plan.badgeDark ? "bg-gray-900" : "bg-primary"}`}
                  >
                    <span
                      className={`w-1.5 h-1.5  rounded-full inline-block ${plan.badgeDark ? "bg-primary" : "bg-white"}`}
                    />
                    {plan.badge}
                  </span>
                </div>

                {/* Name */}
                <h2
                  className={`text-3xl font-bold mb-2 font-Grostek ${plan.dark ? "text-white" : "text-gray-900"}`}
                >
                  {plan.name}
                </h2>

                {/* Desc */}
                <p
                  className={`text-sm font-mono leading-relaxed mb-6 ${plan.dark ? "text-gray-400" : "text-gray-500"}`}
                >
                  {plan.desc}
                </p>

                {/* Price */}
                <div className="flex items-end gap-1 mb-6">
                  <span
                    className={`text-[44px] font-bold leading-none tracking-tight font-Satoshi ${plan.dark ? "text-white" : "text-gray-900"}`}
                  >
                    <span className="text-3xl">AED</span> {plan.price}
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={scrollToBooking}
                  className={`w-full py-3.5 rounded text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer border-none mb-7 font-Satoshi
                    ${
                      plan.dark
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-gray-900 text-white hover:bg-[#e8401c]"
                    }`}
                >
                  {plan.cta}
                </button>

                {/* Divider */}
                <div
                  className={`h-px mb-6 ${plan.dark ? "bg-[#222]" : "bg-gray-100"}`}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3.5">
                  {plan.features.map((feat, j) => (
                    <li
                      key={j}
                      className={`flex items-start gap-3 text-sm leading-relaxed font-Synonym ${plan.dark ? "text-gray-300" : "text-gray-500"}`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5
                          ${plan.dark ? "bg-[#1a1a1a] text-primary" : "bg-gray-100 text-gray-900"}`}
                      >
                        <Check size={11} strokeWidth={3} />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
