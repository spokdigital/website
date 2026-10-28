import { Check, Timer } from "lucide-react";
import SectionHeading from "./SectionHeading";

/* ---------- Visuals ---------- */

function AttentionVisual() {
  const C = 2 * Math.PI * 42; // ring circumference
  return (
    <div className="flex w-full max-w-[300px] items-center gap-5">
      <div className="relative size-[104px] shrink-0">
        <svg viewBox="0 0 100 100" className="size-full -rotate-90" aria-hidden>
          <circle cx="50" cy="50" r="42" fill="none" strokeWidth="9" className="stroke-neutral-200" />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={`${C * 0.78} ${C}`}
            className="stroke-primary"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-extrabold leading-none text-neutral-900">3s</span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-wide text-neutral-500">to decide</span>
        </div>
      </div>
      <ul className="space-y-2.5 text-[13px] font-medium text-neutral-800">
        {["Offer is clear", "Price is visible", "Next step stands out"].map((t) => (
          <li key={t} className="flex items-center gap-2">
            <span className="flex size-4 items-center justify-center rounded-full bg-primary text-white">
              <Check size={10} strokeWidth={3} aria-hidden />
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TrustVisual() {
  return (
    <div className="w-full max-w-[290px] text-neutral-900">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2.5">
          {["S", "J", "A", "M"].map((l, i) => (
            <span
              key={l}
              className={`flex size-9 items-center justify-center rounded-full border-2 border-white text-xs font-bold ${
                i % 2 ? "bg-primary text-white" : "bg-primary/15 text-primary"
              }`}
            >
              {l}
            </span>
          ))}
          <span className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-[10px] font-bold text-white">
            +2K
          </span>
        </div>
        <div>
          <p className="text-lg font-extrabold leading-none">
            4.9 <span className="text-amber-400">★</span>
          </p>
          <p className="mt-0.5 text-[11px] text-neutral-500">from verified buyers</p>
        </div>
      </div>
      <div className="relative mt-4 rounded-2xl rounded-tl-sm border border-neutral-200 bg-white p-3.5 shadow-sm">
        <p className="text-[13px] leading-snug">&ldquo;Arrived fast and the store feels premium. Easy to order again.&rdquo;</p>
        <p className="mt-2 text-[11px] font-semibold text-primary">Sarah M. · Verified purchase</p>
      </div>
    </div>
  );
}

function CheckoutVisual() {
  return (
    <div className="w-full max-w-[290px] rounded-2xl border border-neutral-200 bg-white p-4 text-neutral-900 shadow-sm">
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between text-neutral-500">
          <span>Subtotal</span>
          <span>₹4,998</span>
        </div>
        <div className="flex justify-between text-neutral-500">
          <span>Shipping</span>
          <span className="font-semibold text-primary">Free</span>
        </div>
        <div className="flex justify-between border-t border-dashed border-neutral-200 pt-2 text-sm font-bold">
          <span>Total</span>
          <span>₹4,998</span>
        </div>
      </div>
      <div className="mt-3 rounded-xl bg-primary py-2.5 text-center text-[13px] font-semibold text-white">Pay now</div>
      <div className="mt-2.5 flex items-center justify-between">
        <div className="flex gap-1.5">
          {["UPI", "Cards", "Wallets"].map((p) => (
            <span key={p} className="rounded-md bg-neutral-100 px-2 py-1 text-[10px] font-semibold text-neutral-600">
              {p}
            </span>
          ))}
        </div>
        <span className="flex items-center gap-1 text-[10px] font-semibold text-primary">
          <Timer size={11} aria-hidden /> 47s
        </span>
      </div>
    </div>
  );
}

const items = [
  {
    tag: "First impression",
    title: "A Headline That Lands Instantly",
    text: "Shoppers judge your store before they scroll. We design the first screen so your offer, price and next step are obvious at a glance.",
    chips: ["Headline", "Offer", "CTA"],
    visual: <AttentionVisual />,
  },
  {
    tag: "Credibility",
    title: "Trust Built Into Every Page",
    text: "Reviews, ratings and guarantees appear exactly where doubt shows up, so buyers feel safe clicking Add to Cart.",
    chips: ["Reviews", "Ratings", "Guarantees"],
    visual: <TrustVisual />,
  },
  {
    tag: "Conversion",
    title: "A Checkout That Gets Out of the Way",
    text: "We cut every extra tap between cart and payment, so more of the people who want to buy actually finish.",
    chips: ["Cart", "Shipping", "Payment"],
    visual: <CheckoutVisual />,
  },
];

/* ---------- Section ---------- */

export default function Approach() {
  return (
    <section className="bg-neutral-50/70 pt-16">
      <div className="container px-5">
        <SectionHeading
          label="Our Approach"
          title="Three Things Every Converting Store Gets Right"
          text="We don't guess. Each layout, section and button is chosen to move a visitor one step closer to buying."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-3 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              {/* top accent bar */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
              />

              {/* Visual panel */}
              <div className="relative flex min-h-[240px] items-center justify-center rounded-2xl bg-neutral-50 p-5 [background-image:radial-gradient(rgba(0,0,0,0.07)_1px,transparent_1px)] [background-size:14px_14px]">
                <span className="absolute left-4 top-4 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                  {it.tag}
                </span>
                <span className="absolute right-4 top-3 text-3xl font-black tabular-nums text-neutral-200 transition-colors duration-500 group-hover:text-primary/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-6 flex w-full justify-center">{it.visual}</div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                <h3 className="text-xl font-bold leading-snug tracking-tight">{it.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-foreground/70">{it.text}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {it.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}