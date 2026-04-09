"use client";
import { useEffect } from "react";

const cards = [
  {
    tilt: -12,
    active: false,
    img: "https://images.unsplash.com/photo-1604604994333-f1b0e9471186?w=240&q=80",
  },
  {
    tilt: -6,
    active: false,
    img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=240&q=80",
  },
  {
    tilt: 0,
    active: false,
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=240&q=80",
  },
  {
    tilt: 6,
    active: false,
    img: "https://images.unsplash.com/photo-1579765338032-9f6b3614ff07?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    tilt: 12,
    active: false,
    img: "https://images.unsplash.com/photo-1522083165195-3424ed129620?w=240&q=80",
  },
];

const arcY = cards.map((c) => Math.round((c.tilt * c.tilt) / 1.3));
const keyframes = `
  @keyframes float0 { 0%,100%{transform:translateY(0px)}   50%{transform:translateY(-6px)}  }
  @keyframes float1 { 0%,100%{transform:translateY(-3px)}  50%{transform:translateY(-9px)}  }
  @keyframes float2 { 0%,100%{transform:translateY(-2px)}  50%{transform:translateY(-8px)}  }
  @keyframes float3 { 0%,100%{transform:translateY(-4px)}  50%{transform:translateY(-10px)} }
  @keyframes float4 { 0%,100%{transform:translateY(-1px)}  50%{transform:translateY(-7px)}  }
  @keyframes fadeUp { from{opacity:0;transform:translateY(60px)} to{opacity:1;transform:translateY(0)} }
`;

function FilmCard({
  card,
  index,
}: {
  card: { img: string; tilt: number };
  index: number;
}) {
  const entranceDelay = `${(0.1 + index * 0.12).toFixed(2)}s`;

  return (
    <div
      style={{
        transform: `translateY(${arcY[index]}px) rotate(${card.tilt}deg)`,
      }}
      className="flex flex-col px-3 items-center"
    >
      <div className="flex flex-col items-center cursor-pointer select-none">
        <div className="frame rounded-2xl overflow-hidden bg-neutral-900 transition-all duration-300 border border-white/10">
          <div className="overflow-hidden w-[240px] aspect-[3/4]">
            <img
              src={card.img}
              alt={`Film ${index + 1}`}
              className="w-full h-full object-cover block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FilmCarousel() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = keyframes;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex items-end justify-center gap-5 px-4 pt-10 pb-16 w-full  h-fit">
      {cards.map((card, i) => (
        <FilmCard key={card.img} card={card} index={i} />
      ))}
    </div>
  );
}
