import React from "react";
import styles from "./MonogramLogoImages.module.css";
import Image from "next/image";

const MonogramLogoImages = () => {
  return (
    <div className={`${styles.MonogramLogoImages} panel`}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image src="/toros-img-1.jpg" alt="main-image" fill={true} />
        </div>
        <div className={styles.MainImageContainer}>
          <Image src="/toros-img-2.jpg" alt="main-image" fill={true} />
        </div>
        <div className={styles.Flex}>
          <div>
            <Image src="/toros-img-3.jpg" alt="laptop-image" fill={true} />
          </div>
          <div>
            <Image src="/toros-img-4.jpg" alt="laptop-image" fill={true} />
          </div>
        </div>
        <div className={styles.MainImageContainer}>
          <Image src="/toros-img-5.jpg" alt="main-image" fill={true} />
        </div>
      </div>
    </div>
  );
};

export default MonogramLogoImages;
