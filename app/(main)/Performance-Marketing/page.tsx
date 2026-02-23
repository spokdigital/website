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
import { ArrowUpRight, Circle, Plus } from "@phosphor-icons/react";
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
      question:
        "How does performance marketing differ from traditional marketing?",
      answer:
        "Traditional marketing often involves paying for ad placements regardless of outcomes, such as impressions or ad views. In contrast, performance marketing ensures you pay only when a predefined action is completed, making it more cost-effective and result-oriented.",
    },
    {
      question: "Which platforms do you use for performance marketing?",
      answer:
        "We work across a wide range of platforms, including Google Ads, Facebook, Instagram, LinkedIn, TikTok, YouTube, and affiliate networks. Our multi-channel approach ensures maximum reach and impact.",
    },
    {
      question:
        "How do you measure the success of a performance marketing campaign?",
      answer:
        "Success is measured using key performance indicators (KPIs) such as click-through rates (CTR), cost per acquisition (CPA), return on ad spend (ROAS), conversion rates, and overall ROI. We provide detailed reports to keep you informed of your campaign’s progress.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We work with clients across a variety of industries, including e-commerce, technology, healthcare, finance, real estate, and more. Our customized approach ensures strategies are tailored to your specific market.",
    },
    {
      question:
        "How much should I budget for a performance marketing campaign?",
      answer:
        "The budget depends on your goals, industry, and the platforms you want to use. We’ll work with you to create a strategy that maximizes your ROI, regardless of your budget size.",
    },
    {
      question: "How quickly can I expect results from performance marketing?",
      answer:
        "Performance marketing can yield quick results, often within days or weeks, depending on the campaign. However, ongoing optimization is necessary to improve performance and sustain long-term growth.",
    },
  ];
  const marketingServices = [
    {
      title: "DV360 (Display & Video 360)",
      description:
        "Enhance your programmatic advertising with Google’s powerful DV360 platform. DV360 is part of the Google Marketing Platform and is designed for large-scale advertisers and agencies seeking advanced capabilities for managing programmatic advertising campaigns. It integrates media planning, creative development, measurement, and optimization tools in one platform. This demand-side platform enables unified campaign management across display, video, audio, and connected TV. With DV360, you can.",
      features: [
        "Access premium inventory across YouTube, Google partners, and third-party exchanges",
        "Advanced audience targeting and custom bidding strategies",
        "Real-time campaign optimization with analytics",
        "Robust brand safety tools and third-party integrations",
        "Cross-channel campaign management for maximum impact",
      ],
      img: "https://images.pexels.com/photos/30207073/pexels-photo-30207073/free-photo-of-capturing-urban-street-scene-with-handheld-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Campaign Management",
      description:
        "Campaign management involves overseeing the entire lifecycle of a marketing campaign—from conception to execution and post-campaign analysis. It ensures campaigns are executed on time, within budget, and deliver the desired results. From planning and creative development to execution and performance tracking, we handle every aspect to deliver campaigns that drive results. Key benefits include.",
      features: [
        "End-to-end management of campaigns",
        "Regular performance reviews and adjustments",
        "Transparent communication and reporting",
        "Scalable solutions to support business growth",
      ],
      img: "https://static.vecteezy.com/system/resources/previews/035/757/397/large_2x/ai-generated-a-young-black-man-with-microphones-talking-to-a-crowd-free-photo.jpg",
    },
    {
      title: "Paid Search Advertising (PPC)",
      description:
        "Paid search advertising, such as Google Ads, is one of the most powerful ways to drive highly targeted traffic to your website. Our team optimizes campaigns to ensure you pay only for qualified clicks, maximizing your ad spend efficiency.",
      features: [
        "Keyword research and strategy: We conduct extensive research to identify high-performing keywords specific to your business and industry, ensuring your ads are shown to the right audience.",
        "Compelling ad copywriting with A/B testing: We craft compelling ad copy that attracts clicks and conversions. Through continuous A/B testing, we refine and optimize messaging for better performance.",
        "Real-time bid management: We monitor and adjust bids in real time to ensure you remain competitive while keeping costs under control.",
        "Remarketing strategies for conversion optimization: We target previous website visitors with tailored ads to bring them back, increasing the chances of conversion",
      ],
      img: "https://freeup.net/wp-content/uploads/2021/03/what-is-ppc.jpg",
    },
    {
      title: "Affiliate Marketing",
      description:
        "Affiliate marketing is a performance-based strategy where we help you partner with affiliates who will promote your products or services on a commission basis. This channel helps you scale efficiently without upfront costs.",
      features: [
        "Affiliate recruitment and onboarding: We identify and onboard top-performing affiliates who align with your brand and have an audience that is likely to convert.",
        "Comprehensive program management: We manage all aspects of your affiliate program, from negotiating commissions to tracking performance and optimizing payouts.",
        "Detailed tracking and reporting: We provide clear, transparent reporting to measure the effectiveness of your affiliates and ensure that you’re only paying for actual sales or actions.",
      ],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpG25WWFf8qNx9YunI40EpmO0x0jHe3MJUw&s",
    },
    {
      title: "Display Advertising",
      description:
        "Display advertising involves showing your ads across various websites through banner ads, video ads, and other formats. These ads are visually compelling and can help you increase brand awareness, drive traffic, and boost conversions.",
      features: [
        "Advanced targeting options: We use advanced targeting techniques, such as demographic targeting, interest-based targeting, and retargeting, to ensure your ads are shown to the most relevant audience.",
        "Creative and engaging ad design: Our design team creates eye-catching banners and visuals that grab attention and encourage clicks.",
        "Performance monitoring and continuous optimization: We monitor the performance of your display ads and continuously optimize them for better results, reducing wasted ad spend and improving ROI.",
      ],
      img: "https://business.adobe.com/blog/basics/media_1c548963ee6dce0000a9f32d5c60809ab50275cce.png?width=750&format=png&optimize=medium",
    },
    {
      title: "Email Marketing",
      description:
        "Email marketing is a powerful tool for engaging with customers and driving conversions. Our services ensure that your emails reach the right inbox with content that’s tailored to your audience.",
      features: [
        "List Segmentation: We segment your email list to send personalized messages to different customer groups based on behaviors, interests, and purchase history.",
        "Email Campaign Design: Our team designs mobile-friendly, visually appealing email templates that grab attention and encourage recipients to take action.",
        "Automated Workflows: We set up automated email campaigns, such as welcome emails, cart abandonment reminders, and re-engagement sequences, to nurture leads and drive sales over time.",
        "Performance tracking and optimization: We analyze open rates, click-through rates, and conversions to refine email campaigns for better engagement and results.",
      ],
      img: "https://assets.entrepreneur.com/content/3x2/2000/20180726155253-GettyImages-860221048.jpeg",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description:
        "Conversion Rate Optimization (CRO) focuses on improving the effectiveness of your website, landing pages, and marketing funnels to maximize conversions. We use data-driven strategies to boost the percentage of visitors who take your desired action.",
      features: [
        "Landing page optimization: We analyze and optimize your landing pages, ensuring they are user-friendly, persuasive, and optimized for higher conversions.",
        "A/B testing: We conduct A/B testing on different elements of your landing pages, such as headlines, calls-to-action, images, and form fields, to determine the best-performing variations.",
        "User Experience (UX) Design: We focus on enhancing the user experience by ensuring fast load times, intuitive navigation, and mobile-friendly design.",
        "Funnel analysis and optimization: We analyze your marketing funnel to identify any barriers or drop-off points and optimize it for smoother customer journeys and higher conversion rates.",
      ],
      img: "https://cdn.prod.website-files.com/65e7297194523c404b923b44/662e9ad34739996442f1455e_conversion-rate-optimization-guide.webp",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Data is at the heart of our performance marketing approach. Our advanced analytics and reporting services ensure that you can track every aspect of your campaign's performance and make data-driven decisions.",
      features: [
        "Real-time analytics for immediate insights: We use cutting-edge tools to track your campaigns’ performance in real-time, providing you with insights into what’s working and what’s not.",
        "Custom Reporting: Our reports are tailored to your business objectives, highlighting key metrics such as ROI, conversion rates, customer acquisition cost (CAC), and more.",
        "Campaign Insights & Optimization: We provide actionable insights based on campaign performance, helping you refine strategies and optimize ad spending for better outcomes.",
      ],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKf458j-9wCH5J6G1_SBanK-a8jPx13GulXw&s",
    },
    {
      title: "Video Advertising",
      description:
        "Video content is an incredibly engaging medium that can drive both awareness and conversions. We help create compelling video ads for platforms like YouTube, Facebook, and Instagram, delivering your message in a visually captivating way.",
      features: [
        "Video Production: We assist in creating high-quality video ads tailored to your brand and objectives, ensuring they are optimized for various platforms.",
        "Targeted Campaigns: Video ads are targeted to the right audience to ensure maximum impact, and we optimize campaigns for both views and conversions.",
        "Performance Tracking: We monitor key metrics like video watch time, engagement, and conversion rates to ensure that your video ads are working effectively.",
      ],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEIFt4se1XUJysO-qK3XLx6UcHLYaRae32A&s",
    },
  ];

  const para =
    "Performance Marketing Maximizing Impact with Data Driven Results";

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
                className="flex flex-col  items-center text-slate-100 justify-center"
              >
                <motion.h1 className="text-center font-[600] text-slate-100 flex-wrap text-3xl xl:text-5xl lg:px-14 font-Grostek relative">
                  {para.split(" ").map((item, index) => (
                    <motion.span
                      key={index}
                      className="mr-2 xl:mr-2 xxl:mr-3 overflow-hidden h-[35px] lg:h-[70px]"
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

        <div className="grid mt-3 grid-cols-1 gap-4 container ">
          {marketingServices.map((service, index) => (
            <div
              key={index}
              className="bg-red-50 p-6 rounded-lg  transition-shadow"
            >
              <div>
                <h2 className="text-2xl  font-bold text-gray-800">
                  {service.title}
                </h2>
                <p className="text-gray-600 my-4">{service.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="mt-1">
                            <Circle weight="fill" />
                          </div>
                          {feature}
                        </div>
                      </li>
                    ))}
                  </div>
                  <div className="w-full h-[300px] lg:h-[500px] bg-slate-300 shadow-md border border-slate-400 rounded-lg overflow-hidden">
                    <img
                      src={service.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </ul>
              </div>
            </div>
          ))}
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
            <div>
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
              Let’s Drive Performance Together
            </h1>
            <p className="text-center mt-2">
              If you`re ready to take your marketing to the next level and see
              measurable growth, contact us today. Whether you`re looking to
              scale quickly or improve your marketing ROI, we have the tools and
              expertise to get you there.
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
