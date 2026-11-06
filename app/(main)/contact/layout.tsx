import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Development Portfolio | Spok Digital",
  description: "Explore Spok Digital's portfolio of website development, SEO, social media marketing and D2C growth projects. Discover creative solutions and measurable results for brands.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
     
      {children}
    </>
  );
}
