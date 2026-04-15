import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    img: "Logo/bizgrowth.png",
  },
  {
    img: "Logo/bshh.png",
  },
  {
    img: "Logo/craftdesk.png",
  },
  {
    img: "Logo/insight.png",
  },
  {
    img: "Logo/menlo.png",
  },
  {
    img: "Logo/milestone.png",
  },
  {
    img: "Logo/shobha.png",
  },
  { img: "Logo/bm.png" },
  { img: "Logo/nnoir.png" },
  { img: "Logo/opto.png" },
  { img: "Logo/oasis.png" },
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        `relative w-[140px] cursor-pointer overflow-hidden  ${img.split("/").pop() == "bizgrowth.png" ? " p-2" : ""}
        ${img.split("/").pop() == "craft-desk.png" ? " p-2" : ""}`,
      )}
    >
      <img className=" w-full h-full object-contain" src={img} />
    </figure>
  );
};

export function MarqueeLogo({ showText = true }: { showText?: boolean }) {
  return (
    <div className="relative  flex py-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      {showText && (
        <div className="w-full mb-12 container">
          <h1 className="text-3xl lg:text-5xl text-center font-Cormorant font-[500] ">
            Trusted by
          </h1>
        </div>
      )}

      <Marquee pauseOnHover className="[--duration:25s]">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
