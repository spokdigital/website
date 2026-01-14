import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { Asterisk } from "lucide-react";
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
const ReviewCard = ({ review }: { review: string }) => {
  return (
    <figure
      className={cn(
        `relative font-[500] text-5xl flex items-center gap-8 cursor-pointer mx-5 rounded-xl`
      )}
    >
      <Asterisk /> {review}
    </figure>
  );
};

export function TextMarquee() {
  return (
    <div className="relative  mb-12 flex w-full  flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:10s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </Marquee>
    </div>
  );
}
