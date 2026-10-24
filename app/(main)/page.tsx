import React from "react";
import HeroSection from "../d2c/sections/hero-section";
import Graphics from "../d2c/sections/graphics-section";

import TrustSection from "../d2c/sections/TrustSection";
import VideoCarousel from "../d2c/sections/video-Carousel";
import WhyChooseMasterclassSection from "../d2c/sections/why-choose";
import ProjectsHorizontalScroll from "../d2c/sections/projects";

import BookCallSection from "../d2c/sections/form";
import HackFirstFooter from "../d2c/sections/footer";

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

      <TrustSection />

      {/* 6. Why us — core differentiators after they're warmed up */}
      <WhyChooseMasterclassSection />

      {/* 8. Portfolio — show the work, prove the claims */}
      <ProjectsHorizontalScroll />

      {/* 9. Testimonials — peer validation before asking for money */}

      {/* 10. Pricing — present offer once trust is fully built */}

      {/* 11. CTA banner — urgency nudge before the form */}

      {/* 12. Booking form — final conversion action */}
      <BookCallSection />

      {/* 13. Footer */}
      <HackFirstFooter />
    </>
  );
};

export default page;
