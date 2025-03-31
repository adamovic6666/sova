"use client";
import React from "react";
import styles from "./WhoWeAre.module.css";
import Title from "../../title/Title";
import Wave from "../../wave/Wave";
import { usePathname } from "next/navigation";

const WhoWeAre = () => {
  const pathName = usePathname();
  const isAboutUsPage = pathName === "/about-us";
  return (
    <section
      className={`panel ${styles.WhoWeAre} ${
        isAboutUsPage ? styles.WhoWeAreExpanded : ""
      }`}
      data-bg="white"
    >
      <Wave bgColor="#131313" />
      <div className={`container`}>
        <Title tag="h2" flex="column">
          <span>Whooo</span>
          <span>We are?</span>
        </Title>
        <p>
          We are Sova Creative Studio, a dynamic and innovative full-service
          creative team based in Serbia, specializing in delivering
          cost-effective solutions across all aspects of visual communications.
          Our experience spans collaborations with some of the world&apos;s
          largest corporations as well as local entrepreneurial start-ups.
          Regardless of scale, we pride ourselves on providing the same
          exceptional level of service, ensuring reliable delivery, on time and
          within budget.
        </p>
        <p>
          We focus on what matters most: creating designs that connect,
          communicate, and make an impact. Whether it&apos;s branding, web
          design, packaging, or digital content, our approach is always
          strategic and purpose-driven, crafted to reflect your brand&apos;s
          unique identity and objectives.
        </p>
        <p>
          At Sova Creative Studio, we don&apos;t just deliver designs - we
          deliver results. Whether you&apos;re launching a new business,
          rebranding, or aiming to engage your audience in innovative ways, we
          work alongside you to create designs that drive success and leave a
          lasting impression.
        </p>
        <p>Our expertise? We make your brand fly!</p>
      </div>
    </section>
  );
};

export default WhoWeAre;
