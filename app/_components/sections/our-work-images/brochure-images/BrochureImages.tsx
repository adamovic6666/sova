import React from "react";
import styles from "./BrochureImages.module.css";
import Image from "next/image";

const BrochureImages = () => {
  return (
    <div className={`${styles.BrochureImages} panel`}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image src="/cwp-1.jpg" alt="brochure-image" fill quality={100} />
        </div>
        <div className={styles.MainImageContainer}>
          <Image src="/cwp-2.jpg" alt="brochure-image" fill quality={100} />
        </div>
        <div className={styles.MainImageContainer}>
          <Image src="/cwp-3.jpg" alt="brochure-image" fill quality={100} />
        </div>
        <div className={styles.MainImageContainer}>
          <Image src="/cwp-4.jpg" alt="brochure-image" fill quality={100} />
        </div>
      </div>
    </div>
  );
};

export default BrochureImages;
