"use client";

export default function TrustSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#fffafa] to-[#fff5f5] font-serif">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[rgba(220,38,38,0.06)]" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full bg-[rgba(220,38,38,0.05)]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* ===== Heading ===== */}
        <div className="text-center mb-20">
          <p className="font-sans text-[11px] tracking-[4px] uppercase text-red-500 mb-3 font-semibold">
            Proven Track Record
          </p>

          <h2 className="text-4xl lg:text-6xl font-Cormorant font-normal text-[#1a1a1a]  tracking-[-0.5px]">
            Measurable, Accelerated
            <br />
            <em className="text-red-500 not-italic">and Real</em> Results
          </h2>

          <div className="w-12 h-[2px] bg-gradient-to-r from-red-700 to-red-500 mx-auto mt-5" />
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
              <div className="w-16 h-16 border-2 border-dashed border-red-300 rounded flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b91c1c"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <span className="font-sans text-[11px] tracking-[2px] text-red-500 uppercase">
                Report Image
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-sans text-[10px] tracking-[3px] uppercase text-red-500 mb-3 font-semibold">
              Case Study 01
            </p>

            <h3 className="font-sans text-[13px] text-gray-500 mb-2 tracking-[0.5px]">
              Premium Priced Fashion Goods
            </h3>

            <h4 className="text-[clamp(22px,3vw,34px)] text-[#1a1a1a] leading-tight mb-8 tracking-[-0.3px]">
              ₹4.45Cr revenue
              <br />
              in <em className="text-red-500 not-italic">12 months</em>
            </h4>

            <div className="w-8 h-px bg-red-700 mb-6" />

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

            <button className="border border-red-700 text-red-500 px-7 py-3 text-[11px] tracking-[2px] uppercase font-sans font-semibold transition-all duration-200 hover:bg-red-700 hover:text-white">
              Read More →
            </button>
          </div>
        </div>

        {/* ===== Divider ===== */}
        <div className="flex items-center gap-5 mb-20">
          <div className="flex-1 h-px bg-red-200" />
          <div className="w-2 h-2 bg-red-700 rotate-45" />
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

            <button className="border border-red-700 text-red-500 px-7 py-3 text-[11px] tracking-[2px] uppercase font-sans font-semibold transition-all duration-200 hover:bg-red-700 hover:text-white">
              Read More →
            </button>
          </div>

          {/* Image */}
          <div className="bg-white rounded shadow-[0_8px_48px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden aspect-[4/3] border border-red-100 relative flex items-center justify-center md:order-2">
            <img
              src="/report2.png"
              alt="Wine Aggregator Report"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#fff5f5] to-[#ffecec]">
              <div className="w-16 h-16 border-2 border-dashed border-red-300 rounded flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b91c1c"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <span className="font-sans text-[11px] tracking-[2px] text-red-500 uppercase">
                Report Image
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
