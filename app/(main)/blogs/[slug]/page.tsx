import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";
import {
  CalendarIcon,
  ClockIcon,
  TagIcon,
} from "@phosphor-icons/react/dist/ssr";
import { RelatedCarousel } from "./components/related-carousel";
import { cn } from "@/lib/utils";

/* ── Helpers ── */
const readingTime = (body: string) =>
  Math.max(
    1,
    Math.ceil(body.replace(/<[^>]+>/g, "").split(/\s+/).length / 200),
  );

const formatDate = (d: string | Date) =>
  new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yoursite.com";

/* ── Static params ── */
export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({
    where: { status: "published" },
    select: { slug: true },
  });
  return posts.map((p) => ({ slug: p.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  if (!post) return {};

  const title = post.metaTitle ?? post.title;
  const description = post.metaDescription ?? post.excerpt ?? "";
  const image = post.ogImage ?? post.coverImage ?? undefined;
  const url = `${BASE_URL}/blogs/${slug}`;

  return {
    title,
    description,
    keywords: post.metaKeywords ?? undefined,
    robots: post.noIndex ? "noindex,nofollow" : "index,follow",
    alternates: {
      canonical: post.canonicalUrl?.startsWith("http")
        ? post.canonicalUrl
        : url,
    },
    openGraph: {
      title: post.ogTitle ?? title,
      description: post.ogDescription ?? description,
      url,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      authors: post.author ? [post.author] : undefined,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.ogTitle ?? title,
      description: post.ogDescription ?? description,
      images: image ? [image] : undefined,
    },
  };
}

/* ── Data fetching ── */
async function getPost(slug: string) {
  return prisma.blogPost.findUnique({ where: { slug, status: "published" } });
}

async function getSidebarData(category: string | null, currentSlug: string) {
  const [related, recent] = await Promise.all([
    // Related — same category
    prisma.blogPost.findMany({
      where: {
        status: "published",
        slug: { not: currentSlug },
        ...(category ? { category } : {}),
      },
      orderBy: { publishedAt: "desc" },
      take: 6,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        author: true,
        publishedAt: true,
        createdAt: true,
        body: true,
        category: true,
      },
    }),
    // Recent — latest posts regardless of category
    prisma.blogPost.findMany({
      where: { status: "published", slug: { not: currentSlug } },
      orderBy: { publishedAt: "desc" },
      take: 5,
      select: {
        id: true,
        title: true,
        slug: true,
        coverImage: true,
        author: true,
        publishedAt: true,
        createdAt: true,
        category: true,
      },
    }),
  ]);

  return { related, recent };
}

/* ── Page ── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { related, recent } = await getSidebarData(post.category, slug);
  const rt = readingTime(post.body);
  const url = `${BASE_URL}/blogs/${slug}`;
  const tags =
    post.tags
      ?.split(",")
      .map((t) => t.trim())
      .filter(Boolean) ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": post.schemaType ?? "BlogPosting",
    headline: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt ?? "",
    url,
    datePublished:
      post.publishedAt?.toISOString() ?? post.createdAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: { "@type": "Person", name: post.author ?? "Anonymous" },
    publisher: {
      "@type": "Organization",
      name: "Your Site Name",
      url: BASE_URL,
    },
    image: post.coverImage
      ? {
          "@type": "ImageObject",
          url: post.coverImage,
          width: 1200,
          height: 630,
        }
      : undefined,
    keywords: post.metaKeywords ?? post.tags ?? undefined,
    articleSection: post.category ?? undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-background">
        {/* ── Cover image — full width ── */}
        {post.coverImage && (
          <div className="max-w-6xl mx-auto px-4 pt-28">
            <div className="relative h-64 md:h-[480px] rounded-2xl overflow-hidden border border-border">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay for header readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
              {/* Category badge over image */}
              {post.category && (
                <span className="absolute top-5 left-5 text-xs font-medium bg-white/90 backdrop-blur-xs text-gray-800 rounded-full px-3 py-1.5">
                  {post.category}
                </span>
              )}
            </div>
          </div>
        )}

        {/* ── Main layout: article + sidebar ── */}
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className={cn(`grid grid-cols-1  gap-12 items-start`, recent.length > 0 ? 'lg:grid-cols-[1fr_320px]' : '')}>
            {/* ── LEFT: article ── */}
            <div>
              {/* Header */}
              <header className="space-y-5 pb-8 border-b border-border">
                <div className="flex items-center gap-2 flex-wrap">
                  {!post.coverImage && post.category && (
                    <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1">
                      {post.category}
                    </span>
                  )}
                  <span className="text-xs text-foreground-muted flex items-center gap-1">
                    <ClockIcon size={11} /> {rt} min read
                  </span>
                </div>

                <h1 className="text-3xl  lg:text-4xl font-bold text-foreground leading-tight">
                  {post.title}
                </h1>

                {/* Author + date */}
                <div className="flex items-center gap-4 text-sm text-foreground-muted flex-wrap">
                  {post.author && (
                    <span className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold">
                        {post.author[0].toUpperCase()}
                      </span>
                      {post.author}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon size={13} />
                    {formatDate(post.publishedAt ?? post.createdAt)}
                  </span>
                </div>

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <TagIcon size={12} className="text-foreground-muted" />
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-foreground/5 text-foreground-muted rounded-full px-2.5 py-1 border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {/* Body */}
              <article
                className="pt-8 prose-sm md:prose-base pb-16 prose prose-neutral dark:prose-invert max-w-none
                  prose-p:text-foreground-muted prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground
                  prose-ul:text-foreground-muted prose-ol:text-foreground-muted
                  prose-li:marker:text-primary
                  
                  prose-blockquote:border-l-primary prose-blockquote:text-foreground-muted prose-blockquote:not-italic
                  prose-code:bg-foreground/5 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5
                  prose-code:text-foreground prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-foreground/5 prose-pre:border prose-pre:border-border prose-pre:rounded-xl
                  prose-img:rounded-xl prose-img:border prose-img:border-border
                  prose-hr:border-border
                  prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            </div>

            {/* ── RIGHT: sticky sidebar ── */}
            {recent.length > 0 && (
              <aside className="hidden lg:block sticky top-8 space-y-8">
                {/* Author card */}

                {/* Recent posts */}
                <div className="rounded-xl border border-border bg-surface p-5 space-y-4">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
                    Recent Posts
                  </h3>
                  <ul className="space-y-4">
                    {recent.map((rp) => (
                      <li key={rp.id}>
                        <Link
                          href={`/blogs/${rp.slug}`}
                          className="group flex gap-3 items-start"
                        >
                          <div className="relative shrink-0 w-14 h-12 rounded-lg overflow-hidden border border-border bg-background">
                            {rp.coverImage ? (
                              <Image
                                src={rp.coverImage}
                                alt={rp.title}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-base font-black text-foreground/10">
                                {rp.title[0]}
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-foreground-muted mb-0.5 flex items-center gap-1">
                              <CalendarIcon size={10} />
                              {formatDate(rp.publishedAt ?? rp.createdAt)}
                            </p>
                            <p className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                              {rp.title}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <section className="border-t border-border bg-surface">
            <div className="max-w-7xl mx-auto px-4 py-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
                    Related Posts
                  </p>
                  <p className="text-sm text-foreground-muted mt-0.5">
                    More from {post.category ?? "our blog"}
                  </p>
                </div>
                <Link
                  href="/blogs"
                  className="text-sm text-primary hover:underline underline-offset-2"
                >
                  View all →
                </Link>
              </div>
              <RelatedCarousel posts={related} />
            </div>
          </section>
        )}
      </div>
    </>
  );
}
