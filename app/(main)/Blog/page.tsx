"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [NavHeight, setNavheight] = useState(0);
  useEffect(() => {
    setNavheight(
      document.getElementsByClassName("HeadNavigation")[0].clientHeight
    );
  }, []);
  return (
    <div className="container">
      <div style={{ height: `${NavHeight}px` }}></div>
      <div className="flex mt-10 justify-center items-center text-sm gap-5">
        <p className="px-3 py-[.6rem] rounded-full  bg-lime-50 text-lime-950">
          Popular Articles
        </p>
        <p>01 Feb 2025</p>
      </div>

      <div className="max-w-7xl w-full">
        <h1 className="text-4xl lg:text-6xl w-full mt-10 text-center font-Grostek font-[600]">
          Best Strategy to Achieve Profitable Harvest
        </h1>
        <p className="text-center text-md lg:text-lg mt-3 w-full">
          our ultimate guide to modern web development—master Next.js, Tailwind
          CSS, and Framer Motion with tips, tutorials, and inspiration.
        </p>
      </div>

      <div className="w-full aspect-video lg:aspect-[2/1] bg-green-300 mt-8"></div>
      <div className="mt-5">
        Blog Content
      </div>

      <div>
        <h2 className="text-4xl mt-10 font-Grostek font-[600]">
        Popular Blogs
        </h2>
      </div>

      <div className="mt-7 mb-20 w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-5 gap-4">
          <Articles />
          <Articles />
          <Articles />
          <Articles />
          <Articles />
        </div>
    </div>
  );
};

export default Page


const Articles = () => {
    return (
      <div className="">
        <div className="w-full aspect-square bg-red-300"></div>
        <p className="text-sm mt-1">02 Feb 2025</p>
        <h4 className="text-[1.5rem] leading-2 mt-1">Heading</h4>
        <p className="text-md leading-3 mt-1">Description</p>
       
      </div>
    );
  };
  