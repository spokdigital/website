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
  { title: "home", link: "/" },
  { title: "about", link: "/About" },
  { title: "services", link: "/service" },
  { title: "Portfolio", link: "/Portfolio" },
];
const NavBar = () => {
  const path = usePathname();
  const renderPath = "/admin";
  return !path.includes(renderPath) ? (
    <div className="HeadNavigation py-4 w-full absolute  top-0 left-0 z-[99999] ">
      <div className="flex justify-between items-center container ">
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
              path !== "/Blogs" && path !== "/Blog"
                ? "/spok-white.png"
                : "/spok-balck.png"
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
            <Button className="">Contact us</Button>
          </Link>
        </motion.div>
        <MobileMenu />
      </div>
    </div>
  ) : null;
};

export default NavBar;
