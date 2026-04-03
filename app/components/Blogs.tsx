"use client";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/—/g, "-")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

// ---------------------------------------------------------------------------
// Lexical JSON → plain text (for blog card previews)
// ---------------------------------------------------------------------------
type LexicalNode = {
  type: string;
  text?: string;
  children?: LexicalNode[];
};

function extractPlainText(node: LexicalNode): string {
  if (node.type === "text") return node.text || "";
  if (node.children) return node.children.map(extractPlainText).join(" ");
  return "";
}

function lexicalToPlainText(content: string | object | null): string {
  if (!content) return "";
  try {
    const parsed = typeof content === "string" ? JSON.parse(content) : content;
    return extractPlainText(parsed.root).replace(/\s+/g, " ").trim();
  } catch {
    return "";
  }
}
// ---------------------------------------------------------------------------

interface Blog {
  id: string | number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  author?: string;
  slugTitle?: string;
  [key: string]: any;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
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
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className=" text-gray-900 relative">
      {blogs.length !== 0 ? (
        <div className="">
          <Carousel opts={{ align: "start" }} setApi={setApi} className="">
            <CarouselContent className="-ml-4">
              {blogs.map((blog, index) => {
                // Extract plain text preview once per blog
                const previewText = lexicalToPlainText(blog.content);

                return (
                  <CarouselItem
                    key={blog.id || index}
                    className="pb-10 relative basis-full sm:basis-1/2 lg:basis-1/4"
                  >
                    <div className="bg-blue-50 p-1 relative shadow-sm rounded-lg overflow-hidden">
                      <div className="h-[230px] lg:h-[200px] overflow-hidden rounded-lg w-full relative">
                        <div className="absolute inset-0 bg-black/20 z-10" />
                        {blog.image && (
                          <Image
                            src={`/api/uploads/${blog.image}`}
                            alt={blog.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>

                      {/* Blog Info */}
                      <div className="p-4 relative z-20">
                        <h3 className="font-bold text-lg line-clamp-2">
                          {blog.title}
                        </h3>

                        {/* Plain text preview — no Editor needed, works server-side */}
                        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                          {previewText}
                        </p>

                        <div className="flex text-slate-500 mt-2 text-xs items-center justify-between">
                          <span>{blog.author ?? "Unknown"}</span>
                          <span>
                            {blog.createdAt
                              ? new Date(blog.createdAt).toLocaleDateString()
                              : "Unknown"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link href={`/blogs/${blog.slugTitle}`}>
                      <button className="absolute right-4 bottom-4 bg-primary hover:bg-primary/80 text-white rounded-lg p-2">
                        <MoveUpRight />
                      </button>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          <div className="mt-7 lg:mt-0 flex justify-end gap-2">
            <button
              disabled={!canScrollPrev}
              onClick={() => api?.scrollPrev()}
              className="bg-primary/80 disabled:bg-slate-400 text-white p-2 rounded-full"
            >
              <ArrowLeft />
            </button>
            <button
              disabled={!canScrollNext}
              onClick={() => api?.scrollNext()}
              className="bg-primary/80 disabled:bg-slate-400 text-white p-2 rounded-full"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      ) : (
        <p>Blogs not found</p>
      )}
    </section>
  );
};

export default Blogs;
