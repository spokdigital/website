import CurvedLoop from "../App chunks/components/curvedMarquee";
import {
  ScrollVelocityRow,
  ScrollVelocityContainer,
} from "@/components/ui/scroll-based-velocity";

export function TextMarquee() {
  return (
    <div className="relative my-24 flex w-full  flex-col items-center justify-center">
      <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] !fill-black !text-[10rem] lg:!text-7xl font-Grostek md:leading-20">
        <ScrollVelocityRow baseVelocity={10} direction={1}>
          ✦ WooCommerce ✦ ROAS ✦ Scaling ✦ Funnels ✦ Profit ✦ Shopify ✦
          Conversions
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
}
