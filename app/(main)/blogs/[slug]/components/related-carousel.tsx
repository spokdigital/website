"use client";
import Image from "next/image";
import Link from "next/link";
import { ClockIcon, UserIcon } from "@phosphor-icons/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type RelatedPost = {
  id: number; title: string; slug: string; excerpt: string | null;
  coverImage: string | null; author: string | null;
  publishedAt: Date | null; createdAt: Date; body: string; category: string | null;
};

const readingTime = (body: string) =>
  Math.max(1, Math.ceil(body.replace(/<[^>]+>/g, "").split(/\s+/).length / 200));

const formatDate = (d: Date) =>
  new Date(d).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });

export function RelatedCarousel({ posts }: { posts: RelatedPost[] }) {
  return (
    <Carousel
      opts={{ align: "start", loop: posts.length > 3 }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {posts.map((post) => (
          <CarouselItem
            key={post.id}
            className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <Link
              href={`/blogs/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-background overflow-hidden hover:border-foreground/20 hover:shadow-md transition-all duration-200 h-full"
            >
              {/* Cover */}
              <div className="relative h-44 overflow-hidden bg-surface">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage} alt={post.title} fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl font-black text-foreground/10 uppercase">
                    {post.title[0]}
                  </div>
                )}
                {post.category && (
                  <span className="absolute top-3 left-3 text-xs font-medium bg-background/90 backdrop-blur-xs border border-border rounded-full px-2.5 py-1">
                    {post.category}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-4 gap-2">
                <h3 className="font-semibold text-sm text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-xs text-foreground-muted line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex-1" />
                <div className="flex items-center justify-between pt-3 border-t border-border text-xs text-foreground-muted">
                  <span className="flex items-center gap-1">
                    <UserIcon size={10} /> {post.author ?? "Anonymous"}
                  </span>
                  <span className="flex items-center gap-1">
                    <ClockIcon size={10} /> {readingTime(post.body)} min
                  </span>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4" />
      <CarouselNext className="-right-4" />
    </Carousel>
  );
}