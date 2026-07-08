import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
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