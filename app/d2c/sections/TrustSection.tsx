"use client";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
const CASE_STUDIES = [
  {
    id: 1,
    label: "Case Study 01",
    category: "​Fashion & Apparel — D2C",
    title: "AED 600K+ Revenue",
    subtitle: "in 6 months",
    highlight: "12 months",
    image: "/landing/d2c/trustbuild/snapshot-1.png",
    brief: [
      "Teeser came to us as UAE's boldest graphic tee brand — pop culture, nostalgia, custom prints — but their online store wasn't converting the way their product deserved.",
      "We built their full D2C growth engine from the ground up. CRO-optimised Shopify store, performance video creatives tailored to UAE audiences, and aggressive paid campaigns across Meta and TikTok.",
      "The result? More than Half a Million in revenue in under 6 months — with a 19.89% returning customer rate that tells you the product keeps people coming back.",
    ],
  },
  {
    id: 2,
    label: "Case Study 02",
    category: "Fragrance & Lifestyle — D2C",
    title: "AED 287K+ Revenue",
    subtitle: "in 5 Months",
    highlight: "and the curve is still going up",
    image: "/landing/d2c/trustbuild/snapshot-2.png",
    brief: [
      "A Dubai-based perfume startup came to us with a beautiful product, zero digital presence, and one goal — build a D2C brand that sells online without relying on retail shelves.",
      "We started from scratch. Shopify store built for conversion, performance video creatives shot around the scent story and UAE lifestyle, and Meta campaigns targeting UAE fragrance buyers who actually spend.",
      "January was slow. By May, they were doing AED 100K+ a month — and the graph hasn't stopped climbing.",
      "2,661 orders. A brand that didn't exist online 5 months ago.",
    ],
  },
  {
    id: 3,
    label: "Case Study 03",
    category: "Baby & Kids — D2C",
    title: "AED 400K+ revenue ",
    subtitle: "in 4 Months",
    highlight: "with 1 in 5 moms coming back",
    image: "/landing/d2c/trustbuild/snapshot-3.png",
    brief: [
      "A Dubai-based baby essentials brand had a product that UAE moms loved — but their online store wasn't finding them.",
      "We built a Shopify store that spoke directly to first-time parents — trust signals, clean UX, fast checkout. Performance videos built around real parenting moments that stopped moms mid-scroll. And Meta campaigns laser-targeted at UAE parents with newborns and toddlers.",
      "May to August — four months. AED 400K in gross sales, 1,939 orders fulfilled, and a 17.52% returning customer rate that tells you one thing: once a mom trusts your brand, she comes back.",
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
  };
  return (
    <section className="relative pt-16 overflow-hidden font-serif">
      {/* Decorative circles */}

      <div className="max-w-6xl mx-auto px-6 relative">
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

          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-primary mx-auto mt-5" />
        </div>

        {/* Case Studies */}
        {CASE_STUDIES.map((item, index) => (
          <div key={item.id}>
            <div className="grid gap-12 items-center mb-10 lg:mb-20 md:grid-cols-2">
              {/* Image */}
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
