"use client";

import { useState, useEffect, useRef } from "react";

const monthlyData = [
  { month: "Jan", adSpend: 12000, revenue: 38400, roi: 220 },
  { month: "Feb", adSpend: 15000, revenue: 52500, roi: 250 },
  { month: "Mar", adSpend: 18000, revenue: 68400, roi: 280 },
  { month: "Apr", adSpend: 22000, revenue: 90200, roi: 310 },
  { month: "May", adSpend: 25000, revenue: 112500, roi: 350 },
  { month: "Jun", adSpend: 28000, revenue: 134400, roi: 380 },
  { month: "Jul", adSpend: 32000, revenue: 166400, roi: 420 },
  { month: "Aug", adSpend: 35000, revenue: 196000, roi: 460 },
  { month: "Sep", adSpend: 38000, revenue: 224200, roi: 490 },
  { month: "Oct", adSpend: 42000, revenue: 260400, roi: 520 },
  { month: "Nov", adSpend: 48000, revenue: 316800, roi: 560 },
  { month: "Dec", adSpend: 55000, revenue: 390500, roi: 610 },
];

const CHART_HEIGHT = 280; // px — fixed pixel height for the chart
const maxRevenue = Math.max(...monthlyData.map((d) => d.revenue)); // 390500

function AnimatedNumber({ value, prefix = "", suffix = "", duration = 1400 }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = Date.now();
          const tick = () => {
            const p = Math.min((Date.now() - t0) / duration, 1);
            setCurrent(Math.round((1 - Math.pow(1 - p, 3)) * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}

const getRating = (roi) =>
  roi >= 500
    ? { label: "Exceptional", color: "#FF4040" }
    : roi >= 400
      ? { label: "Excellent", color: "#FF5C5C" }
      : roi >= 300
        ? { label: "Great", color: "#FF7878" }
        : { label: "Good", color: "#FF9595" };

export default function ROISection() {
  const [hovered, setHovered] = useState(null);
  const [animated, setAnimated] = useState(false);
  const [barHeights, setBarHeights] = useState(
    monthlyData.map(() => ({ rev: 0, spend: 0 })),
  );
  const sectionRef = useRef(null);

  // Trigger animation when section enters viewport
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !animated) {
          setAnimated(true);
          // Animate bar heights one by one with stagger
          monthlyData.forEach((d, i) => {
            setTimeout(() => {
              setBarHeights((prev) => {
                const next = [...prev];
                next[i] = {
                  rev: Math.round((d.revenue / maxRevenue) * CHART_HEIGHT),
                  spend: Math.round((d.adSpend / maxRevenue) * CHART_HEIGHT),
                };
                return next;
              });
            }, i * 50);
          });
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [animated]);

  return (
    <section ref={sectionRef} className="bg-white py-24 px-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700&display=swap');
        .rs * { font-family: 'Inter', sans-serif; }

        .rs-bar {
          transition: height 0.65s cubic-bezier(0.34, 1.3, 0.64, 1);
        }

        .rs-progress {
          transition: width 1.1s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .rs-card {
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .rs-card:hover {
          box-shadow: 0 4px 20px rgba(255,64,64,0.1);
          transform: translateY(-2px);
        }

        .rs-tr { transition: background 0.1s ease; cursor: pointer; }
        .rs-tr:hover td, .rs-tr.is-active td { background: #fff8f8; }
        .rs-tr.is-active td:first-child {
          border-left: 2px solid #FF4040;
          padding-left: 22px;
        }

        .rs-tooltip {
          pointer-events: none;
          animation: fadeUp 0.15s ease;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateX(-50%) translateY(4px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      <div className="rs max-w-7xl mx-auto">
        {/* ── Label ── */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-6 h-px bg-[#FF4040]" />
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#FF4040]">
            Results & Analytics
          </span>
        </div>

        {/* ── Heading row ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              How we grow your <span className="text-[#FF4040]">revenue</span>
            </h2>
            <p className="mt-3 text-gray-400 text-base max-w-lg leading-relaxed">
              A full year of campaign data — ad spend, returns, and ROI — so you
              can see exactly how we perform.
            </p>
          </div>

          {/* Quick stats pill */}
          <div className="flex-shrink-0 flex items-center gap-5 bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4">
            {[
              { val: "$2.05M", lbl: "Revenue generated" },
              { val: "454%", lbl: "Average ROI" },
              { val: "12 mo", lbl: "Tracked period" },
            ].map(({ val, lbl }, i, arr) => (
              <div key={lbl} className="flex items-center gap-5">
                <div>
                  <p className="text-xl font-bold text-gray-900 leading-none">
                    {val}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{lbl}</p>
                </div>
                {i < arr.length - 1 && <div className="w-px h-8 bg-gray-200" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── Stat cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Total Revenue",
              value: 2050000,
              prefix: "$",
              suffix: "",
              sub: "FY 2024",
            },
            {
              label: "Avg. ROI",
              value: 410,
              prefix: "",
              suffix: "%",
              sub: "All campaigns",
            },
            {
              label: "Total Ad Spend",
              value: 370000,
              prefix: "$",
              suffix: "",
              sub: "Managed budget",
            },
            {
              label: "Campaigns",
              value: 284,
              prefix: "",
              suffix: "+",
              sub: "Optimised & scaled",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="rs-card bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <p className="text-2xl font-bold text-gray-900 mb-0.5">
                <AnimatedNumber
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </p>
              <p className="text-sm font-medium text-gray-700">{s.label}</p>
              <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
              <div className="mt-4 w-6 h-0.5 rounded-full bg-[#FF4040]" />
            </div>
          ))}
        </div>

        {/* ── Chart ── */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 mb-6">
          {/* Chart header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Revenue vs Ad Spend
              </h3>
              <p className="text-sm text-gray-400 mt-0.5">
                Monthly comparison — Jan to Dec 2024
              </p>
            </div>
            <div className="flex items-center gap-6">
              {[
                { color: "#FF4040", label: "Revenue", border: "none" },
                {
                  color: "#FFE0E0",
                  label: "Ad Spend",
                  border: "1px solid #FFBFBF",
                },
              ].map(({ color, label, border }) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-sm"
                    style={{ background: color, border }}
                  />
                  <span className="text-sm text-gray-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart body */}
          <div className="flex gap-4">
            {/* Y-axis labels — fixed height matches CHART_HEIGHT */}
            <div
              className="flex flex-col justify-between flex-shrink-0 w-14 text-right"
              style={{ height: CHART_HEIGHT }}
            >
              {["$400K", "$300K", "$200K", "$100K", "$0"].map((l) => (
                <span key={l} className="text-xs text-gray-300 leading-none">
                  {l}
                </span>
              ))}
            </div>

            {/* Bars area */}
            <div className="flex-1 relative">
              {/* Horizontal grid lines */}
              <div
                className="absolute inset-0 flex flex-col justify-between pointer-events-none"
                style={{ height: CHART_HEIGHT }}
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full border-t border-gray-100" />
                ))}
              </div>

              {/* Bar columns */}
              <div
                className="flex items-end gap-2"
                style={{ height: CHART_HEIGHT }}
              >
                {monthlyData.map((d, i) => {
                  const isHov = hovered === i;
                  const heights = barHeights[i];
                  return (
                    <div
                      key={d.month}
                      className="flex-1 flex items-end gap-0.5 relative"
                      style={{ height: "100%", cursor: "pointer" }}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* Column hover highlight */}
                      {isHov && (
                        <div
                          className="absolute inset-x-0 bottom-0 top-0 rounded-t-lg pointer-events-none"
                          style={{ background: "rgba(255,64,64,0.04)" }}
                        />
                      )}

                      {/* Tooltip */}
                      {isHov && (
                        <div
                          className="rs-tooltip absolute z-30 bg-white border border-gray-100 rounded-xl shadow-xl p-3 text-xs whitespace-nowrap"
                          style={{
                            bottom: "calc(100% + 10px)",
                            left: "50%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          <p className="font-semibold text-gray-900 mb-2">
                            {d.month} 2024
                          </p>
                          <div className="space-y-1.5">
                            <div className="flex justify-between gap-6">
                              <span className="text-gray-400">Revenue</span>
                              <span className="font-semibold text-[#FF4040]">
                                ${d.revenue.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between gap-6">
                              <span className="text-gray-400">Ad Spend</span>
                              <span className="font-medium text-gray-700">
                                ${d.adSpend.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between gap-6 pt-1.5 border-t border-gray-100">
                              <span className="text-gray-400">ROI</span>
                              <span className="font-bold text-[#FF4040]">
                                {d.roi}%
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Revenue bar (red) */}
                      <div
                        className="rs-bar flex-1 rounded-t-sm"
                        style={{
                          height: heights.rev,
                          background: "#FF4040",
                          opacity: isHov ? 1 : 0.82,
                          boxShadow: isHov
                            ? "0 -4px 14px rgba(255,64,64,0.4)"
                            : "none",
                        }}
                      />

                      {/* Spend bar (light pink) */}
                      <div
                        className="rs-bar flex-1 rounded-t-sm"
                        style={{
                          height: heights.spend,
                          background: "#FFE0E0",
                          border: "1px solid #FFBFBF",
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* X-axis labels */}
              <div className="flex gap-2 mt-3">
                {monthlyData.map((d, i) => (
                  <div
                    key={d.month}
                    className="flex-1 text-center text-xs font-medium"
                    style={{
                      color: hovered === i ? "#FF4040" : "#cbd5e1",
                      transition: "color 0.15s",
                    }}
                  >
                    {d.month}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chart footer summary */}
          <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
            {[
              { val: "Dec 2024", label: "Peak Month", sub: "$390.5K revenue" },
              { val: "610%", label: "Best ROI", sub: "December" },
              { val: "+178%", label: "YoY Growth", sub: "vs prior year" },
            ].map(({ val, label, sub }) => (
              <div key={label}>
                <p className="text-xl font-bold text-[#FF4040]">{val}</p>
                <p className="text-sm font-medium text-gray-700 mt-0.5">
                  {label}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Table ── */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          {/* Table top bar */}
          <div className="px-8 py-5 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Monthly Performance Breakdown
              </h3>
              <p className="text-sm text-gray-400 mt-0.5">
                Ad spend, revenue, net profit & ROI — all 12 months
              </p>
            </div>
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                color: "#FF4040",
                background: "rgba(255,64,64,0.07)",
                border: "1px solid rgba(255,64,64,0.18)",
              }}
            >
              FY 2024
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  {[
                    "Month",
                    "Ad Spend",
                    "Revenue",
                    "Net Profit",
                    "ROI",
                    "Rating",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {monthlyData.map((d, i) => {
                  const net = d.revenue - d.adSpend;
                  const { label: ratingLabel, color: ratingColor } = getRating(
                    d.roi,
                  );
                  const roiBarWidth = `${Math.min((d.roi / 650) * 100, 100)}%`;
                  const isActive = hovered === i;

                  return (
                    <tr
                      key={d.month}
                      className={`rs-tr ${isActive ? "is-active" : ""}`}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* Month */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{
                              background: isActive ? "#FF4040" : "transparent",
                              border: isActive ? "none" : "1.5px solid #e2e8f0",
                              transition: "all 0.15s",
                            }}
                          />
                          {d.month} 2024
                        </div>
                      </td>

                      {/* Ad Spend */}
                      <td className="px-6 py-4 text-sm text-gray-500">
                        ${d.adSpend.toLocaleString()}
                      </td>

                      {/* Revenue */}
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        ${d.revenue.toLocaleString()}
                      </td>

                      {/* Net Profit */}
                      <td className="px-6 py-4 text-sm font-semibold text-emerald-600">
                        +${net.toLocaleString()}
                      </td>

                      {/* ROI bar + % */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-28 bg-gray-100 rounded-full h-1.5 overflow-hidden flex-shrink-0">
                            <div
                              className="rs-progress h-1.5 rounded-full bg-[#FF4040]"
                              style={{ width: animated ? roiBarWidth : "0%" }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-gray-900 w-10">
                            {d.roi}%
                          </span>
                        </div>
                      </td>

                      {/* Rating */}
                      <td className="px-6 py-4">
                        <span
                          className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                          style={{
                            color: ratingColor,
                            background: `${ratingColor}14`,
                            border: `1px solid ${ratingColor}30`,
                          }}
                        >
                          {ratingLabel}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>

              {/* Footer totals */}
              <tfoot>
                <tr className="bg-gray-50 border-t-2 border-gray-100">
                  <td className="px-6 py-5 text-sm font-bold text-gray-900">
                    Annual Total
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-500 font-medium">
                    $370,000
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-gray-900">
                    $2,050,900
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-emerald-600">
                    +$1,680,900
                  </td>
                  <td className="px-6 py-5" colSpan={2}>
                    <div className="flex items-center gap-3">
                      <div className="w-28 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="rs-progress h-1.5 rounded-full bg-[#FF4040]"
                          style={{ width: animated ? "70%" : "0%" }}
                        />
                      </div>
                      <span className="text-sm font-bold text-[#FF4040]">
                        ~454% avg
                      </span>
                      <span
                        className="ml-1 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                        style={{ background: "#FF4040" }}
                      >
                        🏆 Record Year
                      </span>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-5 text-center text-xs text-gray-300">
          Data reflects real campaign performance across all managed accounts —
          FY 2024.
        </p>
      </div>
    </section>
  );
}
