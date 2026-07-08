"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "../providers/SidebarContext";
import {
  PenIcon,
  SidebarSimpleIcon,
} from "@phosphor-icons/react";
import Logo from "../(main)/App chunks/components/Logo";
interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  exact?: boolean;
  badge?: string | number;
  disabled?: boolean;
}

interface NavGroup {
  section: string;
  items: NavItem[];
}

const NAV: NavGroup[] = [
  

  {
    section: "Content",
    items: [
      {
        label: "Blog Posts",
        href: "/dashboard/blogs",
        icon: <PenIcon />,
        badge: 5,
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const { isOpen, isCollapsed, close, toggleCollapse } = useSidebar();

  const active = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          aria-hidden="true"
          onClick={close}
          className="fixed inset-0 z-49 backdrop-blur-[2px] md:hidden"
        />
      )}

      <aside
        aria-label="Admin navigation"
        data-collapsed={isCollapsed}
        className={`
          fixed left-0 top-0 z-50 flex h-screen bg-surface flex-col 
          border-r border-border
          transition-all duration-200 ease-in-out
          md:translate-x-0
          ${isCollapsed ? "w-16" : "w-60"}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div
          className={`
            flex h-14 justify-between items-center  border-b border-border
            ${isCollapsed ? "justify-center px-4" : "justify-between px-4"}
          `}
        >
          <div className="flex justify-center items-center ">
            {!isCollapsed && <Logo className="w-[90%]!" source="/spok-balck.png" />}
          </div>

          <button
            onClick={toggleCollapse}
            aria-label={isCollapsed ? "Expand sidebar" : "Close sidebar"}
            className="flex  p-2 hover:bg-sb-item-hover items-center justify-center rounded-md  "
          >
            <SidebarSimpleIcon />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-2 py-2.5">
          {NAV.map((group, idx) => (
            <div key={group.section} className="mb-4 ">
              {!isCollapsed && (
                <div
                  className={`mb-4 px-2.5 text-[10px] border-border font-semibold uppercase   ${NAV.length - 1 === idx && "border-t"}`}
                />
              )}

              {group.items.map((item) => {
                const isActive = active(item.href, item.exact);
                const isDisabled = item.disabled;

                return (
                  <Link
                    key={item.href}
                    href={isDisabled ? "#" : item.href}
                    aria-current={isActive ? "page" : undefined}
                    aria-disabled={isDisabled}
                    title={isCollapsed ? item.label : undefined}
                    onClick={isDisabled ? (e) => e.preventDefault() : close}
                    className={`
                      relative mb-0.5  flex items-center rounded-[7px]
                      text-[13.5px] transition-colors
                      ${
                        isCollapsed
                          ? "justify-center px-0 py-[9px]"
                          : "gap-2.5 px-2.5 py-2"
                      }
                      ${
                        isDisabled
                          ? "cursor-not-allowed opacity-45"
                          : "cursor-pointer"
                      }
                      ${
                        isActive
                          ? "bg-primary font-medium text-(--sb-text-primary)"
                          : "text-(--sb-text-secondary) hover:bg-sb-item-hover"
                      }
                    `}
                  >
                    <span
                      className={`
                        flex shrink-0
                        ${isActive ? "" : "text-2xl"}
                      `}
                    >
                      {item.icon}
                    </span>

                    {!isCollapsed && (
                      <>
                        <span className="flex-1 whitespace-nowrap">
                          {item.label}
                        </span>
                      </>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* User */}
        <div
          className={`
            flex shrink-0 items-center gap-2.5 border-t border-border
            ${isCollapsed ? "justify-center py-3" : "px-3.5 py-3"}
          `}
        >
          <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-(--sb-border) bg-(--sb-item-active) text-xs font-semibold text-(--brand)">
            A
          </div>

          {!isCollapsed && (
            <div className="min-w-0">
              <div className="whitespace-nowrap text-sm font-medium text-(--sb-text-primary)">
                Admin
              </div>

              <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] text-(--sb-text-muted)">
                admin@site.com
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
