"use client";

import { InlineWidget } from "react-calendly";

export default function BookCallSection() {
  return (
    <section
      id={"booking"}
      className="relative w-full pt-28 px-4 overflow-hidden bg-black"
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Large soft circle top-right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/8 blur-3xl" />
        {/* Small circle bottom-left */}
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/6 blur-2xl" />

        {/* Subtle grid lines */}

        {/* Corner bracket top-left */}

        {/* Corner bracket bottom-right */}
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-primary/60" />
          <p
            className={`font-mono text-[10px] tracking-[0.35em] uppercase text-red-500`}
          >
            Schedule a Meeting
          </p>
          <div className="h-px w-12 bg-primary/60" />
        </div>

        {/* Heading */}
        <h2
          className={`font-Grostek tracking-tighter text-center text-5xl lg:text-6xl font-light leading-[1.1]  text-gray-100`}
        >
          Book Your Free{" "}
          <em className={`font-Cormorant italic text-primary`}>
            Strategy Call
          </em>
        </h2>

        {/* Sub-copy */}
        <p
          className={`font-mono mt-6 text-center text-sm leading-relaxed tracking-wide text-gray-100 max-w-xl mx-auto font-light`}
        >
          Let's discuss your goals, challenges, and how we can help you grow.
          Choose a convenient time below.
        </p>

        {/* Trust badges */}
        <div className="mt-8 flex items-center justify-center gap-8 flex-wrap">
          {[
            { icon: "⏱", label: "30-min call" },
            { icon: "✦", label: "No commitment" },
            { icon: "◈", label: "Expert advice" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2">
              <span className="text-red-300 text-xs">{b.icon}</span>
              <span
                className={`font-mono text-[10px] tracking-[0.2em] uppercase text-gray-100`}
              >
                {b.label}
              </span>
            </div>
          ))}
        </div>

        {/* Calendly card */}
        <div className="mt-2 relative">
          {/* Offset shadow layer */}

          <div className="relative ">
            <InlineWidget
              url="https://calendly.com/frontendmakaidigitals/30min?background_color=612828&text_color=ffffff&primary_color=ffbdbd"
              styles={{ height: "720px" }}
            />
          </div>
        </div>

        {/* Bottom note */}
        <p
          className={`font-mono mt-8 text-center text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/30`}
        >
          All times shown in your local timezone
        </p>
      </div>
    </section>
  );
}
