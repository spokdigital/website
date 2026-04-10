import React from "react";
import Header from "./sections/header";
import HeroSection from "./sections/hero-section";
import Graphics from "./sections/graphics-section";
import TrustSection from "./sections/TrustSection";
import VideoCarousel from "./sections/video-Carousel";
import WhyChooseMasterclassSection from "./sections/why-choose";
import ComparisonSection from "./sections/comparison";
import ProjectsHorizontalScroll from "./sections/projects";
import Testimonial from "./sections/testimonial";
import PricingSection from "./sections/packages";
import CTASection from "./sections/cta";
import BookCallSection from "./sections/form";
import HackFirstFooter from "./sections/footer";

const page = () => {
  return (
    <>
      {/* 1. Navigation */}

      {/* 2. Hook — first impression, value proposition */}
      <HeroSection />

      {/* 3. Visual credibility — eye-catching graphics right after hero */}
      <Graphics />

      {/* 4. Social proof — logos / trust signals while attention is high */}

      {/* 5. Video stories — humanize the brand early */}
      <VideoCarousel />

      {/* 6. Why us — core differentiators after they're warmed up */}
      <WhyChooseMasterclassSection />

      {/* 8. Portfolio — show the work, prove the claims */}
      <ProjectsHorizontalScroll />

      {/* 9. Testimonials — peer validation before asking for money */}

      {/* 10. Pricing — present offer once trust is fully built */}
      <PricingSection />

      {/* 11. CTA banner — urgency nudge before the form */}

      {/* 12. Booking form — final conversion action */}
      <BookCallSection />

      {/* 13. Footer */}
      <HackFirstFooter />
    </>
  );
};

export default page;
