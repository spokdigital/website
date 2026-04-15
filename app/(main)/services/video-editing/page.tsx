"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Zap,
  BarChart2,
  CheckCircle,
  Users,
  Layers,
  Star,
  Instagram,
  Youtube,
  Twitter,
  Play,
  ChevronRight,
  MessageCircle,
  Linkedin,
  Globe,
  Clock,
  Shield,
  Search,
  Eye,
  Compass,
  TrendingDown,
  EyeOff,
  ThumbsDown,
  PenTool,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <div
      className="stat-card opacity-0 relative overflow-hidden rounded-2xl p-5
                    bg-black/[.04] border border-black/[.07]
                    backdrop-blur-sm group hover:border-primary/30 transition-colors duration-500"
    >
      <div
        className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-primary/10
                      blur-xl group-hover:bg-primary/20 transition-colors duration-500"
      />
      <div className="font-Satoshi font-[600] text-4xl text-primary mb-1 relative">
        {num}
      </div>
      <div className="text-gray-800 text-xs relative">{label}</div>
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-black/[.02]
                     bg-white shadow-sm backdrop-blur-sm hover:-translate-y-1.5
                     transition-all duration-300 group ${className}`}
    >
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[.18em]
                  text-primary/70 mb-4"
    >
      <span className="w-4 h-px bg-primary/50 inline-block" />
      {children}
    </p>
  );
}

export default function SocialMediaLanding() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6 },
      )
        .fromTo(
          h1Ref.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.3",
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          statsRef.current?.querySelectorAll(".stat-card") ?? [],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3",
        );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.fromTo(
          el as Element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el as Element,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });
      gsap.utils.toArray(".reveal-stagger").forEach((group) => {
        gsap.fromTo(
          (group as Element).children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.13,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group as Element,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    });
    return () => ctx.revert();
  }, []);

  // ── Data ───────────────────────────────────────────────────────────────────
  const howSteps = [
    {
      num: "01",
      title: "Concept & Scripting",
      desc: "We craft ideas, hooks, and scripts designed to instantly grab attention and communicate clearly.",
      icon: <PenTool />,
    },
    {
      num: "02",
      title: "Editing for Performance",
      desc: "Fast cuts, subtitles, transitions, and pacing engineered to maximise retention.",
      icon: <Zap />,
    },
    {
      num: "03",
      title: "Platform Optimization",
      desc: "Each video is tailored for Reels, TikTok, YouTube Shorts, and ad formats.",
      icon: <Layers />,
    },
    {
      num: "04",
      title: "Test & Improve",
      desc: "We refine creatives based on performance data to continuously improve results.",
      icon: <TrendingUp />,
    },
  ];

  const deliverables = [
    "Short-form video editing (Reels / Shorts / Ads)",
    "Hook & script development",
    "Subtitles & caption design",
    "Motion graphics & transitions",
    "Platform-specific formatting",
    "Multiple creative variations",
    "Content repurposing",
    "Performance-focused editing strategy",
  ];
  const outcomes = [
    {
      icon: <TrendingUp size={20} />,
      label: "Higher watch time and retention",
    },
    {
      icon: <Star size={20} />,
      label: "Stronger engagement across platforms",
    },
    {
      icon: <Zap size={20} />,
      label: "Scroll-stopping content that converts",
    },
    {
      icon: <BarChart2 size={20} />,
      label: "Better ROI from video content",
    },
  ];

  const builtFor = [
    {
      label: "Brands scaling with video",
      icon: <Layers />,
      image: "/services/video/scaling-video.png",
    },
    {
      label: "Creators & personal brands",
      icon: <Users />,
      image: "/services/video/creators.jpg",
    },
    {
      label: "Performance-driven businesses",
      icon: <TrendingUp />,
      image: "/services/video/performance-driven-business.png",
    },
  ];

  const platforms = [
    { icon: <Instagram size={20} />, name: "Instagram" },
    { icon: <Youtube size={20} />, name: "YouTube" },
    { icon: <Twitter size={20} />, name: "X / Twitter" },
    { icon: <Linkedin size={20} />, name: "LinkedIn" },
    { icon: <Play size={20} />, name: "TikTok" },
    { icon: <Globe size={20} />, name: "Google Ads" },
  ];

  const whySpok = [
    {
      icon: <Clock size={20} />,
      title: "Fast onboarding",
      desc: "You're live within 7 days — not 6 weeks. We move at the speed of social.",
    },
    {
      icon: <Eye size={20} />,
      title: "Full transparency",
      desc: "Live dashboards you can check any time. No black-box reporting, ever.",
    },
    {
      icon: <Shield size={20} />,
      title: "No lock-in contracts",
      desc: "Month-to-month by default. We earn your trust every single month.",
    },
    {
      icon: <Search size={20} />,
      title: "Data-first decisions",
      desc: "Every content call is backed by analytics — not gut feel or guesswork.",
    },
    {
      icon: <MessageCircle size={20} />,
      title: "Dedicated strategist",
      desc: "A single point of contact who knows your brand as well as you do.",
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Growth guarantee",
      desc: "If we don't hit agreed targets in 90 days, you get a full month free.",
    },
  ];

  const secHead =
    "font-Cormorant text-[clamp(32px,5vw,64px)] font-[500] leading-none";

  return (
    <div className="font-body">
      {/* ─────────────────────────── HERO ───────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center container pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #de0f3f10 0%, transparent 65%)",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_.7fr] gap-4">
          <div className="relative">
            <div
              ref={badgeRef}
              className="opacity-0 inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full
                          text-xs font-medium tracking-wide
                          bg-primary/[.08] border border-primary/25 text-primary
                          shadow-[0_0_24px_rgba(222,15,63,.15)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Video creation & editing{" "}
            </div>

            <h1
              ref={h1Ref}
              className="opacity-0 font-grostek text-4xl lg:text-8xl
                         leading-[0.92] tracking-tight mb-7 text-gray-800"
            >
              Video Creation
              <br />
              Built for Attention{" "}
              <span
                style={{
                  WebkitTextStroke: "2px #de0f3f",
                  WebkitTextFillColor: "transparent",
                }}
              >
                That Lasts
              </span>
            </h1>

            <p
              ref={subRef}
              className="opacity-0 text-gray-700 text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-light"
            >
              We create performance-first videos — not just edits — designed to
              capture attention, retain viewers, and convert into real business
              outcomes.
            </p>

            <div ref={ctaRef} className="opacity-0 flex flex-wrap gap-3">
              <a
                href="#"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold
                          bg-primary hover:brightness-110 text-gray-50 transition-all
                          shadow-[0_0_32px_rgba(222,15,63,.35)]"
              >
                Book a Free Strategy Call <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm
                          border border-white/[.12] text-gray-900/80
                          hover:border-primary/50 hover:text-primary transition-all backdrop-blur-sm"
              >
                See Our Work <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className="relative mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl"
        >
          {[
            ["200+", "Creators activated"],
            ["3.8×", "Avg. campaign ROI"],
            ["120M+", "Total reach generated"],
            ["91%", "Repeat brand rate"],
          ].map(([n, l]) => (
            <StatCard key={l} num={n} label={l} />
          ))}
        </div>
      </section>

      <section className="container mt-7">
        <div className="reveal-up mb-12">
          <Tag>Performance</Tag>
          <h2 className={secHead}>WHAT GROWTH</h2>
          <h2 className={`${secHead} mb-4`}>
            ACTUALLY <span className="text-primary">LOOKS LIKE</span>
          </h2>
          <p className="text-gray-700 font-light max-w-lg">
            The gap between unmanaged social and a Spok Digital content system
            compounds fast. Here's what a typical client trajectory looks like.
          </p>
        </div>

        <div className="reveal-up grid md:grid-cols-2 gap-4">
          {/* ── Graph 1: Lead Growth ── */}
          <div className="relative rounded-2xl border border-black/[.07] bg-white/80 backdrop-blur-sm overflow-hidden p-6 md:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[.12em] text-gray-400 mb-1">
              Lead growth
            </p>
            <h3 className="text-[15px] font-medium text-gray-900 mb-4">
              Monthly leads — before vs. with Spok
            </h3>
            {/* Legend */}
            <div className="flex gap-4 mb-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-5 h-[2px] border-t border-dashed border-gray-400" />
                Before Spok
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-5 h-[2px] bg-primary" />
                With Spok Digital
              </span>
            </div>
            <div style={{ height: 220 }}>
              <LeadGrowthGraph />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-black/[.06] pt-5">
              {[
                ["19×", "Lead increase at 12 months"],
                ["Month 3", "Typical ad spend breakeven"],
              ].map(([val, desc]) => (
                <div key={desc} className="text-center">
                  <div className="text-xl font-bold text-primary mb-1">
                    {val}
                  </div>
                  <div className="text-xs text-gray-500 leading-snug">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Graph 2: Engagement Rate ── */}
          <div className="relative rounded-2xl border border-black/[.07] bg-white/80 backdrop-blur-sm overflow-hidden p-6 md:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[.12em] text-gray-400 mb-1">
              Engagement rate
            </p>
            <h3 className="text-[15px] font-medium text-gray-900 mb-4">
              Avg. engagement rate by platform
            </h3>
            {/* Legend */}
            <div className="flex gap-4 mb-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-5 h-[2px] bg-primary" />
                With Spok Digital
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-5 h-[2px] border-t border-dashed border-gray-400" />
                Industry avg.
              </span>
            </div>
            <div style={{ height: 220 }}>
              <EngagementGraph />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-black/[.06] pt-5">
              {[
                ["3.6×", "Above industry avg. engagement"],
                ["8.4×", "Avg. content ROI at 6 months"],
              ].map(([val, desc]) => (
                <div key={desc} className="text-center">
                  <div className="text-xl font-bold text-primary mb-1">
                    {val}
                  </div>
                  <div className="text-xs text-gray-500 leading-snug">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────── PROBLEM ───────────────────────────────────── */}
      <section className="container mt-20">
        <div className="reveal-up">
          <Tag>The problem</Tag>
          <h2 className={`${secHead} mb-3`}>MOST BRANDS ARE</h2>
          <h2 className={`${secHead} mb-12`}>
            JUST <span className="text-primary">POSTING</span>
          </h2>
        </div>

        <div className="reveal-stagger grid md:grid-cols-3 gap-3">
          {[
            {
              title: "Content that looks good but doesn’t perform",
              desc: "Aesthetic edits without strategy fail to hold attention or drive any real results.",
              icon: EyeOff,
            },
            {
              title: "No hook, no retention",
              desc: "Without strong openings and pacing, viewers drop off before your message lands.",
              icon: Compass,
            },
            {
              title: "Engagement without conversions",
              desc: "Views and likes mean nothing if they don’t turn into clicks, leads, or sales.",
              icon: ThumbsDown,
            },
          ].map(({ title, desc, icon: Icon }) => (
            <Card key={title} className="p-7 relative group">
              {/* Top hover line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <Icon size={16} className="text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-medium mb-2 text-[15px]">
                {title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ──────────────────────── HOW WE DO IT ──────────────────────────────── */}
      <section className="container mt-20">
        <div className="reveal-up mb-14">
          <Tag>Process</Tag>
          <h2 className={secHead}>HOW SPOK DIGITAL</h2>
          <h2 className={secHead}>WORKS</h2>
        </div>

        <div className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {howSteps.map((s) => (
            <Card key={s.title} className="p-6 ">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute -top-3 -right-1 font-display text-[72px] leading-none text-black/[.04] select-none pointer-events-none group-hover:text-primary/[.07] transition-colors duration-500">
                {s.num}
              </span>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-primary/[.08] border border-primary/20 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-gray-50 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(222,15,63,.4)]">
                  {s.icon}
                </div>
                <h3 className="text-gray-900 font-medium mb-2 text-[15px]">
                  {s.title}
                </h3>
                <p className="text-gray-800 text-xs leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ──────────────────── WHAT YOU GET + WHAT CHANGES ───────────────────── */}
      <section className=" mt-20 py-20 bg-black">
        <div className="container grid grid-cols-1 lg:grid-cols-2  gap-4">
          {" "}
          <div className="reveal-up relative overflow-hidden rounded-2xl p-8 border bg-white/10 border-white/[.07] ">
            <div
              className="absolute inset-0 opacity-[.03]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
                backgroundSize: "12px 12px",
              }}
            />
            <div className="relative">
              <Tag>Deliverables</Tag>
              <h2 className="font-Cormorant text-[42px] tracking-wider leading-none text-gray-50 mb-8">
                WHAT YOU GET
              </h2>
              <div className="grid grid-cols-2 gap-y-4 gap-x-3">
                {deliverables.map((d) => (
                  <div
                    key={d}
                    className="flex items-center gap-2.5 text-sm text-gray-50/60 group/item hover:text-gray-50 transition-colors cursor-default"
                  >
                    <CheckCircle
                      size={14}
                      className="text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform group-hover:text-primary"
                    />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="reveal-up rounded-2xl p-8 bg-primary relative overflow-hidden">
            <span className="absolute -bottom-4 -right-2 text-white/30 font-display text-[96px] leading-none text-bg-primary/[.08] select-none pointer-events-none">
              ROI
            </span>
            <div className="relative">
              <p className="text-gray-300 text-[11px] font-medium uppercase tracking-[.18em] mb-1">
                Outcomes
              </p>
              <h2 className="font-Satoshi text-[42px] text-gray-100 font-[500] tracking-tight leading-none text-bg-primary mb-5">
                WHAT CHANGES
              </h2>
              <div className="space-y-3">
                {outcomes.map((o) => (
                  <div
                    key={o.label}
                    className="flex items-center gap-3  rounded-xl px-4 py-3 border border-gray-200/20 bg-white/10 backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 text-gray-100 rounded-lg bg-bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {o.icon}
                    </div>
                    <span className="font-medium text-gray-200 text-sm text-bg-primary">
                      {o.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────── PLATFORMS ─────────────────────────────────── */}
      <section className="container mt-20">
        <div className="reveal-up mb-12 text-center">
          <Tag>Coverage</Tag>
          <h2 className={secHead}>PLATFORMS WE</h2>
          <h2 className={`${secHead} mb-4`}>
            <span className="text-primary">DOMINATE</span>
          </h2>
          <p className="text-gray-700 font-light max-w-md mx-auto">
            We don't spread thin. We master the channels that move the needle
            for your specific business.
          </p>
        </div>

        <div className="reveal-stagger grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {platforms.map((p) => (
            <Card
              key={p.name}
              className="p-6 flex flex-col items-center gap-3 text-center cursor-default"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-2xl bg-primary/[.08] border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-gray-50 group-hover:shadow-[0_0_28px_rgba(222,15,63,.4)] transition-all duration-300">
                {p.icon}
              </div>
              <span className="text-gray-900 text-xs font-medium">
                {p.name}
              </span>
            </Card>
          ))}
        </div>
      </section>

      {/* ──────────────────────── WHY SPOK ──────────────────────────────────── */}
      <section className="container mt-20">
        <div className="reveal-up mb-14">
          <Tag>Why us</Tag>
          <h2 className={secHead}>WHY SPOK</h2>
          <h2 className={`${secHead}`}>
            <span className="text-primary">DIGITAL</span>
          </h2>
        </div>

        <div className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {whySpok.map((w) => (
            <Card key={w.title} className="p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-10 h-10 rounded-xl bg-primary/[.08] border border-primary/20 flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-gray-50 transition-all duration-300">
                {w.icon}
              </div>
              <h3 className="text-gray-900 font-medium mb-2 text-[15px]">
                {w.title}
              </h3>
              <p className="text-gray-800 text-xs leading-relaxed">{w.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ──────────────────────── BUILT FOR ─────────────────────────────────── */}
      <section className="container mt-24">
        {/* Heading */}
        <div className="reveal-up mb-16 text-center">
          <Tag>Ideal fit</Tag>
          <h2 className={secHead}>BUILT FOR</h2>
        </div>

        {/* Grid */}
        <div className="reveal-stagger grid md:grid-cols-3 gap-5">
          {builtFor.map((b) => (
            <div
              key={b.label}
              className="group relative h-[280px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={b.image}
                alt={b.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 text-left">
                {/* Icon (optional small) */}
                <div className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center bg-white/10 backdrop-blur border border-white/20 text-white">
                  {b.icon}
                </div>

                <h3 className="text-white text-lg font-semibold leading-tight">
                  {b.label}
                </h3>

                {/* subtle underline on hover */}
                <div className="mt-2 h-[2px] w-0 bg-primary transition-all duration-400 group-hover:w-10" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="container pb-20 mt-20">
        <div className="p-10 lg:p-16 w-full bg-gradient-to-tr from-red-400 to-red-600 text-slate-100 rounded-2xl relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-widest text-white/60 font-Grostek mb-3">
              Ready to scale?
            </p>
            <h2 className="text-4xl lg:text-5xl font-Grostek font-[600] leading-tight max-w-xl">
              Turn Your Content Into a Growth Engine
            </h2>
            <p className="mt-4 font-Synonym font-[400] text-lg max-w-2xl text-white/80">
              We don’t just edit videos — we build content systems that drive
              attention, engagement, and conversions.
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
        </div>
      </div>
    </div>
  );
}

function LeadGrowthGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const W = rect.width,
      H = rect.height;
    const pL = 44,
      pR = 16,
      pT = 16,
      pB = 36;
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const before = [8, 10, 9, 12, 11, 13, 14, 13, 15, 14, 16, 17];
    const after = [8, 10, 9, 18, 28, 41, 58, 72, 89, 108, 131, 158];
    const maxV = 160;
    const xS = (i: number) => pL + (i / 11) * (W - pL - pR);
    const yS = (v: number) => pT + (1 - v / maxV) * (H - pT - pB);
    [0, 40, 80, 120, 160].forEach((g) => {
      const y = yS(g);
      ctx.strokeStyle = "rgba(0,0,0,0.05)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(pL, y);
      ctx.lineTo(W - pR, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = "rgba(0,0,0,0.3)";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(`${g}K`, pL - 5, y);
    });
    months.forEach((m, i) => {
      if (i % 2 !== 0) return;
      ctx.fillStyle = "rgba(0,0,0,0.3)";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText(m, xS(i), H - pB + 6);
    });
    // Before line
    ctx.setLineDash([5, 4]);
    ctx.strokeStyle = "rgba(0,0,0,0.2)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    before.forEach((v, i) => {
      const x = xS(i),
        y = yS(v);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.setLineDash([]);
    // After fill
    const grad = ctx.createLinearGradient(0, pT, 0, H - pB);
    grad.addColorStop(0, "rgba(222,15,63,0.15)");
    grad.addColorStop(1, "rgba(222,15,63,0)");
    ctx.beginPath();
    after.forEach((v, i) => {
      const x = xS(i),
        y = yS(v);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.lineTo(xS(11), H - pB);
    ctx.lineTo(xS(0), H - pB);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();
    // After line
    ctx.strokeStyle = "#de0f3f";
    ctx.lineWidth = 2;
    ctx.beginPath();
    after.forEach((v, i) => {
      const x = xS(i),
        y = yS(v);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();
    // Annotation
    const ax = xS(3),
      ay = yS(18);
    ctx.strokeStyle = "rgba(222,15,63,0.35)";
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(ax, ay - 8);
    ctx.lineTo(ax, pT + 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#de0f3f";
    ctx.font = "bold 9px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("Spok starts", ax, pT + 3);
    // End dot
    ctx.beginPath();
    ctx.arc(xS(11), yS(158), 4, 0, Math.PI * 2);
    ctx.fillStyle = "#de0f3f";
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}

function EngagementGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const W = rect.width,
      H = rect.height;
    const platforms = [
      "Instagram",
      "LinkedIn",
      "TikTok",
      "YouTube",
      "X / Twitter",
    ];
    const spok = [6.8, 5.2, 9.4, 7.1, 4.3];
    const avgRate = [1.9, 1.1, 3.2, 2.4, 0.9];
    const pL = 72,
      pR = 36,
      pT = 10,
      pB = 24;
    const maxV = 11;
    const rowH = (H - pT - pB) / platforms.length;
    const barH = rowH * 0.28;
    const xS = (v: number) => pL + (v / maxV) * (W - pL - pR);
    [0, 3, 6, 9].forEach((g) => {
      const x = xS(g);
      ctx.strokeStyle = "rgba(0,0,0,0.05)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(x, pT);
      ctx.lineTo(x, H - pB);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = "rgba(0,0,0,0.3)";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText(`${g}%`, x, H - pB + 4);
    });
    platforms.forEach((p, i) => {
      const cy = pT + i * rowH + rowH / 2;
      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(p, pL - 6, cy);
      // Industry avg bar
      const aW = xS(avgRate[i]) - pL;
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.beginPath();
      ctx.roundRect(pL, cy + 1, aW, barH, 2);
      ctx.fill();
      // Spok bar
      const sW = xS(spok[i]) - pL;
      ctx.fillStyle = "#de0f3f";
      ctx.beginPath();
      ctx.roundRect(pL, cy - barH - 1, sW, barH, 2);
      ctx.fill();
      // Value label
      ctx.fillStyle = "#de0f3f";
      ctx.font = "bold 10px sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(`${spok[i]}%`, pL + sW + 4, cy - barH / 2 - 1);
    });
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
