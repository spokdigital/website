import type { Metadata } from "next";
import prisma from "@/lib/prisma";
import { BlogClient } from "./components/blog-client";

export const metadata: Metadata = {
  title: "Blog — Ideas That Inspire",
  description: "Read our latest articles, guides, and insights.",
  openGraph: {
    title: "Blog — Ideas That Inspire",
    description: "Read our latest articles, guides, and insights.",
    type: "website",
  },
};

async function getData() {
  const [posts, categories] = await Promise.all([
    prisma.blogPost.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        author: true,
        category: true,
        tags: true,
        coverImage: true,
        publishedAt: true,
        createdAt: true,
        body: true,
      },
    }),
    prisma.blogPost.groupBy({
      by: ["category"],
      where: { status: "published", category: { not: null } },
      _count: { category: true },
      orderBy: { _count: { category: "desc" } },
    }),
  ]);

  // Collect all tags with counts
  const tagMap: Record<string, number> = {};
  posts.forEach((p) => {
    p.tags
      ?.split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .forEach((tag) => {
        tagMap[tag] = (tagMap[tag] ?? 0) + 1;
      });
  });
  const tags = Object.entries(tagMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([tag]) => tag);

  return { posts, categories, tags };
}

export default async function BlogPage() {
  const { posts, categories, tags } = await getData();
  const latest = posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* ── Main layout ── */}

      <BlogClient
        posts={posts}
        categories={categories.map((c) => ({
          name: c.category as string,
          count: c._count.category,
        }))}
        latest={latest}
        tags={tags}
      />
    </div>
  );
}
