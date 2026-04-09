import CurvedLoop from "../App chunks/components/curvedMarquee";
const reviews = [
  "WooCommerce",
  "ROAS",
  "Scaling",
  "Funnels",
  "Profit",
  "Shopify",
  "Conversions",
];

const firstRow = reviews.slice(0, reviews.length);

export function TextMarquee() {
  return (
    <div className="relative mt-44 mb-24 flex w-full  h-[200px]  flex-col items-center justify-center">
      <CurvedLoop
        marqueeText="✦ WooCommerce ✦ ROAS ✦ Scaling ✦ Funnels ✦ Profit ✦ Shopify ✦ Conversions"
        speed={2}
        curveAmount={400}
        interactive={false}
        className=" !fill-black text-7xl font-Grostek"
      />
    </div>
  );
}
