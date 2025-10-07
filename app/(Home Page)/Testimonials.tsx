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
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
const Testimonials = () => {
  const OPTIONS: EmblaOptionsType = { loop: false };

  return (
    <div className="w-full overflow-hidden bg-red-100 relative py-16">
      <div className="container">
        <h1 className=" text-4xl text-[#590000] text-center lg:text-5xl font-Grostek mb-8 font-[600]">
          Our Clients Experience
        </h1>
        <Carousel className="bg-transparent " options={OPTIONS}>
          <SliderContainer className="gap-2 lg:gap-5 !px-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <Slider
                key={i}
                className=" w-2/3 lg:h-[500px] bg-black lg:w-1/3 rounded-xl shadow-md "
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
