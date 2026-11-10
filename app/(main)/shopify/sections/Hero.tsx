'use client'
import StatsBar from "./StatsBar";
import gsap from 'gsap'
import LeadForm from "./Lead-form";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const scrollToBooking = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: "#booking",
      ease: "power3.out",
    });
    window.fbq?.("track", "Contact", { content_name: "book_a_call" });
  };
  return (
    <section className="pt-28">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Trusted by 800+ brands
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-semibold font-SplineSans leading-[1.1] tracking-tight text-foreground sm:text-6xl">
              We Build <span className={'text-lime-400'}>Shopify</span> Stores That Convert &amp; Scale
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
              UAE&apos;s leading Shopify development agency. Custom stores, landing pages, migrations, B2B
              solutions — all built to maximize your revenue.
            </p>

            <button
              onClick={scrollToBooking}
              className="text-white flex items-center gap-2 rounded bg-primary px-7 py-[.6rem]"
            >
              <ArrowUpRight />
              Get started
            </button>

            <div className="mt-12 max-w-3xl">
              <StatsBar />
            </div>
          </div>

          <LeadForm />
        </div>
      </div>
    </section>
  );
}