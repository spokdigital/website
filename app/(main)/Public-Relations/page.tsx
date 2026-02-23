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
import { ArrowUpRight, Plus } from "@phosphor-icons/react";
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

  const mediaRelationsServices = [
    {
      category: "Media Relations",
      description:
        "Our Media Relations services are designed to position your brand at the forefront of your industry. We craft engaging and newsworthy press releases that highlight your brand’s key moments, ensuring your story stands out in a crowded media landscape. By building and nurturing strong relationships with journalists, bloggers, and influencers, we ensure your brand’s narrative reaches the right audience. In challenging times, our crisis communication experts act swiftly to protect your reputation, providing strategic guidance to address issues, control the narrative, and maintain public trust.",
      services: [
        {
          name: "Press Releases",
          description:
            "We craft engaging and newsworthy press releases that highlight your brand’s key moments. Each press release is carefully designed to grab attention and communicate your message effectively, helping your news stand out in a crowded media landscape.",
        },
        {
          name: "Media Outreach",
          description:
            "Our team builds and nurtures strong relationships with journalists, bloggers, and influencers who matter to your industry. By connecting with the right voices, we ensure your brand’s story gets the coverage it deserves.",
        },
        {
          name: "Crisis Communication",
          description:
            "During challenging times, we act swiftly to protect your brand’s reputation. Our crisis communication experts provide strategic guidance to address issues, control the narrative, and maintain public trust.",
        },
      ],
      img: "services/Media_Relation.jpg",
    },
    {
      category: "Brand Storytelling",
      description:
        "At the heart of every successful brand is a powerful story. We help you uncover and articulate your unique narrative, transforming it into a foundation for your brand’s identity. Our team produces high-quality, compelling content, including articles, blogs, interviews, and feature stories, that inform, engage, and inspire action. Additionally, we leverage social media to amplify your brand’s voice, increasing reach, fostering community connections, and enhancing audience engagement through meaningful interactions.",
      services: [
        {
          name: "Narrative Development",
          description:
            "We help you uncover and articulate your unique brand story, transforming it into a powerful narrative that resonates with your audience. This story forms the foundation of your brand’s identity and helps you stand out in the marketplace.",
        },
        {
          name: "Content Creation",
          description:
            "Our creative team produces compelling and high-quality content tailored to your audience. From articles and blogs to interviews and feature stories, we craft content that engages, informs, and inspires action.",
        },
        {
          name: "Social Media Engagement",
          description:
            "We leverage the power of social media to amplify your brand’s voice. By creating and sharing meaningful content, we increase your reach, build community connections, and enhance audience engagement.",
        },
      ],
      img: "services/Brand Story Telling.jpeg",
    },
    {
      category: "Event PR",
      description:
        "We bring your brand to life through unforgettable events that align with your identity and objectives. From designing and executing impactful product launches, conferences, or community initiatives, to ensuring maximum visibility through targeted media outreach, we handle every aspect of your event’s PR. During events, our team provides hands-on support to manage media interactions, address challenges, and create a seamless and memorable experience that resonates with your audience.",
      services: [
        {
          name: "Event Planning",
          description:
            "We design and execute events that not only align with your brand’s identity but also leave a lasting impression. Whether it’s a product launch, conference, or community initiative, we ensure your events make an impact.",
        },
        {
          name: "Media Coverage",
          description:
            "Our targeted media outreach strategies ensure that your events receive the visibility they deserve. By securing coverage in key publications, we help you maximize your event’s reach and success.",
        },
        {
          name: "On-Site Support",
          description:
            "During your events, our team provides hands-on PR support to manage media interactions, address any challenges, and ensure a seamless experience for all participants.",
        },
      ],
      img: "services/events_pr.jpg",
    },
    {
      category: "Thought Leadership",
      description:
        "Positioning your brand as a trusted authority in your industry is at the core of our Thought Leadership services. We establish your executives as industry leaders through speaking engagements, expert commentary, and media interviews. Our team crafts insightful thought pieces, white papers, and opinion editorials that highlight your expertise. By identifying opportunities for awards and accolades, we ensure your brand gains recognition, enhancing credibility and solidifying your position as an industry innovator.",
      services: [
        {
          name: "Executive Positioning",
          description:
            "We position your leaders as respected authorities in your industry by securing speaking engagements, media interviews, and expert commentary opportunities. This establishes credibility and enhances your brand’s influence.",
        },
        {
          name: "Content Strategy",
          description:
            "Our team creates insightful thought pieces, white papers, and opinion editorials that showcase your expertise. These content assets position your brand as a trusted source of knowledge and innovation.",
        },
        {
          name: "Industry Recognition",
          description:
            "We identify opportunities for awards and accolades that highlight your achievements. By earning recognition in your field, we boost your brand’s reputation and credibility.",
        },
      ],
      img: "services/Though_Relationship.jpg",
    },
  ];
  const selfPraise = [
    {
      title: "Experience",
      description:
        "A proven track record of delivering PR success across diverse industries.",
      color: "#9feefc", // Blue
    },
    {
      title: "Personalized Approach",
      description:
        "We tailor every strategy to meet your unique goals and challenges.",
      color: "#10B981", // Green
    },
    {
      title: "Comprehensive Solutions",
      description:
        "From planning to execution, we manage every aspect of your PR needs.",
      color: "#6B21A8", // Purple
    },
    {
      title: "Results-Driven",
      description:
        "Focused on measurable outcomes that enhance your brand’s visibility and credibility.",
      color: "#F97316", // Orange
    },
  ];
  const para =
    "Public Relations and Marketing are the Art of Persuasion, Not the Art of Information";
  const selfPrasiseContainer = React.useRef<HTMLDivElement>(null);
  const boxInView = useInView(selfPrasiseContainer, { once: true });
  return (
    <motion.div className="  bg-white" ref={containerRef}>
      <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <motion.div>
        <div className="w-full h-screen overflow-hidden bg-gradient-to-tr from-blue-200 from-10% to-[#81C784] relative">
          <div className="w-full h-full flex relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <BackgroundGradientAnimation
                gradientBackgroundStart="white"
                gradientBackgroundEnd="blue"
              />
            </div>
            <div
              style={{ marginTop: `${height + 50}px` }}
              className="container relative z-[99]"
            >
              <BreadCrumb />
              <div
                style={{ height: `calc(100vh - ${height + 200}px)` }}
                className="flex relative flex-col items-center text-slate-100 justify-center"
              >
                <motion.h1 className="text-center font-[600] text-slate-100 flex-wrap text-3xl xl:text-5xl  font-Grostek relative">
                  {para.split(" ").map((item, index) => (
                    <motion.span
                      key={index}
                      className="mr-2 xl:mr-2 xxl:mr-4 overflow-hidden h-[35px] lg:h-[70px]"
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
        <motion.article className="flex container justify-center lg:justify-start items-center text-slate-950 gap-3">
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
        <div className="container mt-5 grid grid-cols-1 gap-6">
          {mediaRelationsServices.map((serviceCategory, index) => (
            <div key={index} className="bg-red-50 p-4 rounded-lg">
              <h2 className="text-2xl font-Grostek font-semibold">
                0{index + 1} {serviceCategory.category}
              </h2>
              <p className="mt-1">{serviceCategory.description}</p>
              <div className="grid grid-cols-1 mt-5 lg:grid-cols-2 gap-3">
                <ul className="flex flex-col gap-3">
                  {serviceCategory.services.map((service, idx) => (
                    <li key={idx} className="bg-red-100 p-3 rounded-lg">
                      <h3 className="text-xl font-semibold">{service.name}</h3>
                      <p>{service.description}</p>
                    </li>
                  ))}
                </ul>
                <div className="w-full bg-purple-300 lg:h-[500px] min-h-[300px]">
                  <img
                    src={serviceCategory.img}
                    className="w-full h-full object-cover"
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
            {["Why", "Choose", "us?"].map((text, index) => (
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
