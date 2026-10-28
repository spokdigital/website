"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowRightLeft, Building2, PenTool, Puzzle, SearchCheck, Store } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

// Same order as `services` in lib/data
const ICONS = [Store, PenTool, SearchCheck, ArrowRightLeft, Building2, Puzzle];


export default function Services() {
  const root = useRef<HTMLElement>(null);

  return (
    <section ref={root} id="services" className="bg-white py-12">
      <div className="container px-5">
        <SectionHeading
          label="What We Do"
          title="Full-Service Shopify Development for Ambitious Brands"
          text="From building new stores to scaling enterprise operations — we handle everything Shopify."
        />

        <div className="mt-14 grid gap-5 max-w-6xl container sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = ICONS[i] ?? Store;
            return (
              <article
                key={s.title}
                className="service-card relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6"
              >
                {/* expanding fill */}
                <div
                  aria-hidden
                  className="service-fill pointer-events-none absolute inset-0 bg-primary [clip-path:circle(0%_at_46px_46px)]"
                />

                <div className="relative flex items-center justify-between">
                  <span className="service-badge flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="service-icon" size={22} strokeWidth={1.9} aria-hidden />
                  </span>
                  <ArrowRight className="service-arrow opacity-0" size={20} aria-hidden />
                </div>

                <h3 className="service-title relative mt-5 text-lg font-bold tracking-tight">{s.title}</h3>
                <p className="service-text relative mt-2 text-[15px] leading-relaxed text-foreground/70">{s.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}