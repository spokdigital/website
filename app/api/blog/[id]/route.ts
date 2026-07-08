import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { saveImage, deleteImage } from "@/lib/blog-images";

type Params = { params: Promise<{ id: string }> }; 

/* ── GET /api/blog/[id] ─────────────────────────────────── */
export async function GET(_: NextRequest, { params }: Params) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { id: Number(id) }, // ← already correct here
  });
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

/* ── PATCH /api/blog/[id] ───────────────────────────────── */
export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const numId = Number(id); // ← convert once, use everywhere

    const existing = await prisma.blogPost.findUnique({ where: { id: numId } });
    if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const form = await req.formData();
    const get = (key: string) => form.get(key) as string | null;
    const getFile = (key: string) => form.get(key) as File | null;

    const coverImageFile = getFile("coverImageFile");
    const ogImageFile = getFile("ogImageFile");

    let coverImage = existing.coverImage;
    let ogImage = existing.ogImage;

    if (coverImageFile?.size) {
      if (existing.coverImage) await deleteImage(existing.coverImage);
      coverImage = await saveImage(coverImageFile);
    }

    if (ogImageFile?.size) {
      if (existing.ogImage && existing.ogImage !== existing.coverImage) {
        await deleteImage(existing.ogImage);
      }
      ogImage = await saveImage(ogImageFile);
    }

    const publishedAtRaw = get("publishedAt");

    const post = await prisma.blogPost.update({
      where: { id: numId }, // ← numId
      data: {
        title:           get("title")          ?? existing.title,
        slug:            get("slug")           ?? existing.slug,
        body:            get("body")           ?? existing.body,
        excerpt:         get("excerpt"),
        author:          get("author"),
        category:        get("category"),
        tags:            get("tags"),
        status:          get("status")         ?? existing.status,
        publishedAt:     publishedAtRaw ? new Date(publishedAtRaw) : existing.publishedAt,
        coverImage,
        ogImage,
        metaTitle:       get("metaTitle"),
        metaDescription: get("metaDescription"),
        metaKeywords:    get("metaKeywords"),
        canonicalUrl:    get("canonicalUrl"),
        noIndex:         get("noIndex") !== null ? get("noIndex") === "true" : existing.noIndex,
        focusKeyword:    get("focusKeyword"),
        ogTitle:         get("ogTitle"),
        ogDescription:   get("ogDescription"),
        schemaType:      get("schemaType")     ?? existing.schemaType,
      },
    });

    return NextResponse.json(post);
  } catch (err) {
    console.error("[PATCH /api/blog/[id]]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/* ── DELETE /api/blog/[id] ──────────────────────────────── */
export async function DELETE(_: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const numId = Number(id); // ← convert once

    const existing = await prisma.blogPost.findUnique({ where: { id: numId } });
    if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

    if (existing.coverImage) await deleteImage(existing.coverImage);
    if (existing.ogImage && existing.ogImage !== existing.coverImage) {
      await deleteImage(existing.ogImage);
    }

    await prisma.blogPost.delete({ where: { id: numId } }); // ← numId
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[DELETE /api/blog/[id]]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}