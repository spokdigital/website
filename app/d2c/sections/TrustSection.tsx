"use client";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
const CASE_STUDIES = [
  {
    id: 1,
    label: "Case Study 01",
    category: "Shopify Store — D2C",
    title: "AED 1.22M in Sales",
    subtitle: "in 12 months",
    highlight: "with 18.14% of customers coming back",
    image: "/landing/d2c/trustbuild/snapshot-1.jpeg",
    brief: [
      "From Jan 2023 to Jan 2024, this store generated AED 1,555,268.50 in gross sales, which came to AED 1,220,790.85 in total sales after discounts and returns.",
      "1,951 orders were placed and 1,818 fulfilled, with a returning customer rate of 18.14%.",
    ],
  },
  {
    id: 2,
    label: "Case Study 02",
    category: "Shopify Store — D2C",
    title: "AED 1.45M in Sales",
    subtitle: "in 12 months",
    highlight: "with 1 in 5 customers coming back",
    image: "/landing/d2c/trustbuild/snapshot-2.jpeg",
    brief: [
      "From Jan 2022 to Jan 2023, gross sales reached AED 1,834,986.50, finishing at AED 1,453,640.65 in total sales.",
      "3,051 orders were placed and 2,596 fulfilled, with a 20.52% returning customer rate.",
    ],
  },
  {
    id: 3,
    label: "Case Study 03",
    category: "Shopify Store — D2C",
    title: "AED 2.50M in Sales",
    subtitle: "in 12 months",
    highlight: "across 5,014 orders",
    image: "/landing/d2c/trustbuild/snapshot-3.jpeg",
    brief: [
      "From Jan 2021 to Jan 2022, this store recorded AED 2,967,161.75 in gross sales and AED 2,502,396.05 in total sales.",
      "5,014 orders were placed and 4,450 fulfilled, with a 16.99% returning customer rate.",
    ],
  },
  {
    id: 4,
    label: "Case Study 04",
    category: "Shopify Store — D2C",
    title: "AED 3.28M in Sales",
    subtitle: "in 12 months",
    highlight: "from AED 3.75M in gross sales",
    image: "/landing/d2c/trustbuild/snapshot-4.jpeg",
    brief: [
      "From Jan 2020 to Jan 2021, gross sales reached AED 3,747,204.25. After discounts and returns, total sales came to AED 3,275,688.35.",
      "Sales climbed steadily through the first half of the year and held at that level through to November.",
    ],
  },
  {
    id: 5,
    label: "Case Study 05",
    category: "Shopify Store — D2C",
    title: "AED 1.01M in Sales",
    subtitle: "in 16 months",
    highlight: "from AED 1.20M in gross sales",
    image: "/landing/d2c/trustbuild/snapshot-5.jpeg",
    brief: [
      "From Jun 2025 to Sept 2026, this store generated AED 1,197,022.00 in gross sales and AED 1,007,062.63 in total sales.",
      "Net sales after discounts and returns were AED 965,802.41, with sales recovering through 2026.",
    ],
  },
];
export default function TrustSection() {
  const scrollToBooking = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: "#booking",
      ease: "power3.out",
    });
    window.fbq?.("track", "Contact", { content_name: "book_a_call" });
  };
  return (
    <section className="relative pt-16 overflow-hidden font-serif">
      {/* Decorative circles */}

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="font-sans text-[11px] tracking-[4px] uppercase text-primary mb-3 font-semibold">
            Proven Track Record
          </p>

          <h2 className="text-4xl lg:text-6xl font-Cormorant font-normal text-[#1a1a1a] tracking-[-0.5px]">
            Measurable, Accelerated
            <br />
            <em className="text-red-500 not-italic">and Real</em> Results
          </h2>

          <div className="w-12 h-[2px] bg-linear-to-r from-primary to-primary mx-auto mt-5" />
        </div>

        {/* Case Studies */}
        {CASE_STUDIES.map((item, index) => (
          <div key={item.id}>
            <div className="grid gap-12 items-center mb-10 lg:mb-20 md:grid-cols-2">
              {/* Image */}
              <div
                className={`bg-red-400 rounded shadow-[0_8px_48px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden h-auto w-full border border-red-100 relative flex items-center justify-center ${index % 2 === 1 ? "md:order-2" : ""
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
                <p className="font-sans text-[10px] tracking-[3px] uppercase text-primary mb-3 font-semibold">
                  {item.label}
                </p>

                <h3 className="font-sans text-[13px] text-gray-500 mb-2 tracking-[0.5px]">
                  {item.category}
                </h3>

                <h4 className="text-3xl lg:text-4xl text-[#1a1a1a] leading-tight mb-8 tracking-[-0.3px]">
                  {item.title}
                  <br />
                  <em className="text-primary not-italic">{item.subtitle}</em>
                </h4>

                <div className="w-8 h-px bg-primary mb-6" />

                <p className="font-sans text-[13px] font-semibold uppercase text-[#1a1a1a] mb-3 tracking-[0.3px]">
                  Work Brief
                </p>

                {item.brief.map((text, i) => (
                  <p
                    key={i}
                    className="text-gray-600 mb-4 leading-relaxed text-[15px]"
                  >
                    {text}
                  </p>
                ))}

                <button
                  onClick={scrollToBooking}
                  className="border border-red-700 text-red-500 px-7 py-3 text-[11px] tracking-[2px] uppercase font-sans font-semibold transition-all duration-200 hover:bg-primary hover:text-white"
                >
                  Book a call
                </button>
              </div>
            </div>

            {/* Divider between items */}
            {index !== CASE_STUDIES.length - 1 && (
              <div className="flex items-center gap-5 mb-10 lg:mb-20">
                <div className="flex-1 h-px bg-red-200" />
                <div className="w-2 h-2 bg-primary rotate-45" />
                <div className="flex-1 h-px bg-red-200" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
