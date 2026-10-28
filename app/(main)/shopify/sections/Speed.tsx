import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { speedPoints } from "@/lib/data";

// Put your screenshot at /public/images/pagespeed-report.png
const IMAGE_SRC = "/PageSpeed-Performance.png";

const stats = [
  { v: "98", l: "PageSpeed score" },
  { v: "0.8s", l: "Largest paint" },
  { v: "-2.7s", l: "Load time saved" },
];

export default function Speed() {
  return (
    <section className="bg-neutral-50/70 pt-16">
      <div className="container grid items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Visual */}
        <div className="relative">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary/10 blur-2xl" />

          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
            <div className="p-2">
              <Image
                src={IMAGE_SRC}
                alt="Google PageSpeed Insights report showing a 98 performance score and passing Core Web Vitals"
                width={1200}
                height={900}
                className="h-auto w-full rounded-2xl"
                sizes="(min-width: 1024px) 620px, 100vw"
              />
            </div>

            {/* stat strip */}
            <dl className="grid grid-cols-3 divide-x divide-neutral-200 border-t border-neutral-200 bg-neutral-50/60">
              {stats.map((s) => (
                <div key={s.l} className="px-4 py-4 text-center">
                  <dt className="text-2xl font-extrabold tabular-nums text-primary">{s.v}</dt>
                  <dd className="mt-0.5 text-xs text-neutral-500">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Speed Optimization
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            We Make Your Store <span className="text-primary">Lightning Fast</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-foreground/70">
            Every second of load time costs you 7% in conversions. Our stores consistently score 90+ on Google
            PageSpeed.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {speedPoints.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3.5 text-[15px] font-medium"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check size={14} strokeWidth={3} aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="https://www.jhango.com/pages/services/shopify-audit.html"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
            >
              Boost My Store <ArrowRight size={18} aria-hidden />
            </a>
            <a
              href="https://www.jhango.com/pages/landing/free-audit.html"
              className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-[15px] font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Get Free Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}