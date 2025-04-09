"use client";
import React from "react";
import useGsapScroll from "@/app/_hooks/useGsapScroll";
import OtherProjects from "../../other-projects/OtherProjects";
import Title from "@/app/_components/title/Title";
import Contact from "../../contact/Contact";
import OurSingleWorkHero from "../../hero/single-work-hero/OurSingleWorkHero";
import ContentStrategyImages from "../../our-work-images/content-strategy/ContentStrategyImages";
import AddCampaignImages from "../../our-work-images/add-campaign/AddCampaignImages";
import MonogramLogoImages from "../../our-work-images/monogram-logo/MonogramLogoImages";
import BrochureImages from "../../our-work-images/brochure-images/BrochureImages";
import { IdentityImages } from "../../our-work-images/identity/IdentityImages";
import WineImages from "../../our-work-images/vine-images/WineImages";
import VideoProductionImages from "../../our-work-images/video-production/VideoProductionImages";
import VehicleBrandingImages from "../../our-work-images/vehicle-branding/VehicleBrandingImages";
import PackagingImages from "../../our-work-images/packaging/PackagingImages";
import MinimalistImages from "../../our-work-images/minimalist/MinimalistImages";
import EventDisplayImages from "../../our-work-images/event-display/EventDisplayImages";
import SpiritLabelImages from "../../our-work-images/spirit-label/SpiritLabelImages";
import InfographicImages from "../../our-work-images/infographic/InfographicImages";
import LogoAndPackagingImages from "../../our-work-images/logo-and-packaging/LogoAndPackagingImages";
import WebsiteImages from "../../our-work-images/website/WebsiteImages";
import ContentCreationImages from "../../our-work-images/content-creation/ContentCreationImages";
import { OurWork } from "@/app/_types";

const SingleWork = ({
  pageTitle,
  sectionTitle,
  sectionText,
  project,
  otherProjects,
  title,
  panel,
}: {
  pageTitle?: string[];
  sectionTitle?: string;
  sectionText?: string;
  project?: string;
  otherProjects: OurWork[];
  title?: string;
  panel?: boolean;
}) => {
  useGsapScroll();
  return (
    <main>
      <OurSingleWorkHero
        pageTitle={pageTitle}
        sectionTitle={sectionTitle}
        sectionText={sectionText}
        project={project}
        panel={panel}
      />
      {title === "Content strategy" && <ContentStrategyImages />}
      {title === "Add campaign" && <AddCampaignImages />}
      {title === "Monogram logo" && <MonogramLogoImages />}
      {title === "Brochure" && <BrochureImages />}
      {title === "Identity & Website" && <IdentityImages />}
      {title === "Wine Label" && <WineImages />}
      {title === "Video production" && <VideoProductionImages />}
      {title === "Vehicle branding" && <VehicleBrandingImages />}
      {title === "Packaging" && <PackagingImages />}
      {title === "Minimalist logo" && <MinimalistImages />}
      {title === "Event display" && <EventDisplayImages />}
      {title === "Spirit label" && <SpiritLabelImages />}
      {title === "Infographic" && <InfographicImages />}
      {title === "Logo & packaging" && <LogoAndPackagingImages />}
      {title === "Website" && <WebsiteImages />}
      {title === "Content creation" && <ContentCreationImages />}

      <OtherProjects otherProjects={otherProjects} />
      <Contact>
        <Title tag="h2" flex="column">
          <span>Need</span>
          <span>a quote!</span>
        </Title>
      </Contact>
    </main>
  );
};

export default SingleWork;
