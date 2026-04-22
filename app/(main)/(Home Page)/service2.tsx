"use client";
import { useState } from "react";

const services = [
  {
    title: "Branding",
    desc: "Crafting memorable identities that scale across every touchpoint.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
  },
  {
    title: "Web Development",
    desc: "High-performance websites built for speed, SEO, and conversion.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
  },
  {
    title: "Content Creation",
    desc: "Visual storytelling that drives engagement and builds trust.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
  },
  {
    title: "Marketing",
    desc: "Data-driven campaigns that attract, convert, and scale.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
];

export default function ServicesSplit() {
  const [active, setActive] = useState(0);

  return (
    <section className="mt-24 ">
      <div className="container">
        {/* Heading */}
        <div className="mb-20 max-w-2xl">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-4">
            Our Services
          </p>
          <h2 className="text-5xl font-[500] font-Cormorant text-gray-900 leading-tight">
            Built for impact,
            <span className="block text-primary">designed to scale</span>
          </h2>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: LIST */}
          <div className="flex flex-col">
            {services.map((service, i) => {
              const isActive = active === i;

              return (
                <div
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  className="group py-8 border-b border-gray-200 cursor-pointer"
                >
                  <div className="flex items-start gap-6">
                    {/* Index */}
                    <span
                      className={`text-3xl font-medium transition ${
                        isActive ? "text-black" : "text-gray-400"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Text */}
                    <div>
                      <h3
                        className={`text-2xl md:text-3xl font-semibold transition ${
                          isActive ? "text-black" : "text-gray-500"
                        }`}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`mt-2 max-w-md text-sm leading-relaxed transition-all duration-300 ${
                          isActive
                            ? "text-gray-600 opacity-100"
                            : "opacity-0 -translate-y-2"
                        }`}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* underline animation */}
                  <div className="mt-6 h-[1px] w-full bg-gray-200 relative overflow-hidden">
                    <div
                      className={`absolute left-0 top-0 h-full bg-black transition-all duration-500 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: IMAGE PREVIEW */}
          <div className="sticky top-24 h-[500px] rounded-3xl overflow-hidden">
            {services.map((service, i) => {
              const isActive = active === i;

              return (
                <img
                  key={i}
                  src={service.image}
                  alt={service.title}
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }
                  `}
                />
              );
            })}

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
