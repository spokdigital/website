"use client";
import React from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import BreadCrumb from "../App chunks/components/BreadCrumb";
import { BackgroundGradientAnimation } from "../App chunks/components/HeroGradient";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "../App chunks/components/Accordion";
import { ArrowUpRight, Plus } from "@phosphor-icons/react";
import { Circle } from "@phosphor-icons/react";
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
      question: "How long does it take to develop a website?",
      answer:
        "The timeline for web development varies depending on the scope and complexity of your project. A simple website may take 2-6 weeks, while more complex sites with custom features can take more time. We’ll provide an estimated timeline during the planning phase.",
    },
    {
      question: "How much does it cost to build a website?",
      answer:
        "The cost of web development depends on factors like the complexity of the site, the features you need, and the technologies used. Simple websites cost less, while complex sites with advanced features (e-commerce, custom integrations, etc.) may require a larger budget. Contact us for a personalized quote based on your project.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes, all websites we develop are responsive, meaning they will automatically adjust to look great on any device, from desktops to smartphones and tablets. We focus on delivering a good user experience on all screen sizes.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes, we can help revamp your current website with a fresh design, improved functionality, and better user experience. Whether you're looking for a complete different or small adjustments, we’ll work with you to bring your vision to life.",
    },
    {
      question: "Will I be able to update my website myself?",
      answer:
        "Yes, if you choose a CMS-based website, you’ll be able to make content updates easily through a user-friendly admin panel. For custom websites, we provide a content management system or back-end interface to give you control over your website’s content.",
    },
  ];
  const selfPraise = [
    {
      title: "Custom Solutions",
      description:
        "We build tailored web applications that meet your business needs and objectives, ensuring scalability and flexibility.",
      color: "#D4E157",
    },
    {
      title: "Expert Team",
      description:
        "Our team of developers, designers, and project managers have years of experience delivering high-quality web development across various industries.",
      color: "#4FC3F7",
    },
    {
      title: "User-Centric Approach",
      description:
        "We prioritize user experience and design to ensure your application is easy to use, intuitive, and engaging for your customers.",
      color: "#FF8A65",
    },
    {
      title: "Agile Development",
      description:
        "We use agile methodologies to ensure flexibility in the development process and to accommodate changes quickly and efficiently.",
      color: "#FFEE58",
    },
    {
      title: "End-to-End Service",
      description:
        "From concept to deployment, we provide full-stack web development services, including ongoing support and maintenance.",
      color: "#FFEE65",
    },
  ];
  const servicesData = [
    {
      title: "Custom Website Development",
      description:
        "Get a website designed and built from scratch to represent your brand and goals perfectly. Our custom solutions ensure flexibility, scalability, and a unique edge in your market.",
      details: [
        "Flexibility: Built with scalability in mind, your site can grow alongside your business.",
        "Unique Design: Stand out in your market with a website designed exclusively for your brand.",
        "Optimized Performance: Enjoy fast load times, easy navigation, and mobile responsiveness to engage your audience effectively.",
      ],
      conclusion:
        "Whether you're a startup or an established enterprise, our custom web development services give you the competitive edge to succeed online.",
      img: "services/web.jpg",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Transform your business with a fully optimized online store. We develop secure, user-friendly e-commerce platforms to boost your sales and streamline your operations.",
      details: [
        "Custom Online Stores: From design to functionality, we create stores that align with your brand and captivate your audience.",
        "Secure Payment Gateways: Integrate trusted payment systems to ensure secure transactions and build customer confidence.",
        "Inventory Management: Simplify stock tracking and order fulfillment with efficient tools.",
        "Mobile Optimization: Deliver a flawless shopping experience on any device, ensuring maximum reach.",
        "Analytics and Reporting: Gain insights into customer behavior and sales performance to drive growth.",
      ],
      conclusion:
        "Whether you're launching your first store or upgrading an existing one, we provide the tools and expertise to help you succeed in the digital marketplace.",
      img: "services/ecom.jpg",
    },
    {
      title: "Content Management Systems (CMS)",
      description:
        "Take control of your website with easy-to-use CMS platforms. Manage content, update pages, and stay in charge of your digital presence.",
      details: [
        "Custom CMS Development: Tailored to your unique needs, providing flexibility and ease of use.",
        "User-Friendly Interfaces: Simplify content creation and updates with intuitive dashboards.",
        "Integration Capabilities: Easily connect your CMS with third-party tools and plugins to enhance functionality.",
        "Scalable Solutions: Built to grow with your business, accommodating expanding content and user demands.",
        "Training and Support: Ensure your team is equipped to make the most of your CMS with expert guidance and ongoing assistance.",
      ],
      conclusion:
        "With our CMS solutions, you’ll have complete control over your digital presence, enabling you to keep your website fresh, relevant, and engaging.",
      img: "services/cms.jpg",
    },
    {
      title: "Responsive Web Design",
      description:
        "Ensure your website looks great and functions flawlessly on any device, from desktops to smartphones. Our responsive designs provide a superior user experience across all screen sizes.",
      details: [
        "Fluid Grids and Layouts: Websites that automatically adjust to fit any screen size, providing a consistent user experience.",
        "Optimized Performance: Fast-loading designs that minimize bounce rates and maximize engagement on mobile devices.",
        "Cross-Browser Compatibility: Ensuring easy functionality across different browsers and operating systems.",
        "Mobile-First Approach: Designing with mobile users in mind, prioritizing usability and accessibility.",
        "Testing and Support: Support and testing are done to ensure flawless responsiveness and ongoing support to adapt to new devices and trends.",
      ],
      conclusion:
        "We ensure that your website provides a seamless experience across all devices, enhancing your audience's engagement and satisfaction.",
      img: "services/responsive.webp",
    },
    {
      title: "Web Application Development",
      description:
        "Streamline your business processes with custom web applications. From customer portals to business management tools, we create solutions that drive efficiency.",
      details: [
        "Frontend Development: We use the latest frontend technologies like HTML5, CSS3, JavaScript, and popular frameworks such as React.js, Angular, or Vue.js to build responsive, fast, and dynamic user interfaces.",
        "Backend Development: Our backend developers work with cutting-edge technologies to create powerful, efficient, and scalable server-side solutions.",
        "API Development & Integration: Whether you need a custom API or need to integrate third-party services, our team builds secure, well-documented APIs. We integrate payment systems, social media logins, geolocation, and other essential services to enhance the functionality of your web application.",
        "Testing & Quality Assurance: Before launching, we perform testing to ensure the application is bug-free and performs flawlessly across all devices. Our testing includes unit testing, integration testing, performance testing, and security audits to ensure quality at every stage of development.",
      ],
      conclusion:
        "Our web application development services empower your business with custom, scalable, and secure web apps that optimize efficiency and deliver a seamless user experience.",
      img: "services/webDevelopment.jpg",
    },
  ];
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const para = "Build Your Digital Presence with Spok Digital";
  const selfPrasiseContainer = React.useRef<HTMLDivElement>(null);
  const boxInView = useInView(selfPrasiseContainer, { once: true });
  return (
    <motion.div className="  bg-white" ref={containerRef}>
      <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <motion.div>
        <div className="w-full h-screen overflow-hidden bg-gradient-to-tr from-fuchsia-100 from-10% to-indigo-700 relative">
          <div className="w-full h-full flex relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <BackgroundGradientAnimation
                gradientBackgroundStart="black"
                gradientBackgroundEnd="black"
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
        <div className="container grid grid-cols-1 mt-7 gap-4 lg:grid-cols-1">
          <AnimatePresence mode="wait">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className={`p-6 bg-red-50 gap-4 rounded-xl`}
              >
                <div>
                  <h3 className="text-3xl font-Grostek font-[500]">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-Synonym text-lg font-[400]">
                    {service.description}
                  </p>
                  <div className="grid mt-5 grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className=" ">
                      {service.details.map((detail, id) => (
                        <div
                          key={id}
                          className="flex mb-6 text-gray-950 bg-red-100 p-2 rounded-lg items-start gap-2 "
                        >
                          <div className="mt-1">
                            <Circle weight="fill" />
                          </div>
                          <p
                            className={` rounded-lg font-sans font-[400]  text-lg `}
                          >
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="w-full h-[300px] lg:h-[500px]">
                      <img
                        src={service.img}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {service.conclusion ? (
                    <p className="mt-3">{service.conclusion}</p>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
                className=" text-slate-950 rounded-lg p-5 bg-slate-300"
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
              Ready to Build the Digital Imprint of Your Business?
            </h1>
            <p className="text-center mt-2">
              Whether you’re looking to build a new website from scratch or
              enhance an existing one, we are here to help you every step of the
              way. Contact us today to discuss your project, and let’s bring
              your idea to life.
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
