"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const nav = document.getElementsByClassName("HeadNavigation")[0];
    if (nav) setNavHeight(nav.clientHeight);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-5 text-center">
      {/* Spacer for navbar */}
      <div style={{ height: `${navHeight}px` }} />

      {/* Main Content */}
      <div className="max-w-2xl flex flex-col items-center gap-6">
        <h1 className="text-5xl lg:text-7xl font-Grostek font-semibold">
          🚧 We’re Developing
        </h1>

        <p className="text-lg text-slate-600">
          Our blog section is currently under development. We’re working hard to
          bring you high-quality content very soon.
        </p>

        <div className="text-sm text-slate-500">Stay tuned 👀</div>

        {/* Optional button */}
        <a
          href="/"
          className="mt-4 px-6 py-3 bg-black text-white rounded-lg hover:opacity-80 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Page;
