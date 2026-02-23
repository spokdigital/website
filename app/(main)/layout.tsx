import NavBar from "./App chunks/components/Navbar";
import ToTop from "./App chunks/components/ToTop";
import Footer from "./App chunks/components/Footer";
import Template from "../Template";
import Loading from "./App chunks/components/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Loading />
      <div className="w-full relative">
        <NavBar />
      </div>
      <ToTop />
      <Template>{children}</Template>
      <Footer />
    </>
  );
}
