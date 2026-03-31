"use client";
import React from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../App chunks/components/BreadCrumb";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "../App chunks/components/Accordion";
import { BackgroundGradientAnimation } from "../App chunks/components/HeroGradient";
import { Circle, Plus } from "@phosphor-icons/react";
import SliderForm from "../App chunks/components/SliderForm";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
const Page = () => {
  const [height, setHeight] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const rect = document
      .getElementsByClassName("HeadNavigation")[0]
      .getBoundingClientRect();
    setHeight(rect.height);
  }, []);
  const faqData = [
    {
      question: "Can content marketing work for small businesses?",
      answer:
        "Yes, content marketing is highly effective for small businesses. In fact, it offers small businesses an affordable way.",
    },
    {
      question: "How often should I publish new content?",
      answer:
        "The frequency of content publishing depends on your resources and business goals. However, consistency is key.",
    },
    {
      question:
        "What is the difference between content marketing and traditional marketing?",
      answer:
        "The main difference between content marketing and traditional marketing is that content marketing focuses on providing valuable, informative content to build trust with the audience, while traditional marketing often focuses on direct promotion and sales.",
    },
    {
      question: "How long does it take to see results from content marketing?",
      answer:
        "Content marketing is a long-term strategy, and it can take 3–6 months to start seeing significant results.",
    },
    {
      question: "What types of content can be used in content marketing?",
      answer:
        "There are many types of content used in content marketing, including Blogs & Articles, Videos, Podcasts, E-books & Whitepapers.",
    },
  ];
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const services = [
    {
      title: "Social Media Content Creation",
      description:
        "Social media is where conversations happen, trends are set, and brands come to life. At Spok Digital, we create scroll-stopping, share-worthy content that connects with your audience and grows your online presence.",
      details: {
        platformSpecificContent: [
          {
            text: [
              "Facebook: Engaging posts, carousel ads, and videos designed to spark conversations and drive traffic.",
              "Instagram: Visually stunning posts, Reels, and Stories that captivate and grow your followers.",
              "LinkedIn: Thought leadership articles, professional updates, and customized B2B content to establish authority.",
              "Twitter (X): Concise, impactful tweets that provide engagement and real-time interaction.",
              "TikTok: Creative, trending short-form videos that capture attention and go viral.",
              "Pinterest: Eye-catching pins that drive traffic and inspire action.",
            ],
            img: "services/socialmedia.jpg",
          },
        ],
        contentFormats: [
          {
            text: [
              "Posts & Captions: Compelling copy and visuals that reflect your brand’s personality.",
              "Stories & Reels: Short, impactful content optimized for virality and engagement.",
              "Infographics: Shareable, informative graphics that simplify complex ideas.",
              "Live Streams: Real-time interaction to build a deeper connection with your audience.",
              "Polls, Quizzes & Contests: Interactive content to boost participation and engagement.",
              "User-Generated Content (UGC): Campaigns to leverage your audience’s voice and enhance authenticity.",
            ],
            img: "services/ContentTypes.webp",
          },
        ],
        contentCalendarManagement:
          "We plan and schedule posts to ensure consistency and timely delivery, aligning with your overall marketing goals. Content calendar management involves planning, scheduling, and coordinating content across platforms to achieve marketing objectives.",
      },
    },
    {
      title: "Blog Writing & Management",
      description:
        "Blogs are the cornerstone of content marketing, driving traffic, building authority, and nurturing customer trust. We create high-quality, value-driven blog content that informs, engages, and converts. From topic ideation to performance tracking, we handle every step of the process so you can focus on your business.",
      details: {
        blogContentCreation: [
          {
            text: [
              "Informative Articles: In-depth pieces that position you as an expert in your industry.",
              "How-To Guides: Step-by-step instructions that provide actionable value to readers.",
              "Thought Leadership: Insightful blogs that showcase your unique perspective and innovations.",
              "Trend Spotlights: Timely content that keeps your audience informed about industry developments.",
              "Product & Service Highlights: Engaging blogs that promote your offerings without feeling salesy.",
            ],
            img: "services/Blogs.jpg",
          },
        ],
        seoOptimization: [
          {
            text: [
              "Keyword Research: Identifying high-impact keywords that align with your audience’s search intent.",
              "On-Page SEO: Crafting meta titles, descriptions, and headings to enhance visibility.",
              "Internal & External Linking: Structuring content to boost authority and drive organic traffic.",
              "Content Refreshing: Regularly updating old blogs to maintain relevance and search rankings.",
            ],
            img: "services/SEO.png",
          },
        ],
        topicIdeation:
          "We identify the topics your audience cares about, including audience pain points, seasonal trends, and evergreen content.",
        visualEnhancements: [
          {
            text: [
              "Custom graphics and infographics.",
              "Embedded videos and rich media.",
              "Optimized images for readability and SEO.",
            ],
            img: "services/Graphic.jpg",
          },
        ],
      },
    },
    {
      title: "Video Marketing",
      description:
        "Video is one of the most powerful tools in digital marketing. It’s dynamic, engaging, and capable of delivering your message in a way that resonates with your audience. We specialize in creating impactful video marketing strategies that bring your brand’s story to life and drive measurable results.",
      details: {
        videoStrategyDevelopment: [
          {
            text: [
              "Identifying target audiences and platforms (YouTube, social media, website, etc.).",
              "Aligning video goals with broader marketing campaigns.",
              "Creating a content roadmap to ensure consistent messaging.",
            ],
            img: "services/video_Marketing.jpg",
          },
        ],
        videoProduction: [
          {
            text: [
              "Concept Development: Crafting unique ideas that align with your brand’s vision.",
              "Scripting & Storyboarding: Writing engaging scripts and visualizing scenes for impactful storytelling.",
              "Filming & Editing: Professional shooting, audio recording, and post-production editing.",
              "Animation & Motion Graphics: Dynamic visual effects and animations to elevate your videos.",
            ],
            img: "/services/video_Production.png",
          },
        ],
        videoFormats: [
          {
            text: [
              "Brand Story Videos: Showcase your company’s mission, values, and culture.",
              "Product Demonstrations: Highlight features and benefits with clear, engaging demos.",
              "Explainer Videos: Simplify complex ideas with animations or live-action content.",
              "Testimonial Videos: Build trust with real customer stories.",
              "How-To Videos: Provide actionable value to your audience with step-by-step guides.",
              "Social Media Videos: Create short, engaging content designed for platforms like Instagram, TikTok, and Facebook.",
              "Corporate Videos: Professional content for internal communication, events, or B2B audiences.",
            ],
            img: "services/video_formats.jpg",
          },
        ],
      },
    },
    {
      title: "Podcasting",
      description:
        "Podcasts are one of the fastest-growing forms of content, providing businesses with a unique opportunity to connect with their audience in a highly personal and engaging way. We specialize in creating and executing podcast strategies that amplify your brand’s message, build authority, and create deeper connections with your listeners.",
      details: {
        podcastStrategyDevelopment: [
          {
            text: [
              "Target Audience: Understanding who you're speaking to and what topics interest them.",
              "Podcast Goals: Setting clear objectives (e.g., brand awareness, lead generation, thought leadership).",
              "Format & Structure: Deciding on the podcast’s format (interviews, solo episodes, storytelling, etc.) and the episode length.",
              "Content Planning: Developing a content calendar with episode ideas, themes, and guest appearances.",
            ],
            img: "services/Podcast.webp",
          },
        ],
        podcastProduction: [
          {
            text: [
              "Recording: We guide you on equipment choices, microphone setup, and recording tips for clear, high-quality audio.",
              "Editing: Our team edits your episodes to remove any errors, enhance audio quality, and incorporate music or sound effects.",
              "Intro/Outro Creation: We create custom intros and outros to reinforce your brand and give your podcast a polished feel.",
              "Guest Management: We coordinate with interviewees or industry experts, ensuring smooth scheduling and communication.",
            ],
            img: "services/Podacst_Production.jpg",
          },
        ],
        podcastBranding: [
          {
            text: [
              "Cover Art: Custom podcast artwork that stands out and aligns with your brand’s aesthetics.",
              "Logo & Branding Guidelines: Creating a logo and consistent branding elements that reflect your podcast’s identity.",
              "Theme Music & Sound: Custom music selection or original compositions to enhance your podcast’s atmosphere.",
            ],
            img: "services/podcast_branding.jpg",
          },
        ],
        podcastFormats: [
          {
            text: [
              "Interview-Style Podcasts",
              "Solo Podcasts",
              "Storytelling & Narrative Podcasts",
              "Panel Discussions",
              "Educational & How-To Podcasts",
            ],
            img: "services/podcast_format.jpeg",
          },
        ],
      },
    },
  ];

  const para = "Great Content is the Best Sales Tool in the World";
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

      <div className="my-16">
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
        <div className="mx-auto container mt-12 grid grid-cols-1 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-red-50 mt-4 rounded-lg p-6 ">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-4 ">
                {Object.entries(service.details).map(([key, value], i) => (
                  <div key={i}>
                    <h3 className="text-lg mb-3  font-medium text-gray-800 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </h3>
                    {Array.isArray(value) ? (
                      <div className="">
                        <ul className="  text-gray-600">
                          {value.map((item, j) => (
                            <div
                              key={j}
                              className="grid grid-cols-1 lg:grid-cols-2 gap-5"
                            >
                              <li className=" ">
                                {item.text.map((text: string, k: number) => (
                                  <div
                                    key={k}
                                    className="bg-red-100 rounded-lg p-3 mb-2 flex items-start gap-3"
                                  >
                                    {/* Circle icon before text */}
                                    <div className="mt-[6px]">
                                      <Circle
                                        weight="fill"
                                        className="text-sm"
                                      />
                                    </div>
                                    <span>{text}</span>
                                  </div>
                                ))}
                              </li>
                              <div className="w-full h-[300px] lg:h-[500px] bg-purple-200">
                                <img
                                  src={item.img}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p className="text-gray-600 ">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
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
              Let’s Grow Together
            </h1>
            <p className="text-center mt-2">
              Content marketing isn`t just about creating content—it`s about
              creating connections. Ready to elevate your brand? Partner with
              Spok Digital, where your story meets strategy.
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
