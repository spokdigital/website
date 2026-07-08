"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import dynamic from "next/dynamic";
import { CoreFields } from "../form-components/core-fields";
import { MetaFields } from "../form-components/meta-fields";
import { SeoPanel } from "../form-components/seo-panel";
import { ImageUpload } from "../form-components/image-upload";
import type { FormData } from "../form-components/types";

const RichTextEditor = dynamic(
  () => import("@/app/components/RichTextEditor"),
  {
    ssr: false,

    loading: () => (
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="flex gap-2 p-2 border-b border-border bg-surface">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-7 rounded bg-surface animate-pulse"
              style={{ width: i === 4 || i === 8 || i === 11 ? "1px" : "32px" }}
            />
          ))}
        </div>
        <div className="p-4 space-y-2 bg-surface" style={{ height: "280px" }}>
          <div className="h-4 bg-foreground/10 rounded animate-pulse w-3/4" />
          <div className="h-4 bg-foreground/10 rounded animate-pulse w-full" />
          <div className="h-4 bg-foreground/10 rounded animate-pulse w-5/6" />
        </div>
        <div className="px-3 py-1 border-t border-border bg-surface flex justify-end">
          <div className="h-3 w-20 bg-foreground/10 rounded animate-pulse" />
        </div>
      </div>
    ),
  },
);

const INITIAL: FormData = {
  title: "",
  slug: "",
  excerpt: "",
  tags: "",
  category: "",
  status: "draft",
  body: "",
  author: "",
  publishedAt: new Date().toISOString().slice(0, 10),
  metaTitle: "",
  metaDescription: "",
  metaKeywords: "",
  canonicalUrl: "",
  noIndex: false,
  ogTitle: "",
  ogDescription: "",
  schemaType: "BlogPosting",
  focusKeyword: "",
  coverImageFile: null,
  ogImageFile: null,
};

export default function NewBlogPostPage() {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  // Local object-URL previews — kept separate from formData (no string URLs in state)
  const [coverPreview, setCoverPreview] = useState("");
  const [ogPreview, setOgPreview] = useState("");

  const set =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const value =
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;

      if (field === "title") {
        const slug = (value as string)
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-");
        setFormData((prev) => ({
          ...prev,
          title: value as string,
          slug,
          metaTitle: prev.metaTitle || (value as string),
          ogTitle: prev.ogTitle || (value as string),
        }));
      } else if (field === "excerpt") {
        setFormData((prev) => ({
          ...prev,
          excerpt: value as string,
          metaDescription: prev.metaDescription || (value as string),
          ogDescription: prev.ogDescription || (value as string),
        }));
      } else {
        setFormData((prev) => ({ ...prev, [field]: value }));
      }
    };

  const handleCoverImage = (file: File | null, url: string) => {
    setFormData((prev) => ({
      ...prev,
      coverImageFile: file,
      // Also pre-fill OG image file if not yet set
      ogImageFile: prev.ogImageFile ?? file,
    }));
    setCoverPreview(url);
    if (!ogPreview) setOgPreview(url);
  };

  const handleOgImage = (file: File | null, url: string) => {
    setFormData((prev) => ({ ...prev, ogImageFile: file }));
    setOgPreview(url);
  };

  const handleSubmit = async (status: "draft" | "published") => {
    setIsSubmitting(true);
    setError("");

    try {
      const payload = new FormData();

      // Append all scalar fields
      const scalarFields = {
        title: formData.title,
        slug: formData.slug,
        body: formData.body,
        excerpt: formData.excerpt,
        author: formData.author,
        category: formData.category,
        tags: formData.tags,
        publishedAt: formData.publishedAt,
        metaTitle: formData.metaTitle,
        metaDescription: formData.metaDescription,
        metaKeywords: formData.metaKeywords,
        canonicalUrl: formData.canonicalUrl,
        noIndex: String(formData.noIndex),
        focusKeyword: formData.focusKeyword,
        ogTitle: formData.ogTitle,
        ogDescription: formData.ogDescription,
        schemaType: formData.schemaType,
        status,
      };

      Object.entries(scalarFields).forEach(([k, v]) => {
        if (v !== undefined && v !== null) payload.append(k, v);
      });

      // Append files if present
      if (formData.coverImageFile)
        payload.append("coverImageFile", formData.coverImageFile);
      if (formData.ogImageFile)
        payload.append("ogImageFile", formData.ogImageFile);

      const res = await fetch("/api/blog", { method: "POST", body: payload });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong");
        return;
      }

      // Redirect to the new post or list
      window.location.href = `/dashboard/blogs`;
    } catch {
      setError("Network error — please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-foreground tracking-tight">
            New Blog Post
          </h1>
          <p className="text-sm text-foreground-muted">
            Fill in the details below and write your post.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit("published");
          }}
          className="space-y-6"
        >
          <CoreFields setFormData={setFormData} formData={formData} set={set} />

          {/* Cover Image */}
          <ImageUpload
            label="Cover Image"
            previewHeight="h-52"
            previewUrl={coverPreview}
            onFileChange={handleCoverImage}
          />

          <MetaFields formData={formData} set={set} />

          {/* Body */}
          <div className="space-y-1.5">
            <Label>
              Content <span className="text-red-500">*</span>
            </Label>
            <RichTextEditor
              value={formData.body}
              onChange={(html) =>
                setFormData((prev) => ({ ...prev, body: html }))
              }
              placeholder="Write your blog post..."
            />
          </div>

          <SeoPanel
            formData={formData}
            ogImagePreview={ogPreview}
            set={set}
            onOgImageChange={handleOgImage}
          />

          {/* Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <Button
              type="button"
              variant="ghost"
              className="border-border border cursor-pointer bg-surface"
              onClick={() => {
                setFormData(INITIAL);
                setCoverPreview("");
                setOgPreview("");
              }}
              disabled={isSubmitting}
            >
              Discard
            </Button>
            <div className="flex gap-3">
              <Button
                type="button"
                variant="secondary"
                onClick={() => handleSubmit("draft")}
                disabled={isSubmitting}
                className="border bg-surface border-border cursor-pointer"
              >
                {isSubmitting ? "Saving…" : "Save as Draft"}
              </Button>
              <Button className="bg-primary text-surface cursor-pointer" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Publishing…" : "Publish Post"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
