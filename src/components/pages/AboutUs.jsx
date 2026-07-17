import React from "react";
import AboutStorySection from "../about/AboutStorySection";
import CareerOpportunities from "../about/CareerOpportunities";
import GovernmentRecognition from "../about/GovernmentRecognition";
import CampusCollab from "../about/CampusCollab";
import CustomerReviewsSection from "../about/CustomerReviewsSection";
import ProcessTimeline from "../about/ProcessTimeline";
import ProcessSection from "../about/ProcessSection";
import Teams from "../about/Teams";
import JourneyHero from "../about/JourneyHero";
import StatsSection from "../about/StatsSection";
import AnimatedGallery from "../about/AnimatedGallery";
import FAQ from "../home/FAQ";
import CredentialsSection from "../about/CredentialsSection";
import CreyoMethod from "../about/CreyoMethod";

function AboutUs() {
  return (
    <>
      <JourneyHero />
      <AboutStorySection />
      <StatsSection />
      <CareerOpportunities />
      <CreyoMethod/>
      <GovernmentRecognition />
      <CredentialsSection/>
      <ProcessTimeline />
      <CampusCollab />
      <ProcessSection />
      <CustomerReviewsSection />
      <Teams />
      <AnimatedGallery />
      <FAQ/>
    </>
  );
}

export default AboutUs;
