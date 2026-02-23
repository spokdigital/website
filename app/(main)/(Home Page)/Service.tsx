"use client";
import { Minus } from "lucide-react";
import React from "react";

const Service = () => {
  const serviceData = [
    {
      title: "Branding",
      desc: "Craft an identity that speaks louder than words. From logo design to full-scale brand systems, we create brand identities that resonate, inspire, and stick. Whether you’re a startup looking to make a mark or an established business ready to evolve, our branding team ensures your story is told with impact.",
      lists: [
        "Brand Identity & Guidelines",
        "Business Presentations",
        "Photography & Videography",
        "UI/UX development",
        "3D Modelling",
      ],
    },
    {
      title: "Website Development",
      desc: "Websites that don’t just look good—they convert. We design and develop user-centric, high-performing websites and web apps tailored to your business goals. Our websites are optimized for speed, scalability, and search, ensuring your digital presence works as hard as you do.",
      lists: [
        "Landing Pages",
        "Corporate websites",
        "E-commerce websites",
        "Portal website",
      ],
    },
    {
      title: "Content Creation",
      desc: "Content that cuts through the noise. From cinematic brand videos to scroll-stopping social media content, our creative team produces visuals and stories that grab attention and drive engagement.",
      lists: [
        "Brand Videos",
        "Product Photography",
        "Social Media Content",
        "Motion Graphics",
      ],
    },
    {
      title: "Marketing",
      desc: "Data-driven growth strategies that deliver ROI. We craft integrated marketing campaigns powered by data and creativity. Whether it’s search, social, or email, we help you attract, engage, and convert customers at scale.",
      lists: [
        "SEO Optimization",
        "Social Media Marketing (SMM)",
        "Strategic Marketing & Campaign Management",
        "Performance Marketing (PPC & Paid Ads)",
        "Reputation Management",
        "Email Marketing",
      ],
    },
  ];
  return (
    <div className="py-16">
      <div className="container">
        <h1 className=" text-4xl text-[#590000] mb-4 lg:mb-8 lg:text-5xl font-Grostek font-[600]">
          Our Services
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceData.map((service, idx) => (
            <div
              key={idx}
              className={`bg-[hsl(0,70%,92%)] rounded-lg relative border border-red-200/20 shadow-sm p-5 ${
                idx === 1 || idx === 2 ? "lg:col-span-2" : ""
              }`}
            >
              <h2 className="text-xl font-[600] font-Synonym mb-4">
                {service.title}
              </h2>

              <p className="block lg:hidden">{service.desc}</p>
              {idx == 1 ? (
                <div className="w-full mt-12 lg:mt-0 lg:w-[70%] overflow-hidden lg:absolute top-0 right-0 lg:h-full flex justify-between  items-end lg:items-end lg:gap-3">
                  <img
                    src="/servicesMedia/mobile.png"
                    alt="mobile"
                    className="h-[200px] lg:h-[60%]  w-auto  object-contain"
                  />
                  <img
                    src="/servicesMedia/tab.png"
                    alt="tab"
                    className="h-[250px] lg:h-[70%]  w-auto  object-contain"
                  />
                  <img
                    src="/servicesMedia/laptop.png"
                    alt="laptop"
                    className=" h-[90%] hidden  lg:block w-auto  object-contain"
                  />
                </div>
              ) : null}
              {idx == 2 ? (
                <div className="w-full mt-10 lg:mt-0 lg:w-[80%] block lg:h-full lg:absolute top-0 right-0">
                  <img
                    src={"/servicesMedia/RE.png"}
                    className="w-full h-full object-cover"
                    alt={""}
                  />
                </div>
              ) : null}
              <ul className="space-y-2 hidden lg:block">
                {service.lists.map((item, index) => (
                  <li
                    key={index}
                    className="text-red-900 flex items-center gap-2"
                  >
                    <Minus /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
