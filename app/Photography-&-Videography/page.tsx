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
      question: "Do you provide video and photo editing services?",
      answer:
        "Yes! All of our photography and videography services include professional editing. For photos, this may involve color correction, retouching, cropping, and background removal. For videos, it includes cutting, transitions, sound editing, color grading, and adding any necessary effects or graphics.",
    },
    {
      question:
        "Can I request specific styles or themes for my photos or videos?",
      answer:
        "Absolutely! We work closely with you to understand your vision, brand, and desired aesthetic.",
    },
    {
      question: "Do you provide drone services for video or photography?",
      answer:
        "Yes! We offer professional drone services for both photography and videography.",
    },
    {
      question: "Do you offer services for businesses with small budgets?",
      answer:
        "Yes, we understand that every business has different needs and budgets. We offer flexible packages that can be tailored to suit various budgets without compromising on quality.",
    },
    {
      question: "Will you provide a consultation before the shoot?",
      answer:
        "Yes! Before every shoot, we offer a consultation to discuss your objectives, the look and feel you want to achieve, and any specific details you want to include.",
    },
  ];
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const photographyServices = [
    {
      category: "Product Photography",
      description:
        "Product photography is essential for showcasing your products in the best possible light. Our team specializes in capturing crisp, high-quality images that highlight every detail, from texture to color. Whether you need studio shots or creative, lifestyle-inspired imagery, we’ll help make your products attractive to your audience.",
      services: [
        {
          name: "Studio Product Photography",
          description:
            "We use advanced lighting setups and backdrops to focus on your product’s features, ensuring clear, sharp, and clean images for online stores and advertising materials.",
        },
        {
          name: "Creative & Artistic Product Photography",
          description:
            "We go beyond standard product shots, using creative techniques and props to create a visually appealing composition that grabs attention.",
        },
        {
          name: "360-Degree Product Photography",
          description:
            "Let your customers view your product from every angle with interactive, high-quality 360-degree shots.",
        },
        {
          name: "Lifestyle Product Photography",
          description:
            "Showcase your products in real-world settings, allowing customers to see how they fit into their daily lives.",
        },
      ],
      img: "services/product-photography.jpg",
    },
    {
      category: "Brand Photography",
      description:
        "Brand photography goes beyond just product shots—it tells the story of your brand. We help you build a visual identity that resonates with your target audience, reflecting your brand’s personality, values, and essence through curated photo sessions.",
      services: [
        {
          name: "Branding & Identity Photography",
          description:
            "From behind-the-scenes shots to professional portraits, we capture the essence of your brand with an emphasis on storytelling.",
        },
        {
          name: "Employee & Team Portraits",
          description:
            "Professional, approachable portraits that represent your team’s personality and your company culture. Perfect for websites, LinkedIn profiles, and marketing materials.",
        },
        {
          name: "Lifestyle Branding Shots",
          description:
            "Depict your products and services in use, capturing the way your customers interact with your brand in real-life situations.",
        },
      ],
      img: "services/Brand_Photography.jpg",
    },
    {
      category: "Event Photography",
      description:
        "From corporate events to weddings, our event photography service ensures every important moment is captured with precision and creativity. We are experts in photographing both large-scale events and intimate gatherings, delivering photos that document the atmosphere and key moments with style.",
      services: [
        {
          name: "Corporate Events",
          description:
            "Whether it’s a product launch, conference, or team-building event, we document the day with professional shots that highlight the energy, key moments, and people involved.",
        },
        {
          name: "Conferences & Trade Shows",
          description:
            "Capture the dynamic interactions, presentations, and booths at industry events, offering impactful photos that highlight your brand's presence.",
        },
        {
          name: "Weddings & Celebrations",
          description:
            "Our team offers a relaxed, candid approach to wedding and event photography, capturing those special moments as they unfold naturally.",
        },
      ],
      img: "services/Event_Photography.webp",
    },
    {
      category: "Lifestyle Photography",
      description:
        "Lifestyle photography is all about connecting your audience with authentic, relatable images that represent the essence of your brand. Our approach to lifestyle photography captures moments that reflect real-life interactions and emotions, ensuring your brand resonates on a personal level.",
      services: [
        {
          name: "Editorial & Lifestyle Campaigns",
          description:
            "We create engaging photoshoots that tell a story, whether it’s for a magazine, social media campaign, or advertising materials.",
        },
        {
          name: "Social Media Content",
          description:
            "Engaging, visually appealing lifestyle images designed specifically for use on social media platforms, helping to boost brand awareness and customer engagement.",
        },
        {
          name: "Product Integration",
          description:
            "Show your products being used in everyday scenarios, making them more relatable and desirable to your target audience.",
        },
      ],
      img: "services/LifeStyle_Photography.jpg",
    },
    {
      category: "Real Estate Photography",
      description:
        "When it comes to real estate, first impressions are everything. Our real estate photography services provide high-quality images that highlight the best features of your properties, helping you attract potential buyers or renters with captivating visuals.",
      services: [
        {
          name: "Residential & Commercial Real Estate",
          description:
            "We specialize in both residential and commercial property photography, capturing everything from wide-angle shots to architectural details that make each space unique.",
        },
        {
          name: "Aerial & Drone Photography",
          description:
            "We offer breathtaking aerial shots of properties, showcasing them from a unique perspective that adds depth and interest to your real estate listings.",
        },
        {
          name: "Virtual Staging & Editing",
          description:
            "Enhance your real estate listings with virtual staging to help potential buyers envision the property in its best possible light.",
        },
      ],
      img: "services/real_estate.jpg",
    },
    {
      category: "Headshot Photography",
      description:
        "Whether it’s for a corporate website, social media profiles, or professional portfolios, we specialize in providing high-quality headshots that present individuals in a professional yet approachable manner.",
      services: [
        {
          name: "Corporate Headshots",
          description:
            "High-quality headshots for your team, executives, and employees that reflect the professionalism of your brand.",
        },
        {
          name: "Creative Headshots",
          description:
            "We offer creative, personalized headshot sessions that reflect your personality or career field, ideal for actors, models, or creatives looking to stand out.",
        },
      ],
      img: "services/Headshot_Photography.jpg",
    },
    {
      category: "Fashion & Editorial Photography",
      description:
        "We create visually compelling images for fashion brands, designers, magazines, and models. Whether it’s for a runway collection, product catalog, or magazine feature, our photographers specialize in capturing the dynamic and detailed nature of fashion.",
      services: [
        {
          name: "Fashion Campaigns",
          description:
            "From high fashion to everyday wear, we deliver images that tell a story and highlight the details of your collection.",
        },
        {
          name: "Editorial Photoshoots",
          description:
            "We produce high-impact editorial images designed for magazines, blogs, and promotional materials, focusing on creativity, styling, and composition.",
        },
      ],
      img: "services/Fashion_Editing.jpg",
    },
  ];
  const videographyServices = [
    {
      category: "Corporate & Brand Videos",
      description:
        "A corporate or brand video is a powerful way to communicate your company’s mission, vision, and values. Whether it’s a brand introduction, company culture video, or corporate storytelling piece, our team will craft a professional video that aligns with your brand’s identity.",
      services: [
        {
          name: "Brand Storytelling",
          description:
            "We help tell your brand’s story, showcasing its history, values, and unique selling points in a compelling, emotionally engaging way.",
        },
        {
          name: "Corporate Introduction Videos",
          description:
            "Perfect for websites, presentations, and pitches, these videos introduce your company to potential clients, partners, and investors.",
        },
        {
          name: "Company Culture Videos",
          description:
            "Show the personality behind your brand by highlighting your workplace environment, employees, and culture, giving potential clients and talent an inside look into your business.",
        },
      ],
      img: "services/Corporate_Videos.jpg",
    },
    {
      category: "Promotional Videos",
      description:
        "Promotional videos are one of the most effective tools for driving interest in a product, service, or campaign. Our team creates visually captivating videos designed to inform, inspire, and call viewers to action.",
      services: [
        {
          name: "Product Launch Videos",
          description:
            "We help you introduce new products or services with dynamic, engaging videos that capture attention and generate excitement.",
        },
        {
          name: "Social Media Video Ads",
          description:
            "Whether for Instagram, Facebook, TikTok, or YouTube, we create eye-catching promotional videos designed specifically for social media platforms to increase engagement and conversions.",
        },
        {
          name: "Campaign Videos",
          description:
            "Enhance your marketing campaigns with powerful promotional videos that capture the essence of the campaign and drive action.",
        },
      ],
      img: "services/Promotional_Videos.jpg",
    },
    {
      category: "Social Media & Digital Content",
      description:
        "In today’s digital world, engaging social media content is key to building a strong online presence. We specialize in creating high-quality videos optimized for social media platforms, helping you connect with your audience and boost your engagement.",
      services: [
        {
          name: "Short-Form Videos",
          description:
            "From Instagram Reels to TikTok, we craft engaging, short-form content designed for social media platforms, increasing reach and interaction with your audience.",
        },
        {
          name: "Branded Content",
          description:
            "We create branded videos that seamlessly integrate your message into high-quality content that resonates with your social media followers.",
        },
        {
          name: "Testimonial & User-Generated Content",
          description:
            "Capture the voice of your customers and clients through testimonials, unboxing videos, or reviews that can be shared on your social media to build trust and credibility.",
        },
      ],
      img: "services/Social_Media_Image.webp",
    },
    {
      category: "Explainer Videos",
      description:
        "Explainer videos are an excellent way to simplify complex ideas or demonstrate how a product or service works. Whether animated or live-action, these videos provide clear, concise explanations in an engaging format.",
      services: [
        {
          name: "Product Demonstration Videos",
          description:
            "Show how your product works, highlighting its key features and benefits to potential customers in a clear, easy-to-understand way.",
        },
        {
          name: "Service Explainers",
          description:
            "Help potential clients understand your services, how they can benefit from them, and how to use them, all within a brief, engaging video.",
        },
        {
          name: "Animated Explainers",
          description:
            "For more complex subjects, we create dynamic animated videos that break down information in a visually compelling and easy-to-digest way.",
        },
      ],
      img: "services/video_tutorial.jpg",
    },
    {
      category: "Music Videos",
      description:
        "If you’re an artist, musician, or band, a music video is an essential part of your branding and promotion. Our team works closely with musicians to create visually striking music videos that match the tone and message of your song.",
      services: [
        {
          name: "Cinematic Music Videos",
          description:
            "We bring your music to life with high-quality, cinematic videos that visually represent your song’s mood, lyrics, and style.",
        },
        {
          name: "Performance & Concept Videos",
          description:
            "From performance shots to concept-driven narratives, we tailor the video style to your music and artistic vision.",
        },
      ],
      img: "services/Music_Videos.jpeg",
    },
    {
      category: "Drone Videography",
      description:
        "Take your videos to new heights with stunning aerial shots captured using drone technology. Whether you’re showcasing real estate, events, or landscapes, drone videography provides unique perspectives and visually captivating footage.",
      services: [
        {
          name: "Aerial Property & Real Estate Videos",
          description:
            "Highlight the grandeur and layout of properties, with sweeping aerial views that give a complete picture.",
        },
        {
          name: "Event Coverage",
          description:
            "Capture large outdoor events from a bird’s-eye view, offering dynamic and breathtaking footage that enhances your video content.",
        },
        {
          name: "Landscape & Nature Footage",
          description:
            "Perfect for tourism, outdoor brands, or nature-focused campaigns, drone videography provides stunning, wide-angle shots of landscapes.",
        },
      ],
      img: "services/Drone_Videography.jpg",
    },
  ];

  const para =
    "From Concept to Screen—We Create Engaging Videos that Captivate Your Audience";

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
                className="flex flex-col items-center text-white justify-center"
              >
                <motion.h1 className="text-center font-[600] text-slate-100 flex-wrap text-3xl xl:text-5xl  font-Grostek relative">
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
        <div className="container mt-6">
          {photographyServices.map((category, index) => (
            <div
              key={index}
              className="bg-red-50 mt-3 grid grid-cols-1  gap-5 p-6 "
            >
              <h2 className="text-2xl font-semibold font-Grostek text-gray-950">
                {category.category}
              </h2>
              <p className="text-gray-800 mt-2">{category.description}</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <ul className="flex flex-col gap-5">
                  {category.services.map((service, idx) => (
                    <li key={idx} className=" bg-red-100 p-3 rounded-md">
                      <div className="flex items-start gap-2">
                        <div className="mt-[6px]">
                          <Circle weight="fill" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-800">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-gray-600">{service.description}</p>
                    </li>
                  ))}
                </ul>
                <div className={"w-full lg:h-[500px] h-[300px] bg-purple-200"}>
                  <img
                    className="w-full h-full object-cover"
                    src={category.img}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="  container mt-8">
          {videographyServices.map((category, index) => (
            <div
              key={index}
              className="grid grid-cols-1 mt-3 bg-red-50 gap-5 p-6 "
            >
              <h2 className="text-2xl font-semibold font-Grostek text-gray-950">
                0{index + 1} {category.category}
              </h2>
              <p className="text-gray-800 mt-2">{category.description}</p>
              <div className="grid grid-cols-1  lg:grid-cols-2 gap-3">
                <ul className="flex flex-col  gap-5 ">
                  {category.services.map((service, idx) => (
                    <li key={idx} className=" bg-red-100 p-3 rounded-md">
                      <div className="flex items-start gap-2">
                        <div className="mt-[6px]">
                          <Circle weight="fill" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-800">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-gray-600">{service.description}</p>
                    </li>
                  ))}
                </ul>
                <div className={"w-full lg:h-[500px] h-[300px] bg-purple-200"}>
                  {" "}
                  <img
                    className="w-full h-full object-cover"
                    src={category.img}
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
              Let’s Bring Your Vision to Life
            </h1>
            <p className="text-center mt-2">
              Ready to elevate your brand with professional photography and
              videography? Contact us today to discuss how we can create custom
              content that will engage, inspire, and connect with your target
              audience.
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
