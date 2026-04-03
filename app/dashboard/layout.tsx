import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import { ReactNode } from "react";
import Head from "./head";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full bg-white">
        <Head />
        <main className="container mt-7">{children}</main>
      </div>
    </SidebarProvider>
  );
}
