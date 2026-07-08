"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useThemeMode } from "../providers/ThemeModeProvider";
import { MoonIcon, SunDimIcon } from "@phosphor-icons/react";
const LABELS: Record<string, string> = {
  "/admin": "Overview",
  "/admin/blogs": "Blog Posts",
  "/admin/blogs/new": "New Post",
  "/admin/forms": "Form Submissions",
  "/admin/users": "Users",
  "/admin/settings": "Settings",
};

export default function AdminTopBar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useThemeMode();

  const label = LABELS[pathname] ?? "Admin";
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 transition-all duration-200 ease-in-out z-40 flex h-14 items-center justify-between gap-3 bg-surface border-b border-border px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Breadcrumb */}
        <div className="  ">
          <span className="">Admin</span>
 
        </div>
      </div>

      <button
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="p-2 hover:bg-sb-item-hover rounded-md "
      >
        {mounted && theme === "dark" ? (
          <SunDimIcon className=" " />
        ) : (
          <MoonIcon className=" text-gray-700" />
        )}
      </button>
    </header>
  );
}
