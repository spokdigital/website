"use client";
import React, { useRef } from "react";
import Logo from "./Logo";
import Ribbon from "./Ribbon";
import { motion, useInView } from "framer-motion";
import { Circle, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const menu = [
    { title: "Home", link: "/" },
    { title: "About", link: "/About" },
    { title: "D2c Growth", link: "/d2c" },
    { title: "Business Accelerator", link: "/website-landing" },
    { title: "Portfolio", link: "/Portfolio" },
    { title: "Contact", link: "/contact" },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const path = usePathname();
  const renderPath = "/admin";

  return !path.includes(renderPath) ? (
    <div
      ref={ref}
      className="relative overflow-hidden bg-[#0a0a0a] w-full pt-16 pb-6"
    >
      {/* Subtle top border glow — red */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      {/* Background ambient glow — red */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start mb-14">
          {/* Brand Column */}
          <div className="max-w-sm">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <Logo source="/spok-white.png" className="!w-[160px] mb-5" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="text-slate-400 text-sm leading-relaxed font-Satoshi"
            >
              AI-powered websites that convert. We combine web development, SEO,
              and performance marketing to create digital experiences that
              attract, engage, and scale your brand.
            </motion.p>

            {/* Subscribe */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="mt-7"
            >
              <p className="text-slate-300 text-xs uppercase tracking-widest mb-3 font-Satoshi">
                Stay in the loop
              </p>
              <div className="relative w-full max-w-xs">
                <input
                  placeholder="your@email.com"
                  className="w-full text-slate-100 placeholder:text-slate-600 text-sm pl-4 pr-14 py-3 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-red-600/60 transition-colors duration-200"
                />
                <button className="absolute top-1/2 right-1 -translate-y-1/2 h-9 w-9 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center transition-colors duration-200">
                  <ArrowUpRight size={16} className="text-white" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Columns: Nav + Contact */}
          <div className="grid grid-cols-2 gap-10 lg:gap-16">
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              <p className="text-slate-300 text-xs uppercase tracking-widest mb-5 font-Satoshi">
                Navigation
              </p>
              <ul className="space-y-3">
                {menu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="group text-slate-400 hover:text-white text-sm font-Satoshi transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="block w-0 group-hover:w-3 h-px bg-red-500 transition-all duration-300 ease-out" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              <p className="text-slate-300 text-xs uppercase tracking-widest mb-5 font-Satoshi">
                Contact
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-red-500 w-4 h-4 mt-0.5 shrink-0" />
                  <div className="text-slate-400 text-sm leading-relaxed font-Satoshi">
                    <span className="text-slate-300 block text-xs uppercase tracking-wider mb-0.5">
                      UAE
                    </span>
                    Churchill Towers, Business Bay, Dubai
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-red-500 w-4 h-4 mt-0.5 shrink-0" />
                  <div className="text-slate-400 text-sm leading-relaxed font-Satoshi">
                    <span className="text-slate-300 block text-xs uppercase tracking-wider mb-0.5">
                      USA
                    </span>
                    Mountain View, CA 94040
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-red-500 w-4 h-4 shrink-0" />
                  <p className="text-slate-400 text-sm font-Satoshi">
                    +971 50 712 1707
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-red-500 w-4 h-4 shrink-0" />
                  <p className="text-slate-400 text-sm font-Satoshi">
                    info@spok.digital
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-5" />

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs font-Satoshi order-2 lg:order-1">
            © 2025 Spok Digital. All rights reserved.
          </p>

          <div className="flex items-center gap-2 order-1 lg:order-2">
            <Circle weight="fill" className="text-[8px] text-emerald-400" />
            <span className="text-slate-400 text-xs font-Satoshi tracking-wide">
              All systems operational
            </span>
          </div>

          <p className="text-slate-600 text-xs font-Satoshi order-3">
            Designed & built by{" "}
            <span className="text-slate-400 underline underline-offset-4">
              Spok Digital
            </span>
          </p>
        </div>
      </div>

      {/* Ribbon */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="overflow-hidden mt-10"
      >
        <Ribbon
          className="!text-red-50 !text-lg lg:!text-7xl"
          text={`  Let's Talk ↗  `}
        />
      </motion.div>
    </div>
  ) : null;
};

export default Footer;
