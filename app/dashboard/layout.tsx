import Sidebar from "../components/Sidebar";
import { SidebarProvider } from "../providers/SidebarContext";
import MainArea from "../components/MainArea";
import { ThemeModeProvider } from "../providers/ThemeModeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeModeProvider>
     
        <TooltipProvider>
          <SidebarProvider>
            <Sidebar />
            <MainArea>{children}</MainArea>
          </SidebarProvider>
        </TooltipProvider>
      
    </ThemeModeProvider>
  );
}
