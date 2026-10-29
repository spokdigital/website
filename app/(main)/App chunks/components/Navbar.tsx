"use client";
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Button from "./SecondaryButton";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const menu = [
  { title: "Home", link: "/" },
  { title: "Shopify Dev", link: "/shopify" },
  { title: "Services", link: "/services", hasSubmenu: true },
  { title: "Portfolio", link: "/Portfolio" },
  { title: "Blogs", link: "/blogs" },
];

const NavBar = () => {
  const path = usePathname();
  const renderPath = "/admin";
  return !path.includes(renderPath) ? (
    <div className="HeadNavigation  py-4 w-full absolute  top-0 left-0 z-99999 ">
      <div
        className={`flex justify-between items-center max-w-[94%]! mx-auto }`}
      >
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.2,
            type: "linear",
            ease: "easeInOut",
            duration: 1,
          }}
          className=" relative z-9999999"
        >
          <Logo
            source={
              path === "/Portfolio" ||
                path === "/" ||
                path.startsWith("/services") ||
                path === "/About" ||
                path === "/contact" ||
                path === "/book-a-demo" ||
                path.startsWith("/d2c") ||
                path.startsWith("/website-landing") ||
                path === ('/shopify') ||
                path.startsWith("/blogs/")
                ? "/spok-balck.png"
                : "/spok-white.png"
            }
            className="w-[110px] lg:w-[190px]!"
          />
        </motion.div>
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "linear", ease: "easeInOut", duration: 1 }}
          className="hidden xl:flex"
        >
          <Menu menu={menu} />
        </motion.div>
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          className="hidden lg:flex lg:w-[230px]!  justify-end"
          transition={{
            delay: 0.2,
            type: "linear",
            ease: "easeInOut",
            duration: 1,
          }}
        >
          <Link href={"/contact"} className="hidden xl:block">
            <Button
              className={`${path.startsWith("/blogs/") ||
                path.startsWith("/services") ||
                path === "/Portfolio" ||
                path === "/" ||
                path === "/About" ||
                path === "/d2c" ||
                path === "/book-a-demo" ||
                path === ('/shopify') ||
                path === "/website-landing"
                ? "text-black!"
                : "text-white! border-gray-50/80"
                }`}
            >
              Contact us
            </Button>
          </Link>
        </motion.div>
        <MobileMenu />
      </div>
    </div>
  ) : null;
};

export default NavBar;
