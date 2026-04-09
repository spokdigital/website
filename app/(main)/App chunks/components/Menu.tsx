"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Menu = ({
  menu = [{ title: "Home", link: "/" }],
  className,
}: {
  className?: string;
  menu: { title: string; link: string }[];
}) => {
  return (
    <div className="">
      <SlideTabs menu={menu} className={className} />
    </div>
  );
};

const SlideTabs = ({
  menu,
  className,
}: {
  menu: { title: string; link: string }[];
  className?: string;
}) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const path = usePathname();

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={`relative mx-auto font-[500] z-[999] ${
        path === "/contact" ||
        path.startsWith("/blogs/") ||
        path === "/" ||
        path === "/About"
          ? "text-black border-gray-500/30"
          : "text-white border-slate-50/30"
      } font-Grostek  flex w-fit border bg-white/20 rounded-full p-1 ${className}`}
    >
      {menu.map((item, index) => (
        <Tab
          key={index}
          setPosition={setPosition}
          link={item.link}
          setHoveredTab={setHoveredTab}
          hoveredTab={hoveredTab}
        >
          {item.title}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  link,
  setHoveredTab,
  hoveredTab,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
  link: string;
  setHoveredTab: React.Dispatch<React.SetStateAction<string | null>>;
  hoveredTab: string | null;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  const shouldUseLink = children !== "services";

  return shouldUseLink ? (
    <Link
      href={link}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
        setHoveredTab(children as string); // Set the hovered tab to trigger the pop-up
      }}
      onMouseLeave={() => {
        setHoveredTab(null); // Reset the hovered tab when mouse leaves
      }}
    >
      <li
        ref={ref}
        className={`relative group  z-10 block cursor-pointer px-3 py-1.5 text-xs  md:px-5 md:py-3 md:text-base`}
      >
        <button className="group relative rounded-full !capitalize  group-hover:text-white">
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[140%] group-hover:skew-y-12">
              {children}
            </div>
            <div className="absolute translate-y-[150%]  skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              {children}
            </div>
          </span>
        </button>
      </li>
    </Link>
  ) : (
    <li
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
        setHoveredTab(children as string); // Set the hovered tab to trigger the pop-up
      }}
      onMouseLeave={() => {
        setHoveredTab(null); // Reset the hovered tab when mouse leaves
      }}
      ref={ref}
      className={`relative group  z-10 block cursor-pointer  px-3 py-1.5 text-xs md:px-5 md:py-3 md:text-base`}
    >
      <button className="group capitalize relative rounded-full  group-hover:text-white ">
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
            {children}
          </div>
          <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            {children}
          </div>
        </span>
      </button>
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{
        duration: 0.4,
        ease: [0.17, 0.84, 0.44, 1],
      }}
      className="absolute z-0 h-7 rounded-full bg-primary md:h-12"
    />
  );
};

export default Menu;
