"use client";
import { useState } from "react";
import { BlogGrid } from "./blog-grid";

type Post = {
  id: number; title: string; slug: string; excerpt: string | null;
  author: string | null; category: string | null; tags: string | null;
  coverImage: string | null; publishedAt: Date | null; createdAt: Date; body: string;
};

type LatestPost = {
  id: number; title: string; slug: string;
  coverImage: string | null; publishedAt: Date | null;
  createdAt: Date; author: string | null;
};

interface Props {
  posts: Post[];
  categories: { name: string; count: number }[];
  latest: LatestPost[];
  tags: string[];
}

export function BlogClient({ posts, categories, latest, tags }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const handleCategoryChange = (cat: string | null) => {
    setActiveCategory(cat);
    setPage(1); // reset page on category change
  };

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
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent to-stone-500" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 lg:py-40 text-center">
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
        <BlogGrid
          posts={posts}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          page={page}
          onPageChange={setPage}
        />
      </main>
    </div>
  );
}