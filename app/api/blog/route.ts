import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { saveImage } from "@/lib/blog-images";

const PAGE_SIZE = 10;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const status = searchParams.get("status") ?? undefined;
  const page   = Math.max(1, Number(searchParams.get("page")  ?? 1));
  const limit  = Math.min(50, Math.max(1, Number(searchParams.get("limit") ?? PAGE_SIZE)));
  const search = searchParams.get("search")?.trim() ?? "";
  const sort   = searchParams.get("sort") ?? "newest";

  const orderBy = (() => {
    switch (sort) {
      case "oldest": return { createdAt: "asc"  } as const;
      case "az":     return { title:     "asc"  } as const;
      case "za":     return { title:     "desc" } as const;
      default:       return { createdAt: "desc" } as const;
    }
  })();

  // Search condition reused across queries
  const searchWhere = search
    ? {
        OR: [
          { title:    { contains: search } },
          { excerpt:  { contains: search } },
          { author:   { contains: search } },
          { tags:     { contains: search } },
          { category: { contains: search } },
        ],
      }
    : {};

  // Main query where (includes status filter)
  const where = {
    ...(status ? { status } : {}),
    ...searchWhere,
  };

  // Counts always use search filter but NOT status filter
  // so tab numbers reflect reality regardless of active tab
  const [posts, total, publishedCount, draftCount] = await prisma.$transaction([
    prisma.blogPost.findMany({
      where,
      orderBy,
      skip:  (page - 1) * limit,
      take:  limit,
      select: {
        id:          true,
        title:       true,
        slug:        true,
        excerpt:     true,
        author:      true,
        category:    true,
        tags:        true,
        status:      true,
        coverImage:  true,
        publishedAt: true,
        createdAt:   true,
        updatedAt:   true,
         body:        true,   // ← add this
      },
    }),
    prisma.blogPost.count({ where }),
    prisma.blogPost.count({ where: { status: "published", ...searchWhere } }),
    prisma.blogPost.count({ where: { status: "draft",     ...searchWhere } }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return NextResponse.json({
    posts,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
    counts: {
      published: publishedCount,
      draft:     draftCount,
      all:       publishedCount + draftCount,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const get     = (key: string) => form.get(key) as string | null;
    const getFile = (key: string) => form.get(key) as File | null;

    const title = get("title");
    const body  = get("body");
    const slug  = get("slug");

    if (!title || !body || !slug) {
      return NextResponse.json(
        { error: "title, slug, and body are required" },
        { status: 400 },
      );
    }

    const existing = await prisma.blogPost.findUnique({ where: { slug } });
    if (existing) {
      return NextResponse.json(
        { error: `Slug "${slug}" is already taken` },
        { status: 409 },
      );
    }

    const coverImageFile = getFile("coverImageFile");
    const ogImageFile    = getFile("ogImageFile");

    const coverImage = coverImageFile?.size ? await saveImage(coverImageFile) : null;
    const ogImage    = ogImageFile?.size    ? await saveImage(ogImageFile)    : coverImage;

    const publishedAtRaw = get("publishedAt");

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        body,
        excerpt:         get("excerpt"),
        author:          get("author"),
        category:        get("category"),
        tags:            get("tags"),
        status:          get("status") ?? "draft",
        publishedAt:     publishedAtRaw ? new Date(publishedAtRaw) : null,
        coverImage,
        ogImage,
        metaTitle:       get("metaTitle"),
        metaDescription: get("metaDescription"),
        metaKeywords:    get("metaKeywords"),
        canonicalUrl:    get("canonicalUrl"),
        noIndex:         get("noIndex") === "true",
        focusKeyword:    get("focusKeyword"),
        ogTitle:         get("ogTitle"),
        ogDescription:   get("ogDescription"),
        schemaType:      get("schemaType") ?? "BlogPosting",
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (err) {
    console.error("[POST /api/blog]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}