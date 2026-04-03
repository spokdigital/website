"use client";
import { Home, Book, LayoutDashboard } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Logo from "../(main)/App chunks/components/Logo";

const items = [
  {
    title: "Visit Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Blogs",
    url: "dashboard/Blogs",
    icon: Book,
  },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className="!bg-red-50/5">
      <SidebarTrigger
        className={`bg-primary hover:bg-primary/90 z-10 ${
          open ? "-translate-x-1/2" : "translate-x-1"
        } size-10 text-white hover:text-white transition-transform duration-300 rounded-full left-full  top-24 absolute`}
      />
      <SidebarContent className="py-5">
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-center mt-5">
            <Logo source="/spok-balck.png" />
          </SidebarGroupLabel>
          <SidebarGroupContent className=" mt-20">
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-primary/90 hover:text-slate-50 py-5 transition-colors duration-250"
                  >
                    <Link href={`/${item.url}`}>
                      <item.icon className="!w-5 !h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
