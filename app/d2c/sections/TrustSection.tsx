"use client";

const CASE_STUDIES = [
  {
    id: 1,
    label: "Case Study 01",
    category: "Premium Priced Fashion Goods",
    title: "₹4.45Cr revenue",
    subtitle: "in 12 months",
    highlight: "12 months",
    image:
      "https://canada1.discourse-cdn.com/shopifyforum/original/2X/b/ba58ab07bb7d75ea5887c0730f11dba525f79b66.jpeg",
    brief: [
      "The brand is an accessible luxury brand for women's fashion that inspires glamour, confidence and sensuality in the modern woman.",
      "With our efforts, the brand revived their audience and gained attention from influencers and celebrities organically.",
      "Beyond revenue, their messaging was crafted diligently for ads — amplifying their USPs and connecting emotionally.",
    ],
  },
  {
    id: 2,
    label: "Case Study 02",
    category: "F&B Industry — Wine Aggregator",
    title: "$111k in spends →",
    subtitle: "$2.5M in revenue",
    highlight: "$2.5M",
    image:
      "https://canada1.discourse-cdn.com/shopifyforum/original/2X/b/ba58ab07bb7d75ea5887c0730f11dba525f79b66.jpeg",
    brief: [
      "Launched in 2004 to make quality wines accessible worldwide, the client had strong foundations and ambitious goals.",
      "Starting at ~$70k/month, rigorous testing and optimization delivered explosive growth — achieving a 22× ROAS.",
    ],
  },
  {
    id: 3,
    label: "Case Study 03",
    category: "DTC Skincare Brand",
    title: "₹1.2Cr in revenue",
    subtitle: "within 6 months",
    highlight: "6 months",
    image:
      "https://canada1.discourse-cdn.com/shopifyforum/original/2X/b/ba58ab07bb7d75ea5887c0730f11dba525f79b66.jpeg",
    brief: [
      "A fast-growing skincare startup approached us to scale their online presence and improve customer acquisition.",
      "Through high-converting creatives, targeted Meta and Google campaigns, and landing page optimization, we rapidly increased their sales pipeline.",
      "Within 6 months the brand scaled to ₹1.2Cr in revenue while maintaining strong profitability and repeat customer growth.",
    ],
  },
];
export default function TrustSection() {
  return (
    <section className="relative py-16 overflow-hidden font-serif">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary/10" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full bg-primary/10" />

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
            <div className="grid gap-[30px] items-center mb-20 md:grid-cols-2">
              {/* Image */}
              <div
                className={`bg-white rounded shadow-[0_8px_48px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden h-[320px] lg:aspect-[4/3] border border-red-100 relative flex items-center justify-center ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover"
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

                <button className="border border-red-700 text-red-500 px-7 py-3 text-[11px] tracking-[2px] uppercase font-sans font-semibold transition-all duration-200 hover:bg-primary hover:text-white">
                  Read More →
                </button>
              </div>
            </div>

            {/* Divider between items */}
            {index !== CASE_STUDIES.length - 1 && (
              <div className="flex items-center gap-5 mb-20">
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
