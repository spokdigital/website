"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel, {
  Slider,
  SliderContainer,
  SliderProgress,
  SliderNextButton,
  SliderPrevButton,
} from "../App chunks/components/Carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
const Testimonials = () => {
  const OPTIONS: EmblaOptionsType = { loop: false };

  return (
    <div className="w-full overflow-hidden relative py-20">
      <div className="container">
        <h1 className=" text-4xl text-black text-center lg:text-5xl font-Cormorant mb-10 font-[500]">
          Our Clients Experience
        </h1>
        <Carousel className="bg-transparent " options={OPTIONS}>
          <SliderContainer className="gap-2 lg:gap-5 !px-0 !py-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <Slider
                key={i}
                className=" w-2/3 overflow-hidden rounded-xl lg:w-1/5 shadow-md "
              >
                <img
                  src={`/testimonial/img${i + 1}.jpg`}
                  alt={""}
                  className="w-full h-full object-contain"
                />
              </Slider>
            ))}
          </SliderContainer>

          <div className="flex items-center gap-5 justify-end my-5">
            <SliderPrevButton className="bg-red-500 p-2 rounded-full text-slate-50">
              <ArrowLeft />
            </SliderPrevButton>
            <SliderNextButton className="bg-red-500 p-2 rounded-full text-slate-50">
              <ArrowRight />
            </SliderNextButton>
          </div>

          <div className="flex justify-center py-2">
            <SliderProgress />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
