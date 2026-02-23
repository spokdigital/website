"use client";
import { useEffect, useState } from "react";
import React from "react";
import { X, Eye } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const topics = [
  "Digital Age",
  "Transformation & Growth",
  "Data & AI",
  "Marketing & Advertising",
  "Technology",
  "Web & App Development",
  "Industrial Innovations",
  "Marketing & Strategy",
];

const services = [
  "Data Analytics",
  "Generative AI",
  "Cloud Transformation",
  "Mobile App Development",
  "Web Development",
  "Digital Marketing",
];
const industries = [
  "Health care",
  "Finance",
  "Technology",
  "Media and Communications",
  "Transport and Logistics",
  "Educations and Learning",
  "Retail and E-commerce",
  "Manufacturing and Distribution",
  "Resource and Wealth",
];
const priorityOptions = ["1", "2", "3", "4", "Default"];
const EditorComp = dynamic(
  () => import("@/app/App chunks/components/MDXEditor"),
  {
    ssr: false,
  }
);
const Page = ({ params }) => {
 
  const id = params.id[0];
  return (
    <div className="relative">
      <p className="mt-6 font-Satoshi font-medium text-2xl">Edit Blog</p>
      <div className="mt-4 w-full ">
        <Blogform id={id} EditorComp={EditorComp} />
      </div>
    </div>
  );
};

export default Page;

const Blogform = ({ id, EditorComp }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    tags: [],
    image: null,
    selectedTopic: "",
    selectedService: "",
    selectedIndustry: "",
    selectedPriority: "Default",
    blogDetail: "",
    imageOpen: false,
    inputValue: "",
    metaDescription: "",
    focusKeyword: "",
    url:''
  });

  // Handle Image Upload
  const handleImageChange = useCallback((event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFormData((prevState) => ({
        ...prevState,
        image: files,
      }));
    }
  }, []);

  // Fetch blog data by ID and update formData
  const fetchBlogById = useCallback(async () => {
    if (!id) return; // Exit if no blogId is provided

    try {
      const response = await axios.get(`/api/blogs/${id}`);
      const blogData = response.data;

      // Update formData with fetched blog data
      setFormData((prevState) => ({
        ...prevState,
        title: blogData.title,
        tags: blogData.tags,
        image: blogData.image,
        selectedTopic: blogData.selectedTopic,
        selectedService: blogData.selectedService,
        selectedIndustry: blogData.selectedIndustry,
        selectedPriority: blogData.selectedPriority,
        blogDetail: blogData.blogDetail,
        metaDescription: blogData.metaDescription,
        focusKeyword: blogData.focusKeyword,
        url: blogData.url,
      }));
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  }, [id]);

  // Fetch blog data when component mounts or blogId changes
  useEffect(() => {
    fetchBlogById();
  }, [fetchBlogById]);

  // Handle Tags Input
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && formData.inputValue.trim() !== "") {
      e.preventDefault();
      setFormData((prevState) => ({
        ...prevState,
        tags: [...prevState.tags, formData.inputValue.trim()],
        inputValue: "",
      }));
    }
  };

  const deleteTag = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      tags: prevState.tags.filter((_, idx) => idx !== index),
    }));
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send formData to API
    try {
      const response = await axios.post("/api/blogs", formData);
      if (response.status === 200) {
        router.push("/blogs"); // Redirect after successful submission
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };


  return (
    <>
     return (
    <form className="w-full relative" onSubmit={handleSubmit}>
      {/* Image Preview Modal */}
      {formData.imageOpen && (
        <div className="w-full h-screen max-h-screen fixed bg-gray-800/20 p-10 top-0 flex justify-center items-center left-0 z-[9999]">
          <X
            onClick={() =>
              setFormData((prevState) => ({ ...prevState, imageOpen: false }))
            }
            className="text-4xl absolute p-1 top-4 right-4 bg-black rounded-md cursor-pointer hover:bg-red-500 text-gray-50"
          />
          <div className="h-full">
            <img
              src={URL.createObjectURL(formData.image[0])}
              className="h-full"
              alt="Preview"
            />
          </div>
        </div>
      )}

      {/* Blog Title */}
      <div className="flex w-full gap-10 items-center mt-6">
        <div className="w-full">
          <p className="font-Satoshi font-medium">Blog Title</p>
          <input
            placeholder="Title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
            className="px-3 w-full py-2 block mt-1 bg-transparent border border-gray-600 placeholder:text-gray-400 rounded-md"
            required
          />
        </div>
        <div className="w-full">
          <p className="font-Satoshi font-medium">Meta Desciription</p>
          <input
            placeholder="Meta Desc"
            onChange={(e) =>
              setFormData({ ...formData, metaDescription: e.target.value })
            }
            value={formData.metaDescription}
            className="px-3 w-full py-2 block mt-1 bg-transparent border border-gray-600 placeholder:text-gray-400 rounded-md"
            required
          />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
        <div className="w-full">
          <p className="font-Satoshi font-medium">Focus Keyword</p>
          <input
            placeholder="Focus Keyword"
            onChange={(e) =>
              setFormData({ ...formData, focusKeyword: e.target.value })
            }
            value={formData.focusKeyword}
            className="px-3 w-full py-2 block mt-1 bg-transparent border border-gray-600 placeholder:text-gray-400 rounded-md"
            required
          />
        </div>
        <div className="w-full ">
          <p className="font-Satoshi font-medium">Url Keyword</p>
          <input
            placeholder="Url keyword"
            onChange={(e) =>
              setFormData({ ...formData, url: e.target.value })
            }
            value={formData.url}
            className="px-3 w-full py-2 block mt-1 bg-transparent border border-gray-600 placeholder:text-gray-400 rounded-md"
            required
          />
        </div>
      </div>

      {/* Image Upload */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center mt-6">
        <div className="w-full">
          <p className="font-Satoshi font-medium">
            Add Image{" "}
            <span className="text-gray-500">
              Image size should not exceed 2mb.
            </span>
          </p>
          <div className="flex w-full items-center gap-2">
            <div className="bg-transparent border border-gray-600 placeholder:text-gray-400 w-full relative flex items-center py-3 justify-between pl-3 pr-10 rounded-md">
              <div className="w-full">
                <p className="text-sm truncate font-Satoshi font-[500]">
                  {formData.image?.length > 0
                    ? formData.image[0]?.name
                    : "No image selected"}
                </p>
              </div>
              <label
                htmlFor="image"
                className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer hover:bg-sky-400 bg-sky-300 px-2 rounded-md font-Satoshi font-bold text-2xl"
              >
                +
              </label>
              <input
                className="hidden"
                id="image"
                onChange={handleImageChange}
                type="file"
                accept=".jpg, .jpeg, .png"
                required
              />
            </div>
            <div
              onClick={
                formData.image?.length > 0
                  ? () =>
                      setFormData((prevState) => ({
                        ...prevState,
                        imageOpen: true,
                      }))
                  : null
              }
              className={`p-2 rounded-md ${
                formData.image?.length > 0
                  ? "text-gray-900 hover:bg-gray-300 cursor-pointer"
                  : "text-gray-600 bg-gray-200 cursor-not-allowed"
              }`}
            >
              <Eye className={`text-xl`} />
            </div>
          </div>
        </div>

        {/* Tags Input */}
        <div className="w-full">
          <p className="font-Satoshi font-medium">Tags</p>
          <div className="relative bg-transparent border border-gray-600 placeholder:text-gray-400 rounded-md flex items-center gap-3">
            <input
              type="text"
              value={formData.inputValue}
              onKeyDown={handleKeyDown}
              onChange={(e) =>
                setFormData({ ...formData, inputValue: e.target.value })
              }
              placeholder={formData.tags.length === 0 ? "Add a tag" : ""}
              className="px-3 py-2 bg-transparent focus:outline-none"
            />
            {formData.tags.length > 0 && (
              <div className="absolute w-full gap-2 flex justify-center items-center -bottom-8 left-0">
                {formData.tags.map((tag, idx) => (
                  <button
                    onClick={() => deleteTag(idx)}
                    className="flex px-3 font-[500] py-1 justify-between items-center gap-1 rounded-lg bg-sky-200"
                    key={idx}
                  >
                    <p className="text-[.8rem]">{tag}</p>
                    <X />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dropdown Selections */}
      <div className="grid grid-cols-2 w-full gap-10 mt-6">
        <div className="w-full">
          <p className="font-Satoshi font-medium">Topic</p>
          <Select
            onValueChange={(value) =>
              setFormData((prevState) => ({
                ...prevState,
                selectedTopic: value,
              }))
            }
            value={formData.selectedTopic}
          >
            <SelectTrigger className="w-full border border-gray-700">
              <SelectValue placeholder="Select Topic" />
            </SelectTrigger>
            <SelectContent>
              {topics.map((topic, index) => (
                <SelectItem value={topic} key={index}>
                  {topic}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <p className="font-Satoshi font-medium">Service</p>
          <Select
            onValueChange={(value) =>
              setFormData((prevState) => ({
                ...prevState,
                selectedService: value,
              }))
            }
            value={formData.selectedService}
          >
            <SelectTrigger className="w-full border border-gray-700">
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service, index) => (
                <SelectItem value={service} key={index}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <p className="font-Satoshi font-medium">Industry</p>
          <Select
            onValueChange={(value) =>
              setFormData((prevState) => ({
                ...prevState,
                selectedIndustry: value,
              }))
            }
            value={formData.selectedIndustry}
          >
            <SelectTrigger className="w-full border border-gray-700">
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry, index) => (
                <SelectItem value={industry} key={index}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <p className="font-Satoshi font-medium">Priority</p>
          <Select
            onValueChange={(value) =>
              setFormData((prevState) => ({
                ...prevState,
                selectedPriority: value,
              }))
            }
            value={formData.selectedPriority}
          >
            <SelectTrigger className="w-full border border-gray-700">
              <SelectValue placeholder="Select Priority" />
            </SelectTrigger>
            <SelectContent>
              {priorityOptions.map((priority, index) => (
                <SelectItem value={priority} key={index}>
                  {priority}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Blog Description */}
      <div className="w-full mt-6">
        <p className="font-Satoshi font-medium">Description</p>
        <div className="bg-transparent border border-gray-600 rounded-md">
          <Suspense fallback={null}>
            <EditorComp
              markdown={markdown}
              onChange={(value) =>
                setFormData((prevState) => ({
                  ...prevState,
                  blogDetail: value,
                }))
              }
            />
          </Suspense>
        </div>
      </div>

      {/* Submit Button */}
      <div className="w-full mt-6">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit Blog
        </button>
      </div>
    </form>
  );
    </>
  );
};