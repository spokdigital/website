"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "./page-components/header";
import { PencilSimpleIcon, PlusIcon, SpinnerIcon } from "@phosphor-icons/react";
import { ConfirmDialog } from "./page-components/confirm-dialog";
import FilterTabs from "./page-components/filter-tabs";
import BlogList from "./page-components/blog-list";
import BlogCards from "./page-components/blog-cards";
import { cn } from "@/lib/utils";
import PaginationEl from "@/app/components/PaginationEL";

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  author: string | null;
  category: string | null;
  tags: string | null;
  status: string;
  coverImage: string | null;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  body: string;
  
};

type FilterType = "all" | "published" | "draft";
type SortType = "newest" | "oldest" | "az";
type ViewType = "list" | "grid";

const LIMIT = 10;
const DEBOUNCE_MS = 400;

export default function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [confirmPost, setConfirmPost] = useState<BlogPost | null>(null);

  const [filter, setFilter] = useState<FilterType>("all");
  const [sort, setSort] = useState<SortType>("newest");
  const [search, setSearch] = useState(""); // input value (live)
  const [debouncedSearch, setDebouncedSearch] = useState(""); // sent to API
  const [blogView, setBlogView] = useState<ViewType>("list");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState({ all: 0, published: 0, draft: 0 });

  // Debounce search input
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search.trim()), DEBOUNCE_MS);
    return () => clearTimeout(t);
  }, [search]);

  /* ── Fetch — no useCallback needed, runs via useEffect ── */
  const fetchPosts = async (
    pg: number,
    f: FilterType,
    s: SortType,
    q: string,
  ) => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({
        page: String(pg),
        limit: String(LIMIT),
        sort: s,
        ...(f !== "all" && { status: f }),
        ...(q && { search: q }),
      });

      const res = await fetch(`/api/blog?${params}`);
      if (!res.ok) throw new Error();
      const data = await res.json();

      setPosts(data.posts);
      setTotalPages(data.pagination.totalPages);
      setTotal(data.pagination.total);
      setCounts(data.counts);
    } catch {
      setError("Could not load posts.");
    } finally {
      setLoading(false);
    }
  };

  // Reset to page 1 and refetch when filters/search/sort change
  useEffect(() => {
    setPage(1);
    fetchPosts(1, filter, sort, debouncedSearch);
  }, [filter, sort, debouncedSearch]);

  // Fetch when page changes
  useEffect(() => {
    if (page > 1) fetchPosts(page, filter, sort, debouncedSearch);
  }, [page]);

  /* ── Delete ── */
  const handleDelete = async (post: BlogPost) => {
    setDeletingId(post.id);
    setConfirmPost(null);
    try {
      const res = await fetch(`/api/blog/${post.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      await fetchPosts(page, filter, sort, debouncedSearch);
    } catch {
      setError("Failed to delete the post. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const sharedProps = { deletingId, setConfirmPost };

  return (
    <div className="min-h-screen bg-background">
      {confirmPost && (
        <ConfirmDialog
          title={confirmPost.title}
          onConfirm={() => handleDelete(confirmPost)}
          onCancel={() => setConfirmPost(null)}
        />
      )}

      <div className="container space-y-6">
        <Header total={total} />

        <FilterTabs
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
          search={search}
          setSearch={setSearch}
          blogView={blogView}
          setBlogView={setBlogView}
          counts={counts}
        />

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 flex items-center justify-between">
            {error}
            <button
              type="button"
              onClick={() => fetchPosts(page, filter, sort, debouncedSearch)}
              className="text-xs underline underline-offset-2"
            >
              Retry
            </button>
          </div>
        )}

        {loading && (
          <div className="flex items-center justify-center py-20 text-foreground-muted">
            <SpinnerIcon size={20} className="animate-spin mr-2" />
            <span className="text-sm">Loading posts...</span>
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
            <div className="rounded-full bg-foreground/5 p-4">
              <PencilSimpleIcon size={24} className="text-foreground-muted" />
            </div>
            <p className="text-sm font-medium text-foreground">
              {filter === "all" && !search
                ? "No posts yet"
                : search
                  ? `No results for "${search}"`
                  : `No ${filter} posts`}
            </p>
            <p className="text-xs text-foreground-muted">
              {filter === "all" && !search
                ? "Create your first blog post to get started."
                : "Try adjusting your filters or search term."}
            </p>
            {filter === "all" && !search && (
              <Link href="/blog/new">
                <Button size="sm" variant="secondary">
                  Create post
                </Button>
              </Link>
            )}
          </div>
        )}

        {!loading && posts.length > 0 && (
          <div
            className={cn(
              blogView === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                : "overflow-hidden divide-y divide-border",
            )}
          >
            {posts.map((post) =>
              blogView === "grid" ? (
                <BlogCards key={post.id} post={post} {...sharedProps} />
              ) : (
                <BlogList key={post.id} post={post} {...sharedProps} />
              ),
            )}
          </div>
        )}

        {!loading && totalPages > 1 && (
          <PaginationEl
            page={page}
            totalPages={totalPages}
            total={total}
            limit={LIMIT}
            onPageChange={setPage}
          />
        )}
      </div>

      <Link href="/blog/new" className="fixed bottom-5 right-5 z-20">
        <Button className="flex items-center gap-1.5">
          <PlusIcon size={15} /> New Post
        </Button>
      </Link>
    </div>
  );
}
