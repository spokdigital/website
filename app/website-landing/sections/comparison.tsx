import { Check, Sparkle, X } from "lucide-react";

const features = [
  {
    label: "Strategy-led builds with measurable purpose",
    others: false,
    spok: true,
  },
  { label: "Custom-built digital infrastructure.", others: false, spok: true },
  {
    label: "Structured funnels that turn attention into leads",
    others: false,
    spok: true,
  },
  { label: "SEO embedded into the foundation.", others: false, spok: true },
  {
    label: "Clear positioning with aligned brand voice.",
    others: false,
    spok: true,
  },
  { label: "Systems focused on revenue.", others: false, spok: true },
  { label: "Long-term growth architecture.", others: false, spok: true },
  { label: "Marketing that performs.", others: false, spok: true },
];

const CheckCell = ({
  value,
  variant = "default",
}: {
  value: string | boolean;
  variant?: string;
}) => {
  if (value) {
    return (
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${variant === "spok" ? "bg-red-500" : "bg-stone-700"}`}
      >
        <Check size={13} strokeWidth={3} className="text-white" />
      </div>
    );
  }
  return (
    <div className="w-7 h-7 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
      <X size={12} strokeWidth={2.5} className="text-stone-600" />
    </div>
  );
};

export default function ComparisonTable() {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 pt-1 pb-10">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">
            Why clients stay
          </p>
          <h1 className="text-5xl md:text-6xl font-Cormorant text-stone-800 leading-tight tracking-tight mb-2">
            We <span className="text-primary ">Build Your Brand</span> To STAY
          </h1>
          <p className="text-sm text-stone-700 font-light max-w-sm mx-auto leading-relaxed">
            Strategy first. Execution second. Revenue always
          </p>
        </div>

        {/* ── MOBILE LAYOUT (two stacked columns) ── */}
        <div className="md:hidden space-y-6">
          {/* Other platforms column */}
          <div className="bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
            <div className="px-5 py-4 border-b border-stone-200">
              <div className="text-sm font-bold text-stone-500">
                Other platforms
              </div>
              <div className="text-xs text-stone-400 mt-0.5">
                Traditional Website
              </div>
            </div>
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-4 border-b border-stone-100 last:border-none"
              >
                <CheckCell value={f.others} variant="others" />
                <span className="text-sm text-stone-600 leading-snug">
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          {/* Spok column */}
          <div className="bg-red-50/50 rounded-2xl border border-red-100 shadow-sm">
            <div className="px-5 py-4 border-b border-red-100 relative">
              <div className="absolute top-0 right-4 -translate-y-1/2 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider bg-primary text-white px-2.5 py-1.5 rounded-full whitespace-nowrap">
                <Sparkle className="size-3.5 fill-white shrink-0" />
                <span>Best choice</span>
              </div>
              <div className="text-sm font-bold text-primary">Spok</div>
              <div className="text-xs text-stone-400 mt-0.5">
                Custom-built Website
              </div>
            </div>
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-4 border-b border-red-100/60 last:border-none"
              >
                <CheckCell value={f.spok} variant="spok" />
                <span className="text-sm text-stone-600 leading-snug">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP TABLE (sm and up) ── */}
        <div className="hidden md:block bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
          <div className="bg-stone-50 rounded-2xl  border border-stone-200 shadow-sm">
            {/* Column headers */}
            <div className="grid grid-cols-[1fr_180px_180px] border-b border-stone-200">
              <div className="px-8 py-5 text-xs font-semibold  tracking-widest text-stone-500">
                <div className="text-sm font-bold text-stone-500">Features</div>
                <div className="text-xs text-stone-400 font-[400] mt-1">
                  What to expect from your website
                </div>
              </div>
              <div className="py-5 text-center border-l border-stone-200">
                <div className="text-sm font-bold text-stone-500">
                  Other platforms
                </div>
                <div className="text-xs text-stone-400  mt-1">
                  Traditional Website
                </div>
              </div>
              <div className="py-5 relative text-center bg-red-50/70 border-l border-red-100">
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                flex flex-nowrap items-center gap-1
                whitespace-nowrap leading-none
                text-[9px] font-bold uppercase tracking-wider
                bg-primary text-white px-2.5 py-1.5 rounded-full"
                >
                  <Sparkle className="size-4 fill-white shrink-0" />
                  <span>Best choice</span>
                </div>
                <div className="text-sm font-bold text-primary">Spok</div>
                <div className="text-xs text-stone-400 mt-0.5">
                  Custom-built Website
                </div>
              </div>
            </div>

            {/* Feature rows */}
            {features.map((f, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_180px_180px] border-b border-stone-100 last:border-none hover:bg-black/[0.015] transition-colors"
              >
                <div className="px-8 py-5 flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-stone-300 flex-shrink-0" />
                  <span
                    className={`text-sm ${!f.others ? "text-stone-600 " : "text-stone-600"}`}
                  >
                    {f.label}
                  </span>
                </div>

                {/* Others */}
                <div className="flex items-center justify-center border-l border-stone-100">
                  <CheckCell value={f.others} variant="others" />
                </div>

                {/* Spok */}
                <div className="flex items-center justify-center bg-red-50/40 border-l border-red-100/80">
                  <CheckCell value={f.spok} variant="spok" />
                </div>
              </div>
            ))}

            {/* Score + CTA footer */}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center items-center mt-7 mb-4">
          <button className="bg-primary hover:scale-[1.02] hover:bg-primary/90 active:translate-y-px text-white font-bold px-5 py-2.5 rounded transition-all w-full ">
            Book a call now
          </button>
        </div>
      </div>
    </div>
  );
}
