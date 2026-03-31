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
import { ArrowUpRight } from "@phosphor-icons/react";
import { BackgroundGradientAnimation } from "../App chunks/components/HeroGradient";
import { Circle, Plus } from "@phosphor-icons/react";
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
      question: "What is the cost of media buying?",
      answer:
        "The cost of media buying depends on various factors, such as the platform, targeting options, campaign duration, and ad format.",
    },
    {
      question:
        "How long does it take to see results from a media buying campaign?",
      answer:
        "The timeline for seeing results can vary based on the campaign objectives and media channels.",
    },
    {
      question: "Do I need a big budget to benefit from media buying?",
      answer:
        "Not necessarily. We offer scalable solutions that cater to businesses of all sizes.",
    },
    {
      question:
        "How do you determine which media channels are right for my business?",
      answer:
        "We start by understanding your business goals, target audience, and budget. We then analyze data and insights to identify the most effective media channels and strategies for reaching your audience.",
    },
    {
      question: "Why is media buying important for my business?",
      answer:
        "Effective media buying ensures that your brand reaches the right audience at the right time and at the best possible cost.",
    },
  ];

  const outdoorAdvertising = [
    {
      title: "1. Billboards",
      description: `Billboards are the most common and recognizable form of outdoor advertising. These large, static advertisements are placed along highways, roadsides, and busy intersections to capture the attention of motorists and pedestrians.`,
      types: [
        "Static Billboards: Traditional billboards with a single image or message displayed.",
        "Digital Billboards: High-tech, digitally updated billboards that can rotate multiple ads or change messages in real-time.",
        "Posters & Bulletins: Smaller, more targeted versions of billboards typically placed on local streets or in neighborhoods.",
      ],
      img: "services/BillBoards.jpg",
    },
    {
      title: "2. Transit Advertising",
      description: `Transit advertising refers to ads placed on various forms of public transportation or at transit locations like bus stops, subway stations, and airports.`,
      types: [
        "Bus & Train Wraps: Full or partial ads wrapped around the exterior of buses, subways, or trains.",
        "Station & Shelter Ads: Ads displayed in train stations, bus shelters, or subway tunnels.",
        "Airport Advertising: Ads placed in airports, including on walls, floors, baggage claim areas, and even on airport shuttles.",
      ],
      img: "services/Transit_Advertising-2.jpg",
    },
    {
      title: "3. Digital Outdoor Advertising",
      description: `Digital outdoor ads use digital technology to display dynamic and interactive content. These can be found in places like shopping malls, city centers, and transportation hubs. They are often large LED screens that can be updated frequently with new content.`,
      types: [
        "Digital Billboards: Large, digital displays along roadsides or highways.",
        "Interactive Kiosks: Digital screens placed in malls, airports, or other public spaces where users can interact with the ad content.",
        "LED Displays: Dynamic and customizable ads, often found in urban settings, where the message can change throughout the day.",
      ],
      img: "services/Digital_Outdoor_Advertising.jpg",
    },
    {
      title: "4. Street Furniture Advertising",
      description: `Street furniture advertising refers to ads placed on items commonly found in public spaces, such as benches, bus shelters, newsstands, and kiosks.`,
      types: [],
    },
    {
      title: "5. Wallscapes & Murals",
      description: `Wallscapes are large advertisements painted or applied to the exterior of buildings. Murals can be a blend of art and advertisement, making them eye-catching and memorable.`,
      types: [],
    },
  ];
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const tvdvertising = [
    {
      title: "1. National TV Advertising",
      description: `National TV advertising involves airing ads on large-scale, nationwide networks. This format is best suited for brands aiming to reach a broad audience across the entire country.`,
      types: [
        "Prime-Time Ads: These are ads aired during the most-watched time slots (typically between 8 PM and 11 PM). While expensive, prime-time spots offer maximum visibility and impact.",
        "Daytime Ads: These are typically aired during the day, often targeting a more specific audience, such as stay-at-home parents or retirees.",
        "Cable TV Ads: These ads air on cable networks and can be more affordable than national broadcast TV. Cable networks can offer targeted demographic reach based on the content type.",
      ],
      img: "services/national_Tv_Advertising.jpg",
    },
    {
      title: "2. Local TV Advertising",
      description: `Local TV advertising targets specific regions, cities, or even neighborhoods. These ads are ideal for businesses looking to connect with their community or serve a specific geographic area.`,
      types: [
        "Regional Network Ads: These ads appear on regional TV stations and may be part of a larger broadcast network, giving you localized exposure while still benefiting from the reach of a big network.",
        "Local Station Ads: These are broadcast on local TV stations in a specific city or market, often focusing on local news or community events.",
      ],
      img: "services/Local TV Advertising.jpg",
    },
    {
      title: "5. TV Sponsorships",
      description: `Sponsorships involve associating your brand with specific programs or events. Instead of purchasing a commercial spot, you "sponsor" a show or event, and your brand is featured throughout the program.`,
      types: [
        "Event Sponsorship: A brand sponsors a high-profile event, such as a major sporting event, awards show, or reality TV program.",
        "Program Sponsorship: A brand can sponsor a particular TV program, receiving a branded segment or mention within the show.",
      ],
      img: "/services/TV Sponsorship.png",
    },
  ];
  const radioAdvertising = [
    {
      title: "1. Traditional Radio Spots",
      description:
        "Traditional radio spots are pre-recorded commercials that are aired during specific time slots on a station. These can range from short 15-second ads to longer 60-second or 90-second spots, depending on the messaging and target audience.",
      types: [
        "30-Second Spot: This is the most common duration for radio ads and is ideal for concise messages, product promotions, or service announcements.",
        "60-Second Spot: Allows more time for storytelling, giving your ad the ability to include music, sound effects, and calls to action.",
        "15-Second Spot: A shorter, punchier ad that’s great for quick messages or limited-time offers.",
      ],
      img: "services/Traditional Radio.jpeg",
    },
    {
      title: "2. Sponsorship and Co-Branding",
      description:
        "Sponsorship involves associating your brand with specific radio programs, events, or segments. It can be a more subtle form of advertising, as your brand is integrated into the content.",
      types: [
        "Program Sponsorship: Your brand becomes the sponsor of a specific radio program or segment, such as a morning show, talk show, or music hour.",
        "Event Sponsorship: Sponsor live events or competitions aired on the radio, such as music festivals, charity drives, or sports broadcasts.",
        "Co-Branding: Collaborate with the radio station to co-create promotional content or special offers that are shared with listeners.",
      ],
      img: "services/Sponsorship & Co-Branding.jpeg",
    },
    {
      title: "3. Jingles & Audio Branding",
      description:
        "Jingles are catchy, musical advertisements that use music and lyrics to create memorable and easily recognizable brand messages. Audio branding uses distinctive sounds and tunes to create a unique auditory identity for your brand.",
      types: [],
    },
    {
      title: "4. Radio Talk Show or Interview Spots",
      description:
        "Radio talk shows and interview spots allow you to feature your brand in a live, conversational context. These segments often involve radio hosts interviewing a spokesperson from your brand, discussing your product or service, or providing insights related to your industry.",
      types: [],
    },
    {
      title: "5. Live Mentions & Endorsements",
      description:
        "This type of advertising involves radio personalities or hosts directly mentioning or endorsing your product during their regular programming. These live mentions can occur within the context of the host's daily conversation or specific promotional segments.",
      types: [],
    },
    {
      title: "6. Digital Radio Advertising",
      description:
        "With the rise of digital radio platforms like Spotify, Pandora, and Apple Music, digital radio advertising has become an increasingly popular way to reach tech-savvy, younger audiences. These platforms offer a mix of audio ads and display ads that can be targeted based on user data.",
      types: [],
    },
  ];
  const newsPaperAdvertising = [
    {
      title: "1. Newspaper Advertising",
      description:
        "Newspapers are a well-established medium for reaching a broad audience. They can be local, regional, or national in scope, allowing businesses to select their target audience based on geographic location, demographics, and the publication’s readership.",
      types: [
        "Display Ads: These ads are typically large and placed throughout the newspaper in specific sections (e.g., classified, sports, lifestyle, etc.).",
        "Classified Ads: Smaller, text-based ads often used for job listings, real estate, and services.",
        "Public Notices: Legal notices or announcements that need to be made public.",
        "Insertions: Printed materials, such as coupons or brochures, placed inside the newspaper.",
      ],
      img: "services/newspaper.jpg",
    },
    {
      title: "2. Magazine Advertising",
      description:
        "Magazines offer a highly targeted platform for print ads, allowing you to reach niche audiences based on their interests. Whether it’s a business magazine, fashion publication, or hobbyist magazine, print ads in magazines often cater to highly engaged, loyal readers.",
      types: [
        "Full-Page Ads: Large ads that take up an entire page and showcase a brand or product with strong visuals and messaging.",
        "Half-Page Ads: Smaller ads that allow you to present a concise message or image.",
        "Quarter-Page Ads: Even more concise ads, ideal for small promotions or announcements.",
        "Advertorials: These are paid advertisements designed to look like editorial content, often blending seamlessly with the magazine’s regular articles.",
      ],
      img: "services/Magazine.jpg",
    },
    {
      title: "3. Direct Mail Advertising",
      description:
        "Direct mail involves sending physical mail pieces directly to individuals’ homes or businesses. These can range from catalogs and brochures to postcards and letters, and they provide a personal touch that digital ads can’t replicate.",
      types: [
        "Postcards: Brief, visually impactful pieces that get straight to the point.",
        "Brochures: Detailed, informative materials showcasing products or services.",
        "Catalogs: Large, comprehensive mailings featuring a brand’s entire product lineup or services.",
        "Letters: Personalized communication often used for special offers, sales, or direct appeals.",
      ],
      img: "services/Mall_Advertising.jpg",
    },
    {
      title: "4. Brochures & Flyers",
      description:
        "Brochures and flyers are often used for promoting events, special offers, or products. They are typically distributed in person, through mail, or placed in public spaces like stores, trade shows, or local businesses.",
      types: [
        "Bi-Fold & Tri-Fold Brochures: Standard formats used for informative, visually engaging designs.",
        "Flyers: Single-page promotional materials that are short and to the point.",
        "Product Catalogs: Larger brochures showcasing your product line in detail.",
      ],
      img: "services/Brochure.jpg",
    },
  ];
  const digiatalMediaBuying = [
    {
      title: "Digital Media Buying",
      description:
        "Digital advertising is a core part of modern media strategies. Our team leverages various digital channels to place targeted ads that drive results.",
      types: [],
    },
    {
      title: "Social Media Advertising",
      description: "",
      types: [
        "Platforms: Facebook, Instagram, LinkedIn, Twitter, TikTok, Pinterest, Snapchat",
        "Services: Ad creation, audience segmentation, bidding strategies, campaign optimization, and reporting",
        "Ad Types: Carousel ads, video ads, display ads, story ads, lead generation ads, etc.",
      ],
      img: "services/socialmedia.jpg",
    },
    {
      title: "Search Engine Marketing (SEM)",
      description: "",
      types: [
        "Platforms: Google Ads, Bing Ads",
        "Services: Keyword research, ad copy creation, bidding strategies, landing page optimization, and continuous performance tracking",
        "Ad Types: Text ads, shopping ads, display ads, retargeting ads",
      ],
      img: "services/Search_Engine_Marketing.jpg",
    },
    {
      title: "Display Advertising",
      description:
        "Services: Creating visually compelling banner ads that appear on websites and apps your audience frequents. Includes strategic placement through Google Display Network and other third-party ad networks.",
      types: [],
    },
    {
      title: "Video Advertising",
      description: "",
      types: [
        "Platforms: YouTube, OTT platforms (e.g., Hulu, Roku), and in-stream ads",
        "Services: Video creation, targeting the right audience, and optimizing video ad placements for higher engagement and conversions.",
        "Ad Types: Skippable ads, non-skippable ads, bumper ads, pre-roll, and in-stream ads.",
      ],
      img: "services/Video_Ads.jpg",
    },
    {
      title: "Programmatic Advertising",
      description:
        "Services: Real-time, automated ad buying that optimizes your budget allocation by using data-driven insights to place ads across multiple digital platforms.",
      types: [],
    },
  ];

  const para =
    "Media buying is More than Just Purchasing AD Space; It's About Getting Your Message Into the Right Hands At the Right Time.";
  return (
    <motion.div className=" bg-white" ref={containerRef}>
      <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <motion.div>
        <div className="w-full h-screen overflow-hidden bg-gradient-to-tr from-blue-200 from-10% to-[#81C784] relative">
          <div className="w-full h-full flex relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <BackgroundGradientAnimation
                gradientBackgroundStart="silver"
                gradientBackgroundEnd="pink"
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
        <div className="grid grid-cols-1 gap-5 container mt-6">
          <h3 className="text-2xl font-Synonym font-[500]">
            Outdoor Advertising
          </h3>
          {outdoorAdvertising.map((category, index) => (
            <div key={index} className="bg-red-50 rounded-lg p-4 bg-purple">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {category.title}
              </h2>
              <p className="">{category.description}</p>

              {category.types.length > 0 && (
                <div className="grid grid-cols-1 mt-5 lg:grid-cols-2 gap-4">
                  <ul className=" flex flex-col gap-2">
                    {category.types.map((type, idx) => (
                      <li key={idx} className="p-3 bg-red-100 rounded-lg">
                        <div className={"flex items-start gap-2"}>
                          <div className={"mt-1"}>
                            <Circle weight="fill" />
                          </div>
                          {type}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full lg:h-[500px] bg-purple-200 h-[300px]">
                    <img
                      src={category.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-5 container mt-6">
          <h3 className="text-2xl font-Synonym font-[500]">TV Advertising</h3>
          {tvdvertising.map((category, index) => (
            <div key={index} className="bg-red-50 rounded-lg p-4 bg-purple">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {category.title}
              </h2>
              <p className="">{category.description}</p>

              {category.types.length > 0 && (
                <div className="grid grid-cols-1 mt-5 lg:grid-cols-2 gap-4">
                  <ul className=" flex flex-col gap-2">
                    {category.types.map((type, idx) => (
                      <li key={idx} className="p-3 bg-red-100 rounded-lg">
                        <div className={"flex items-start gap-2"}>
                          <div className={"mt-1"}>
                            <Circle weight="fill" />
                          </div>
                          {type}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full lg:h-[500px] bg-purple-200 h-[300px]">
                    <img
                      src={category.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-5 container mt-6">
          <h3 className="text-2xl font-Synonym font-[500]">
            Radio Advertising
          </h3>
          {radioAdvertising.map((category, index) => (
            <div key={index} className="bg-red-50 rounded-lg p-4 bg-purple">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {category.title}
              </h2>
              <p className="">{category.description}</p>

              {category.types.length > 0 && (
                <div className="grid grid-cols-1 mt-5 lg:grid-cols-2 gap-4">
                  <ul className=" flex flex-col gap-2">
                    {category.types.map((type, idx) => (
                      <li key={idx} className="p-3 bg-red-100 rounded-lg">
                        <div className={"flex items-start gap-2"}>
                          <div className={"mt-1"}>
                            <Circle weight="fill" />
                          </div>
                          {type}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full lg:h-[500px] bg-purple-200 h-[300px]">
                    <img
                      src={category.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-5 container mt-6">
          <h3 className="text-2xl font-Synonym font-[500]">
            Newspaper Advertising
          </h3>
          {newsPaperAdvertising.map((category, index) => (
            <div key={index} className="bg-red-50 rounded-lg p-4 bg-purple">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {category.title}
              </h2>
              <p className="">{category.description}</p>

              {category.types.length > 0 && (
                <div className="grid grid-cols-1 mt-5 lg:grid-cols-2 gap-4">
                  <ul className=" flex flex-col gap-2">
                    {category.types.map((type, idx) => (
                      <li key={idx} className="p-3 bg-red-100 rounded-lg">
                        <div className={"flex items-start gap-2"}>
                          <div className={"mt-1"}>
                            <Circle weight="fill" />
                          </div>
                          {type}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full lg:h-[500px] bg-purple-200 h-[300px]">
                    <img
                      src={category.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-5 container mt-6">
          <h3 className="text-2xl font-Synonym font-[500]">
            Digital Media Buying
          </h3>
          {digiatalMediaBuying.map((category, index) => (
            <div key={index} className="bg-red-50 rounded-lg p-4 bg-purple">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {category.title}
              </h2>
              <p className="">{category.description}</p>

              {category.types.length > 0 && (
                <div className="grid grid-cols-1 mt-5 lg:grid-cols-2 gap-4">
                  <ul className=" flex flex-col gap-2">
                    {category.types.map((type, idx) => (
                      <li key={idx} className="p-3 bg-red-100 rounded-lg">
                        <div className={"flex items-start gap-2"}>
                          <div className={"mt-1"}>
                            <Circle weight="fill" />
                          </div>
                          {type}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full lg:h-[500px] bg-purple-200 h-[300px]">
                    <img
                      src={category.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
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
              Let’s Get Started!
            </h1>
            <p className="text-center mt-2">
              Ready to supercharge your brand with our media buying expertise?
              Contact us today for a consultation and let us design a tailored
              media buying strategy that drives results.
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
