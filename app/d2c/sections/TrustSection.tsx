"use client";

export default function TrustSection() {
  return (
    <section className="relative py-16  font-serif">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary/10" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full bg-primary/10" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* ===== Heading ===== */}
        <div className="text-center mb-20">
          <p className="font-sans text-[11px] tracking-[4px] uppercase text-primary mb-3 font-semibold">
            Proven Track Record
          </p>

          <h2 className="text-4xl lg:text-6xl font-Cormorant font-normal text-[#1a1a1a]  tracking-[-0.5px]">
            Measurable, Accelerated
            <br />
            <em className="text-red-500 not-italic">and Real</em> Results
          </h2>

          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-primary mx-auto mt-5" />
        </div>

        {/* ===== Case Study 1 ===== */}
        <div className="grid gap-[60px] items-center mb-20 md:grid-cols-2">
          {/* Image */}
          <div className="bg-white rounded shadow-[0_8px_48px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden aspect-[4/3] border border-red-100 relative flex items-center justify-center">
            <img
              src="/report1.png"
              alt="Fashion Brand Report"
              className="w-full h-full object-cover"
            />

            {/* Fallback placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#fff5f5] to-[#ffecec]">
              <img
                src={
                  "https://canada1.discourse-cdn.com/shopifyforum/original/2X/b/ba58ab07bb7d75ea5887c0730f11dba525f79b66.jpeg"
                }
                alt={"report"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-sans text-[10px] tracking-[3px] uppercase text-primary mb-3 font-semibold">
              Case Study 01
            </p>

            <h3 className="font-sans text-[13px] text-gray-500 mb-2 tracking-[0.5px]">
              Premium Priced Fashion Goods
            </h3>

            <h4 className="text-[clamp(22px,3vw,34px)] text-[#1a1a1a] leading-tight mb-8 tracking-[-0.3px]">
              ₹4.45Cr revenue
              <br />
              in <em className="text-primary not-italic">12 months</em>
            </h4>

            <div className="w-8 h-px bg-primary mb-6" />

            <p className="font-sans text-[13px] font-semibold uppercase text-[#1a1a1a] mb-3 tracking-[0.3px]">
              Work Brief
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">
              The brand is an accessible luxury brand for women's fashion that
              inspires glamour, confidence and sensuality in the modern woman.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">
              With our efforts, the brand revived their audience and gained
              attention from influencers and celebrities organically.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed text-[15px]">
              Beyond revenue, their messaging was crafted diligently for ads —
              amplifying their USPs and connecting emotionally.
            </p>

            <button className="border border-red-700 text-red-500 px-7 py-3 text-[11px] tracking-[2px] uppercase font-sans font-semibold transition-all duration-200 hover:bg-primary hover:text-white">
              Read More →
            </button>
          </div>
        </div>

        {/* ===== Divider ===== */}
        <div className="flex items-center gap-5 mb-20">
          <div className="flex-1 h-px bg-red-200" />
          <div className="w-2 h-2 bg-primary rotate-45" />
          <div className="flex-1 h-px bg-red-200" />
        </div>

        {/* ===== Case Study 2 ===== */}
        <div className="grid gap-[60px] items-center md:grid-cols-2">
          {/* Content */}
          <div className="md:order-1">
            <p className="font-sans text-[10px] tracking-[3px] uppercase text-red-500 mb-3 font-semibold">
              Case Study 02
            </p>

            <h3 className="font-sans text-[13px] text-gray-500 mb-2 tracking-[0.5px]">
              F&B Industry — Wine Aggregator
            </h3>

            <h4 className="text-[clamp(22px,3vw,34px)] text-[#1a1a1a] leading-tight mb-8 tracking-[-0.3px]">
              $111k in spends →
              <br />
              <em className="text-red-500 not-italic">$2.5M in revenue</em>
            </h4>

            <div className="w-8 h-px bg-red-700 mb-6" />

            <p className="font-sans text-[13px] font-semibold uppercase text-[#1a1a1a] mb-3 tracking-[0.3px]">
              Work Brief
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">
              Launched in 2004 to make quality wines accessible worldwide, the
              client had strong foundations and ambitious goals.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed text-[15px]">
              Starting at ~$70k/month, rigorous testing and optimization
              delivered explosive growth — achieving a 22× ROAS.
            </p>

            <button className="border border-red-700 text-primary px-7 py-3 text-[11px] tracking-[2px] uppercase font-sans font-semibold transition-all duration-200 hover:bg-primary hover:text-white">
              Read More →
            </button>
          </div>

          {/* Image */}
          <div className="bg-white rounded shadow-[0_8px_48px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden aspect-[4/3] border border-red-100 relative flex items-center justify-center md:order-2">
            <img
              src={
                "https://canada1.discourse-cdn.com/shopifyforum/original/2X/b/ba58ab07bb7d75ea5887c0730f11dba525f79b66.jpeg"
              }
              alt={"report"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
