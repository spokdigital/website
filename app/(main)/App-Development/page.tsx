"use client";
import React from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import BreadCrumb from "../App chunks/components/BreadCrumb";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "../App chunks/components/Accordion";
import { BackgroundGradientAnimation } from "../App chunks/components/HeroGradient";
import { Circle, Plus } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
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
      question: "How long does it take to develop an app?",
      answer:
        "The timeline for app development depends on the complexity and features of the app. We provide a detailed timeline after understanding your requirements.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, we offer post-launch maintenance, bug fixes, updates, and performance optimization to ensure your app runs smoothly.",
    },
    {
      question: "Do you help with app store submissions?",
      answer:
        "Yes, we assist with the submission process to both the Apple App Store and Google Play Store to ensure a smooth launch.",
    },
    {
      question: "How do you ensure app security?",
      answer:
        "We follow best practices for security, including data encryption, secure code practices, and regular security testing, to protect your app and user data.",
    },
    {
      question: "Can you integrate third-party tools or APIs into my app?",
      answer:
        "Yes, we can integrate third-party tools, APIs, and services like payment gateways, CRMs, analytics tools, and more.",
    },
  ];
  const selfPraise = [
    {
      title: "Custom Solutions",
      description:
        "Every business is unique, and so are our apps. We tailor solutions to fit your specific needs, ensuring your app aligns perfectly with your marketing goals.",
      color: "#D4E157",
    },
    {
      title: "User-Friendly Design",
      description:
        "We create visually appealing and easy-to-navigate applications to provide the best user experience.",
      color: "#4FC3F7",
    },
    {
      title: "Scalable Architecture",
      description:
        "As your business grows, so should your app. We build scalable applications that grow with you.",
      color: "#FF8A65",
    },
    {
      title: "Expert Developers",
      description:
        "Our team comprises industry experts with years of experience in mobile and web application development.",
      color: "#FFEE58",
    },
    {
      title: "End-to-End Services",
      description:
        "From idea and design to development, testing, and deployment, we handle everything effortlessly.",
      color: "#FFEE65",
    },
    {
      title: "On-Time Delivery",
      description:
        "We ensure timely delivery without compromising on quality, so your app launches on schedule.",
      color: "#42A5F5",
    },
  ];

  const servicesData = [
    {
      title: "Mobile App Development",
      description:
        "We specialize in creating cutting-edge mobile applications customized to your business needs. Our team ensures smooth performance, easy navigation, and a superior user experience for your target audience.",
      details: [
        "Tailored Solutions: We build apps designed to meet your unique business goals and user requirements.",
        "Native Development: High-performance apps for iOS and Android, built using platform-specific technologies like Swift and Kotlin.",
        "Cross-Platform Options: Cost-effective solutions using frameworks like Flutter and React Native to reach users on both iOS and Android.",
        "Progressive Web Apps: Enhance accessibility and engagement with PWAs that offer offline functionality and push notifications.",
      ],
      conclusion:
        "Whether native or cross-platform, our mobile app development services help you connect with your audience effectively and grow your business.",
      img: "services/AppDevelopment.jpg",
    },
    {
      title: "Web Application Development",
      description:
        "We design and develop web applications to streamline processes, engage users, and drive growth through customized solutions.",
      details: [
        "Custom Web Apps: Fully tailored web applications that meet your business needs with scalability and security.",
        "E-commerce Platforms: Develop secure, user-friendly online stores with features like inventory management and payment gateways.",
        "CRM & CMS Development: Build or customize CRM and CMS systems for better data and content management.",
        "Performance Optimization: Ensure fast-loading, highly efficient web applications for superior user experiences.",
      ],
      conclusion:
        "Our web application development services help your business achieve operational efficiency and deliver value to your customers.",
      img: "services/webDevelopment.jpg",
    },
    {
      title: "UI/UX Design",
      description:
        "A beautiful, user-friendly design can make or break your app. Our UI/UX design services focus on delivering intuitive and visually engaging digital experiences that keep users coming back.",
      details: [
        "Wireframing & Prototyping: Visualize app structures and user flows with detailed prototypes before development.",
        "User Experience (UX) Enhancement: Optimize navigation, usability, and retention rates through in-depth UX analysis.",
        "Visual Interface Design: Create pixel-perfect, visually appealing designs that align with your brand identity.",
        "User-Centric Approach: Prioritize end-user needs to deliver a seamless and satisfying experience.",
      ],
      conclusion:
        "Our UI/UX designs ensure your digital solutions are both functional and visually engaging, enhancing user satisfaction and brand loyalty.",
      img: "services/uiUx.jpg",
    },
    {
      title: "App Maintenance & Support",
      description:
        "We provide post-launch support to ensure your app runs flawlessly, stays updated, and continues delivering value to users.",
      details: [
        "Bug Fixes: Quickly identify and resolve technical issues for uninterrupted app performance.",
        "Performance Monitoring: Analyze and optimize app performance to ensure reliability and user satisfaction.",
        "Regular Updates: Keep your app secure and aligned with the latest OS and technology standards.",
        "Scalability Support: Adjust and expand app functionality as your business grows.",
      ],
      conclusion:
        "Our maintenance and support services keep your app running smoothly, ensuring long-term success and user satisfaction.",
      img: "services/service.jpg",
    },
    {
      title: "Progressive Web Applications (PWA)",
      description:
        "Progressive Web Apps combine the best of mobile and web. PWAs load like regular web pages but offer app-like functionality, including offline access, push notifications, and home screen installation.",
      details: [
        "Offline Access: Enable functionality even without an internet connection to improve user retention.",
        "Push Notifications: Re-engage users with timely updates and alerts directly from your PWA.",
        "Cross-Platform Compatibility: Provide a seamless experience across browsers and devices without needing app store downloads.",
        "Improved Performance: Deliver fast loading times and responsive experiences to enhance user engagement.",
      ],
      img: "services/Progressive Web Application.jpg",
      conclusion:
        "With PWAs, you can reach your audience efficiently while providing a superior user experience without the need for native app development.",
    },
  ];

  const processSteps = [
    {
      title: "Discovery & Planning",
      description:
        "We begin by understanding your business goals, target audience, and app requirements to create a clear project roadmap.",
    },
    {
      title: "Design & Prototyping",
      description:
        "Our design team creates interactive prototypes and wireframes to visualize the user journey and app functionality.",
    },
    {
      title: "Development",
      description:
        "Using the latest tools and frameworks, our developers build secure applications customized to your needs.",
    },
    {
      title: "Testing",
      description:
        "We rigorously test your app for performance, security, and functionality to ensure a flawless user experience.",
    },
    {
      title: "Launch & Deployment",
      description:
        "We assist with launching your app on relevant platforms and ensure smooth deployment.",
    },
    {
      title: "Post-Launch Support",
      description:
        "After the launch, we provide ongoing maintenance and updates to keep your app performing at its best.",
    },
  ];

  const [sliderRef] = useKeenSlider({
    slides: {
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 15 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 4, spacing: 15 },
      },
    },
  });

  const para = "Transform Your Vision Into Powerful Mobile & Web Application";
  const selfPrasiseContainer = React.useRef<HTMLDivElement>(null);
  const boxInView = useInView(selfPrasiseContainer, { once: true });
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  return (
    <motion.div className="  bg-white" ref={containerRef}>
      <SliderForm setIsFormOpen={setIsFormOpen} isFormOpen={isFormOpen} />
      <motion.div>
        <div className="w-full h-screen overflow-hidden bg-gradient-to-tr from-red-200 from-10% to-[#81C784] relative">
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
              <motion.div key={index} className={`p-6 bg-red-50 rounded-xl`}>
                <div>
                  <h3 className="text-3xl font-Grostek font-[500]">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-Synonym text-lg font-[400]">
                    {service.description}
                  </p>
                  <div className="grid mt-3 lg:grid-cols-2 grid-cols-1 gap-4">
                    <div className=" grid grid-cols-1  gap-4">
                      {service.details.map((detail, id) => (
                        <div
                          key={id}
                          className="flex bg-red-100 border border-slate-200 shadow-sm text-gray-950 rounded-lg px-3 items-start gap-2 py-2"
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
                    <div className="w-full h-[300px] lg:h-[500px] overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-10 !text-red-50">
            {selfPraise.map((item, index) => (
              <motion.div
                animate={{
                  x: boxInView ? "0%" : "100%",
                  y: boxInView ? "0%" : "70%",
                }}
                transition={{ duration: 1.5, ease: [0.175, 0.885, 0.32, 1] }}
                key={index}
                className=" text-slate-950 bg-gray-300 rounded-lg p-5"
              >
                <h2 className="text-3xl pr-10 capitalize font-SplineSans font-[500]">
                  {item.title}
                </h2>
                <p className="mt-3 text-lg font-Grostek">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-20">
        <div>
          {" "}
          <motion.article className="flex container justify-center lg:justify-start items-center gap-3 mx-auto z-[50] flex-wrap">
            {["Our", "App", "Development", "Process"].map((text, index) => (
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
                className={`text-5xl lg:text-6xl leading-[100%] text-black font-Grostek font-[600] tracking-tight`}
              >
                {text}
              </motion.h1>
            ))}
          </motion.article>
        </div>
        <div ref={sliderRef} className="keen-slider mt-4">
          {processSteps.map((slide, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-red-100 p-7 rounded "
            >
              <p className="font-Synonym text-slate-700 font-[500]">
                0{index + 1}
              </p>
              <h2 className="text-2xl font-[600] text-fuchsia-950 font-SplineSans mb-2">
                {slide.title}
              </h2>
              <p className="text-gray-700 ">{slide.description}</p>
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
              Ready to Build Your Dream App?
            </h1>
            <p className="text-center mt-2">
              Let us bring your ideas to life with our expert app development
              services.
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
