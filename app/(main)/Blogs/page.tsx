"use client";

import { useState, useEffect, useRef } from "react";
import { Editor } from "@/components/blocks/editor-00/editor";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  category: string;
  createdAt: string;
  slugTitle: string;
}

interface BlogsResponse {
  blogs: Blog[];
}

const parseContent = (content: string | object) =>
  typeof content === "string"
    ? (() => {
        try {
          return JSON.parse(content);
        } catch {
          return null;
        }
      })()
    : content;

const formatDate = (date: string, options: Intl.DateTimeFormatOptions) =>
  new Date(date).toLocaleDateString("en-US", options);

// ─── Page ─────────────────────────────────────────────────────────────────────
const Page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data: BlogsResponse = await res.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisibleCount((prev) => prev + 6);
      },
      { threshold: 1 },
    );
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [blogs]);

  const visibleBlogs = blogs.slice(0, visibleCount);
  const [featured, ...rest] = visibleBlogs;

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* ── Masthead ── */}
      <header className="flex items-baseline justify-between gap-4 border-b border-stone-200 px-6 py-5 md:px-10">
        <div className="flex items-baseline gap-4">
          <span className="font-serif text-2xl font-black tracking-tight">
            The Journal
          </span>
          <span className="hidden text-[0.65rem] font-medium uppercase tracking-widest text-stone-400 sm:block">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <span className="text-[0.65rem] font-medium uppercase tracking-widest text-stone-400">
          Stories Worth Reading
        </span>
      </header>

      <div className="h-[3px] bg-stone-900" />

      {/* ── States ── */}
      {loading ? (
        <LoadingSkeleton />
      ) : blogs.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          {/* Featured */}
          {featured && (
            <Link
              href={`/blogs/${featured.slugTitle}`}
              className="group mx-auto block max-w-[1200px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={`/api/uploads/${featured.image}`}
                    alt={featured.title}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:h-[520px]"
                  />
                </div>
                {/* Body */}
                <div className="flex flex-col justify-between border-stone-200 p-6 md:border-l md:p-12">
                  <div>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-amber-700">
                      {featured.category}
                    </p>
                    <h2 className="font-serif mt-3 mb-5 text-3xl font-bold leading-snug tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
                      {featured.title}
                    </h2>
                    <div className="line-clamp-4 text-sm leading-relaxed text-stone-500">
                      <Editor
                        editorSerializedState={parseContent(featured.content)}
                        readOnly
                        clampLines={4}
                        blogPage={false}
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-stone-200 pt-5 text-xs text-stone-400">
                    <span>
                      {formatDate(featured.createdAt, {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                      {" · "}
                      {featured.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-widest text-stone-900 transition-all duration-200 group-hover:gap-2.5">
                      Read story <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          <div className="border-t border-stone-200" />

          {/* Grid */}
          {rest.length > 0 && (
            <div className="mx-auto max-w-[1200px] px-6 pb-16 md:px-10">
              {/* Section header */}
              <div className="flex items-center gap-4 py-6">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-stone-400">
                  More Articles
                </span>
                <div className="h-px flex-1 bg-stone-200" />
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 border-l border-t border-stone-200 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>

              {/* Load more */}
              {visibleCount < blogs.length && (
                <div
                  ref={loadMoreRef}
                  className="flex items-center justify-center gap-2 pt-10 text-[0.7rem] uppercase tracking-widest text-stone-400"
                >
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-stone-300 border-t-amber-700" />
                  Loading more
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Page;

// ─── Blog Card ────────────────────────────────────────────────────────────────
const BlogCard = ({ blog }: { blog: Blog }) => (
  <Link
    href={`/blogs/${blog.slugTitle}`}
    className="group block border-b border-r border-stone-200 transition-colors duration-200 hover:bg-stone-100"
  >
    {/* Image */}
    <div className="overflow-hidden">
      <img
        src={`/api/uploads/${blog.image}`}
        alt={blog.title}
        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
    </div>
    {/* Body */}
    <div className="p-5">
      <span className="inline-block bg-stone-900 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-stone-50">
        {blog.category}
      </span>
      <h3 className="font-serif mt-2.5 mb-3 line-clamp-3 text-base font-bold leading-snug tracking-tight text-stone-900">
        {blog.title}
      </h3>
      <div className="flex gap-3 border-t border-stone-200 pt-3 text-[0.65rem] text-stone-400">
        <span>
          {formatDate(blog.createdAt, {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span>{blog.author}</span>
      </div>
    </div>
  </Link>
);

// ─── Loading Skeleton ─────────────────────────────────────────────────────────
const LoadingSkeleton = () => (
  <div className="mx-auto max-w-[1200px] p-10">
    {/* Featured skeleton */}
    <div className="mb-8 grid grid-cols-2 border-b border-stone-200">
      <div className="h-[420px] animate-pulse bg-stone-200" />
      <div className="space-y-4 border-l border-stone-200 p-12">
        <div className="h-2.5 w-1/4 animate-pulse rounded bg-stone-200" />
        <div className="h-7 w-11/12 animate-pulse rounded bg-stone-200" />
        <div className="h-7 w-3/4 animate-pulse rounded bg-stone-200" />
        <div className="mt-2 space-y-2.5">
          {[100, 90, 95, 55].map((w, i) => (
            <div
              key={i}
              className="h-2.5 animate-pulse rounded bg-stone-200"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      </div>
    </div>
    {/* Grid skeleton */}
    <div className="grid grid-cols-3 border-l border-t border-stone-200">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="border-b border-r border-stone-200">
          <div className="h-44 animate-pulse bg-stone-200" />
          <div className="space-y-2.5 p-5">
            <div className="h-3 w-4/5 animate-pulse rounded bg-stone-200" />
            <div className="h-3 w-3/5 animate-pulse rounded bg-stone-200" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Empty State ──────────────────────────────────────────────────────────────
const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-40 text-stone-400">
    <p className="font-serif text-2xl font-bold text-stone-700">
      No articles yet
    </p>
    <div className="my-4 h-0.5 w-12 bg-stone-300" />
    <p className="text-xs uppercase tracking-widest">Check back soon.</p>
  </div>
);
