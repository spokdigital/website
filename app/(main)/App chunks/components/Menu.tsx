"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Globe,
  PenTool,
  Monitor,
  TrendingUp,
  Users,
  ArrowRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export const serviceItems = [
  {
    name: "Social Media",
    desc: "Build & grow your presence across all platforms",
    icon: Globe,
    href: "/services/smm",
    tag: "Most popular",
  },
  {
    name: "Influencer Marketing",
    desc: "Data-driven content that converts browsers to buyers",
    icon: PenTool,
    href: "/services/influencer-marketing",
    tag: null,
  },
  {
    name: "UGC Content Creation",
    desc: "Launch-ready digital presence from day one",
    icon: Monitor,
    href: "/services/ugc-content-creation",
    tag: null,
  },
  {
    name: "Video Editing",
    desc: "ROI-focused ad campaigns that scale profitably",
    icon: TrendingUp,
    href: "/services/video-editing",
    tag: "High ROI",
  },
  {
    name: "Website Development",
    desc: "Vetted creator partnerships that drive real reach",
    icon: Users,
    href: "/services/web-development",
    tag: null,
  },
];

const Menu = ({
  menu = [{ title: "Home", link: "/" }],
  className,
}: {
  className?: string;
  menu: { title: string; link: string; hasSubmenu?: boolean }[];
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
  menu: { title: string; link: string; hasSubmenu?: boolean }[];
  className?: string;
}) => {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activePosition, setActivePosition] = useState({ left: 0, width: 0 });
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
        path.startsWith("/website-landing") ||
        path !== "/Portfolio"
          ? "text-black border-gray-500/30"
          : "text-white border-gray-800/20"
      } font-Grostek flex w-fit border bg-white/20 rounded-full p-1 ${className}`}
    >
      {menu.map((item, index) =>
        item.hasSubmenu ? (
          <ServicesTab
            key={index}
            link={item.link}
            path={path}
            isHovering={isHovering}
            setPosition={setPosition}
            setActivePosition={setActivePosition}
          >
            {item.title}
          </ServicesTab>
        ) : (
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
        ),
      )}
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

  useEffect(() => {
    if (!ref.current || !isActive) return;
    const { width } = ref.current.getBoundingClientRect();
    const newPos = { left: ref.current.offsetLeft, width };
    setActivePosition(newPos);
    setPosition({ ...newPos, opacity: 1 });
  }, [path]);

  return (
    <Link
      href={link}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
    >
      <li
        ref={ref}
        className="relative group z-10 block cursor-pointer px-3 py-1.5 text-xs md:px-5 md:py-3 md:text-base"
      >
        <button
          className={`relative rounded-full capitalize transition-colors ${isActive && !isHovering ? "text-white" : "text-black group-hover:text-white"}`}
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

const ServicesTab = ({
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuLeft, setMenuLeft] = useState(0);

  const isActive = path === link || (link !== "/" && path.startsWith(link));

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!ref.current || !isActive) return;
    const { width } = ref.current.getBoundingClientRect();
    const newPos = { left: ref.current.offsetLeft, width };
    setActivePosition(newPos);
    setPosition({ ...newPos, opacity: 1 });
  }, [path, setActivePosition, setPosition]);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);

    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();
    const centerOfLi = width / 2;
    const desiredLeft = centerOfLi - 305; // 305 is half of 610

    setMenuLeft(desiredLeft);
    setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
  };

  const handleLeave = () => {
    // Increased timeout to 200ms to give more time to cross the gap
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <li ref={ref} className="relative">
      <div className="group z-10 block cursor-pointer ">
        <button
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          // FIX: Changed colors to "text-primary" (red/pink) on hover/active
          // This ensures visibility on a white background if the pill background isn't showing.
          className={`flex z-10 items-center px-3 py-1.5 text-xs md:px-5 md:py-3 md:text-base gap-1 relative rounded-full capitalize transition-colors ${
            isActive
              ? "text-white font-semibold"
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
          <ChevronDown
            size={12}
            className={`flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={handleLeave}
            className="absolute top-[calc(100%+16px)] z-[99999]"
            style={{
              left: menuLeft,
              width: 610,
            }}
          >
            {/* 
              FIX: INVISIBLE BRIDGE 
              This div fills the 16px gap between the button and the menu.
              It ensures that moving the mouse from the button to the menu
              keeps the cursor 'inside' the component, preventing the menu from closing.
            */}
            <div
              className="absolute -top-[16px] left-0 w-full h-[16px]"
              style={{ height: "16px" }} // Explicit height matching the top gap
            />

            {/* Tip */}
            <div
              className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white rounded-tl-[2px]"
              style={{
                border: "0.5px solid rgba(0,0,0,0.08)",
                borderBottom: "none",
                borderRight: "none",
              }}
            />

            {/* Panel */}
            <div
              className="rounded-2xl border border-black/[.07] bg-white overflow-hidden"
              style={{
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              {/* Top strip */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[.06]">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center">
                    <Sparkles
                      size={11}
                      className="text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[.15em] text-gray-400">
                    What we offer
                  </span>
                </div>
                <span className="text-[10.5px] text-gray-300 font-medium">
                  {serviceItems.length} services
                </span>
              </div>

              {/* 2-col grid */}
              <div className="p-3 grid grid-cols-2 gap-1.5">
                {serviceItems.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    onMouseEnter={() => setHovered(s.name)}
                    onMouseLeave={() => setHovered(null)}
                    className="relative flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-[#fdf2f4] group/item"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 border ${
                        hovered === s.name
                          ? "bg-primary border-primary shadow-[0_0_16px_rgba(222,15,63,0.25)]"
                          : "bg-primary/[.06] border-primary/[.12]"
                      }`}
                    >
                      <s.icon
                        size={16}
                        strokeWidth={1.8}
                        className={`transition-colors duration-200 ${hovered === s.name ? "text-white" : "text-primary"}`}
                      />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0 pt-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className=" font-semibold text-gray-800 leading-none group-hover/item:text-primary transition-colors duration-200">
                          {s.name}
                        </span>
                        {s.tag && (
                          <span className="text-[9.5px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-primary/10 text-primary leading-none">
                            {s.tag}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-400 leading-snug">
                        {s.desc}
                      </span>
                    </div>
                    <ArrowRight
                      size={13}
                      strokeWidth={2}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 text-primary transition-all duration-200 ${
                        hovered === s.name
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-1"
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => (
  <motion.li
    animate={{
      left: position.left,
      width: position.width,
      opacity: position.opacity,
    }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    className="absolute z-0 h-7 rounded-full shadow-[0px_0px_4px_.1px_rgba(0,0,0,.4)] border border-black/20 bg-primary md:h-12"
  />
);

export default Menu;
