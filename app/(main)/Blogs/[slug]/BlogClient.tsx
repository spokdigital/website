"use client";

import { useEffect, useState } from "react";
import {
  User,
  Facebook,
  Twitter,
  Linkedin,
  Calendar,
  Clock,
  ChevronUp,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Blogs from "@/app/components/Blogs";
import { Editor } from "@/components/blocks/editor-00/editor";

// ─── constants ────────────────────────────────────────────────────────────────
const serverUrl = "http://localhost:3000";

// ─── Lexical → HTML (SEO layer) ───────────────────────────────────────────────
type LexicalNode = {
  type: string;
  text?: string;
  format?: number;
  tag?: string;
  listType?: string;
  children?: LexicalNode[];
  url?: string;
  src?: string;
  altText?: string;
  level?: number;
};

function lexicalNodeToHtml(node: LexicalNode): string {
  const children = node.children
    ? node.children.map(lexicalNodeToHtml).join("")
    : "";

  switch (node.type) {
    case "root":
      return children;
    case "paragraph":
      return `<p>${children}</p>`;
    case "heading": {
      const tag = node.tag || `h${node.level || 2}`;
      return `<${tag}>${children}</${tag}>`;
    }
    case "list":
      return node.listType === "bullet"
        ? `<ul>${children}</ul>`
        : `<ol>${children}</ol>`;
    case "listitem":
      return `<li>${children}</li>`;
    case "quote":
      return `<blockquote>${children}</blockquote>`;
    case "link":
      return `<a href="${node.url || "#"}">${children}</a>`;
    case "image":
      return `<img src="${node.src || ""}" alt="${node.altText || ""}" />`;
    case "text": {
      let text = node.text || "";
      if (node.format) {
        if (node.format & 16) text = `<code>${text}</code>`;
        if (node.format & 4) text = `<s>${text}</s>`;
        if (node.format & 8) text = `<u>${text}</u>`;
        if (node.format & 2) text = `<em>${text}</em>`;
        if (node.format & 1) text = `<strong>${text}</strong>`;
      }
      return text;
    }
    case "linebreak":
      return "<br />";
    default:
      return children;
  }
}

function lexicalToHtml(serializedState: { root: LexicalNode } | null): string {
  if (!serializedState?.root) return "";
  try {
    return lexicalNodeToHtml(serializedState.root);
  } catch {
    return "";
  }
}

// ─── helper ───────────────────────────────────────────────────────────────────
function calculateReadTime(text: string) {
  const wordCount = text.trim().split(/\s+/).length;
  return `${Math.ceil(wordCount / 200)} min read`;
}

// ─── component ────────────────────────────────────────────────────────────────
export default function BlogClient({ blog }: { blog: any }) {
  const pathname = usePathname();
  const blogURL = `${serverUrl}${pathname}`;
  const blogTitle = blog?.slugTitle || "";

  // hydration guard
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  // reading progress
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setProgress(
        Math.min(
          100,
          (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100,
        ),
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // back-to-top
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // parse Lexical content
  const parsedContent =
    typeof blog?.content === "string"
      ? (() => {
          try {
            return JSON.parse(blog.content);
          } catch {
            return null;
          }
        })()
      : null;

  const staticHtml = lexicalToHtml(parsedContent);
  const readTime = blog?.content ? calculateReadTime(blog.content) : null;

  // share URLs
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(blogTitle)}&url=${encodeURIComponent(blogURL)}`;
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogURL)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogURL)}`;

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* ── Reading progress bar ── */}
      <div
        className="fixed top-0 left-0 h-0.5 z-50 bg-gradient-to-r from-primary to-amber-500 transition-all duration-100 pointer-events-none"
        style={{ width: `${progress}%` }}
      />

      <main className="pt-14">
        {/* ── Article header ── */}
        <header className="max-w-5xl  mx-auto px-6 pt-16 pb-0 text-center">
          {/* Category pill */}
          {blog?.category && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-yellow-50 text-primary border border-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                {blog.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl  lg:text-5xl font-bold tracking-tight leading-tight text-stone-900 mb-8">
            {blog?.title}
          </h1>

          {/* Meta strip */}
          <div className="flex flex-wrap justify-center divide-x divide-stone-200 bg-white border border-stone-200 rounded-xl overflow-hidden mb-6">
            <div className="flex items-center gap-2 px-5 py-3 text-sm text-stone-600 flex-1 justify-center min-w-[100px]">
              <User size={14} className="text-primary shrink-0" />
              <span>{blog?.author}</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 text-sm text-stone-600 flex-1 justify-center min-w-[100px]">
              <Calendar size={14} className="text-primary shrink-0" />
              <span>{new Date(blog?.createdAt).toLocaleDateString()}</span>
            </div>
            {readTime && (
              <div className="flex items-center gap-2 px-5 py-3 text-sm text-stone-600 flex-1 justify-center min-w-[100px]">
                <Clock size={14} className="text-primary shrink-0" />
                <span>{readTime}</span>
              </div>
            )}
          </div>

          {/* Share row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
            <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-stone-400">
              Share
            </span>

            <Link href={facebookHref} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#1877F2] hover:-translate-y-0.5 hover:brightness-110 transition-all duration-150 shadow-sm hover:shadow-md">
                <Facebook size={12} />
                <span className="hidden sm:inline">Facebook</span>
              </button>
            </Link>
            <Link href={twitterHref} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-black hover:-translate-y-0.5 hover:brightness-110 transition-all duration-150 shadow-sm hover:shadow-md">
                <X size={12} />
                <span className="hidden sm:inline">Twitter</span>
              </button>
            </Link>
            <Link href={linkedinHref} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0A66C2] hover:-translate-y-0.5 hover:brightness-110 transition-all duration-150 shadow-sm hover:shadow-md">
                <Linkedin size={12} />
                <span className="hidden sm:inline">LinkedIn</span>
              </button>
            </Link>
          </div>
        </header>

        {/* ── Hero image ── */}
        {blog?.image && (
          <div className="container mx-auto mt-10">
            <div className="relative w-full h-[220px] sm:h-[380px] lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl shadow-stone-200">
              <Image
                fill
                src={`/api/uploads/${blog.image}`}
                alt={blog?.title || blog?.image}
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* ── Body: article + sidebar ── */}
        <div className="container py-12 grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 items-start">
          {/* Article content */}
          <article>
            {parsedContent ? (
              <>
                {/* SEO layer — hidden after hydration */}
                <div
                  className={[
                    "prose prose-stone prose-lg max-w-none",
                    "prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-stone-900",
                    "prose-a:text-teal-700 prose-a:underline-offset-2",
                    "prose-blockquote:border-l-teal-500 prose-blockquote:bg-teal-50 prose-blockquote:rounded-r-xl prose-blockquote:not-italic",
                    "prose-code:text-teal-700 prose-code:bg-stone-100 prose-code:rounded prose-code:px-1",
                    "prose-img:rounded-xl",
                    hydrated ? "hidden" : "block",
                  ].join(" ")}
                  dangerouslySetInnerHTML={{ __html: staticHtml }}
                />
                {/* Interactive editor */}
                <Editor
                  editorSerializedState={parsedContent}
                  readOnly
                  blogPage
                />
              </>
            ) : null}
          </article>
        </div>

        {/* ── Related articles ── */}
      </main>
      <div className="container mt-10">
        <p className="text-gray-600 text-center mb-1">Continue Reading</p>
        <h1 className="text-4xl text-gray-800 font-rubik text-center font-[600] lg:text-5xl mb-10">
          More Articles
        </h1>
        <Blogs />
      </div>

      {/* ── Back-to-top button ── */}
      
    </div>
  );
}
