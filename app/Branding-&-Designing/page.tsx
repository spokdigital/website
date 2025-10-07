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
      question: "What is branding, and why is it important?",
      answer:
        "Branding is the process of creating a unique identity for your business that reflects your values, mission, and vision. It includes elements like your logo, color palette, typography, and messaging. Strong branding helps differentiate your business in the market, builds trust with your audience, and drives customer loyalty.",
    },
    {
      question: "What is the difference between branding and logo design?",
      answer:
        "Logo design is a component of branding, but branding is much more comprehensive. A logo is the visual representation of your brand, but branding encompasses your entire business identity, including your brand's voice, values, messaging, and customer experience. Branding ensures consistency across all touchpoints, from your website to your marketing materials and customer interactions.",
    },
    {
      question: "How long does the branding process take?",
      answer:
        "The timeline for branding varies depending on the scope and complexity of the project. On average, a complete brand identity project (including logo design, brand guidelines, and collateral) can take anywhere from 4 to 8 weeks. We’ll work closely with you to set expectations and ensure a timeline that suits your needs.",
    },
    {
      question: "Can you help with a brand refresh or rebranding?",
      answer:
        "Yes, we specialize in both brand refreshes and complete rebranding projects. Whether you need a small update to your existing brand or a full rebranding to reposition your business in the market, we can help you navigate the process and create a fresh identity that better aligns with your goals.",
    },
    {
      question:
        "What’s the difference between brand identity and brand guidelines?",
      answer:
        "Brand identity refers to the visual elements and messaging that represent your brand, such as your logo, color scheme, typography, and overall aesthetic. Brand guidelines, on the other hand, are a set of rules and standards for how to use these elements consistently across all marketing materials, websites, and social media to ensure your brand is represented accurately.",
    },
  ];

  const designServices = [
    {
      service: "Logo Design",
      details: [
        {
          title: "Custom Logo Design",
          description:
            "We craft unique logos tailored to your brand’s personality and market.",
        },
        {
          title: "Brand Story Integration",
          description:
            "Our logos reflect the story behind your brand, incorporating meaningful elements and symbolism.",
        },
        {
          title: "Versatile & Scalable",
          description:
            "Our logos are designed to look great across all platforms—whether on a website, business card, or billboard.",
        },
        {
          title: "Rebranding",
          description:
            "If you're looking to update your current logo, we’ll work with you to refresh it while maintaining continuity and relevance.",
        },
      ],
      img: "services/Logo_Design.jpg",
    },
    {
      service: "Brand Identity Development",
      details: [
        {
          title: "Color Palette & Typography",
          description:
            "We create a consistent visual language using carefully selected colors and fonts that reflect your brand’s essence.",
        },
        {
          title: "Brand Voice & Messaging",
          description:
            "We ensure your brand's tone of voice and messaging align with its core values, guiding all communications.",
        },
        {
          title: "Imagery & Iconography",
          description:
            "We develop a visual style using custom graphics, patterns, and icons that communicate your brand’s uniqueness.",
        },
        {
          title: "Brand Guidelines",
          description:
            "We create a comprehensive brand guideline document to ensure your brand identity is consistent across all media and platforms.",
        },
      ],
      img: "services/Brand Identity Development.jpg",
    },
    {
      service: "Packaging Design",
      details: [
        {
          title: "Custom Packaging Designs",
          description:
            "We design product packaging that stands out on shelves while reflecting your brand’s identity.",
        },
        {
          title: "Sustainability",
          description:
            "We offer eco-friendly packaging options to help your brand align with sustainability goals while maintaining quality and style.",
        },
        {
          title: "Labels & Tags",
          description:
            "From informational labels to promotional tags, we create designs that engage customers and provide essential details in a visually appealing way.",
        },
        {
          title: "Retail Packaging",
          description:
            "We design packaging specifically for retail environments, ensuring it attracts attention and aligns with retail standards.",
        },
        {
          title: "3D Mockups",
          description:
            "We provide 3D packaging mockups so you can visualize how your packaging will look in real life before production.",
        },
      ],
      img: "services/Package_Design.webp",
    },
    {
      service: "Marketing Collateral Design",
      details: [
        {
          title: "Brochures & Flyers",
          description:
            "We design informative brochures and flyers that visually communicate your products or services, creating a lasting impression.",
        },
        {
          title: "Business Cards",
          description:
            "Our business card designs are carefully crafted to reflect your brand’s identity and make a lasting impact with every handshake.",
        },
        {
          title: "Posters & Banners",
          description:
            "Whether it’s for an event or a promotion, we design posters and banners that catch the eye and effectively communicate your message.",
        },
        {
          title: "Email Templates",
          description:
            "We create email templates that align with your brand’s design aesthetic while being optimized for readability and conversion.",
        },
        {
          title: "Presentation Decks",
          description:
            "We design professional PowerPoint or Google Slides presentations that are visually engaging and help convey your message clearly.",
        },
        {
          title: "Trade Show & Event Materials",
          description:
            "From trade show booths to promotional giveaways, we design materials that help elevate your brand presence at events and expos.",
        },
      ],
      img: "services/Marketing-Collateral-Design.jpg",
    },
    {
      service: "Brand Strategy Development",
      details: [
        {
          title: "Market Research & Analysis",
          description:
            "We conduct in-depth research to understand your market, competitors, and consumer behavior, which helps us develop a strategy that differentiates your brand.",
        },
        {
          title: "Target Audience Identification",
          description:
            "We help you identify and understand your target audience, ensuring all brand messaging is tailored to meet their needs and preferences.",
        },
        {
          title: "Positioning & Messaging",
          description:
            "We develop unique positioning strategies that help your brand stand out in the market, and create messaging frameworks to consistently communicate your value.",
        },
        {
          title: "Brand Architecture",
          description:
            "We design the structure of your brand’s various products and services, ensuring clarity and coherence across the entire brand portfolio.",
        },
      ],
      img: "services/Brand Strategy development.jpg",
    },
    {
      service: "Brand Naming",
      details: [
        {
          title: "Creative Brainstorming",
          description:
            "We engage in a comprehensive brainstorming process to create brand names that are catchy, meaningful, and market-appropriate.",
        },
        {
          title: "Domain Name Availability",
          description:
            "We ensure the name you choose is available as a domain, so your digital presence is consistent with your brand.",
        },
        {
          title: "Cultural & Linguistic Considerations",
          description:
            "Our team takes into account cultural relevance and potential linguistic issues, ensuring the name works globally if needed.",
        },
        {
          title: "Trademark & Legal Check",
          description:
            "We perform trademark checks to ensure your brand name is legally available and protected.",
        },
      ],
      img: "services/Brand_Name.jpg",
    },
    {
      service: "Content Creation & Copywriting",
      details: [
        {
          title: "Brand Storytelling",
          description:
            "We craft compelling narratives that communicate your brand’s history, values, and mission, connecting emotionally with your audience.",
        },
        {
          title: "Website Copywriting",
          description:
            "We write high-quality, SEO-friendly copy for your website that captures your brand’s voice while ensuring maximum search engine visibility.",
        },
        {
          title: "Ad Copywriting",
          description:
            "Whether it's for print, digital, or social media ads, our team creates copy that speaks directly to your audience and drives conversions.",
        },
        {
          title: "Blog & Article Writing",
          description:
            "We provide high-quality blog posts and articles to engage your audience and establish your brand as an industry leader.",
        },
      ],
      img: "services/Content Creation.jpg",
    },
    {
      service: "Print Design & Materials",
      details: [
        {
          title: "Brochures & Catalogs",
          description:
            "We design visually appealing brochures and catalogs that provide valuable information about your products or services while reflecting your brand identity.",
        },
        {
          title: "Flyers & Posters",
          description:
            "Our flyers and posters are designed to capture attention, whether for an event, promotion, or new product launch, driving foot traffic and awareness.",
        },
        {
          title: "Stationery Design",
          description:
            "We create personalized stationery—letterheads, envelopes, business cards—that help maintain a professional and cohesive brand presence.",
        },
        {
          title: "Annual Reports & Corporate Materials",
          description:
            "We design annual reports, corporate brochures, and other important print materials that maintain a professional tone while showcasing your brand’s accomplishments.",
        },
      ],
      img: "services/Print Design & Materials.jpg",
    },
    {
      service: "Event Branding & Design",
      details: [
        {
          title: "Event Branding Strategy",
          description:
            "We design a full branding strategy for your event, ensuring everything from invitations to signage aligns with your overall brand identity.",
        },
        {
          title: "Booth Design",
          description:
            "We create engaging, on-brand trade show booths that attract visitors and encourage interaction, boosting your brand’s visibility.",
        },
        {
          title: "Signage & Banners",
          description:
            "We design impactful signage and banners that direct attendees while maintaining your brand’s messaging and aesthetics.",
        },
        {
          title: "Promotional Materials",
          description:
            "We design event-specific marketing materials like brochures, giveaways, and swag that carry your brand’s identity and leave a lasting impression.",
        },
      ],
      img: "services/Event-Branding & Designing.jpeg",
    },
    {
      service: "Digital & Interactive Design",
      details: [
        {
          title: "Interactive Web Elements",
          description:
            "From animations to hover effects, we design engaging digital elements that enhance the user experience on your website.",
        },
        {
          title: "App Interface Design",
          description:
            "We design user-friendly interfaces for mobile apps and digital products that reflect your brand’s identity while providing an excellent user experience.",
        },
        {
          title: "Email Design",
          description:
            "We craft visually appealing email templates for newsletters, promotional campaigns, and transactional emails that maintain consistency with your brand and drive conversions.",
        },
        {
          title: "Digital Ads",
          description:
            "Our digital ad designs, including Google Ads, Facebook Ads, and banner ads, are created to grab attention and drive traffic while staying true to your brand.",
        },
      ],
      img: "services/Interactive-Digital.jpg",
    },
    {
      service: "Custom Illustrations & Iconography",
      details: [
        {
          title: "Unique Illustrations",
          description:
            "Whether for website elements, marketing materials, or product packaging, we create custom illustrations that reinforce your brand’s message and make it stand out.",
        },
        {
          title: "Icons & Graphics",
          description:
            "Our team designs a set of custom icons and graphics to represent your services, products, or concepts, enhancing your digital and print materials with a personal touch.",
        },
      ],
      img: "services/Custom_Illustration.jpg",
    },
  ];
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const para =
    "Great Branding is About Creating Trust and Forming Lasting Connections with Customers";

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
                className="flex flex-col container relative items-center text-slate-100 justify-center"
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
        <motion.article className="flex container justify-center lg:justify-start items-center gap-3 mx-auto z-[50] flex-wrap">
          {["Our", "Branding", "and", "Design", "Services", "includes"].map(
            (text, index) => (
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
                className={`text-5xl lg:text-6xl leading-[100%] text-black font-Grostek font-[600] tracking-tight ${
                  text.toLowerCase() === "supercharged" &&
                  "bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent"
                }`}
              >
                {text}
              </motion.h1>
            )
          )}
        </motion.article>
        <div className="container grid grid-cols-1 mt-7 gap-6">
          {designServices.map((service, index) => (
            <div key={index} className=" p-6 bg-pruple bg-red-50 rounded-lg">
              <h2 className="text-2xl font-Grostek font-semibold text-gray-800 mb-4">
                {service.service}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="flex flex-col gap-4">
                  {service.details.map((detail, i) => (
                    <div key={i} className="p-3 rounded-lg bg-red-100">
                      <div className="flex item-start gap-2">
                        <div className="mt-[6px]">
                          <Circle weight="fill" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-700">
                          {detail.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{detail.description}</p>
                    </div>
                  ))}
                </div>
                <div className="w-full bg-purple-300 h-[300px] lg:h-[500px]">
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
              Let`s Create Something Amazing Together
            </h1>
            <p className="text-center mt-2">
              Ready to elevate your brand? Get in touch with us today and let’s
              start building a brand that connects, inspires, and delivers.
              Whether you`re launching a new brand or rebranding your business,
              Spok Digital is here to help you shine.
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
