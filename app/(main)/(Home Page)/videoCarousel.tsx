"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [current, setCurrent] = React.useState(0);

  const itemsPerView = 4;
  const totalSlides = Math.ceil(videos.length / itemsPerView);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full container mt-20 relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl md:text-5xl font-[500] font-Cormorant tracking-tight">
          Our Best UGC Content
        </h2>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="rounded-full bg-primary text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="rounded-full bg-primary text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="min-w-full p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {videos
                  .slice(
                    slideIndex * itemsPerView,
                    slideIndex * itemsPerView + itemsPerView,
                  )
                  .map((video, index) => (
                    <Card
                      key={index}
                      className="rounded-2xl shadow-lg overflow-hidden"
                    >
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
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === index ? "bg-black w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
