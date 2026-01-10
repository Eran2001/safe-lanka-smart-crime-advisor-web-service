import React from "react";

import HeroSection from "./components/HeroSection";
import FeatureOverview from "./components/FeatureOverview";
import HowPredictionWorks from "./components/HowPredictionWorks";
import WhoUseSafeLanka from "./components/WhoUseSafeLanka";
import DataSource from "./components/DataSource";
import CallToAction from "./components/CallToAction";
import Services from "./components/Services";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeatureOverview />
      <Services />
      <HowPredictionWorks />
      <WhoUseSafeLanka />
      <DataSource />
      <CallToAction />
    </>
  );
};

export default HomePage;
