"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    return () => {
      api.off?.("select", update);
    };
  }, [api]);

  return (
    <div className="w-full overflow-hidden relative py-20">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl text-black lg:text-5xl font-Cormorant font-[500]">
            Our Clients Experience
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
              className="bg-red-500 disabled:opacity-40 p-2 rounded-full text-slate-50 transition-opacity"
              aria-label="Previous"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
              className="bg-red-500 disabled:opacity-40 p-2 rounded-full text-slate-50 transition-opacity"
              aria-label="Next"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Carousel
          opts={{ loop: false, align: "start" }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-2 lg:-ml-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <CarouselItem
                key={i}
                className="pl-2 lg:pl-5 basis-2/3 lg:basis-1/5"
              >
                <div className="overflow-hidden rounded-xl shadow-md">
                  <img
                    src={`/testimonial/img${i + 1}.jpg`}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
