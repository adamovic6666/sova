"use client";
import React from "react";
import Title from "../title/Title";
import { OurWorkData } from "../../_data";
import Image from "next/image";
import styles from "./OurWork.module.css";
import Button from "../button/Button";
import Wave from "../wave/Wave";

const OurWork = () => {
  return (
    <section className={`${styles.OurWork} `}>
      <Wave bgColor="#f0f0f0" />
      <Title tag="h2">
        <span>Our</span>
        <span>work</span>
        <span>Our</span>
        <span>work</span>
      </Title>
      <div className={`${styles.OurWorkGrid} container`}>
        {OurWorkData.map(({ image, alt, title, project }, index) => {
          return (
            <article key={index} className={styles.OurWorkItem}>
              <div>
                <Image src={image} alt={alt} fill={true} />
              </div>
              <Title tag="h3">{title}</Title>
              <p>{project}</p>
            </article>
          );
        })}
      </div>
      <Button onClick={() => {}}>View all projects</Button>
    </section>
  );
};

export default OurWork;
