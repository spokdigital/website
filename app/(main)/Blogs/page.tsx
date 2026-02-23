"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = () => {
  const [NavHeight, setNavheight] = useState(0);
  useEffect(() => {
    setNavheight(
      document.getElementsByClassName("HeadNavigation")[0].clientHeight
    );
  }, []);
  const [blogData, setBlogData] = useState([])
  console.log(blogData)
  const getBlogData = async () => { 
    const resp = await axios.get('/')
    setBlogData(resp.data)
  }

  useEffect(()=>{
    getBlogData()
  }, [])
  
  return (
    <div className="container">
      <div style={{ height: `${NavHeight}px` }}></div>
      <div className=" flex-col lg:flex justify-center items-center gap-5 mt-10">
        <h2 className="font-[500] text-center text-7xl font-Grostek">Blogs</h2>
        <p className="text-lg text-center">
          A blog description for some thing different line
        </p>
      </div>
      <div className="w-full grid mt-20 grid-cols-1 lg:grid-cols-2 gap-5">
        <MainBlog />
        <div className="grid mt-10 lg:mt-0 grid-cols-1 gap-4 w-full h-full place-content-start">
          <RightBlogs />
          <RightBlogs />
          <RightBlogs />
          <RightBlogs />
        </div>
      </div>
      <div className="my-20">
        <h3 className="text-5xl font-Grostek">Articles</h3>
        <div className="flex mt-7 items-center gap-4">
          <div className="p-3 bg-black text-slate-50">Text</div>
        </div>
        <div className="mt-7 w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-5 gap-x-4 gap-y-10">
          <Articles />
          <Articles />
          <Articles />
          <Articles />
          <Articles />
        </div>
      </div>
    </div>
  );
};

export default Page;

const MainBlog = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[300px] lg:h-[500px] bg-slate-200">
        <img className="w-full h-full object-cover" />
      </div>
      <div className="mt-2">
        <h3 className="text-3xl line-clamp-2">
          Unlocking the Power of Next.js: Building Modern Web Applications
        </h3>
        <p className="line-clamp-3 text-slate-600 text-md mt-1">
          Discover how to bring your web applications to life with Framer
          Motion. Learn the basics of animations, transitions, and gestures to
          create stunning user experiences.
        </p>
        <p className="text-slate-600 mt-1">01 Feb 2025</p>
      </div>
    </div>
  );
};

const RightBlogs = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[.5fr_1.5fr] gap-3">
      <div className="w-full lg:w-[150px] aspect-video lg:aspect-auto bg-slate-300">
        <img className="w-full h-full object-cover" />
      </div>
      <div className="">
        <h3 className="text-2xl font-SplineSans line-clamp-2">
          Unlocking the Power of Next.js: Building Modern Web Applications
        </h3>
        <p className="line-clamp-3">
          Discover how to bring your web applications to life with Framer
          Motion. Learn the basics of animations, transitions, and gestures to
          create stunning user experiences.
        </p>
      </div>
    </div>
  );
};

const Articles = () => {
  return (
    <div className="">
      <div className="w-full aspect-square bg-slate-200"></div>
      <p className="text-sm mt-1">02 Feb 2025</p>
      <h4 className="text-[1.5rem] leading-2 mt-1">Heading</h4>
      <p className="text-md leading-3 mt-1">Description</p>
     
    </div>
  );
};
