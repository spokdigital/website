"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/app/(main)/App chunks/components/Logo";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const scrollToBooking = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: "#booking",
      ease: "power3.out",
    });
  };
  return (
    <div className="!max-w-[94%] mx-auto py-3 flex justify-between items-center ">
      <Logo source="/spok-balck.png" className="!w-[220px]" />

      <button
        onClick={scrollToBooking}
        className="px-5 font-Satoshi py-2 bg-black hover:bg-primary transition-colors duration-300 text-slate-50 rounded-full"
      >
        Let's begin
      </button>
    </div>
  );
};

export default Header;
