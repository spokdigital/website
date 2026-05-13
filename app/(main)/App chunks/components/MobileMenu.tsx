"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "./Accordion";
import { serviceItems } from "./Menu";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const menu = [
  { title: "Home", link: "/" },

  { title: "Services", isServices: true },
  { title: "D2C Growth", link: "/d2c" },
  { title: "Business Accelerator", link: "/website-landing" },
  { title: "Blog", link: "/blogs" },
  { title: "Portfolio", link: "/Portfolio" },
  { title: "Contact", link: "/contact" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const path = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const el = document.querySelector(".HeadNavigation");
    if (el) setNavHeight(el.clientHeight);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <div className="block lg:hidden">
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[998] bg-white"
            style={{ paddingTop: navHeight }}
          >
            {/* Subtle top border accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />

            <div
              className="h-full overflow-y-auto px-6 pt-8 pb-16 flex flex-col"
              style={{ height: `calc(100vh - ${navHeight}px)` }}
            >
              {/* Nav items */}
              <nav className="flex flex-col divide-y divide-gray-100">
                {menu.map((item, i) => {
                  if (item.isServices) {
                    return (
                      <Accordion key={i} multiple>
                        <AccordionItem value="services">
                          <AccordionHeader className="!px-0 !py-5">
                            <motion.span
                              initial={{ opacity: 0, x: -16 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.06, duration: 0.3 }}
                              className="text-2xl font-semibold text-gray-900 font-Grostek flex items-center justify-between w-full"
                            >
                              {item.title}

                              <ChevronDown />
                            </motion.span>
                          </AccordionHeader>
                          <AccordionPanel>
                            <div className="grid grid-cols-1 gap-y-4 pb-5 pl-1">
                              {serviceItems.map(
                                (
                                  s: {
                                    href: string;
                                    name: string;
                                    icon: any;
                                    desc: string;
                                    tag: string | null;
                                  },
                                  si: number,
                                ) => (
                                  <Link
                                    href={s.href}
                                    className="text-gray-800 text-md"
                                  >
                                    {s.name}
                                  </Link>
                                ),
                              )}
                            </div>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    );
                  }

                  return (
                    <Link
                      key={i}
                      href={item.link!}
                      onClick={close}
                      className="py-5 block"
                    >
                      <motion.span
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.3 }}
                        className={`text-2xl font-semibold font-Grostek transition-colors ${
                          path === item.link ? "text-primary" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </motion.span>
                    </Link>
                  );
                })}
              </nav>

              {/* Bottom CTA */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <HamburgerIcon isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default MobileMenu;

interface HamburgerIconProps {
  isOpen: boolean;
  toggle: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="relative z-[99999] flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
    >
      <motion.span
        animate={isOpen ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.22, ease: "easeInOut" }}
        className="block w-[22px] h-[1.5px] bg-gray-900 rounded-full origin-center"
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.15 }}
        className="block w-[22px] h-[1.5px] bg-gray-900 rounded-full"
      />
      <motion.span
        animate={isOpen ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.22, ease: "easeInOut" }}
        className="block w-[22px] h-[1.5px] bg-gray-900 rounded-full origin-center"
      />
    </button>
  );
};
