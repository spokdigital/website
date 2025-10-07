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
import { ArrowUpRight } from "@phosphor-icons/react";
import SliderForm from "../App chunks/components/SliderForm";
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
      question: "Which social media platforms should my business be on?",
      answer:
        "The best platforms depend on your business goals and target audience. We analyze your business and decide on which platforms you must target.",
    },
    {
      question: "How often should I post on social media?",
      answer:
        "Consistency is key. The optimal posting frequency depends on the platform and your audience’s preferences.",
    },
    {
      question: "Do I need a big budget for social media marketing?",
      answer:
        "Not necessarily! Organic strategies can be highly effective with creativity and time. You can start small and scale for paid campaigns as you see results.",
    },
    {
      question:
        "Can I handle my social media marketing, or do I need a professional?",
      answer:
        "You can manage it yourself, but hiring professionals ensures expert strategy development and high-quality content creation.",
    },
    {
      question:
        "How long does it take to see results from social media marketing?",
      answer:
        "Results vary based on your goals. Organic growth may take a few months, while paid ads can show results within days. Consistent effort and strategy deliver long-term success.",
    },
  ];
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const marketingServices = [
    {
      category: "Social Media Advertising",
      description:
        "We help campaigns create ad campaigns to promote products, services, events, or brands across social media platforms like Facebook, Instagram, Twitter, LinkedIn, TikTok, etc. These pieces of content are designed to engage users, build awareness, drive conversions, or encourage actions such as purchasing, subscribing, or sharing.",
      subcategories: [
        {
          type: "Behavioral Targeting",
          description:
            "Content is often designed with a specific target audience in mind. This includes targeting the message and visuals to resonate with the interests, age, location, or behaviors of the audience.",
        },
        {
          type: "Ad Format",
          description:
            "The content may be done in different formats like: Image ads, Video ads, Carousel ads, Stories ads, Sponsored posts, Influencer partnerships.",
        },
        {
          type: "Text/Copy",
          description:
            "Short, engaging, and clear copy that conveys the message. Includes catchy headlines, product descriptions, CTAs like 'Shop Now,' 'Learn More,' 'Sign Up,' etc.",
        },
        {
          type: "Hashtags",
          description:
            "Hashtags are used to categorize the content and increase discoverability. This includes trending or branded hashtags.",
        },
        {
          type: "Visual Elements",
          description:
            "High-quality images, videos, and graphics that catch the audience's attention. This includes product photos, behind-the-scenes footage, or creative animations.",
        },
      ],
      img: "services/socialmedia.jpg",
    },
    {
      category: "Lead Generation",
      description:
        "We help businesses generate high-quality leads that convert into loyal customers. From targeted advertising to compelling content, our proven strategies deliver measurable results.",
      subcategories: [
        {
          type: "Targeted Lead Generation",
          description:
            "Reaching the right audience through Facebook Ads, Google Ads, and LinkedIn.",
        },
        {
          type: "Landing Pages That Convert",
          description:
            "Beautiful, user-friendly pages designed to capture attention and increase conversions.",
        },
        {
          type: "Lead Nurturing",
          description:
            "Automated email sequences to nurture prospects and guide them through your sales funnel.",
        },
        {
          type: "Comprehensive Analytics",
          description:
            "Detailed tracking and reports to optimize your campaigns and maximize ROI.",
        },
      ],
      img: "services/Lead.jpg",
    },
    {
      category: "Influencer Marketing",
      description:
        "Influencer marketing is the key to connecting your brand with the right people at the right time. We specialize in creating powerful influencer campaigns that drive authentic engagement and sales.",
      subcategories: [
        {
          type: "Identify the Perfect Influencers",
          description:
            "We match your brand with influencers who truly resonate with your target audience.",
        },
        {
          type: "Craft Custom Campaigns",
          description:
            "Tailored strategies to promote your products or services organically and authentically.",
        },
        {
          type: "Maximize ROI",
          description:
            "We track results in real time to optimize campaigns for the best performance.",
        },
        {
          type: "Build Long-Term Partnerships",
          description:
            "We focus on nurturing meaningful relationships with influencers that go beyond just one campaign.",
        },
      ],
      img: "services/influencerMarketing.jpg",
    },
    {
      category: "Affiliate Marketing",
      description:
        "Looking for a way to generate consistent revenue without the hassle of creating your product? Affiliate marketing is the solution! We help businesses and individuals tap into the power of affiliate marketing to boost income and grow their online presence.",
      subcategories: [
        {
          type: "Affiliate Program Setup",
          description:
            "We help you create and manage a successful affiliate program that attracts top-performing affiliates.",
        },
        {
          type: "Targeted Affiliate Recruitment",
          description:
            "Find the right affiliates who align with your brand and audience.",
        },
        {
          type: "Ongoing Affiliate Support",
          description:
            "From onboarding to training, we ensure your affiliates are set up for success.",
        },
        {
          type: "Analytics & Optimization",
          description:
            "Track performance and optimize campaigns to maximize commissions and conversions.",
        },
      ],
      img: "services/Affiliate.webp",
    },
    {
      category: "Community Management",
      description:
        "In today’s digital world, your community is everything. Community management is key to creating genuine relationships with your audience and creating a loyal customer base. We specialize in growing, engaging, and nurturing online communities that turn followers into brand advocates.",
      subcategories: [
        {
          type: "Community Engagement",
          description:
            "Actively respond to comments, messages, and mentions to keep the conversation going.",
        },
        {
          type: "Content Moderation",
          description:
            "Ensure your community stays positive, supportive, and aligned with your brand values.",
        },
        {
          type: "Brand Advocacy",
          description:
            "Turn your most loyal fans into brand ambassadors to organically promote your business.",
        },
        {
          type: "Community Building Strategies",
          description:
            "Develop strategies to keep your community engaged, growing, and thriving through meaningful interactions.",
        },
      ],
      img: "services/communityManagement.webp",
    },
  ];

  const para =
    "Social Media isn't Just a Trend—it's the Heartbeat of your Brand. Let Your Voice be Heard!";

  return (
    <motion.div className="  bg-white" ref={containerRef}>
      <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <motion.div>
        <div className="w-full h-screen overflow-hidden bg-gradient-to-tr from-blue-200 from-10% to-[#81C784] relative">
          <div className="w-full h-full flex relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <BackgroundGradientAnimation
                gradientBackgroundStart="orange"
                gradientBackgroundEnd="white"
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
          {marketingServices.map((service, index) => (
            <div key={index} className={`p-6 bg-red-50 rounded-xl`}>
              <h2 className="text-3xl font-bold text-gray-800">
                {service.category}
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                {service.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
                <div className="grid grid-cols-1 gap-2">
                  {service.subcategories.map((subcategory, subIndex) => (
                    <div
                      key={subIndex}
                      className="bg-red-100 flex items-start gap-3 p-4 rounded-lg"
                    >
                      <div className="mt-1">
                        <Circle weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700">
                          {subcategory.type}
                        </h3>
                        <p className="text-md text-gray-500 mt-1">
                          {subcategory.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full h-[300px] lg:h-[650px] bg-slate-300 shadow-md border border-slate-400 rounded-lg overflow-hidden">
                  <img
                    src={service.img}
                    className="w-full h-full object-cover"
                  />
                </div>
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
              Are You Ready to Grow Your Business Online?
            </h1>
            <p className="text-center mt-2">
              We have a proven track record of helping businesses like yours
              grow online. We focus on a results-driven approach to generating
              real ROI.
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
