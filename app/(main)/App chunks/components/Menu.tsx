"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    <div>
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
  const [isHovering, setIsHovering] = useState(false);
  const [activePosition, setActivePosition] = useState({
    left: 0,
    width: 0,
  });

  const path = usePathname();

  return (
    <ul
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setPosition({
          left: activePosition.left,
          width: activePosition.width,
          opacity: 1,
        });
      }}
      className={`relative mx-auto font-[500] z-[999] ${
        path === "/contact" ||
        path.startsWith("/blogs/") ||
        path === "/" ||
        path === "/About" ||
        path.startsWith("/d2c") ||
        path.startsWith("/website-landing")
          ? "text-black border-gray-500/30"
          : "text-white border-slate-50/30"
      } font-Grostek flex w-fit border bg-white/20 rounded-full p-1 ${className}`}
    >
      {menu.map((item, index) => (
        <Tab
          key={index}
          link={item.link}
          path={path}
          setPosition={setPosition}
          setActivePosition={setActivePosition}
          isHovering={isHovering}
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
  setActivePosition,
  link,
  path,
  isHovering,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
  setActivePosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number }>
  >;
  link: string;
  path: string;
  isHovering: boolean;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  const isActive = path === link || (link !== "/" && path.startsWith(link));

  // Set active tab position on route change
  useEffect(() => {
    if (!ref.current) return;

    if (isActive) {
      const { width } = ref.current.getBoundingClientRect();

      const newPos = {
        left: ref.current.offsetLeft,
        width,
      };

      setActivePosition(newPos);
      setPosition({
        ...newPos,
        opacity: 1,
      });
    }
  }, [path]);

  return (
    <Link
      href={link}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
    >
      <li
        ref={ref}
        className="relative group z-10 block cursor-pointer px-3 py-1.5 text-xs md:px-5 md:py-3 md:text-base"
      >
        <button
          className={`relative rounded-full capitalize transition-colors ${
            isActive && !isHovering
              ? "text-white" // only white when NOT hovering anything
              : "text-black group-hover:text-white"
          }`}
        >
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[140%] group-hover:skew-y-12">
              {children}
            </div>
            <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              {children}
            </div>
          </span>
        </button>
      </li>
    </Link>
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
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1], // smoother (Vercel-like)
      }}
      className="absolute z-0 h-7 rounded-full shadow-[0px_0px_4px_.1px_rgba(0,0,0,.4)] border border-black/20 bg-primary md:h-12"
    />
  );
};

export default Menu;
