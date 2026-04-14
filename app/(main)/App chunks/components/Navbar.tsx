"use client";
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Button from "./SecondaryButton";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menu = [
  { title: "Home", link: "/" },
  { title: "About", link: "/About" },
  { title: "D2C Growth", link: "/d2c" },
  { title: "Business Accelerator", link: "/website-landing" },
  { title: "Services", link: "/services", hasSubmenu: true },
  { title: "Portfolio", link: "/Portfolio" },
];

const NavBar = () => {
  const path = usePathname();
  const renderPath = "/admin";
  return !path.includes(renderPath) ? (
    <div className="HeadNavigation py-4 w-full absolute  top-0 left-0 z-[99999] ">
      <div
        className={`flex justify-between items-center   ${path === "/d2c" || path === "/website-landing" ? "!max-w-[94%] mx-auto" : "container"}`}
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
          className=" relative z-[9999999]"
        >
          <Logo
            source={
              path === "/Portfolio" ||
              path === "/" ||
              path.startsWith("/services") ||
              path === "/About" ||
              path === "/contact" ||
              path.startsWith("/d2c") ||
              path.startsWith("/website-landing") ||
              path.startsWith("/blogs/")
                ? "/spok-balck.png"
                : "/spok-white.png"
            }
            className="w-[110px] lg:!w-[190px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "linear", ease: "easeInOut", duration: 1 }}
          className="hidden lg:flex"
        >
          <Menu menu={menu} />
        </motion.div>
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          className="hidden lg:flex lg:!w-[230px]  justify-end"
          transition={{
            delay: 0.2,
            type: "linear",
            ease: "easeInOut",
            duration: 1,
          }}
        >
          <Link href={"/contact"} className="hidden lg:block">
            <Button
              className={`${
                path.startsWith("/services")
                  ? "!text-black"
                  : "!text-white border-gray-50/80"
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
