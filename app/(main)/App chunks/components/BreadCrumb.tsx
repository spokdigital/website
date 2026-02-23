"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const BreadCrumb = () => {
  const path = usePathname();
  return (
    <div className="flex font-SplineSans items-start gap-1">
      <Link href={"/"} className="hover:underline text-slate-600">
        Home /
      </Link>
      <div>
        {path.split("/").map(
          (item, index) =>
            item !== "/" && (
              <p className="text-slate-50 capitalize" key={index}>
                {item.split("-").join(" ")}
              </p>
            )
        )}
      </div>
    </div>
  );
};

export default BreadCrumb;
