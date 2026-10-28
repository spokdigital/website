import { steps } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-neutral-950 py-16 text-white"
    >
      {/* Background: spotlight + fine grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-white/[0.08] blur-[120px]" />
      </div>

      <div className="container relative px-5">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            label="Simple Process"
            title="Get Started in 3 Easy Steps"
          />
        </div>

        <ol className="relative mt-20 grid gap-14 md:grid-cols-3 md:gap-8">
          {/* Timeline line */}
          <div
            aria-hidden
            className="absolute left-[16.66%] right-[16.66%] top-[22px] hidden h-px bg-gradient-to-r from-white/10 via-white/40 to-white/10 md:block"
          />

          {steps.map((s, i) => (
            <li
              key={s.title}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Step node */}
              <span className="relative z-10 flex size-11 items-center justify-center">
                <span
                  aria-hidden
                  className="absolute inset-0 animate-ping rounded-full border border-white/30 [animation-duration:2.6s] motion-reduce:animate-none"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />

                <span className="relative flex size-11 items-center justify-center rounded-full border-2 border-white/40 bg-neutral-950 text-base font-bold text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-neutral-950 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                  {i + 1}
                </span>
              </span>

              {/* Stem */}
              <span
                aria-hidden
                className="h-8 w-px bg-gradient-to-b from-white/40 to-white/10"
              />

              {/* Card */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-white/25 group-hover:bg-white/[0.06]">
                <span className="pointer-events-none absolute -bottom-6 -right-2 text-[110px] font-black leading-none tabular-nums text-white/[0.04] transition-colors duration-300 group-hover:text-white/[0.08]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Step {String(i + 1).padStart(2, "0")}
                </p>

                <h3 className="relative mt-3 text-xl font-bold tracking-tight">
                  {s.title}
                </h3>

                <p className="relative mt-2.5 leading-relaxed text-white/65">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}