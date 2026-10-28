import StatsBar from "./StatsBar";
import { WHATSAPP } from "@/lib/data";
import LeadForm from "./Lead-form";

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
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
              India&apos;s leading Shopify development agency. Custom stores, landing pages, migrations, B2B
              solutions — all built to maximize your revenue.
            </p>

            <a
              href={WHATSAPP}
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary/90"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M3 21l1.65-4.87A8.5 8.5 0 1 1 8 19.35L3 21z" />
                <path d="M9 10c.5 2 2 3.5 4 4l1.5-1.2a.6.6 0 0 1 .7 0l1.3.9a.6.6 0 0 1 .1.9c-.6.8-1.5 1.2-2.5 1-2.7-.6-4.9-2.8-5.5-5.5-.2-1 .2-1.9 1-2.5a.6.6 0 0 1 .9.1l.9 1.3a.6.6 0 0 1 0 .7L9 10z" />
              </svg>
              WhatsApp Us
            </a>

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