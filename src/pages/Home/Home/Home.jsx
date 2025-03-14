import React from "react";
import Hero from "../../../components/Hero";
import FeaturesSection from "../../../components/FeaturesSection";
import ResumeInsightsSection from "../../../components/ResumeInsightsSection";
import TestimonialSection from "../../../components/TestimonialSection";
import Feature2 from "../../../components/Feature2";

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturesSection />
            <ResumeInsightsSection />
            <TestimonialSection />
            <Feature2 />
        </div>
    );
  // return (
  //   <div>
  //     <Hero></Hero>
  //     <FeaturesSection></FeaturesSection>
  //     <TestimonialSection></TestimonialSection>
  //   </div>
  // );
};

export default Home;
