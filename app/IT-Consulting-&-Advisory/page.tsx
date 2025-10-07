"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import BreadCrumb from "../App chunks/components/BreadCrumb";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "../App chunks/components/Accordion";
import { BackgroundGradientAnimation } from "../App chunks/components/HeroGradient";
import { Circle, Plus } from "@phosphor-icons/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import SliderForm from "../App chunks/components/SliderForm";
import Link from "next/link";
const Page = () => {
  const [height, setHeight] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  React.useEffect(() => {
    const rect = document
      .getElementsByClassName("HeadNavigation")[0]
      .getBoundingClientRect();
    setHeight(rect.height);
  }, []);
  const faqData = [
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries, including healthcare, finance, retail, manufacturing, and more. Our expertise allows us to customize solutions to meet the specific needs of your sector.",
    },
    {
      question:
        "How do you ensure your solutions align with our business goals?",
      answer:
        "Our approach is collaborative. We take the time to understand your business objectives, challenges, and opportunities before developing customized recommendations.",
    },
    {
      question: "What size businesses do you work with?",
      answer:
        "We work with businesses of all sizes, from startups to large enterprises. Our scalable solutions ensure we can meet your needs regardless of your company’s size.",
    },
    {
      question: "What is the typical timeline for implementing your solutions?",
      answer:
        "Timelines vary based on the scope and complexity of the project. During our initial consultation, we provide a detailed project plan with clear milestones and timelines.",
    },
    {
      question: "How do you ensure data security during your projects?",
      answer:
        "Data security is a top priority. We follow industry best practices, use secure tools, and implement robust risk management strategies to protect your sensitive information.",
    },
  ];

  const services = [
    {
      category: "Digital Transformation Consultancy",
      description:
        "Helping businesses optimize and integrate advanced technologies to improve productivity and operational efficiency.",
      subcategories: [
        {
          type: "Assessment",
          description:
            "Evaluate your current technology infrastructure, workflows, and business processes to identify gaps and opportunities for improvement.",
        },
        {
          type: "Roadmap",
          description:
            "Design a comprehensive plan that integrates advanced technologies, optimizes operations, and aligns with your strategic objectives.",
        },
        {
          type: "Implementation Support",
          description:
            "Facilitate the seamless deployment of tools, technologies, and processes to enhance productivity and operational efficiency.",
        },
        {
          type: "Change Management",
          description:
            "Provide training and support to ensure your team adapts smoothly to new systems and practices.",
        },
      ],
      img: "services/Digital Transformation.jpg",
    },
    {
      category: "Cloud Consulting",
      description:
        "Support for cloud adoption, optimization, and ongoing management, ensuring your cloud strategy aligns with business goals.",
      subcategories: [
        {
          type: "Cloud Readiness Assessment",
          description:
            "Analyze your current IT landscape to determine suitability for cloud adoption.",
        },
        {
          type: "Migration Planning",
          description:
            "Develop secure and efficient strategies for moving data, applications, and systems to cloud platforms.",
        },
        {
          type: "Multi-Cloud Solutions",
          description:
            "Assist in leveraging multiple cloud providers to optimize performance and cost-efficiency.",
        },
        {
          type: "Cloud Optimization",
          description:
            "Regularly review and adjust configurations to ensure optimal use of cloud resources.",
        },
        {
          type: "Security & Compliance",
          description:
            "Ensure your cloud environment adheres to industry regulations and standards, safeguarding sensitive data.",
        },
      ],
      img: "services/cloud-consultants.webp",
    },
    {
      category: "Cybersecurity Solutions",
      description:
        "Protecting your business from threats with tailored cybersecurity services, risk management, and ongoing monitoring.",
      subcategories: [
        {
          type: "Risk Assessment",
          description:
            "Identify vulnerabilities in your IT systems, applications, and networks.",
        },
        {
          type: "Security Framework Development",
          description:
            "Build scalable security frameworks customized for your business.",
        },
        {
          type: "Incident Response",
          description:
            "Provide rapid support to address and mitigate security breaches.",
        },
        {
          type: "Ongoing Monitoring",
          description:
            "Implement advanced threat detection and response systems to continuously protect your infrastructure.",
        },
        {
          type: "Compliance Management",
          description:
            "Ensure adherence to regulations like GDPR, HIPAA, and ISO standards.",
        },
      ],
      img: "https://media.githubusercontent.com/media/frontendmakaidigitals/Spok Digital/refs/heads/main/public/services/Cyber&ITSecurity.png",
    },
    {
      category: "IT Infrastructure Optimization",
      description:
        "Optimizing your IT systems to maximize performance, reduce downtime, and align with modern business needs.",
      subcategories: [
        {
          type: "System Integration",
          description:
            "Unify disparate systems to create cohesive workflows and improve operational efficiency.",
        },
        {
          type: "Infrastructure Modernization",
          description:
            "Upgrade legacy systems to align with modern business needs.",
        },
        {
          type: "Performance Enhancement",
          description:
            "Optimize IT hardware, software, and network components to reduce downtime and improve productivity.",
        },
        {
          type: "Cost Management",
          description:
            "Identify and eliminate inefficiencies to lower operational expenses.",
        },
        {
          type: "Sustainable IT Practices",
          description:
            "Incorporate eco-friendly solutions to reduce your carbon footprint while maintaining efficiency.",
        },
      ],
      img: "services/IT-Infrastructure.jpg",
    },
    {
      category: "Data Analytics & Business Intelligence",
      description:
        "Leveraging data to gain insights, forecast trends, and support decision-making with advanced analytics and visualization tools.",
      subcategories: [
        {
          type: "Data Strategy Development",
          description:
            "Create systems for collecting, managing, and analyzing data effectively.",
        },
        {
          type: "Predictive Analytics",
          description:
            "Use advanced analytics tools to forecast trends and support decision-making.",
        },
        {
          type: "Real-Time Insights",
          description:
            "Implement solutions that provide immediate visibility into business operations and performance.",
        },
        {
          type: "Visualization Tools",
          description:
            "Utilize dashboards and visualization platforms to make data more accessible and actionable.",
        },
        {
          type: "Data Governance",
          description:
            "Ensure data accuracy, security, and compliance with regulatory requirements.",
        },
      ],
      img: "services/Data_Analytics.jpeg",
    },
    {
      category: "CCTV Installation Services",
      description:
        "Providing tailored CCTV solutions for enhanced security, from site assessment to remote monitoring.",
      subcategories: [
        {
          type: "Site Assessment",
          description:
            "Evaluate your premises to determine the optimal placement of cameras for maximum coverage.",
        },
        {
          type: "Customized Solutions",
          description:
            "Design CCTV systems tailored to your specific security needs and budget.",
        },
        {
          type: "Professional Installation",
          description:
            "Ensure reliable setup and integration of CCTV equipment with existing systems.",
        },
        {
          type: "Maintenance & Support",
          description:
            "Provide ongoing support, including troubleshooting, repairs, and upgrades.",
        },
        {
          type: "Remote Monitoring",
          description:
            "Enable real-time monitoring through secure online access for enhanced peace of mind.",
        },
      ],
      img: "services/CCTV_installation.webp",
    },
  ];

  const para = "Unlock the Full Potential of Your Business with IT Consulting";
  const selfPrasiseContainer = React.useRef<HTMLDivElement>(null);
  const boxInView = useInView(selfPrasiseContainer, { once: true });
  const selfPraise = [
    {
      title: "Retail & E-commerce",
      description:
        "Streamline operations, enhance customer experiences, and drive sales growth.",
      color: "#D97706", // Orange
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Enable secure, efficient patient data management and innovative solutions for care delivery.",
      color: "#4ADE80", // Green
    },
    {
      title: "Financial Services",
      description:
        "Improve data security, optimize digital banking services, and meet regulatory standards.",
      color: "#3B82F6", // Blue
    },
    {
      title: "Manufacturing & Supply Chain",
      description:
        "Enhance efficiency, predict maintenance needs, and optimize logistics.",
      color: "#9333EA", // Purple
    },
    {
      title: "Technology & Startups",
      description:
        "Scale IT systems, secure funding with tech roadmaps, and foster innovation.",
      color: "#F59E0B", // Yellow
    },
  ];
  return (
    <motion.div className="  bg-white" ref={containerRef}>
      <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <motion.div>
        <div className="w-full h-screen overflow-hidden bg-gradient-to-tr from-blue-200 from-10% to-[#81C784] relative">
          <div className="w-full h-full flex relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <BackgroundGradientAnimation
                gradientBackgroundStart="silver"
                gradientBackgroundEnd="purple"
              />
            </div>
            <div
              style={{ marginTop: `${height + 50}px` }}
              className="container relative z-[99]"
            >
              <BreadCrumb />
              <div
                style={{ height: `calc(100vh - ${height + 200}px)` }}
                className="flex flex-col container items-center text-slate-100 justify-center"
              >
                <motion.h1 className="text-center font-[600] text-slate-100 flex-wrap text-3xl xl:text-6xl  font-Grostek relative">
                  {para.split(" ").map((item, index) => (
                    <motion.span
                      key={index}
                      className="mr-2 xl:mr-2 xxl:mr-5 overflow-hidden h-[35px] lg:h-[70px]"
                      style={{
                        display: "inline-block", // Ensure words are treated as block elements
                      }}
                    >
                      <motion.span
                        initial={{ y: 300, opacity: 0, rotate: 20, x: -10 }} // Start from below
                        animate={{
                          y: 0, // Move to original position
                          opacity: 1,
                          rotate: 0,
                          x: 0,
                        }}
                        style={{
                          display: "inline-block", // Ensure words are treated as block elements
                        }}
                        transition={{
                          ease: [0, 0, 0.2, 1],
                          duration: 1,
                          delay: index * 0.1, // Increased delay to prevent overlap
                        }}
                        className="origin-top-right"
                      >
                        {item}
                      </motion.span>
                      {"  "}
                    </motion.span>
                  ))}
                </motion.h1>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="group relative h-12 rounded-full bg-black px-5 font-Synonym font-[500]  text-neutral-50"
                >
                  <span className="relative inline-flex overflow-hidden">
                    <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[130%] group-hover:skew-y-12 flex items-center gap-2">
                      Get Expert Help <ArrowUpRight />
                    </div>
                    <div className="absolute  translate-y-[134%] flex items-center gap-2 skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      Get Expert Help <ArrowUpRight />
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="my-20">
        <div className="container">
          <motion.article className="flex justify-center lg:justify-start items-center text-slate-950 gap-3">
            {["Our", "Services"].map((text, index) => (
              <motion.h1
                key={index}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight break-words"
              >
                {text}
              </motion.h1>
            ))}
          </motion.article>
        </div>
        <div className="container grid grid-col-1 gap-6 mt-5">
          {services.map((service, index) => (
            <div key={index} className=" p-6 rounded-lg bg-red-50">
              <h2 className="text-2xl font-bold">{service.category}</h2>

              <div className="grid grid-cols-1 mt-6 lg:grid-cols-2 gap-3">
                <div className="grid grid-cols-1  gap-3">
                  {service.subcategories.map((subcategory, subIndex) => (
                    <div key={subIndex} className="bg-red-100  rounded-lg p-4 ">
                      <div className="flex items-start gap-2">
                        <div className="mt-[6px]">
                          <Circle weight="fill" />
                        </div>
                        <h3 className="text-xl font-semibold">
                          {subcategory.type}
                        </h3>
                      </div>
                      <p className="text-gray-600">{subcategory.description}</p>
                    </div>
                  ))}
                </div>
                <div className="h-[300px] lg:h-[500px] bg-purple-300">
                  <img
                    className="w-full h-full object-cover"
                    src={service.img}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={selfPrasiseContainer} className="w-full py-12 overflow-hidden">
        <div className="container ">
          <motion.article className="flex justify-center lg:justify-start items-center text-black gap-3">
            {["Industries", "We", "Serve"].map((text, index) => (
              <motion.h1
                key={index}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight break-words"
              >
                {text}
              </motion.h1>
            ))}
          </motion.article>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10 !text-red-50">
            {selfPraise.map((item, index) => (
              <motion.div
                animate={{
                  x: boxInView ? "0%" : "100%",
                  y: boxInView ? "0%" : "70%",
                }}
                transition={{ duration: 1.5, ease: [0.175, 0.885, 0.32, 1] }}
                key={index}
                className=" text-slate-950 bg-slate-200 rounded-lg p-5"
              >
                <h2 className="text-2xl pr-10 capitalize font-SplineSans font-[500]">
                  {item.title}
                </h2>
                <p className="mt-3 text-lg font-Grostek">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-[#121316]">
        <div className="container">
          <div>
            {" "}
            <motion.article className="flex justify-center lg:justify-start items-center gap-3 mx-auto z-[50] flex-wrap">
              {["Frequently", "Asked", "Questions"].map((text, index) => (
                <motion.h1
                  key={index}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className={`text-5xl lg:text-6xl leading-[100%] text-red-100 font-Grostek font-[600] tracking-tight ${
                    text.toLowerCase() === "supercharged" &&
                    "bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent"
                  }`}
                >
                  {text}
                </motion.h1>
              ))}
            </motion.article>
          </div>
          <div className="mt-10 grid gap-x-12 grid-cols-1 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-slate-400 text-md font-Grostek">
                Can&apos;t find what you are looking for?
              </p>
              <h3 className="text-slate-100 text-2xl font-Grostek font-[500]">
                We would like to chat with you.
              </h3>
              <div className="mt-3">
                <Link href={"/contact"}>
                  <button className="text-slate-950 px-5 rounded-full font-Grostek font-[500] py-2 bg-slate-200 hover:bg-slate-100">
                    Contact us
                  </button>
                </Link>
              </div>
            </div>
            <div className="mt-5">
              <Accordion defaultValue={["item-0"]}>
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionHeader icon={<Plus className="text-xl" />}>
                      {faq.question}
                    </AccordionHeader>
                    <AccordionPanel>{faq.answer}</AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20  ">
        <div className="container rounded-lg border border-red-200 shadow max-w-5xl py-20 relative overflow-hidden">
          <div className="absolute inset-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 800 800"
            >
              <defs>
                <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
                  <stop
                    offset="15%"
                    stopColor="#c95567"
                    stopOpacity="0.5"
                  ></stop>
                  <stop
                    offset="75%"
                    stopColor="hsl(352, 100%, 76%)"
                    stopOpacity="1"
                  ></stop>
                  <stop
                    offset="100%"
                    stopColor="#ffeaf8"
                    stopOpacity="1"
                  ></stop>
                </radialGradient>
              </defs>
              <g fill="url(#cccircular-grad)">
                <circle r="672" cx="400" cy="400" opacity="0.05"></circle>
                <circle r="560" cx="400" cy="400" opacity="0.24"></circle>
                <circle r="448" cx="400" cy="400" opacity="0.43"></circle>
                <circle r="336" cx="400" cy="400" opacity="0.62"></circle>
                <circle r="224" cx="400" cy="400" opacity="0.81"></circle>
              </g>
            </svg>
          </div>
          <div className="relative z-10">
            <h1 className="text-3xl font-[600] font-Grostek text-center lg:text-5xl">
              Partner with Us
            </h1>
            <p className="text-center mt-2">
              Let us be your trusted IT partner, helping you navigate the
              complexities of the digital world. Together, we’ll drive
              innovation, optimize your operations, and achieve transformational
              success.
            </p>
            <div className="flex justify-center items-center gap-5 mt-5">
              <a
                href={"https://calendly.com/spokdigital/30min"}
                className="bg-black px-4 py-[.4rem] rounded-lg text-slate-50"
              >
                {" "}
                Book a Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Page;
