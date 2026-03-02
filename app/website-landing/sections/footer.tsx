import Logo from "@/app/(main)/App chunks/components/Logo";
import React from "react";
import Link from "next/link";
const navLinks = [
  { label: "Home", link: "/" },
  { label: "Services", link: "/" },
  { label: "About", link: "/About" },
  { label: "Contact", link: "/contact" },
];
const socials = [
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
];

export default function HackFirstFooter() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-red-600/10 blur-[120px]" />

      {/* Top accent line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* CTA Banner */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/[0.07] pb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-red-500 font-semibold mb-3">
              Ready to grow?
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-white">
              Let's build something <br />
              <span className="text-white/20">that performs.</span>
            </h2>
          </div>
          <a
            href="#"
            className="self-start md:self-end inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-red-600 text-white text-sm font-bold tracking-wide transition-all duration-200 hover:scale-105 active:scale-100 shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-red-50/60 animate-pulse" />
            Book a free call
          </a>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 mb-14">
          {/* Brand col */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Logo />
            <p className="text-sm leading-relaxed text-white/40 max-w-xs">
              Strategy first. Execution second. Revenue always. We build digital
              infrastructure that performs long after launch.
            </p>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs text-white/30 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-full transition-all duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Nav col */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-semibold">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.link}
                  className="group flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 w-fit"
                >
                  <span className="w-0 h-px bg-red-500 group-hover:w-3 transition-all duration-300" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact col */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-semibold">
              Contact
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/40">
              <a
                href="mailto:hello@spokdigital.com"
                className="hover:text-white transition-colors duration-200"
              >
                info@spok.digital
              </a>
              <a
                href="tel:+971 50 712 1707"
                className="hover:text-white transition-colors duration-200"
              >
                +971 50 712 1707
              </a>
              <p className="text-white/25 text-xs mt-1">
                Office (UAE) – 1701, Churchill Towers, Business Bay, Dubai, UAE
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-xs text-white/20">
            © {new Date().getFullYear()} spok digital. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
