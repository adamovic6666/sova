"use client";
import React from "react";
import Title from "../../title/Title";
import { OurWorkData } from "../../../_data";
import Image from "next/image";
import styles from "./OurWork.module.css";
import Button from "../../ui/button/Button";
import Wave from "../../wave/Wave";

const OurWork = () => {
  return (
    <section className={`panel ${styles.OurWork}`} data-bg="white">
      <Wave bgColor="#f0f0f0" />
      <div className={`${styles.OurWorkContainer} container`}>
        <Title tag="h2" flex="column">
          <span>Our</span>
          <span>work</span>
        </Title>
      </div>

      <div className={`${styles.OurWorkGrid} container`}>
        {OurWorkData.map(({ image, alt, title, project }, index) => (
          <article key={index} className={styles.OurWorkItem}>
            <div>
              <Image src={image} alt={alt} fill={true} />
            </div>
            <Title tag="h3">{title}</Title>
            <p>{project}</p>
          </article>
        ))}
      </div>

      <Button href="/projects" type="link">
        View all projects
      </Button>
    </section>
  );
};

export default OurWork;
