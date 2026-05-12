import React from "react";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
const Ribbon = ({
  rotate = 0,
  className,
}: {
  rotate?: number;
  className?: string;
}) => {
  return (
    <div style={{ rotate: `${rotate}deg` }}>
      <ScrollVelocityContainer
        className={`font-display bg-primary  text-center lg:text-7xl text-4xl font-Satoshi ${className} font-bold tracking-[-0.02em] text-black drop-shadow-sm  `}
      >
        <ScrollVelocityRow
          baseVelocity={20}
          direction={-1}
        >
          ✦ Let's Build Together &nbsp;
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
};

export default Ribbon;
