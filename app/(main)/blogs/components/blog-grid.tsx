"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  CalendarIcon,
  UserIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";

type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  author: string | null;
  category: string | null;
  tags: string | null;
  coverImage: string | null;
  publishedAt: Date | null;
  createdAt: Date;
  body: string;
};

const POSTS_PER_PAGE = 6;

const formatDate = (d: Date) =>
  new Date(d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

interface Props {
  posts: Post[];
  activeCategory: string | null;
  onCategoryChange: (cat: string | null) => void;
  page: number;
  onPageChange: (page: number) => void;
}

export function BlogGrid({
  posts,
  activeCategory,
  onCategoryChange,
  page,
  onPageChange,
}: Props) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const setSearchAndReset = (v: string) => {
    setSearch(v);
    onPageChange(1);
  };
  const setSortAndReset = (v: "newest" | "oldest") => {
    setSort(v);
    onPageChange(1);
  };

  const filtered = useMemo(() => {
    let result = [...posts];
    if (activeCategory)
      result = result.filter((p) => p.category === activeCategory);
    if (search.trim())
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.excerpt?.toLowerCase().includes(search.toLowerCase()),
      );
    result.sort((a, b) => {
      const da = new Date(a.publishedAt ?? a.createdAt).getTime();
      const db = new Date(b.publishedAt ?? b.createdAt).getTime();
      return sort === "newest" ? db - da : da - db;
    });
    return result;
  }, [posts, activeCategory, search, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE,
  );

  // Build page numbers with ellipsis
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter((p) => p === 1 || p === totalPages || Math.abs(p - safePage) <= 1)
    .reduce<(number | "...")[]>((acc, p, i, arr) => {
      if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push("...");
      acc.push(p);
      return acc;
    }, []);

  return (
    <div className="space-y-6">
      {/* ── Toolbar ── */}

      <div className="flex w-full justify-between items-center gap-3">
        {/* Search */}
        <div className="relative w-full max-w-md">
          <MagnifyingGlassIcon
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-muted"
          />
          <Input
            value={search}
            onChange={(e) => setSearchAndReset(e.target.value)}
            placeholder="Search..."
            className="pl-8 w-full pr-3 py-1.5  "
          />
        </div>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) =>
            setSortAndReset(e.target.value as "newest" | "oldest")
          }
          className="text-sm rounded-md h-10 border border-border bg-surface px-3 py-1.5 outline-hidden focus:border-primary transition-colors"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {/* ── Empty ── */}
      {filtered.length === 0 && (
        <div className="py-20 text-center space-y-2">
          <p className="text-sm text-foreground-muted">No posts found.</p>
          {(search || activeCategory) && (
            <button
              className="text-xs text-primary underline"
              onClick={() => {
                setSearchAndReset("");
                onCategoryChange(null);
              }}
            >
              Clear all filters
            </button>
          )}
        </div>
      )}

      {/* ── Grid ── */}
      {paginated.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginated.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-surface overflow-hidden hover:shadow-md hover:border-foreground/20 transition-all duration-200"
            >
              <div className="relative h-52 bg-background overflow-hidden">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
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
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h2 className="font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-sm text-foreground-muted line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex-1" />
                <div className="flex items-center justify-between text-xs text-foreground-muted pt-3 border-t border-border mt-1">
                  <span className="flex items-center gap-1">
                    <UserIcon size={11} /> {post.author ?? "Anonymous"}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarIcon size={11} />
                    {formatDate(post.publishedAt ?? post.createdAt)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-border">
          <p className="text-xs text-foreground-muted">
            Page {safePage} of {totalPages} ·{" "}
            {(safePage - 1) * POSTS_PER_PAGE + 1}–
            {Math.min(safePage * POSTS_PER_PAGE, filtered.length)} of{" "}
            {filtered.length} posts
          </p>

          <div className="flex items-center gap-1">
            {/* Prev */}
            <button
              onClick={() => onPageChange(Math.max(1, safePage - 1))}
              disabled={safePage === 1}
              className="flex items-center justify-center w-8 h-8 rounded-md border border-border text-foreground-muted hover:bg-foreground/5 transition-colors disabled:opacity-40 disabled:pointer-events-none"
            >
              <CaretLeftIcon size={14} />
            </button>

            {/* Page numbers */}
            {pageNumbers.map((p, i) =>
              p === "..." ? (
                <span
                  key={`ellipsis-${i}`}
                  className="w-8 h-8 flex items-center justify-center text-sm text-foreground-muted"
                >
                  …
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => onPageChange(p as number)}
                  className={`w-8 h-8 rounded-md text-sm font-medium transition-colors border
                    ${
                      safePage === p
                        ? "bg-primary text-white border-primary"
                        : "border-border text-foreground-muted hover:bg-foreground/5"
                    }`}
                >
                  {p}
                </button>
              ),
            )}

            {/* Next */}
            <button
              onClick={() => onPageChange(Math.min(totalPages, safePage + 1))}
              disabled={safePage === totalPages}
              className="flex items-center justify-center w-8 h-8 rounded-md border border-border text-foreground-muted hover:bg-foreground/5 transition-colors disabled:opacity-40 disabled:pointer-events-none"
            >
              <CaretRightIcon size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
