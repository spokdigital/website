import { Check, Minus } from "lucide-react";

const features = [
  { label: "Large pool of qualified candidates", category: "Reach" },
  { label: "Visible to active job seekers", category: "Reach" },
  { label: "Visible to passive candidates", category: "Targeting" },
  { label: "Pre-qualified applications", category: "Quality" },
  { label: "Employer branding support", category: "Brand" },
  { label: "Low time investment for practice", category: "Efficiency" },
];

const othersValues = [false, true, false, false, false, false];

export default function ComparisonSection() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-24 bg-neutral-50">
        {/* Watermark */}
        <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center text-[18vw] font-extrabold tracking-tight text-black/5">
          SPOK
        </div>

        <div className="relative text-center max-w-[92%] mx-auto">
          {/* Heading */}
          <div className=" mb-14 relative">
            <p className="uppercase tracking-[0.18em] text-xs font-medium text-gray-500 mb-4">
              Why clients stay
            </p>

            <h2 className="text-5xl md:text-7xl text-black/70 font-Cormorant font-[500] leading-[1.05] tracking-tight">
              Why our clients never
              <br />
              want to recruit
              <br />
              <span className="font-Grostek italic text-[#FF4040] font-[600]">
                differently again
              </span>
            </h2>

            {/* Floating stat */}
            <div className="hidden sm:block absolute top-0 -right-6 bg-white border rounded-2xl px-6 py-4 shadow-xl text-center">
              <div className="text-3xl font-extrabold leading-none">6/6</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">
                Features won
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid lg:max-w-4xl mx-auto items-start md:grid-cols-2 gap-4">
            {/* OTHER PLATFORMS */}
            <div className="bg-white rounded-2xl border overflow-hidden">
              <div className="px-8 py-6 border-b">
                <div className="text-gray-400 font-medium">Other platforms</div>
                <div className="text-xs text-gray-400 mt-1 tracking-wide">
                  Traditional job boards
                </div>
              </div>

              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-8 py-4 border-b last:border-none hover:bg-black/[0.02]"
                >
                  <span
                    className={`text-sm ${
                      othersValues[i]
                        ? "text-gray-700"
                        : "text-gray-400 line-through"
                    }`}
                  >
                    {f.label}
                  </span>

                  {othersValues[i] ? (
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Check size={14} strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-gray-300">
                      <Minus size={14} strokeWidth={2.5} />
                    </div>
                  )}
                </div>
              ))}

              <div className="flex items-center justify-between px-8 py-5 border-t bg-black/[0.02]">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                  Score
                </span>
                <span className="text-gray-400 font-bold">
                  1<span className="text-gray-200 font-light">/</span>
                  <span className="text-gray-300">6</span>
                </span>
              </div>
            </div>

            {/* SPOK CARD */}
            <div className="relative bg-black text-white rounded-2xl overflow-hidden">
              {/* Glow circle */}
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-400/20 blur-3xl" />

              <div className="px-8 py-6 border-b border-white/10">
                <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase bg-red-300 text-black px-3 py-1 rounded-full mb-3">
                  ✦ Best choice
                </div>

                <div className="text-2xl font-extrabold tracking-tight">
                  Spok
                </div>

                <div className="text-xs text-white/40 mt-1 tracking-wide">
                  Intelligent talent matching
                </div>
              </div>

              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-8 py-4 border-b border-white/10 hover:bg-white/[0.03]"
                >
                  <span className="text-sm text-white/90">{f.label}</span>

                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black">
                    <Check size={14} strokeWidth={3} />
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div className="p-8 border-t border-white/10">
                <button className="w-full flex items-center justify-between bg-[#ff4040] text-slate-50 font-bold rounded-xl px-5 py-3 hover:opacity-90 active:translate-y-[1px] transition">
                  <span>Get Started now</span>
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
