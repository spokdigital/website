"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CharCounter } from "./char-counter";
import type { FormData } from "./types";

const CATEGORIES = [
  "Artificial Intelligence",
  "Technology",
  "Programming",
  "Web Development",
  "Mobile Development",
  "Software Engineering",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
  "Data Science",
  "Machine Learning",
  "Blockchain",
  "Cryptocurrency",
  "Business",
  "Startups",
  "Entrepreneurship",
  "Marketing",
  "Digital Marketing",
  "SEO",
  "Social Media",
  "E-commerce",
  "Finance",
  "Investing",
  "Product Management",
  "UI/UX Design",
  "Graphic Design",
  "Productivity",
  "Career",
  "Remote Work",
  "Education",
  "News",
  "Reviews",
  "Tutorials",
  "Guides",
  "Opinion",
  "Case Studies",
  "Other",
];

interface Props {
  formData: FormData;
  set: (
    field: keyof FormData,
  ) => (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

export const MetaFields = ({ formData, set }: Props) => (
  <div className="space-y-6">
    {/* Category + Tags */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-1.5">
        <Label htmlFor="category">Category</Label>
        <select
          id="category"
          value={formData.category}
          onChange={set("category")}
          className="w-full rounded-md border border-border bg-surface px-3 py-2.5! text-sm text-foreground outline-hidden focus:border-primary transition-colors"
        >
          <option value="">Select a category</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="tags">Tags</Label>
        <Input
          id="tags"
          placeholder="react, nextjs, webdev"
          value={formData.tags}
          onChange={set("tags")}
        />
      </div>
    </div>

    {/* Excerpt */}
    <div className="space-y-1.5">
      <Label htmlFor="excerpt">
        Excerpt{" "}
        <span className="text-foreground-muted font-normal">
          (short summary)
        </span>
      </Label>
      <textarea
        id="excerpt"
        rows={3}
        placeholder="A brief description shown in post previews..."
        value={formData.excerpt}
        onChange={set("excerpt")}
        className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-foreground-muted outline-hidden focus:border-primary transition-colors resize-none"
      />
      <CharCounter value={formData.excerpt} max={160} />
    </div>
  </div>
);
