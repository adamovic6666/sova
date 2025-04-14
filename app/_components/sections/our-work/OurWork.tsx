"use client";
import React from "react";
import Title from "../../title/Title";
import { OurWorkData } from "../../../_data";
import Image from "next/image";
import styles from "./OurWork.module.css";
import Button from "../../ui/button/Button";
import Wave from "../../wave/Wave";
import { usePathname } from "next/navigation";
import Link from "next/link";

const OurWork = () => {
  const pathName = usePathname();
  const isOurWorkPage = pathName === "/our-work";
  return (
    <section
      className={`panel ${styles.OurWork} ${
        isOurWorkPage ? styles.OurWorkExpanded : ""
      }`}
      data-bg="white"
    >
      <Wave bgColor="#f0f0f0" />
      <div className={`${styles.OurWorkContainer} container`}>
        <Title tag="h2" flex="column">
          <span>Our</span>
          <span>work</span>
        </Title>
      </div>

      <div className={`${styles.OurWorkGrid} container`}>
        {(isOurWorkPage ? OurWorkData : OurWorkData.slice(0, 8)).map(
          ({ image, alt, title, project, link }) => (
            <article key={image} className={styles.OurWorkItem}>
              <div>
                <Link href={`/our-work/${link}`}>
                  <Image src={image} alt={alt} fill={true} />
                </Link>
              </div>
              <Link href={`/our-work/${link}`}>
                <Title tag="h3">{title}</Title>
              </Link>
              <p>{project}</p>
            </article>
          )
        )}
      </div>

      {!isOurWorkPage && (
        <Button href="/our-work" type="link">
          View all projects
        </Button>
      )}
    </section>
  );
};

export default OurWork;
