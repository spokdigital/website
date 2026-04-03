import { Metadata } from "next";
import BlogClient from "./BlogClient";
import { dbGet, dbAll } from "@/app/lib/db";
import zlib from "zlib";

type Blog = {
  id: string;
  title: string;
  author?: string;
  category?: string;
  content?: string;
  metaTitle?: string;
  metaDesc?: string;
  image?: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  slugTitle?: string;
};

const serverUrl = "http://localhost:3000";

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const blog = await dbGet("SELECT * FROM blogs WHERE slugTitle = ?", [slug]);

    if (!blog) return null;

    // Decompress content if gzipped
    if (blog.content?.startsWith("gz:")) {
      try {
        const compressed = Buffer.from(blog.content.slice(3), "base64");
        blog.content = zlib.gunzipSync(compressed).toString("utf-8");
      } catch (err) {
        console.warn("⚠️ Failed to decompress content for blog:", slug, err);
      }
    }

    return blog;
  } catch (err) {
    console.error("Failed to fetch blog from DB:", err);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  const imageUrl = blog?.image
    ? `${serverUrl}/api/uploads/${blog.image}`
    : undefined;

  return {
    title: blog?.metaTitle || blog?.title || "Blog",
    description: blog?.metaDesc || "",
    openGraph: {
      title: blog?.metaTitle || blog?.title,
      description: blog?.metaDesc || "",
      images: imageUrl ? [imageUrl] : [],
      url: `${serverUrl}/blogs/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog?.metaTitle || blog?.title,
      description: blog?.metaDesc || "",
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: { canonical: `${serverUrl}/blogs/${slug}` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return <div className="p-8 text-center text-gray-500">Blog not found</div>;
  }

  return <BlogClient blog={blog} />;
}

export async function generateStaticParams() {
  try {
    const blogs = await dbAll(
      "SELECT slugTitle FROM blogs ORDER BY updatedAt DESC",
      [],
    );
    return (blogs ?? []).map((b: { slugTitle: string }) => ({
      slug: b.slugTitle,
    }));
  } catch (err) {
    console.error("Failed to fetch slugs for static params:", err);
    return [];
  }
}
