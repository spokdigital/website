"use client";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon } from "@phosphor-icons/react";

type LatestPost = {
  id: number;
  title: string;
  slug: string;
  coverImage: string | null;
  publishedAt: Date | null;
  createdAt: Date;
  author: string | null;
};

interface Props {
  categories: { name: string; count: number }[];
  latest: LatestPost[];
  tags: string[];
  activeCategory: string; // always a string — "All" when none
  onCategoryChange: (cat: string) => void;
}

const formatDate = (d: Date) =>
  new Date(d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export function BlogSidebar({
  categories,
  latest,
  tags,
  activeCategory,
  onCategoryChange,
}: Props) {
  return (
    <aside className="space-y-10">
      {/* Categories */}
      <div className="space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
          All Categories
        </h3>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li key={cat.name}>
              <button
                type="button"
                onClick={() => onCategoryChange(cat.name)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors
                  ${
                    activeCategory === cat.name
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-foreground-muted hover:text-foreground hover:bg-foreground/5"
                  }`}
              >
                <span className="flex items-center gap-2">
                  {activeCategory === cat.name && (
                    <span className="text-primary">▶</span>
                  )}
                  {cat.name}
                </span>
                <span className="text-xs opacity-60">{cat.count}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Latest posts */}
      <div className="space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
          Latest Posts
        </h3>
        <ul className="space-y-4">
          {latest.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blogs/${post.slug}`}
                className="group flex gap-3 items-start"
              >
                <div className="relative shrink-0 w-16 h-14 rounded-lg overflow-hidden border border-border bg-surface">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-lg font-black text-foreground/10">
                      {post.title[0]}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 space-y-0.5">
                  <p className="text-xs text-foreground-muted flex items-center gap-1">
                    <CalendarIcon size={10} />
                    {formatDate(post.publishedAt ?? post.createdAt)}
                  </p>
                  <p className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </p>
                  <p className="text-xs text-foreground-muted">
                    by {post.author ?? "Anonymous"}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular tags */}
      <div className="space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-foreground/5 text-foreground-muted rounded-full px-3 py-1.5 border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
