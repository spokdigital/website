import { StatusBadge } from "./status-badge";
import {
  PencilSimpleIcon,
  CalendarIcon,
  TagIcon,
  UserIcon,
  TrashIcon,
  SpinnerIcon,
} from "@phosphor-icons/react";
import type { BlogPost } from "../page";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  post: BlogPost;
  setConfirmPost: (post: BlogPost | null) => void;
  deletingId: number | null;
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const BlogList = ({ post, setConfirmPost, deletingId }: Props) => {
  const isDeleting = deletingId === post.id;

  return (
    <div className="group flex gap-4 bg-surface p-4 transition-colors hover:bg-foreground/2">
      {/* Thumbnail */}
      <div className="hidden sm:flex  w-68 aspect-6/4 rounded overflow-hidden border border-border bg-background items-center justify-center">
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <PencilSimpleIcon size={20} className="text-foreground/10" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 min-w-0 gap-1.5">
        {/* Title + badges */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <StatusBadge status={post.status} />
            {post.category && (
              <span className="text-xs text-foreground-muted bg-foreground/5 rounded-full px-2 py-0.5">
                {post.category}
              </span>
            )}
          </div>
          <h2 className="text-2xl font-semibold text-foreground">
            {post.title}
          </h2>
        </div>

        {/* Excerpt */}
        {post.excerpt ? (
          <p className="text-xs text-foreground-muted line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        ) : (
          <p className="text-xs text-amber-400  line-clamp-2 leading-relaxed">
            Excerpt is missing
          </p>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Meta + Actions row */}
        <div className="flex items-center justify-between gap-2 flex-wrap pt-2 border-t border-border ">
          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-foreground-muted flex-wrap">
            {post.author && (
              <span className="flex items-center gap-1">
                <UserIcon size={11} />
                {post.author}
              </span>
            )}
            <span className="flex items-center gap-1">
              <CalendarIcon size={11} />
              {formatDate(post.createdAt)}
            </span>
            {post.tags && (
              <span className="flex items-center gap-1 max-w-[160px] truncate">
                <TagIcon size={11} className="shrink-0" />
                <span className="truncate">
                  {post.tags
                    .split(",")
                    .slice(0, 3)
                    .map((t) => t.trim())
                    .join(", ")}
                </span>
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <Link href={`/dashboard/blogs/edit/${post.id}`}>
              <Button type="button" variant="outline" size="sm">
                <PencilSimpleIcon size={13} />
                Edit
              </Button>
            </Link>
            <Button
              type="button"
              size="sm"
              variant="destructive"
              onClick={() => setConfirmPost(post)}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <SpinnerIcon size={13} className="animate-spin" />
              ) : (
                <>
                  <TrashIcon size={13} />
                  Delete
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
