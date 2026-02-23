import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    img: "media/atlassian.png",
  },
  {
    img: "media/aws.png",
  },
  {
    img: "media/azure.png",
  },
  {
    img: "media/bash.png",
  },
  {
    img: "media/bunjs.png",
  },
  {
    img: "media/docker.png",
  },
  {
    img: "media/django.png",
  },
  { img: "media/kotlin.svg" },
];

const firstRow = reviews.slice(0, reviews.length);
const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        `relative w-[80px] cursor-pointer ml-10 overflow-hidden ${
          img.split("/").pop() == "Spok Digital.png" ? "bg-black p-2" : ""
        } ${img.split("/").pop() == "bizgrowth.png" ? " p-2" : ""}
        ${img.split("/").pop() == "craft-desk.png" ? " p-2" : ""} rounded-xl `
      )}
    >
      <img className=" w-full h-full object-contain" src={img} />
    </figure>
  );
};

export function TechLogo() {
  return (
    <div className="relative pt-16 pb-5 bg-red-100 flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-red-100 via-red-100/80"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-red-100 via-red-100/80"></div>
    </div>
  );
}
