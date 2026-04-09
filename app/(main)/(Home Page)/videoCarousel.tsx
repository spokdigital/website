"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const videos = [
  {
    src: "/media/PhotosVideos/Business Setup.mp4",
    thumbnail:
      "/media/PhotosVideos/Thumbnails/4th Draft - Bizgrowth-compressed.jpg",
  },
  {
    src: "/media/PhotosVideos/Marketing/starbucks misspelling-compressed.mov",
    thumbnail:
      "/media/PhotosVideos/Thumbnails/starbucks misspelling-compressed.jpg",
  },
  {
    src: "/media/PhotosVideos/Ram_Podcast_Final-compressed.mov",
    thumbnail:
      "/media/PhotosVideos/Thumbnails/Ram_Podcast_Final-compressed.jpg",
  },
  {
    src: "/media/PhotosVideos/Real Estate/Salwa_Arabic_draft02-compressed.mov",
    thumbnail:
      "/media/PhotosVideos/Thumbnails/Salwa_Arabic_draft02-compressed.jpg",
  },
  {
    src: "/media/PhotosVideos/Real Estate/Salwa_Javed_Meraas_with new qr-compressed.mov",
    thumbnail:
      "/media/PhotosVideos/Thumbnails/Salwa_Javed_Meraas_with new qr-compressed.jpg",
  },
  {
    src: "/media/PhotosVideos/Real Estate/10.mp4",
    thumbnail: "/media/PhotosVideos/Thumbnails/10.jpg",
  },
  {
    src: "/media/PhotosVideos/Real Estate/Rubab_D2_Draft01-compressed.mov",
    thumbnail: "/media/PhotosVideos/Thumbnails/Rubab_D2_Draft01-compressed.jpg",
  },
];

export default function VideoCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      setCurrent(api.selectedScrollSnap());
      setCount(api.scrollSnapList().length);
    };
    update();
    api.on("select", update);
    return () => {
      api.off?.("select", update);
    };
  }, [api]);

  return (
    <section className="w-full">
      <div className="container mt-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl md:text-5xl font-[500] font-Cormorant tracking-tight">
            Our Best UGC Content
          </h2>
          <div className="flex gap-2">
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
          setApi={setApi}
          opts={{ loop: false, align: "start" }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {videos.map((video, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/4"
              >
                <Card className="rounded-2xl shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <video
                      src={video.src}
                      poster={video.thumbnail}
                      className="w-full aspect-[2/3] object-cover"
                      preload="metadata"
                      onMouseEnter={(e) => {
                        const vid = e.currentTarget;
                        vid.currentTime = 0;
                        vid.play();
                      }}
                      onMouseLeave={(e) => {
                        const vid = e.currentTarget;
                        vid.pause();
                        vid.currentTime = 0;
                      }}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                current === index ? "bg-black w-4" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
