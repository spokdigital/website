"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const Page = () => {
  const name = <span className="text-sky-500 font-Telma">Eva Murphy !</span>;
  return (
    <div className=" font-Satoshi text-xl ">
      <p>Hello {name}</p>
      <div className=" grid xl:grid-cols-2 xxl:grid-cols-3 gap-20 mt-4">
        <BlogsCard />
        <QueryCard />
      </div>
    </div>
  );
};

export default Page;

const BlogsCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const getBlogs = (data) => {
    if (true) {
      setIsLoading(true);
      axios.get("https://admin.yatriclubs.com/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      axios
        .get(`https://admin.yatriclubs.com/api/blog`, { withCredentials: true })
        .then((res) => {
          setBlogs(res.data);
          setStatus("success");
          setIsLoading(false);
        })
        .catch((error) => {
          setStatus("failed");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <Link href="/admin/blogs">
      <div className="w-full flex items-center justify-around gap-6 rounded-xl bg-slate-100 hover:bg-orange-100 transition-all duration-300 cursor-pointer px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="size-32">
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-blog-3d-icon-download-in-png-blend-fbx-gltf-file-formats--social-media-logo-pack-logos-icons-8264007.png" />
          </div>
        </div>
        <div className=" mt-2">
          <p className="font-Satoshi text-3xl font-medium">Blogs</p>
          <p className="font-Satoshi font-bold text-4xl mt-6">
            {blogs.length < 10 ? `0` + blogs.length : blogs.length}
          </p>
        </div>
      </div>
    </Link>
  );
};

const QueryCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const serverURL = "https://admin.yatriclubs.com/";
  const [querys, setQueries] = useState([]);
  const [unread, setUnread] = useState(0);
  const getQueries = () => {
    setIsLoading(true);
    axios.get(`${serverURL}sanctum/csrf-cookie`, { withCredentials: true });
    axios
      .get(`${serverURL}api/query`, { withCredentials: true })
      .then((res) => {
        setQueries(res.data);
        setStatus("success");
      })
      .catch((error) => {
        console.error(error);
        setStatus("failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getQueries();
  }, []);
  useEffect(() => {
    let sum = 0;
    if (querys) {
      for (let i = 0; i < querys.length; i++) {
        if (querys[i].is_read == "1") sum++;
      }
    }

    setUnread(sum);
  }, [querys]);
  return (
    <div className="w-full flex items-start justify-around gap-2 rounded-xl bg-slate-100 hover:bg-blue-100 transition-all duration-300 cursor-pointer px-5 py-4">
      <div className="flex items-center gap-3">
        <div className="size-32">
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/questions-3d-icon-download-in-png-blend-fbx-gltf-file-formats--inquiry-curiosity-interrogation-query-ask-customer-service-pack-services-icons-8550616.png" />
        </div>
      </div>
      <div className=" ">
        <p className="font-Satoshi text-3xl font-medium">Queries</p>
        <p className="font-Satoshi font-bold underline hover:text-blue-500 text-xl mt-4">
          Total:{" "}
          <span>
            {querys.length < 10 ? `0` + querys.length : querys.length}
          </span>
        </p>
        <p className="font-Satoshi underline font-bold text-xl mt-2 hover:text-blue-500">
          Unread: <span>{unread}</span>{" "}
        </p>
      </div>
    </div>
  );
};
