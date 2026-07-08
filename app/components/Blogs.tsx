"use client";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: string | number;
  title: string;
  body: string; // HTML from Tiptap
  excerpt?: string | null;
  coverImage?: string | null;
  author?: string | null;
  publishedAt?: string | null;
  createdAt: string;
  slug: string;
  category?: string | null;
}

// Strip HTML tags + collapse whitespace for a plain-text preview
function htmlToPlainText(html: string | null | undefined): string {
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog?status=published");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogs(data.posts || []); // was: data.blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <p className="text-sm text-muted-foreground py-8 text-center">
        Loading blogs...
      </p>
    );
  }

  if (blogs.length === 0) {
    return (
      <p className="text-sm text-muted-foreground py-8 text-center">
        No blogs found.
      </p>
    );
  }

  return (
    <section className="mt-20">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-5xl text-center font-Cormorant font-medium">
            Latest <span className="text-primary">Blogs</span>
          </h2>

          <div className="flex gap-2">
            <button
              disabled={!canScrollPrev}
              onClick={() => api?.scrollPrev()}
              className="bg-red-500 disabled:opacity-40 p-2 rounded-full text-slate-50 transition-opacity"
              aria-label="Previous"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              disabled={!canScrollNext}
              onClick={() => api?.scrollNext()}
              className="bg-red-500 disabled:opacity-40 p-2 rounded-full text-slate-50 transition-opacity"
              aria-label="Next"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Carousel
          opts={{ align: "start", loop: false }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {blogs.map((blog, index) => {
              const previewText =htmlToPlainText(blog.body);

              return (
                <CarouselItem
                  key={blog.id ?? index}
                  className="pl-4 basis-full border border-border sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative flex flex-col h-full rounded-xl overflow-hidden border border-gray-400 bg-card shadow-xs hover:shadow-md transition-shadow duration-200">
                      {/* Thumbnail */}
                      <div className="relative h-48 w-full shrink-0 overflow-hidden bg-muted">
                        {blog.coverImage ? (
                          <Image
                            src={blog.coverImage}
                            alt={blog.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-muted" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 p-4 gap-2">
                        <h3 className="font-semibold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                          {blog.title}
                        </h3>

                        {previewText && (
                          <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                            {previewText}
                          </p>
                        )}

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">
                              {blog.author ?? "Unknown"}
                            </span>
                            {(blog.publishedAt ?? blog.createdAt) && (
                              <span className="ml-2">
                                {new Date(
                                  blog.publishedAt ?? blog.createdAt,
                                ).toLocaleDateString(undefined, {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </span>
                            )}
                          </div>
                          <MoveUpRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Blogs;
