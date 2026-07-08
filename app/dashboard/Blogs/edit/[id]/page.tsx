"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { CoreFields } from "../../form-components/core-fields";
import { MetaFields } from "../../form-components/meta-fields";
import { SeoPanel } from "../../form-components/seo-panel";
import { ImageUpload } from "../../form-components/image-upload";
import type { FormData } from "../../form-components/types";
import { SpinnerIcon } from "@phosphor-icons/react";

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

const EMPTY: FormData = {
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

export default function EditBlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>(EMPTY);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const [submitError, setSubmitError] = useState("");

  // These hold existing server image URLs (strings, not File objects)
  const [coverPreview, setCoverPreview] = useState("");
  const [ogPreview, setOgPreview] = useState("");

  /* ── Load existing post ── */
  useEffect(() => {
    const load = async () => {
      setIsFetching(true);
      setFetchError("");
      try {
        const res = await fetch(`/api/blog/${id}`);
        if (!res.ok) throw new Error("Post not found");
        const post = await res.json();

        setFormData({
          title: post.title ?? "",
          slug: post.slug ?? "",
          excerpt: post.excerpt ?? "",
          tags: post.tags ?? "",
          category: post.category ?? "",
          status: post.status ?? "draft",
          body: post.body ?? "",
          author: post.author ?? "",
          publishedAt: post.publishedAt
            ? new Date(post.publishedAt).toISOString().slice(0, 10)
            : new Date().toISOString().slice(0, 10),
          metaTitle: post.metaTitle ?? "",
          metaDescription: post.metaDescription ?? "",
          metaKeywords: post.metaKeywords ?? "",
          canonicalUrl: post.canonicalUrl ?? "",
          noIndex: post.noIndex ?? false,
          ogTitle: post.ogTitle ?? "",
          ogDescription: post.ogDescription ?? "",
          schemaType: post.schemaType ?? "BlogPosting",
          focusKeyword: post.focusKeyword ?? "",
          // Files start null — only set if user uploads a new one
          coverImageFile: null,
          ogImageFile: null,
        });

        // Show existing server images as previews
        if (post.coverImage) setCoverPreview(post.coverImage);
        if (post.ogImage) setOgPreview(post.ogImage);
      } catch {
        setFetchError("Could not load post. It may have been deleted.");
      } finally {
        setIsFetching(false);
      }
    };

    if (id) load();
  }, [id]);


  /* ── Field setter (same as create page) ── */
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

  /* ── Image handlers ── */
  const handleCoverImage = (file: File | null, url: string) => {
    setFormData((prev) => ({ ...prev, coverImageFile: file }));
    setCoverPreview(url);
    // Pre-fill OG if not yet customised
    if (!ogPreview) {
      setFormData((prev) => ({ ...prev, ogImageFile: file }));
      setOgPreview(url);
    }
  };

  const handleOgImage = (file: File | null, url: string) => {
    setFormData((prev) => ({ ...prev, ogImageFile: file }));
    setOgPreview(url);
  };

  /* ── Submit ── */
  const handleSubmit = async (status: "draft" | "published") => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const payload = new FormData();

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

      // Only append files if the user picked a NEW one
      if (formData.coverImageFile)
        payload.append("coverImageFile", formData.coverImageFile);
      if (formData.ogImageFile)
        payload.append("ogImageFile", formData.ogImageFile);

      const res = await fetch(`/api/blog/${id}`, {
        method: "PATCH",
        body: payload,
      });
      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error ?? "Something went wrong");
        return;
      }

      router.push("/dashboard/blogs");
    } catch {
      setSubmitError("Network error — please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Loading state ── */
  if (isFetching) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center gap-2 text-foreground-muted">
          <SpinnerIcon size={18} className="animate-spin" />
          <span className="text-sm">Loading post...</span>
        </div>
      </div>
    );
  }

  /* ── Fetch error state ── */
  if (fetchError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-3">
          <p className="text-sm text-red-500">{fetchError}</p>
          <Button variant="secondary" onClick={() => router.push("/blog")}>
            Back to posts
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold text-foreground tracking-tight">
              Edit Post
            </h1>
          </div>
          <span
            className={`mt-1 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
              ${
                formData.status === "published"
                  ? "bg-green-500/10 text-green-600"
                  : "bg-yellow-500/10 text-yellow-600"
              }`}
          >
            {formData.status === "published" ? "Published" : "Draft"}
          </span>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit("published");
          }}
          className="space-y-6"
        >
          <CoreFields setFormData={setFormData} formData={formData} set={set} />

          <ImageUpload
            label="Cover Image"
            previewHeight="h-52"
            previewUrl={coverPreview}
            onFileChange={handleCoverImage}
          />

          <MetaFields formData={formData} set={set} />

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

          {/* Submit error */}
          {submitError && (
            <p className="text-sm text-red-500 text-right">{submitError}</p>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <Button
              type="button"
              variant="ghost"
              className="text-foreground-muted"
              onClick={() => router.push("/blog")}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <div className="flex gap-3">
              {/* If published, allow saving back to draft */}
              {formData.status === "published" ? (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => handleSubmit("draft")}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving…" : "Revert to Draft"}
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => handleSubmit("draft")}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving…" : "Save Draft"}
                </Button>
              )}
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? "Saving…"
                  : formData.status === "published"
                    ? "Save Changes"
                    : "Publish Post"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
