"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useScrollReveal } from "@/app/lib/use-scroll-reveal";
import {
    ArrowRight,
    TrendingUp,
    Target,
    Zap,
    BarChart2,
    CheckCircle,
    Users,
    Layers,
    ChevronRight,
    MessageCircle,
    Clock,
    Shield,
    Search,
    Eye,
    Compass,
    TrendingDown,
    Wrench,
    FileText,
    MapPin,
    Link2,
    ShoppingCart,
    Languages,
    Plus,
    Rocket,
    Store,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Faq = { q: string; a: string };

function StatCard({ num, label }: { num: string; label: string }) {
    return (
        <div
            className="stat-card opacity-0 relative overflow-hidden rounded-2xl p-5
                    bg-black/4 border border-black/[.07]
                    backdrop-blur-xs group hover:border-primary/30 transition-colors duration-500"
        >
            <div
                className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-primary/10
                      blur-xl group-hover:bg-primary/20 transition-colors duration-500"
            />
            <div className="font-Satoshi font-semibold text-4xl text-primary mb-1 relative">
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
    className?: string;
}) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl border border-black/2
                     bg-white shadow-xs backdrop-blur-xs hover:-translate-y-1.5
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

export default function SeoLanding({ faqs }: { faqs: Faq[] }) {
    const badgeRef = useRef<HTMLDivElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    useScrollReveal();

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
            icon: <Search size={20} />,
            num: "01",
            title: "Audit & Research",
            desc: "A full technical, content, and competitor audit, plus keyword research built around what your buyers actually search for.",
        },
        {
            icon: <Compass size={20} />,
            num: "02",
            title: "Strategy & Roadmap",
            desc: "A prioritised plan that ranks fixes by impact, so the highest-value work happens first.",
        },
        {
            icon: <Wrench size={20} />,
            num: "03",
            title: "Execution",
            desc: "Technical fixes, on-page optimisation, content production, and link building, all handled for you.",
        },
        {
            icon: <BarChart2 size={20} />,
            num: "04",
            title: "Track & Scale",
            desc: "Monthly reporting on rankings, traffic, and leads, then we double down on what is working.",
        },
    ];

    const deliverables = [
        "Technical SEO audit & fixes",
        "Keyword research & mapping",
        "On-page optimisation",
        "SEO content strategy & writing",
        "Arabic & English SEO",
        "Authority link building",
        "Google Business Profile setup",
        "Monthly reporting & strategy calls",
    ];

    const outcomes = [
        {
            icon: <Search size={18} />,
            label: "Higher rankings for buyer-intent keywords",
        },
        {
            icon: <TrendingUp size={18} />,
            label: "Steady growth in organic traffic",
        },
        {
            icon: <Users size={18} />,
            label: "Visitors who are ready to buy, not just browse",
        },
        { icon: <Zap size={18} />, label: "More inbound leads without more ad spend" },
    ];

    const builtFor = [
        {
            icon: <Store size={26} />,
            label: "D2C & ecommerce brands",
            desc: "Category and product pages that rank and convert.",
        },
        {
            icon: <MapPin size={26} />,
            label: "Local & service businesses",
            desc: "Own the map pack and “near me” searches in your city.",
        },
        {
            icon: <Rocket size={26} />,
            label: "Startups & new websites",
            desc: "Build search visibility from day one, the right way.",
        },
    ];

    const services = [
        { icon: <Wrench size={20} />, name: "Technical SEO" },
        { icon: <FileText size={20} />, name: "On-page SEO" },
        { icon: <Layers size={20} />, name: "Content SEO" },
        { icon: <MapPin size={20} />, name: "Local SEO" },
        { icon: <Link2 size={20} />, name: "Link building" },
        { icon: <ShoppingCart size={20} />, name: "Ecommerce SEO" },
    ];

    const whySpok = [
        {
            icon: <Clock size={20} />,
            title: "Fast onboarding",
            desc: "Your audit starts in week one, and quick wins ship before the first month is out.",
        },
        {
            icon: <Eye size={20} />,
            title: "Full transparency",
            desc: "Clear monthly reports with real numbers. You always know what was done and why.",
        },
        {
            icon: <Shield size={20} />,
            title: "White-hat only",
            desc: "No shortcuts, spammy links, or risky tactics that put your site at risk of penalties.",
        },
        {
            icon: <Languages size={20} />,
            title: "Arabic & English",
            desc: "Bilingual optimisation for the UAE market, with correct hreflang and localised content.",
        },
        {
            icon: <MessageCircle size={20} />,
            title: "Dedicated strategist",
            desc: "A single point of contact who knows your brand, your market, and your goals.",
        },
        {
            icon: <Target size={20} />,
            title: "Revenue-focused",
            desc: "We track leads and sales, not just rankings, so SEO is judged by what it earns.",
        },
    ];

    const secHead =
        "font-Cormorant text-[clamp(32px,5vw,64px)] font-medium leading-none";

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
                          bg-primary/8 border border-primary/25 text-primary
                          shadow-[0_0_24px_rgba(222,15,63,.15)]"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            SEO that brings in customers, not just traffic
                        </div>

                        <h1
                            ref={h1Ref}
                            className="opacity-0 font-grostek text-4xl lg:text-8xl
                         leading-[0.92] tracking-tight mb-7 text-gray-800"
                        >
                            Get Found on Google with{" "}
                            <span
                                style={{
                                    WebkitTextStroke: "2px #de0f3f",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                SEO Services
                            </span>{" "}
                            in Dubai
                        </h1>

                        <p
                            ref={subRef}
                            className="opacity-0 text-gray-700 text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-light"
                        >
                            Not vanity rankings. We build search strategies that put your
                            brand in front of buyers in the UAE and turn clicks into real
                            inbound leads.
                        </p>

                        <div ref={ctaRef} className="opacity-0 flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold
                          bg-primary text-gray-50 hover:brightness-110 transition-all
                          shadow-[0_0_32px_rgba(222,15,63,.35)]"
                            >
                                Get a Free SEO Audit <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/Portfolio"
                                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm
                          border border-white/12 text-gray-900/80
                          hover:border-primary/50 hover:text-primary transition-all backdrop-blur-xs"
                            >
                                See Our Work <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* TODO: replace these with your real numbers before publishing */}
                <div
                    ref={statsRef}
                    className="relative mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl"
                >
                    {[
                        ["150+", "Keywords ranked on page one"],
                        ["3.2×", "Avg. organic traffic growth"],
                        ["6 mo", "Typical time to major gains"],
                        ["92%", "Client retention rate"],
                    ].map(([n, l]) => (
                        <StatCard key={l} num={n} label={l} />
                    ))}
                </div>
            </section>

            {/* ──────────────────────── GRAPHS ────────────────────────────────────── */}
            <section className="container mt-7">
                <div className="reveal-up mb-12">
                    <Tag>Performance</Tag>
                    <h2 className={secHead}>WHAT SEO GROWTH</h2>
                    <h2 className={`${secHead} mb-4`}>
                        ACTUALLY <span className="text-primary">LOOKS LIKE</span>
                    </h2>
                    <p className="text-gray-700 font-light max-w-lg">
                        SEO compounds. The gap between a site that is left alone and one
                        with a managed strategy widens every month. Here is a typical
                        client trajectory.
                    </p>
                </div>

                <div className="reveal-up grid md:grid-cols-2 gap-4">
                    {/* Graph 1 */}
                    <div className="relative rounded-2xl border border-black/[.07] bg-white/80 backdrop-blur-xs overflow-hidden p-6 md:p-8">
                        <p className="text-[11px] font-medium uppercase tracking-[.12em] text-gray-400 mb-1">
                            Organic traffic
                        </p>
                        <h3 className="text-[15px] font-medium text-gray-900 mb-4">
                            Monthly organic clicks, before vs. with Spok
                        </h3>
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
                            <TrafficGrowthGraph />
                        </div>
                        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-black/6 pt-5">
                            {[
                                ["6.8×", "Organic click increase at 12 months"],
                                ["Month 4", "Typical first page-one rankings"],
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

                    {/* Graph 2 */}
                    <div className="relative rounded-2xl border border-black/[.07] bg-white/80 backdrop-blur-xs overflow-hidden p-6 md:p-8">
                        <p className="text-[11px] font-medium uppercase tracking-[.12em] text-gray-400 mb-1">
                            Keyword rankings
                        </p>
                        <h3 className="text-[15px] font-medium text-gray-900 mb-4">
                            Keywords ranking by position
                        </h3>
                        <div className="flex gap-4 mb-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <span className="inline-block w-5 h-[2px] bg-primary" />
                                After 12 months with Spok
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="inline-block w-5 h-[2px] border-t border-dashed border-gray-400" />
                                Before Spok
                            </span>
                        </div>
                        <div style={{ height: 220 }}>
                            <RankingsGraph />
                        </div>
                        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-black/6 pt-5">
                            {[
                                ["8.5×", "More keywords in the top 3"],
                                ["4.6×", "More keywords in the top 10"],
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
                <p className="mt-3 text-[11px] text-gray-400">
                    Illustrative example based on a typical engagement. Results vary by
                    industry, competition, and site history.
                </p>
            </section>

            {/* ──────────────────────── PROBLEM ───────────────────────────────────── */}
            <section className="container mt-20">
                <div className="reveal-up">
                    <Tag>The problem</Tag>
                    <h2 className={`${secHead} mb-3`}>MOST WEBSITES ARE</h2>
                    <h2 className={`${secHead} mb-12`}>
                        <span className="text-primary">INVISIBLE</span> ON GOOGLE
                    </h2>
                </div>

                <div className="reveal-stagger grid md:grid-cols-3 gap-3">
                    {[
                        {
                            title: "Ranking for the wrong keywords",
                            desc: "Traffic from searches that never buy is just noise. If you target terms your customers don’t use, rankings won’t turn into revenue.",
                            icon: TrendingDown,
                        },
                        {
                            title: "Technical issues hold you back",
                            desc: "Slow pages, broken links, poor mobile experience, and crawl errors quietly stop Google from ranking even great content.",
                            icon: Wrench,
                        },
                        {
                            title: "Content with no strategy",
                            desc: "Random blog posts without keyword research or structure don’t build authority. Every page needs a job and a target.",
                            icon: Compass,
                        },
                    ].map(({ title, desc, icon: Icon }) => (
                        <Card key={title} className="p-7 relative group">
                            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                                <Icon size={16} className="text-primary" />
                            </div>
                            <h3 className="text-gray-900 font-medium mb-2 text-[15px]">
                                {title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* ──────────────────────── PROCESS ───────────────────────────────────── */}
            <section className="container mt-20">
                <div className="reveal-up mb-14">
                    <Tag>Process</Tag>
                    <h2 className={secHead}>HOW SPOK DIGITAL</h2>
                    <h2 className={secHead}>DOES SEO</h2>
                </div>

                <div className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {howSteps.map((s) => (
                        <Card key={s.title} className="p-6">
                            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="absolute -top-3 -right-1 font-display text-[72px] leading-none text-black/4 select-none pointer-events-none group-hover:text-primary/[.07] transition-colors duration-500">
                                {s.num}
                            </span>
                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/20 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-gray-50 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(222,15,63,.4)]">
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
            <section className="mt-20 py-20 bg-black">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="reveal-up relative overflow-hidden rounded-2xl p-8 border bg-white/10 border-white/[.07]">
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
                                            className="text-primary shrink-0 group-hover/item:scale-110 transition-transform"
                                        />
                                        {d}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="reveal-up rounded-2xl p-8 bg-primary relative overflow-hidden">
                        <span className="absolute -bottom-4 -right-2 text-white/30 font-display text-[96px] leading-none select-none pointer-events-none">
                            ROI
                        </span>
                        <div className="relative">
                            <p className="text-gray-300 text-[11px] font-medium uppercase tracking-[.18em] mb-1">
                                Outcomes
                            </p>
                            <h2 className="font-Satoshi text-[42px] text-gray-100 font-medium tracking-tight leading-none mb-5">
                                WHAT CHANGES
                            </h2>
                            <div className="space-y-3">
                                {outcomes.map((o) => (
                                    <div
                                        key={o.label}
                                        className="flex items-center gap-3 rounded-xl px-4 py-3 border border-gray-200/20 bg-white/10 backdrop-blur-xs"
                                    >
                                        <div className="w-8 h-8 text-gray-100 rounded-lg flex items-center justify-center shrink-0">
                                            {o.icon}
                                        </div>
                                        <span className="font-medium text-gray-200 text-sm">
                                            {o.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ──────────────────────── SERVICES ──────────────────────────────────── */}
            <section className="container mt-20">
                <div className="reveal-up mb-12 text-center">
                    <Tag>Coverage</Tag>
                    <h2 className={secHead}>SEO SERVICES WE</h2>
                    <h2 className={`${secHead} mb-4`}>
                        <span className="text-primary">DELIVER</span>
                    </h2>
                    <p className="text-gray-700 font-light max-w-md mx-auto">
                        Every part of search visibility, handled by one team, so nothing
                        falls between agencies.
                    </p>
                </div>

                <div className="reveal-stagger grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {services.map((p) => (
                        <Card
                            key={p.name}
                            className="p-6 flex flex-col items-center gap-3 text-center cursor-default"
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-12 h-12 rounded-2xl bg-primary/8 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-gray-50 group-hover:shadow-[0_0_28px_rgba(222,15,63,.4)] transition-all duration-300">
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
                    <h2 className={secHead}>
                        <span className="text-primary">DIGITAL</span>
                    </h2>
                </div>

                <div className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {whySpok.map((w) => (
                        <Card key={w.title} className="p-6">
                            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/20 flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-gray-50 transition-all duration-300">
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
                <div className="reveal-up mb-16 text-center">
                    <Tag>Ideal fit</Tag>
                    <h2 className={secHead}>BUILT FOR</h2>
                </div>

                <div className="reveal-stagger grid md:grid-cols-3 gap-5">
                    {builtFor.map((b) => (
                        <div
                            key={b.label}
                            className="group relative h-[280px] rounded-2xl overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-primary/70"
                        >
                            {/* To use a photo instead, add an <img> here like the influencer page */}
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(255,255,255,.35) 1px, transparent 1px)",
                                    backgroundSize: "24px 24px",
                                }}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 text-left">
                                <div className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                                    {b.icon}
                                </div>
                                <h3 className="text-white text-lg font-semibold leading-tight">
                                    {b.label}
                                </h3>
                                <p className="text-white/70 text-sm mt-1 max-w-[16rem]">
                                    {b.desc}
                                </p>
                                <div className="mt-2 h-[2px] w-0 bg-primary transition-all duration-400 group-hover:w-10" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ──────────────────────── FAQ ───────────────────────────────────────── */}
            <section className="container mt-24">
                <div className="reveal-up mb-12">
                    <Tag>FAQ</Tag>
                    <h2 className={secHead}>QUESTIONS WE</h2>
                    <h2 className={secHead}>
                        GET <span className="text-primary">ASKED</span>
                    </h2>
                </div>

                <div className="reveal-stagger max-w-3xl space-y-3">
                    {faqs.map((f) => (
                        <details
                            key={f.q}
                            className="group rounded-2xl border border-black/[.07] bg-white px-6 py-4 open:shadow-xs"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-gray-900 [&::-webkit-details-marker]:hidden">
                                {f.q}
                                <Plus
                                    size={18}
                                    className="shrink-0 text-primary transition-transform duration-300 group-open:rotate-45"
                                />
                            </summary>
                            <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                {f.a}
                            </p>
                        </details>
                    ))}
                </div>
            </section>

            {/* ──────────────────────── CTA ───────────────────────────────────────── */}
            <div className="container pb-20 mt-20">
                <div className="p-10 lg:p-16 w-full bg-linear-to-tr from-red-400 to-red-600 text-slate-100 rounded-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-xs uppercase tracking-widest text-white/60 font-Grostek mb-3">
                            Ready to rank?
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-Grostek font-semibold leading-tight max-w-xl">
                            Let’s get your brand in front of customers who are already
                            searching for you.
                        </h2>
                        <p className="mt-4 font-Synonym font-normal text-lg max-w-2xl text-white/80">
                            At Spok Digital, we turn SEO into a predictable source of leads.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-8">
                            <Link href="/contact">
                                <button className="px-6 py-3 bg-white text-slate-900 font-SplineSans rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                                    Get a free SEO audit
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

/* ─────────────────────────── Graphs ─────────────────────────────────────── */

function TrafficGrowthGraph() {
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
        const before = [4, 4.5, 4.2, 4.8, 5, 5.1, 5.3, 5.2, 5.6, 5.8, 6, 6.2];
        const after = [4, 4.5, 4.2, 5, 6.5, 8.8, 12, 16, 21, 27, 34, 42];
        const maxV = 45;
        const xS = (i: number) => pL + (i / 11) * (W - pL - pR);
        const yS = (v: number) => pT + (1 - v / maxV) * (H - pT - pB);

        [0, 15, 30, 45].forEach((g) => {
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
            ay = yS(5);
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
        ctx.arc(xS(11), yS(42), 4, 0, Math.PI * 2);
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

function RankingsGraph() {
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
        const buckets = ["Top 3", "Top 10", "Top 20", "Top 50", "Top 100"];
        const spok = [34, 82, 126, 190, 240];
        const before = [4, 18, 40, 85, 140];
        const pL = 60,
            pR = 36,
            pT = 10,
            pB = 24;
        const maxV = 260;
        const rowH = (H - pT - pB) / buckets.length;
        const barH = rowH * 0.28;
        const xS = (v: number) => pL + (v / maxV) * (W - pL - pR);

        [0, 80, 160, 240].forEach((g) => {
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
            ctx.fillText(`${g}`, x, H - pB + 4);
        });

        buckets.forEach((p, i) => {
            const cy = pT + i * rowH + rowH / 2;
            ctx.fillStyle = "rgba(0,0,0,0.35)";
            ctx.font = "10px sans-serif";
            ctx.textAlign = "right";
            ctx.textBaseline = "middle";
            ctx.fillText(p, pL - 6, cy);

            // Before bar
            const bW = xS(before[i]) - pL;
            ctx.fillStyle = "rgba(0,0,0,0.08)";
            ctx.beginPath();
            ctx.roundRect(pL, cy + 1, bW, barH, 2);
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
            ctx.fillText(`${spok[i]}`, pL + sW + 4, cy - barH / 2 - 1);
        });
    }, []);
    return (
        <canvas
            ref={canvasRef}
            style={{ width: "100%", height: "100%", display: "block" }}
        />
    );
}