import React from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
const Ribbon = ({
  text = " Modern Website | ",
  rotate = 0,
  velocity = 5,
  className,
}: {
  text?: string;
  rotate?: number;
  velocity?: number;
  className?: string;
}) => {
  return (
    <div style={{ rotate: `${rotate}deg` }}>
      <VelocityScroll
        text={text}
        default_velocity={velocity}
        className={`font-display bg-gradient-to-tr  from-red-500 from-90% to-red-400 text-center font-Satoshi py-4 text-4xl ${className} font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]`}
      />
    </div>
  );
};

export default Ribbon;
