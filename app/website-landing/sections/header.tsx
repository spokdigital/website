import React from "react";
import Link from "next/link";
import Logo from "@/app/(main)/App chunks/components/Logo";
const Header = () => {
  return (
    <div className="!max-w-[94%] mx-auto py-3 flex justify-between items-center ">
      <Logo source="/spok-balck.png" className="!w-[160px]" />
      <Link href={"/contact"}>
        <button className="px-5 font-Satoshi py-2 bg-black text-slate-50 rounded-full">
          Let's begin
        </button>
      </Link>
    </div>
  );
};

export default Header;
