import SmoothScrollProvider from "@/components/ui/Smooth-Scroll-Provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScrollProvider>
      <div className="bg-white">{children}</div>
    </SmoothScrollProvider>
  );
}
