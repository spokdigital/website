"use client";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

type Stat = { value: string; label: string };

const CASE_STUDIES: {
  id: number;
  label: string;
  category: string;
  headline: string;
  highlight: string;
  tagline: string;
  description: string;
  stats: Stat[];
  period: string;
  image: string;
}[] = [
  {
    id: 1,
    label: "Case Study 01 / Ecommerce Growth",
    category: "Fashion & Apparel | Shopify D2C",
    headline: "From Storefront to",
    highlight: "AED 1.22 Million in Sales.",
    tagline: "1 Year. 1 Brand. Over AED 1.2M in Revenue.",
    description:
      "We helped a D2C fashion brand turn its Shopify store into a seven-figure sales business, generating over AED 1.22 million in net sales and nearly 2,000 orders in just 12 months.",
    stats: [
      { value: "AED 1.22M", label: "Total sales" },
      { value: "1,951", label: "Orders placed" },
      { value: "18.14%", label: "Returning customers" },
    ],
    period: "12-month performance | Jan 2023 to Jan 2024",
    image: "/landing/d2c/trustbuild/snapshot-1.jpeg",
  },
  {
    id: 2,
    label: "Case Study 02 / Ecommerce Growth",
    category: "Shopify D2C",
    headline: "Scaling a Store to",
    highlight: "AED 1.45 Million in Sales.",
    tagline: "1 in 5 customers came back to buy again.",
    description:
      "Gross sales reached AED 1.83 million, finishing at AED 1.45 million in total sales after discounts and returns, with 2,596 of 3,051 orders fulfilled.",
    stats: [
      { value: "AED 1.45M", label: "Total sales" },
      { value: "3,051", label: "Orders placed" },
      { value: "20.52%", label: "Returning customers" },
    ],
    period: "12-month performance | Jan 2022 to Jan 2023",
    image: "/landing/d2c/trustbuild/snapshot-2.jpeg",
  },
  {
    id: 3,
    label: "Case Study 03 / Ecommerce Growth",
    category: "Shopify D2C",
    headline: "Driving Volume to",
    highlight: "AED 2.50 Million in Sales.",
    tagline: "5,014 orders in 12 months.",
    description:
      "This store recorded AED 2.97 million in gross sales and AED 2.50 million in total sales, with 4,450 orders fulfilled.",
    stats: [
      { value: "AED 2.50M", label: "Total sales" },
      { value: "5,014", label: "Orders placed" },
      { value: "16.99%", label: "Returning customers" },
    ],
    period: "12-month performance | Jan 2021 to Jan 2022",
    image: "/landing/d2c/trustbuild/snapshot-3.jpeg",
  },
  {
    id: 4,
    label: "Case Study 04 / Ecommerce Growth",
    category: "Shopify D2C",
    headline: "Compounding Growth to",
    highlight: "AED 3.28 Million in Sales.",
    tagline: "From AED 3.75M in gross sales.",
    description:
      "After discounts and returns, total sales came to AED 3.28 million. Sales climbed steadily through the first half of the year and held that level through November.",
    stats: [
      { value: "AED 3.28M", label: "Total sales" },
      { value: "AED 3.75M", label: "Gross sales" },
      { value: "12 mo", label: "Duration" },
    ],
    period: "12-month performance | Jan 2020 to Jan 2021",
    image: "/landing/d2c/trustbuild/snapshot-4.jpeg",
  },
  {
    id: 5,
    label: "Case Study 05 / Ecommerce Growth",
    category: "Shopify D2C",
    headline: "Rebuilding Momentum to",
    highlight: "AED 1.01 Million in Sales.",
    tagline: "16 months, with sales recovering through 2026.",
    description:
      "This store generated AED 1.20 million in gross sales and AED 1.01 million in total sales, with net sales of AED 965,802 after discounts and returns.",
    stats: [
      { value: "AED 1.01M", label: "Total sales" },
      { value: "AED 1.20M", label: "Gross sales" },
      { value: "AED 965.8K", label: "Net sales" },
    ],
    period: "16-month performance | Jun 2025 to Sept 2026",
    image: "/landing/d2c/trustbuild/snapshot-5.jpeg",
  },
];

export default function TrustSection() {
  const scrollTo = (target: string) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: target, offsetY: 96 },
      ease: "power3.out",
    });
  };

  const scrollToBooking = () => {
    scrollTo("#booking");
    window.fbq?.("track", "Contact", { content_name: "book_a_call" });
  };

  return (
    <section className="relative pt-16 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[11px] tracking-[4px] uppercase text-primary mb-3 font-semibold">
            Proven Track Record
          </p>
          <h2 className="text-4xl lg:text-6xl font-Cormorant font-normal text-[#1a1a1a] tracking-[-0.5px]">
            Measurable, Accelerated
            <br />
            <em className="text-red-500 not-italic">and Real</em> Results
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto mt-5" />
        </div>

        {/* Stacked cards */}
        <div className="flex flex-col gap-6">
          {CASE_STUDIES.map((item, index) => {
            const isLast = index === CASE_STUDIES.length - 1;
            return (
              <article
                key={item.id}
                id={`case-${item.id}`}
                className="lg:sticky rounded-[28px] border border-gray-200 bg-[#fcfcfc] p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
                style={{ top: `${96 + index * 12}px` }}
              >
                <div className="grid gap-8 lg:gap-12 items-center md:grid-cols-2">
                  {/* Image (unchanged from original) */}
                  <div
                    className={`bg-red-400 rounded shadow-[0_8px_48px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden h-auto w-full border border-red-100 relative flex items-center justify-center ${
                      index % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.category}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <p className="text-[12px] sm:text-[13px] uppercase tracking-wide text-gray-600 mb-4">
                      {item.label}
                    </p>

                    <p className="text-base text-gray-500 mb-3">
                      {item.category}
                    </p>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111] leading-tight tracking-tight mb-4">
                      {item.headline}{" "}
                      <span className="text-red-600">{item.highlight}</span>
                    </h3>

                    <p className="text-base sm:text-lg font-semibold text-[#111] mb-4">
                      {item.tagline}
                    </p>

                    <p className="text-[15px] sm:text-base text-[#222] leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {item.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-lg sm:text-2xl font-semibold text-[#111] leading-none mb-2">
                            {stat.value}
                          </p>
                          <p className="text-[11px] sm:text-xs text-gray-500">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm text-gray-500 mb-5">{item.period}</p>

                    {/* CTA + next arrow */}
                   
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}