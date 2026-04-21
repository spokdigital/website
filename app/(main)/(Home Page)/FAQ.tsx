"use client";
import { MessageCircleCode } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "../App chunks/components/Accordion";

const faqs = [
  {
    id: "1",
    q: "What services does Spok Digital offer?",
    a: "We provide end-to-end digital solutions including website design & development, branding, UI/UX design, and performance-driven marketing strategies.",
  },
  {
    id: "2",
    q: "How long does a typical project take?",
    a: "Project timelines vary depending on scope, but most websites are completed within 2–6 weeks.",
  },
  {
    id: "3",
    q: "Do you work with startups or established businesses?",
    a: "We work with both startups and established brands, tailoring our approach to your growth stage.",
  },
  {
    id: "4",
    q: "Will my website be SEO and performance optimized?",
    a: "Yes, we build fast, responsive, and SEO-friendly websites to maximize visibility and conversions.",
  },

  // NEW FAQs 👇

  {
    id: "5",
    q: "What technologies do you use?",
    a: "We use modern technologies like React, Next.js, Tailwind CSS, and scalable backend solutions to ensure performance and flexibility.",
  },
  {
    id: "6",
    q: "Do you provide ongoing support after launch?",
    a: "Yes, we offer maintenance, updates, and performance monitoring to ensure your product keeps running smoothly.",
  },

  {
    id: "8",
    q: "Do you build custom solutions or use templates?",
    a: "We focus on fully custom solutions tailored to your brand and user experience. No generic templates.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full mt-12 mb-16 py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-Cormorant font-[500] text-gray-100 leading-tight">
            Frequently asked <br /> questions
          </h2>

          <div className="w-[80%] h-[1px] bg-white/20 my-6" />

          <p className="text-gray-400 max-w-sm">
            Can't find the answer you're looking for? We're here to help.
          </p>

          <button className="mt-6 flex items-center gap-2 bg-primary text-gray-50 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/80 transition">
            Get in touch
            <span className="text-lg">
              <MessageCircleCode />
            </span>
          </button>
        </div>

        {/* RIGHT SIDE (Accordion) */}

        {/* RIGHT SIDE (Accordion) */}
        <div className="space-y-3">
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <div className="bg-white/5 backdrop-blur rounded-2xl px-6 border border-white/10 mb-4 last:mb-0">
                  <AccordionHeader className="!text-gray-100 font-Grostek !text-lg font-medium py-5 px-0">
                    {faq.q}
                  </AccordionHeader>
                  <AccordionPanel>
                    <p className="text-gray-400 pb-5">{faq.a}</p>
                  </AccordionPanel>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
