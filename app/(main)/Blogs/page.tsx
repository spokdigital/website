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
    <div className="min-h-screen bg-[#111]">
      {/* ── Hero — stays dark all the way down ── */}
      <section className="relative overflow-hidden bg-[#111] pb-40 pt-20">
        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Coral glow behind text */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-[#ff6b6b] opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b6b]" />
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#ff6b6b]">
              Latest News &amp; Articles
            </span>
          </div>
          <h1 className="mb-4 text-5xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Stories Worth <span className="text-[#ff6b6b]">Reading</span>
          </h1>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-white/40">
            In-depth articles, guides, and insights from our team — updated
            regularly.
          </p>
        </div>
      </section>

      {/* ── Cards lift out of the dark hero ── */}
      <div className="bg-[#f5f5f5]">
        <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          {loading ? (
            <LoadingSkeleton />
          ) : blogs.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              {/* Featured — overlaps hero by -mt-28 */}
              {featured && (
                <div className="-mt-28 mb-14">
                  <Link
                    href={`/blogs/${featured.slugTitle}`}
                    className="group block overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/20 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-black/30"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden lg:h-[420px]">
                        <img
                          src={`/api/uploads/${featured.image}`}
                          alt={featured.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        {/* Badges */}
                        <div className="absolute left-4 top-4 flex gap-2">
                          <span className="rounded-full bg-[#ff6b6b] px-3 py-1 text-[0.58rem] font-bold uppercase tracking-widest text-white">
                            {featured.category}
                          </span>
                          <span className="rounded-full bg-black/50 px-3 py-1 text-[0.58rem] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                            Featured
                          </span>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="flex flex-col justify-between p-8 lg:p-10">
                        <div>
                          <h2 className="mb-4 text-2xl font-black leading-snug tracking-tight text-[#111] transition-colors group-hover:text-[#ff6b6b] lg:text-3xl">
                            {featured.title}
                          </h2>
                          <div className="line-clamp-4 text-sm leading-relaxed text-[#777]">
                            <Editor
                              editorSerializedState={parseContent(
                                featured.content,
                              )}
                              readOnly
                              clampLines={4}
                              blogPage={false}
                            />
                          </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between border-t border-[#eee] pt-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111] text-[0.6rem] font-black text-white">
                              {featured.author.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="text-xs font-bold text-[#111]">
                                {featured.author}
                              </p>
                              <p className="text-[0.62rem] text-[#aaa]">
                                {new Date(
                                  featured.createdAt,
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#111] px-5 py-2 text-[0.62rem] font-bold uppercase tracking-widest text-white transition-all duration-200 group-hover:bg-[#ff6b6b]">
                            Read{" "}
                            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                              →
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* All articles grid */}
              {rest.length > 0 && (
                <>
                  <div className="mb-7 flex items-center gap-4">
                    <span className="text-[0.58rem] font-bold uppercase tracking-[0.22em] text-[#aaa]">
                      All Articles
                    </span>
                    <div className="h-px flex-1 bg-[#e0e0e0]" />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((blog) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                  </div>
                </>
              )}

              {visibleCount < blogs.length && (
                <div
                  ref={loadMoreRef}
                  className="mt-14 flex items-center justify-center gap-2 text-[0.68rem] uppercase tracking-widest text-[#aaa]"
                >
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#ddd] border-t-[#ff6b6b]" />
                  Loading more
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Page;

// ─── Blog Card ────────────────────────────────────────────────────────────────
const BlogCard = ({ blog }: { blog: Blog }) => (
  <Link
    href={`/blogs/${blog.slugTitle}`}
    className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={`/api/uploads/${blog.image}`}
        alt={blog.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute left-3 top-3 rounded-full bg-[#ff6b6b] px-2.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-widest text-white">
        {blog.category}
      </span>
    </div>

    <div className="flex flex-1 flex-col gap-3 p-5">
      <h3 className="line-clamp-2 text-sm font-black leading-snug tracking-tight text-[#111] transition-colors group-hover:text-[#ff6b6b]">
        {blog.title}
      </h3>

      <div className="mt-auto flex items-center justify-between border-t border-[#f0f0f0] pt-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#111] text-[0.5rem] font-black text-white">
            {blog.author.charAt(0).toUpperCase()}
          </div>
          <span className="text-[0.62rem] font-medium text-[#999]">
            {blog.author}
          </span>
        </div>
        <span className="text-[0.6rem] text-[#bbb]">
          {new Date(blog.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
    </div>
  </Link>
);

// ─── Loading Skeleton ─────────────────────────────────────────────────────────
const LoadingSkeleton = () => (
  <div className="-mt-28">
    <div className="mb-14 overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/20">
      <div className="grid grid-cols-2">
        <div className="h-[420px] animate-pulse bg-[#eee]" />
        <div className="space-y-4 p-10">
          <div className="h-3 w-1/4 animate-pulse rounded-full bg-[#eee]" />
          <div className="h-8 w-full animate-pulse rounded-lg bg-[#eee]" />
          <div className="h-8 w-3/4 animate-pulse rounded-lg bg-[#eee]" />
          <div className="space-y-2.5 pt-2">
            {[100, 90, 95, 60].map((w, i) => (
              <div
                key={i}
                className="h-3 animate-pulse rounded-full bg-[#eee]"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
        >
          <div className="h-48 animate-pulse bg-[#eee]" />
          <div className="space-y-3 p-5">
            <div className="h-3.5 w-4/5 animate-pulse rounded-full bg-[#eee]" />
            <div className="h-3.5 w-3/5 animate-pulse rounded-full bg-[#eee]" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Empty State ──────────────────────────────────────────────────────────────
const EmptyState = () => (
  <div className="-mt-16 flex flex-col items-center justify-center py-36">
    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg shadow-black/10">
      <svg
        className="h-7 w-7 text-[#ccc]"
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
    </div>
    <p className="text-base font-black text-[#111]">No articles yet</p>
    <p className="mt-1 text-[0.65rem] uppercase tracking-widest text-[#aaa]">
      Check back soon.
    </p>
  </div>
);
