import React from "react";
import styles from "./InfographicImages.module.css";
import Image from "next/image";
const InfographicImages = () => {
  return (
    <div className={`${styles.InfographicImages} panel`}>
      <div className="container">
        <div className={styles.InfographicImageContainer}>
          <Image
            src="/infografik-1.jpg"
            alt="infografik-dizajn"
            fill
            quality={100}
          />
        </div>
        <div className={styles.InfographicImageContainer}>
          <Image
            src="/infografik-2.jpg"
            alt="infografik-dizajn"
            fill
            quality={100}
          />
        </div>
        <div className={styles.InfographicImageContainer}>
          <Image
            src="/infografik-3.jpg"
            alt="infografik-dizajn"
            fill
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default InfographicImages;
