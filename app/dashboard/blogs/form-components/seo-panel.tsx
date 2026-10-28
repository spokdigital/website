"use client";
import { useState } from "react";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageUpload } from "./image-upload";
import { CharCounter } from "./char-counter";
import type { FormData } from "./types";

const SCHEMA_TYPES = ["BlogPosting", "NewsArticle", "Article"] as const;

const keywordCount = (body: string, keyword: string) => {
  if (!keyword.trim()) return 0;
  const regex = new RegExp(
    keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    "gi",
  );
  return (body.match(regex) ?? []).length;
};

interface Props {
  formData: FormData;
  ogImagePreview: string;
  set: (
    field: keyof FormData,
  ) => (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  onOgImageChange: (file: File | null, url: string) => void;
}

export const SeoPanel = ({
  formData,
  ogImagePreview,
  set,
  onOgImageChange,
}: Props) => {
  const [open, setOpen] = useState(false);

  const kwCount = keywordCount(formData.body, formData.focusKeyword);
  const titleHasKw =
    !!formData.focusKeyword &&
    formData.title.toLowerCase().includes(formData.focusKeyword.toLowerCase());
  const metaDescHasKw =
    !!formData.focusKeyword &&
    formData.metaDescription
      .toLowerCase()
      .includes(formData.focusKeyword.toLowerCase());
  const slugHasKw =
    !!formData.focusKeyword &&
    formData.slug
      .toLowerCase()
      .includes(formData.focusKeyword.toLowerCase().replace(/\s+/g, "-"));

  const KwCheck = ({ pass, label }: { pass: boolean; label: string }) => (
    <div className="flex items-center gap-2">
      <span className={pass ? "text-green-500" : "text-red-400"}>
        {pass ? "✓" : "✗"}
      </span>
      {label}
    </div>
  );

  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-surface hover:bg-foreground/5 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">
            SEO & Open Graph
          </span>
          <span className="text-xs text-foreground-muted">
            (optional but recommended)
          </span>
        </div>
        {open ? (
          <CaretUpIcon size={16} className="text-foreground-muted" />
        ) : (
          <CaretDownIcon size={16} className="text-foreground-muted" />
        )}
      </button>

      {open && (
        <div className="px-4 py-5 space-y-6 border-t border-border">
          {/* Focus Keyword */}
          <div className="space-y-1.5">
            <Label htmlFor="focusKeyword">Focus Keyword</Label>
            <Input
              id="focusKeyword"
              placeholder="e.g. nextjs blog seo"
              value={formData.focusKeyword}
              onChange={set("focusKeyword")}
            />
            {formData.focusKeyword && (
              <div className="mt-2 rounded-md bg-surface border border-border p-3 space-y-1.5 text-xs text-foreground-muted">
                <p className="font-medium text-foreground text-xs mb-2">
                  Keyword Analysis
                </p>
                <KwCheck pass={titleHasKw} label="Keyword in title" />
                <KwCheck pass={slugHasKw} label="Keyword in slug" />
                <KwCheck
                  pass={metaDescHasKw}
                  label="Keyword in meta description"
                />
                <KwCheck
                  pass={kwCount > 0}
                  label={`Keyword in content (${kwCount} occurrence${kwCount !== 1 ? "s" : ""})`}
                />
              </div>
            )}
          </div>

          {/* Meta Tags */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
              Meta Tags
            </p>

            <div className="space-y-1.5">
              <Label htmlFor="metaTitle">Meta Title</Label>
              <Input
                id="metaTitle"
                placeholder="SEO-optimised title (defaults to post title)"
                value={formData.metaTitle}
                onChange={set("metaTitle")}
              />
              <CharCounter value={formData.metaTitle} max={60} />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="metaDescription">Meta Description</Label>
              <textarea
                id="metaDescription"
                rows={3}
                placeholder="Shown in search results (155–160 chars ideal)"
                value={formData.metaDescription}
                onChange={set("metaDescription")}
                className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-foreground-muted outline-hidden focus:border-primary transition-colors resize-none"
              />
              <CharCounter value={formData.metaDescription} max={160} />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="metaKeywords">Meta Keywords</Label>
              <Input
                id="metaKeywords"
                placeholder="keyword1, keyword2, keyword3"
                value={formData.metaKeywords}
                onChange={set("metaKeywords")}
              />
              <p className="text-xs text-foreground-muted">
                Comma-separated. Low direct ranking impact but useful for
                internal search.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="canonicalUrl">Canonical URL</Label>
                <Input
                  id="canonicalUrl"
                  placeholder="https://yourdomain.com/blog/..."
                  value={formData.canonicalUrl}
                  onChange={set("canonicalUrl")}
                />
                <p className="text-xs text-foreground-muted">
                  Prevents duplicate content penalties.
                </p>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="schemaType">Schema Type</Label>
                <select
                  id="schemaType"
                  value={formData.schemaType}
                  onChange={set("schemaType")}
                  className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground outline-hidden focus:border-primary transition-colors"
                >
                  {SCHEMA_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-foreground-muted">
                  Structured data type for rich results.
                </p>
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.noIndex}
                onChange={set("noIndex")}
                className="w-4 h-4 rounded border border-border accent-primary"
              />
              <div>
                <span className="text-sm text-foreground font-medium">
                  No-index this post
                </span>
                <p className="text-xs text-foreground-muted">
                  Prevents search engines from indexing (useful for drafts).
                </p>
              </div>
            </label>
          </div>

          {/* Open Graph */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
              Open Graph (Social Sharing)
            </p>

            <div className="space-y-1.5">
              <Label htmlFor="ogTitle">OG Title</Label>
              <Input
                id="ogTitle"
                placeholder="Title shown on Twitter / Facebook / LinkedIn"
                value={formData.ogTitle}
                onChange={set("ogTitle")}
              />
              <CharCounter value={formData.ogTitle} max={60} />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="ogDescription">OG Description</Label>
              <textarea
                id="ogDescription"
                rows={2}
                placeholder="Description shown when shared on social media"
                value={formData.ogDescription}
                onChange={set("ogDescription")}
                className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-foreground-muted outline-hidden focus:border-primary transition-colors resize-none"
              />
              <CharCounter value={formData.ogDescription} max={160} />
            </div>

            <ImageUpload
              label="OG Image"
              hint="1200×630 recommended"
              aspectRatio="1200/630"
              previewUrl={ogImagePreview}
              onFileChange={onOgImageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};
