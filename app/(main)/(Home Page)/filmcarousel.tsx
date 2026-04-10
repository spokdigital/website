"use client";
import { useEffect, useRef } from "react";

const images = [
  {
    img: "/media/photographyImages/15.jpg",
    style: { top: "5%", left: "1%", width: "240px" },
    speed: 15,
  },
  {
    img: "/media/photographyImages/11.jpg",
    style: { top: "50%", left: "3%", width: "265px" },
    speed: 12,
  },
  {
    img: "/media/photographyImages/DSC00060.jpg",
    style: { bottom: "6%", left: "32%", width: "245px" },
    speed: 18,
  },
  {
    img: "/media/photographyImages/5.jpg",
    style: { top: "15%", left: "25%", width: "230px" },
    speed: 20,
  },
  {
    img: "/media/photographyImages/1.jpg",
    style: { top: "4%", left: "45%", width: "250px" },
    speed: 10,
  },
  {
    img: "/media/photographyImages/13.jpg",
    style: { top: "36%", left: "54%", width: "240px" },
    speed: 18,
  },
  {
    img: "/media/photographyImages/9.jpg",
    style: { top: "4%", right: "6%", width: "265px" },
    speed: 6,
  },
  {
    img: "/media/photographyImages/7.jpg",
    style: { top: "50%", right: "3%", width: "235px" },
    speed: 12,
  },
];

export default function FloatingImages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // entrance
      imgRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          opacity: 0,
          y: 20,
          duration: 1,
          delay: 0.1 + i * 0.1,
          ease: "power3.out",
        });
      });

      // parallax using yPercent so movement scales with element size
      imgRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { yPercent: images[i].speed },
          {
            yPercent: -images[i].speed,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          },
        );
      });

      cleanup = () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        gsap.killTweensOf(imgRefs.current);
      };
    };

    init();
    return () => cleanup?.();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: "900px" }}
    >
      {images.map((item, i) => (
        <div
          key={i}
          ref={(el) => {
            imgRefs.current[i] = el;
          }}
          className="absolute will-change-transform"
          style={item.style as React.CSSProperties}
        >
          <div className="shadow-lg">
            <img
              src={item.img}
              alt=""
              className="w-full aspect-[3/4] object-cover block"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
