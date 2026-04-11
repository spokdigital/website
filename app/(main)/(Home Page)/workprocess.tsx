"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const steps = [
  {
    number: "01",
    tag: "Discovery & research",
    title: "We understand your business inside out",
    description:
      "We dive deep into your brand, product, and audience — uncovering insights that shape a strong digital foundation before anything is designed or built.",
    pills: ["Brand discovery", "User research", "Competitor analysis"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    number: "02",
    tag: "Strategy & planning",
    title: "A clear roadmap before we build",
    description:
      "We define structure, user journeys, and conversion paths — ensuring every screen and interaction is aligned with your business goals.",
    pills: ["UX strategy", "User flows", "Wireframes", "Conversion planning"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
  },
  {
    number: "03",
    tag: "Design & development",
    title: "Crafting high-impact digital experiences",
    description:
      "From visually striking UI to clean, scalable code — we design and build experiences that are fast, intuitive, and built to perform.",
    pills: [
      "UI/UX design",
      "Web development",
      "Responsive design",
      "Performance",
    ],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
  },
  {
    number: "04",
    tag: "Launch & growth",
    title: "We launch, measure, and continuously improve",
    description:
      "Post-launch, we track performance, optimize experiences, and help you scale — turning your website into a long-term growth engine.",
    pills: ["Deployment", "Analytics", "Optimization", "Ongoing support"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
];
export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const prevStepRef = useRef(0);
  const activeStepRef = useRef(0);
  const directionRef = useRef<"down" | "up">("down");
  // Activate step when it enters the viewport centre band
  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            prevStepRef.current = activeStepRef.current;
            activeStepRef.current = i;
            setActiveStep(i);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      directionRef.current = currentY > lastY ? "down" : "up";
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!lineRef.current || !sectionRef.current) return;

    gsap.fromTo(
      lineRef.current,
      {
        scaleY: 0,
        transformOrigin: "top center",
      },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      },
    );
  }, []);

  const scrollTo = (i: number) =>
    stepRefs.current[i]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  useEffect(() => {
    const containers = document.querySelectorAll(".reveal-container");
    const direction = directionRef.current;

    // New image slides in from top (scrolling down) or bottom (scrolling up)
    const yStart = direction === "down" ? "100%" : "-100%";

    containers.forEach((container, i) => {
      const inner = container.querySelector(".reveal-inner");
      const img = container.querySelector("img");

      if (i === activeStep) {
        // Bring to top z-index and animate in
        gsap.set(container, { autoAlpha: 1, zIndex: 3 });
        gsap.set(inner, { yPercent: direction === "down" ? 100 : -100 });
        gsap.set(img, {
          yPercent: direction === "down" ? -100 : 100,
          scale: 1.3,
        });

        const tl = gsap.timeline();
        tl.to(inner, {
          yPercent: 0,
          duration: .6,
          ease: "power2.out",
        }).to(
          img,
          {
            yPercent: 0,
            scale: 1,
            duration: .6,
            ease: "power2.out",
          },
          "<", // same time as inner
        );
      } else if (i === prevStepRef.current) {
        // Keep previous image visible underneath (z-index 2), don't hide it
        gsap.set(container, { autoAlpha: 1, zIndex: 2 });
        gsap.set(container.querySelector(".reveal-inner"), { yPercent: 0 });
        gsap.set(img, { yPercent: 0, scale: 1 });
      } else {
        // All other steps hidden below
        gsap.set(container, { autoAlpha: 0, zIndex: 1 });
      }
    });
  }, [activeStep]);

  return (
    <section className="w-full py-20" ref={sectionRef}>
      {/* ── Header ── */}
      <div className="text-center mb-14 ">
        <span className="inline-block text-xs  font-semibold tracking-widest uppercase bg-primary/20 text-primary-600 px-4 py-1.5 rounded-full mb-5">
          Our process
        </span>
        <h2 className="text-4xl font-Cormorant lg:text-5xl font-[500] text-gray-900 leading-tight mb-4">
          How we <span className="text-primary-600">work</span>
        </h2>
        <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed">
          From discovery to delivery — a repeatable system that turns brands
          into growth machines.
        </p>
      </div>

      {/* ── Sticky scroll layout ── */}
      <div className="flex relative max-w-screen-xl mx-auto border-t border-primary/30">
        {/* Vertical progress bar */}
        <div className="hidden lg:flex flex-col items-center w-12 py-16 flex-shrink-0">
          <div className="relative w-px flex-1 bg-primary-100 rounded-full">
            {/* Filled portion */}
            <div
              ref={lineRef}
              className="absolute top-0 left-0 w-full h-full bg-primary rounded-full origin-top scale-y-0"
            />

            {/* Step dots */}
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to step ${i + 1}`}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none transition-all duration-300"
                style={{ top: `${(i / (steps.length - 1)) * 100}%` }}
              >
                <span
                  className={`flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    i <= activeStep
                      ? "bg-primary border-primary"
                      : "bg-white border-primary-200"
                  }`}
                  style={{
                    width: activeStep === i ? 22 : 12,
                    height: activeStep === i ? 22 : 12,
                  }}
                >
                  {activeStep === i && (
                    <span className="w-2 h-2 rounded-full bg-white block" />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Left: scrolling step blocks ── */}
        <div className="w-full lg:w-1/2 pl-2 lg:pl-6 pr-6 lg:pr-16">
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="min-h-[85vh] flex flex-col justify-center py-16 border-b border-gray-100 last:border-none transition-all duration-500"
              style={{ opacity: activeStep === i ? 1 : 0.25 }}
            >
              {/* Giant step number */}
              <span
                className={`text-[clamp(72px,10vw,120px)] font-Satoshi font-bold leading-none mb-3 select-none transition-colors duration-500 ${
                  activeStep === i ? "text-primary/80" : "text-gray-400"
                }`}
              >
                {step.number}
              </span>

              {/* Tag pill */}
              <span className="inline-block self-start  text-xs font-semibold tracking-widest uppercase bg-primary-100 text-primary-800 px-3 py-1.5 rounded-full mb-4">
                {step.tag}
              </span>

              <h3 className="text-3xl font-semibold font-Grostek text-gray-900 leading-snug mb-4 max-w-sm">
                {step.title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed max-w-sm mb-6">
                {step.description}
              </p>

              {/* Descriptor pills */}
              <div className="flex flex-wrap gap-2">
                {step.pills.map((pill) => (
                  <span
                    key={pill}
                    className="text-xs font-medium bg-primary/20 text-primary px-3 py-1.5 rounded-full"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Right: sticky mockup panel ── */}
        <div className="hidden lg:flex w-1/2 sticky top-0 h-screen items-center justify-center bg-gray-50/50">
          <div className="relative w-full max-w-[500px] aspect-[4/5]  overflow-hidden  border-8 border-white">
            {steps.map((step, i) => (
              <div
                key={i}
                className="absolute inset-0 reveal-container"
                // ← no style={{ zIndex }} here anymore
              >
                <div className="reveal-inner w-full h-full overflow-hidden">
                  <img
                    src={step.image}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}

            {/* Visual Overlay for text readability over images if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
