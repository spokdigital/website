import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    img: "Logo/bizgrowth.png",
  },
  {
    img: "Logo/Brownstone.png",
  },
  {
    img: "Logo/craft-desk.png",
  },
  {
    img: "Logo/InsightVision.png",
  },
  {
    img: "Logo/menlocloud.png",
  },
  {
    img: "Logo/milestone.png",
  },
  {
    img: "Logo/shobha.png",
  },
  { img: "Logo/zippro.png" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        `relative w-[100px] cursor-pointer overflow-hidden ${
          img.split("/").pop() == "Spok Digital.png" ? "bg-black p-2" : ""
        } ${img.split("/").pop() == "bizgrowth.png" ? " p-2" : ""}
        ${
          img.split("/").pop() == "craft-desk.png" ? " p-2" : ""
        } rounded-xl border`
      )}
    >
      <img className=" w-full h-full object-contain" src={img} />
    </figure>
  );
};

export function MarqueeLogo() {
  return (
    <div className="relative bg-red-100 flex py-20 w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <div className="w-full mb-12 container">
        <h1 className="text-3xl lg:text-5xl text-center font-SplineSans font-[500] ">
          Trusted by
        </h1>
      </div>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
