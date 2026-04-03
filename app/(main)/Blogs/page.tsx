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

  // Infinite scroll
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

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── Header ── */}
      <header className="relative w-full overflow-hidden bg-stone-900">
        {/* Background image with strong overlay */}
        <img
          src="https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?q=80&w=1469&auto=format&fit=crop"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* Gradient fade at bottom so content below feels connected */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent  to-stone-500  " />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 lg:py-28 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[0.7rem] font-semibold tracking-widest uppercase text-primary">
              Latest News &amp; Articles
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
            Stories Worth Reading
          </h1>

          {/* Subtitle */}
          <p className="text-stone-300 text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            In-depth articles, guides, and insights from our team — updated
            regularly.
          </p>
        </div>
      </header>

      {/* ── Blog grid ── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        {loading ? (
          // Skeleton
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 animate-pulse"
              >
                <div className="h-48 bg-stone-200" />
                <div className="p-4 space-y-3">
                  <div className="h-2.5 bg-stone-200 rounded-full w-1/4" />
                  <div className="h-4 bg-stone-200 rounded-full w-full" />
                  <div className="h-4 bg-stone-200 rounded-full w-3/4" />
                  <div className="h-3 bg-stone-100 rounded-full w-1/2 mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : blogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Infinite scroll trigger */}
            {visibleCount < blogs.length && (
              <div
                ref={loadMoreRef}
                className="mt-12 flex justify-center items-center gap-2 text-sm text-stone-400"
              >
                <span className="w-4 h-4 rounded-full border-2 border-stone-300 border-t-teal-600 animate-spin" />
                Loading more…
              </div>
            )}
          </>
        ) : (
          // Empty state
          <div className="flex flex-col items-center justify-center py-32 gap-3 text-stone-400">
            <svg
              className="w-10 h-10 opacity-40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-lg font-medium">No articles yet</p>
            <p className="text-sm">Check back soon.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Page;

// ─── Blog Card ────────────────────────────────────────────────────────────────
const BlogCard = ({ blog }: { blog: Blog }) => {
  const parsedContent =
    typeof blog.content === "string"
      ? (() => {
          try {
            return JSON.parse(blog.content);
          } catch {
            return null;
          }
        })()
      : blog.content;

  return (
    <Link href={`/blogs/${blog.slugTitle}`} className="group block h-full">
      <article className="h-full bg-white border border-stone-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-stone-200/80">
        {/* Thumbnail */}
        <div className="relative h-48 w-full overflow-hidden shrink-0">
          <img
            src={`/api/uploads/${blog.image}`}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Category badge */}
          <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.65rem] font-semibold tracking-wide uppercase bg-teal-600 text-white shadow-sm">
            {blog.category}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-4 gap-2">
          <h3 className="font-semibold text-stone-900 leading-snug line-clamp-2 group-hover:text-teal-700 transition-colors">
            {blog.title}
          </h3>

          {parsedContent && (
            <div className="text-sm text-stone-500 line-clamp-2 flex-1">
              <Editor
                editorSerializedState={parsedContent}
                readOnly
                clampLines={2}
                blogPage={false}
              />
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 mt-auto border-t border-stone-100 text-xs text-stone-400">
            <span>
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="font-medium text-stone-500">{blog.author}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};
