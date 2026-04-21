import React from "react";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
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
      <ScrollVelocityContainer
        className={`font-display bg-primary text-center font-Satoshi py-4 text-4xl ${className} font-bold tracking-[-0.02em] text-black drop-shadow-sm  md:text-7xl !leading-[14rem]`}
      >
        <ScrollVelocityRow baseVelocity={20} direction={-1}>
          ✦ Let's Build Together &nbsp;
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
};

export default Ribbon;
