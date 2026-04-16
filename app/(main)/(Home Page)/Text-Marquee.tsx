import CurvedLoop from "../App chunks/components/curvedMarquee";

export function TextMarquee() {
  return (
    <div className="relative mt-10 mb-12 lg:mt-44 lg:mb-24 flex w-full  h-[200px]  flex-col items-center justify-center">
      <CurvedLoop
        marqueeText="✦ WooCommerce ✦ ROAS ✦ Scaling ✦ Funnels ✦ Profit ✦ Shopify ✦ Conversions"
        speed={2}
        curveAmount={400}
        interactive={false}
        className=" !fill-black !text-[10rem] lg:text-7xl font-Grostek"
      />
    </div>
  );
}
