"use client";

import { usePathname } from "next/navigation";
import {
  UserCircle,
  SignOut,
  TextB,
  Ranking,
  TrendUp,
} from "@phosphor-icons/react";
import Link from "next/link";
import Logo from "../App chunks/components/Logo";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  return (
    <div className="w-full flex justify-end">
      <Sidebar path={path} />
      <div
        style={{ width: "calc(100% - 250px)" }}
        className="w-full p-5 relative"
      >
        <div className="w-full">
          <Navbar path={path} />
        </div>
        {children}
      </div>
    </div>
  );
}

const Navbar = ({ path }) => {
  const img =
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="w-full flex justify-between items-center">
      <p className="font-Satoshi text-4xl font-bold capitalize">{path}</p>
      <div className="flex items-center rounded-xl hover:bg-gray-200 px-5 cursor-pointer py-2 transition-all duration-200 gap-2">
        <div className="size-10 overflow-hidden flex justify-center items-center bg-gray-100 rounded-full">
          {img ? (
            <img
              src={img}
              className="object-cover w-full h-full object-right"
            />
          ) : (
            <UserCircle className="text-2xl" />
          )}
        </div>
        <p className="font-Satoshi font-medium">Spok Digital</p>
      </div>
    </div>
  );
};

const Sidebar = ({ path }) => {
  const menus = [
    {
      name: "Dashboard",
      icon: <Ranking />,
      link: "/admin/dashboard",
    },
    {
      name: "Blogs",
      icon: <TextB />,
      link: "/admin/blogs",
    },

    {
      name: "Queries",
      icon: <TrendUp />,
      link: "/admin/queries",
    },
  ];

  return (
    <div className="h-screen fixed z-[999] top-0 py-5 left-0 w-[250px] bg-black overflow-hidden">
      <div className="px-10 mt-4">
        <div className="flex xl:text-lg xxl:text-xl items-center gap-1">
          <Logo source="/Logo-white.png" className="!w-32" />
        </div>
      </div>
      <div className="mt-10">
        {menus.map((menu, index) => (
          <Link
            href={menu.link}
            key={index}
            className={`flex relative px-10 hover:bg-blue-200 hover:text-gray-950 items-center font-Satoshi transiton-all duration-300 gap-3 py-3 ${
              path?.toLowerCase() === menu.name.toLowerCase()
                ? "text-sky-200 font-bold-bold"
                : "font-semibold text-gray-100"
            }`}
          >
            {path?.toLowerCase() === menu.name.toLowerCase() ? (
              <div className="w-1 absolute h-1/2 top-1/2 -translate-y-1/2 left-0 bg-sky-200"></div>
            ) : null}

            <div className="xl:text-xl xxl:text-2xl">{menu.icon}</div>
            <p className="font-Satoshi xl:text-sm xxl:text-lg font-[500]">
              {menu.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="px-10 absolute bottom-0 transiton-all py-5 duration-300 left-0 flex w-full items-center hover:bg-red-400 gap-3 hover:text-gray-900 text-gray-100">
        <SignOut className="xl:text-2xl xxl:text-4xl rotate-180" />
        <p className="font-Satoshi xl:text-sm xxl:text-md font-[500]">Logout</p>
      </div>
    </div>
  );
};
