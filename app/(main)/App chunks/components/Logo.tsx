import React from "react";
import Link from "next/link";

const Logo = ({
  className,
  source = "/spok-white.png",
}: {
  className?: string;
  source?: string;
}) => {
  return (
    <Link href="/">
      <div className={`w-[180px] ${className}`}>
        <img src={source} alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
