import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
  outputFileTracingIncludes: {
    "/api/blog": ["./app/generated/prisma/**/*"],
    "/api/blog/[id]": ["./app/generated/prisma/**/*"],
    "/blogs/[slug]": ["./app/generated/prisma/**/*"],
    "/blogs": ["./app/generated/prisma/**/*"],
    // add any other route that queries Prisma directly
  },
  outputFileTracingExcludes: {
    "/api/blog": [
      "public/media/**",
      "public/landing/**",
      "public/Hero.png",
      "public/portrait-*.jpg",
      "public/portfolio/**",
    ],
    "/api/blog/[id]": [
      "public/media/**",
      "public/landing/**",
      "public/Hero.png",
      "public/portrait-*.jpg",
      "public/portfolio/**",
    ],
  },
};

export default nextConfig;