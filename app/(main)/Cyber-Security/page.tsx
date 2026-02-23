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
import { Plus } from "@phosphor-icons/react";
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
      question: "Why is cybersecurity important for my business?",
      answer:
        "Cybersecurity is critical to protecting your business from data breaches, financial losses, and reputational damage. It ensures the integrity of your systems, safeguards sensitive information, and maintains trust with your customers and stakeholders.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We provide cybersecurity services across a wide range of industries, including healthcare, finance, retail, manufacturing, and government. Our solutions are tailored to meet the specific needs and regulations of each sector.",
    },
    {
      question:
        "How do you ensure my business stays compliant with regulations?",
      answer:
        "We conduct detailed compliance audits and provide guidance on adhering to standards like GDPR, HIPAA, PCI-DSS, and others. We also offer ongoing support to ensure your business remains compliant as regulations evolve.",
    },
    {
      question: "What should I do if my business experiences a cyberattack?",
      answer:
        "Contact us immediately. Our incident response team will work quickly to contain the threat, investigate the breach, and restore your systems. We will also help you develop measures to prevent future incidents.",
    },
    {
      question: "How often should I update my cybersecurity measures?",
      answer:
        "Cybersecurity is an ongoing process. We recommend regular assessments, updates, and employee training to stay ahead of emerging threats. We also provide continuous monitoring and support to keep your systems secure.",
    },
  ];
  const selfPrasiseContainer = React.useRef<HTMLDivElement>(null);
  const boxInView = useInView(selfPrasiseContainer, { once: true });
  const selfPraise = [
    {
      title: "Proactive Threat Management",
      description:
        "We stay ahead of cybercriminals with cutting-edge tools and strategies to detect, prevent, and mitigate threats before they impact your business.",
      color: "#FF5733", // Vibrant orange
    },
    {
      title: "Customized Solutions",
      description:
        "Every organization is unique. We design cybersecurity strategies customized to your industry, size, and specific challenges.",
      color: "#33B5FF", // Bright blue
    },
    {
      title: "24/7 Monitoring",
      description:
        "Our dedicated security experts monitor your systems around the clock to detect and respond to potential threats in real-time.",
      color: "#28A745", // Green for reliability
    },
    {
      title: "Expert Team",
      description:
        "With years of experience and certifications in cybersecurity, our specialists provide unparalleled protection and advice.",
      color: "#FFC107", // Golden yellow for expertise
    },
  ];
  const cybersecurityServices = [
    {
      service: "Risk Assessment and Compliance",
      description: `Our risk assessment and compliance services are designed to identify vulnerabilities within your organization’s systems and processes. We conduct thorough audits to uncover potential risks and ensure your business adheres to relevant industry standards. With a detailed understanding of your unique security needs, we provide actionable recommendations to fortify your defenses and maintain compliance with evolving regulations.`,
      details: [
        "Conducting comprehensive system and network audits.",
        "Identifying and prioritizing vulnerabilities based on risk level.",
        "Ensuring adherence to industry standards such as GDPR, HIPAA, and PCI-DSS.",
        "Providing detailed, actionable recommendations for risk mitigation.",
        "Regularly reviewing and updating compliance protocols to align with new regulations.",
      ],
      img: "services/Risk Assessment.jpg",
    },
    {
      service: "Network Security",
      description: `Our network security solutions focus on protecting your critical infrastructure from cyber threats. We implement advanced firewall management systems, intrusion detection solutions, and secure network architectures to shield your organization from malicious activities. Regular penetration testing and vulnerability assessments are conducted to identify and address weaknesses, ensuring your network remains resilient against ever-changing cyber risks.`,
      details: [
        "Implementing advanced firewall management systems.",
        "Deploying intrusion detection and prevention systems (IDPS).",
        "Designing and implementing secure network architectures.",
        "Performing regular penetration testing to uncover vulnerabilities.",
        "Monitoring network traffic for suspicious activity in real-time.",
        "Applying patches and updates to network devices and software.",
      ],
      img: "services/Network_security.webp",
    },
    {
      service: "Data Protection",
      description: `Data is the lifeblood of any organization, and our data protection services ensure it remains safe from unauthorized access or loss. We offer encryption technologies, secure data storage solutions, and comprehensive backup and disaster recovery plans. Additionally, we specialize in detecting and mitigating insider threats, safeguarding your organization from risks posed by internal actors.`,
      details: [
        "Utilizing encryption technologies for sensitive data.",
        "Implementing secure data storage solutions for both on-premises and cloud environments.",
        "Creating comprehensive backup and disaster recovery plans.",
        "Monitoring for data exfiltration and insider threats.",
        "Conducting data access audits to ensure appropriate permissions.",
        "Supporting compliance with data protection laws and regulations.",
      ],
      img: "services/Data_protection.avif",
    },
    {
      service: "Cloud Security",
      description: `As businesses increasingly move to cloud-based environments, our cloud security services provide the assurance you need to operate securely. We protect platforms like AWS, Azure, and Google Cloud by implementing identity and access management (IAM) solutions, securing configurations, and monitoring for cloud-specific threats. Our team ensures your cloud infrastructure is optimized for both performance and security, allowing you to focus on innovation.`,
      details: [
        "Securing cloud platforms such as AWS, Azure, and Google Cloud.",
        "Implementing robust identity and access management (IAM) solutions.",
        "Configuring cloud environments to eliminate security misconfigurations.",
        "Monitoring and managing cloud-based threats in real-time.",
        "Conducting regular cloud security assessments.",
        "Providing multi-factor authentication (MFA) for enhanced user access control.",
      ],
      img: "services/Cloud-Security.webp",
    },
    {
      service: "Incident Response",
      description: `When a cyberattack occurs, every second counts. Our incident response services provide immediate action plans to contain and mitigate ongoing threats. Through forensic analysis, we identify the root cause of breaches and provide insights to prevent future occurrences. Our post-incident support includes system restoration and strengthening your security measures to minimize downtime and reduce the likelihood of repeat incidents.`,
      details: [
        "Developing and deploying customized incident response plans.",
        "Providing rapid containment of active threats to minimize impact.",
        "Conducting forensic analysis to identify the root cause of breaches.",
        "Offering post-incident reporting and actionable insights.",
        "Restoring systems and data to operational status efficiently.",
        "Conducting lessons-learned reviews to improve future response capabilities.",
      ],
      img: "services/Incident-Response.jpg",
    },
    {
      service: "Employee Training",
      description: `Human error is a leading cause of cybersecurity breaches, which is why we emphasize the importance of employee training. Our cybersecurity awareness programs educate your team on recognizing threats, avoiding phishing scams, and following best practices. By conducting phishing simulations and regular training sessions, we help foster a culture of security within your organization, empowering employees to act as the first line of defense.`,
      details: [
        "Delivering interactive cybersecurity awareness programs for all staff levels.",
        "Conducting phishing simulation tests to evaluate employee readiness.",
        "Teaching best practices for password management and secure browsing.",
        "Offering role-based training tailored to specific job functions.",
        "Providing resources and tools for continuous learning.",
        "Cultivating a company-wide culture of cybersecurity awareness.",
      ],
      img: "services/employees_Training.webp",
    },
  ];
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const para =
    "Cybersecurity is Not Just a Technology Problem—It’s a Business Risk.";

  return (
    <motion.div className="  bg-white" ref={containerRef}>
      <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <motion.div>
        <div className="w-full h-screen overflow-hidden bg-gradient-to-tr from-blue-200 from-10% to-[#81C784] relative">
          <div className="w-full h-full flex relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <BackgroundGradientAnimation
                gradientBackgroundStart="gray"
                gradientBackgroundEnd="cyan"
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

      <div className="mt-10">
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
        <div className="container grid grid-cols-1 gap-6 mt-5">
          {cybersecurityServices.map((service, index) => (
            <div key={index} className="bg-red-50 rounded-lg p-6 ">
              <h2 className="text-2xl font-Grostek font-semibold text-gray-800 mb-3">
                {service.service}
              </h2>
              <p className=" mb-4">{service.description}</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <ul className="flex flex-col gap-3">
                  {service.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="p-3 font-[500] rounded-lg bg-red-100"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="bg-purple-200 w-full h-[300px] lg:h-[500px]">
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
                className=" text-slate-950 rounded-lg p-5 bg-slate-200"
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
