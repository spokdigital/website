import React from "react";
import Header from "./sections/header";
import HeroSection from "./sections/hero-section";
import BookCallSection from "./sections/form";
import ComparisonSection from "./sections/comparison";
import CTASection from "./sections/cta";
import MarketingSolutions from "./sections/marketing-solutions";
import WhyChooseMasterclassSection from "./sections/why-choose";
import Testimonial from "./sections/testimonial";
import HackFirstFooter from "./sections/footer";
import { ProjectsHorizontalScroll } from "./sections/projects";
import Graphics from "./sections/graphics-section";

const page = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Graphics />
      <ComparisonSection />
      <MarketingSolutions />
      <CTASection />
      <Testimonial />
      <ProjectsHorizontalScroll />
      <WhyChooseMasterclassSection />
      <BookCallSection />
      <HackFirstFooter />
    </>
  );
};

export default page;
