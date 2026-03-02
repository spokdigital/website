import Logo from "@/app/(main)/App chunks/components/Logo";
import React from "react";

export default function HackFirstFooter() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800 opacity-80" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Col 1 — Logo + description */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-sm leading-relaxed text-white/70 max-w-xs">
              spok digital is a digital agency that specializes in strategic
              communications, digital strategy consulting, and digital strategy
              implementation.
            </p>
          </div>

          {/* Col 2 — About (hidden on mobile since it duplicates description) */}
          <div className="hidden md:flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-white/50">
              About
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              spok digital is a digital agency that specializes in strategic
              communications, digital strategy consulting, and digital strategy
              implementation.
            </p>
          </div>

          {/* Col 3 — Navigation */}
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-white/50">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="/"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200 w-fit"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Socials */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-white/50">
              Socials
            </p>
            <div className="flex items-center gap-5 text-sm text-white/70">
              {["Facebook", "LinkedIn", "X"].map((s, i, arr) => (
                <React.Fragment key={s}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {s}
                  </a>
                  {i < arr.length - 1 && (
                    <span className="text-white/30">▪</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Progress indicator + copyright */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-white/70" />
              <div className="w-2 h-2 bg-white/50" />
              <div className="w-2 h-2 bg-white/30" />
            </div>
            <span className="text-xs text-white/40">92%</span>
            <span className="text-xs text-white/30 ml-2">
              © {new Date().getFullYear()} spok digital
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
