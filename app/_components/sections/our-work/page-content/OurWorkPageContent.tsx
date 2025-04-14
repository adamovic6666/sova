"use client";

import useGsapScroll from "@/app/_hooks/useGsapScroll";
import OurWork from "../OurWork";
import Contact from "../../contact/Contact";

const OurWorkPageContent = () => {
  useGsapScroll();

  return (
    <main className="main-content">
      <OurWork />
      <Contact />
    </main>
  );
};

export default OurWorkPageContent;
