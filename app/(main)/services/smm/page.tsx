"use client";
import FAQSection from "../../(Home Page)/FAQ";
const services = [
  {
    icon: "◈",
    title: "Content Strategy",
    desc: "We craft data-backed content calendars aligned to your brand voice, audience segments, and platform algorithms.",
  },
  {
    icon: "◉",
    title: "Community Management",
    desc: "Real humans. Real conversations. We nurture your community with timely, on-brand engagement 7 days a week.",
  },
  {
    icon: "◐",
    title: "Paid Social Ads",
    desc: "ROI-focused campaigns across Meta, TikTok, LinkedIn, and Pinterest — from creative to conversion tracking.",
  },
  {
    icon: "◑",
    title: "Influencer Partnerships",
    desc: "We vet, brief, and manage creators who genuinely connect with your audience — no vanity metrics.",
  },
  {
    icon: "◒",
    title: "Analytics & Reporting",
    desc: "Monthly dashboards built around KPIs that actually matter to your business growth — not just likes.",
  },
  {
    icon: "◓",
    title: "Brand Audits",
    desc: "A full audit of your social presence: tone, positioning, competitors, and opportunities — delivered in 5 days.",
  },
];

const platforms = [
  "Instagram",
  "TikTok",
  "LinkedIn",
  "Facebook",
  "Pinterest",
  "X / Twitter",
];

const results = [
  { value: "4.2×", label: "Average ROAS on paid social" },
  { value: "89%", label: "Client retention rate" },
  { value: "120+", label: "Brands grown" },
  { value: "3M+", label: "Organic impressions monthly" },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We learn your goals, brand, and audience deeply before we propose anything.",
  },
  {
    step: "02",
    title: "Strategy Blueprint",
    desc: "A custom 90-day roadmap with content pillars, platform mix, and KPIs.",
  },
  {
    step: "03",
    title: "Creative Production",
    desc: "Our in-house team builds your content — copy, design, video, and scheduling.",
  },
  {
    step: "04",
    title: "Launch & Iterate",
    desc: "We go live, monitor performance daily, and optimize relentlessly.",
  },
];

const faqs = [
  {
    q: "How long before we see results?",
    a: "Most clients see meaningful engagement growth within 60 days. Paid campaigns can show ROAS improvement within the first 30.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Absolutely. We have packages tailored for startups and local businesses — not just enterprise brands.",
  },
  {
    q: "Will we own the content you create?",
    a: "Yes. All creative assets produced are fully owned by you from day one.",
  },
  {
    q: "What platforms do you manage?",
    a: "Instagram, TikTok, LinkedIn, Facebook, Pinterest, and X. We recommend focusing on 2–3 based on your audience.",
  },
];

// tailwind.config.js should include:
// theme: { extend: { colors: { primary: '#d4f04a' }, fontFamily: { cormorant: ['Cormorant', 'serif'] } } }

export default function SMMPage() {
  return (
    <div className="">
      {/* HERO */}
      <section className="px-[5vw] pt-[8vw] pb-[5vw] grid grid-cols-2 gap-12 items-end">
        <div>
          <p className="text-[11px] tracking-[0.2em] text-primary uppercase mb-6">
            Social Media Marketing
          </p>
          <h1 className="font-cormorant text-[clamp(48px,6vw,88px)] leading-none m-0 font-bold">
            Social that <br />
            <em className="italic">actually</em>
            <br /> converts.
          </h1>
        </div>
        <div>
          <p className="text-lg  leading-relaxed max-w-[440px] mb-8">
            We build and manage social media presences that drive real business
            outcomes — not just vanity metrics. Strategy, content, ads, and
            community — all under one roof.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-primary text-gray-200 text-sm font-medium px-7 py-3.5 rounded-full no-underline hover:opacity-90 transition-opacity"
            >
              Book a free audit
            </a>
            <a
              href="#work"
              className="text-[#f0ece4] border border-white/20 text-sm px-7 py-3.5 rounded-full no-underline hover:border-white/40 transition-colors"
            >
              See our work ↓
            </a>
          </div>
        </div>
      </section>

      {/* PLATFORM TICKER */}
      <div className="border-t border-b border-white/5 px-[5vw] py-3.5 flex gap-10 overflow-hidden">
        {[...platforms, ...platforms].map((p, i) => (
          <span
            key={i}
            className="text-xs text-white/25 whitespace-nowrap tracking-[0.08em] uppercase"
          >
            {p}
          </span>
        ))}
      </div>

      {/* RESULTS STRIP */}
      <section className="mx-[5vw] my-[4vw] grid grid-cols-4 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        {results.map((r, i) => (
          <div
            key={i}
            className={`p-8 ${i < results.length - 1 ? "border-r border-gray-600" : ""}`}
          >
            <div className="font-cormorant text-[clamp(32px,4vw,52px)] text-primary font-bold leading-none">
              {r.value}
            </div>
            <div className="text-[13px] text-white/35 mt-2 leading-snug">
              {r.label}
            </div>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="px-[5vw] py-[4vw]">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-cormorant text-[clamp(28px,3.5vw,48px)] m-0">
            What we do
          </h2>
          <span className="text-xs text-black tracking-[0.1em]">
            06 SERVICES
          </span>
        </div>
        <div className="grid grid-cols-3 border border-white/10 rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <div
              key={i}
              className={[
                "p-10 bg-white/[0.03] transition-colors cursor-default hover:bg-white/[0.06]",
                (i + 1) % 3 !== 0 ? "border-r border-gray-600" : "",
                i < 3 ? "border-b border-gray-600" : "",
              ].join(" ")}
            >
              <div className="text-2xl text-primary mb-4">{s.icon}</div>
              <h3 className="text-base font-medium m-0 mb-3 tracking-tight">
                {s.title}
              </h3>
              <p className="text-[13px] text-gray-700 leading-relaxed m-0">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <FAQSection />
      </section>
      {/* PROCESS */}
      <section className="bg-black px-[5vw] py-[4vw]  text-gray-300">
        <p className="text-[11px] tracking-[0.2em] uppercase mb-3 opacity-60">
          How it works
        </p>
        <h2 className="font-cormorant text-[clamp(28px,3.5vw,48px)] m-0 mb-12">
          Our process
        </h2>
        <div className="grid grid-cols-4">
          {process.map((p, i) => (
            <div
              key={i}
              className={[
                "pb-6",
                i < process.length - 1 ? "border-r border-black/15 pr-8" : "",
                i > 0 ? "pl-8" : "",
              ].join(" ")}
            >
              <div className="text-[11px] tracking-[0.15em] opacity-50 mb-4">
                {p.step}
              </div>
              <h3 className="text-[17px] font-medium m-0 mb-2.5">{p.title}</h3>
              <p className="text-[13px] leading-relaxed opacity-70 m-0">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="px-[5vw] py-[6vw] grid grid-cols-[1fr_2fr] gap-16 items-center">
        <div>
          <div className="w-14 h-14 rounded-full bg-white/10 mb-4 flex items-center justify-center text-xl">
            🧑‍💼
          </div>
          <p className="text-[13px]  m-0">Sarah K.</p>
          <p className="text-xs text-white/30 mt-1 m-0">
            CMO, Harborview Foods
          </p>
        </div>
        <blockquote className="m-0">
          <p className="font-cormorant text-[clamp(22px,2.8vw,38px)] leading-[1.35] text-gray-800 m-0 mb-5">
            "In six months, Bluenose took our Instagram from 3K followers to 40K
            — and more importantly, it actually drives sales now."
          </p>
          <span className="text-[13px] text-gray-700">
            Organic growth · Paid strategy · Community
          </span>
        </blockquote>
      </section>
    </div>
  );
}
