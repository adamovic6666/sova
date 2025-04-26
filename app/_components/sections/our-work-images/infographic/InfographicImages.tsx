import React from "react";
import styles from "./InfographicImages.module.css";
import Image from "next/image";
const InfographicImages = () => {
  return (
    <div className={`${styles.InfographicImages} panel`}>
      <div className="container">
        <div className={styles.InfographicImageContainer}>
          <Image
            src="/infografika-1.webp"
            alt="infografik-dizajn"
            fill
            quality={100}
          />
        </div>
        <div className={styles.InfographicImageContainer}>
          <Image
            src="/infografika-2.webp"
            alt="infografik-dizajn"
            fill
            quality={100}
          />
        </div>
        <div className={styles.InfographicImageContainer}>
          <Image
            src="/infografika-3.webp"
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
