export type FormData = {
  title: string;
  slug: string;
  excerpt: string;
  tags: string;
  category: string;
  status: "draft" | "published";
  body: string;
  author: string;
  publishedAt: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  canonicalUrl: string;
  noIndex: boolean;
  ogTitle: string;
  ogDescription: string;
  schemaType: "BlogPosting" | "NewsArticle" | "Article";
  focusKeyword: string;
  // File objects sent to API — URLs live in preview state
  coverImageFile: File | null;
  ogImageFile: File | null;
};