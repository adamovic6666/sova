import React from "react";
import styles from "./LogoAndPackagingImages.module.css";
import Image from "next/image";

const LogoAndPackagingImages = () => {
  return (
    <div className={styles.LogoAndPackagingImages}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image src="/vabo-1.jpg" alt="main-image" fill={true} />
        </div>
        <div className={styles.MainImageContainer}>
          <Image src="/vabo-2.jpg" alt="main-image" fill={true} />
        </div>
      </div>
      <div className="panel">
        <div className={styles.FullWidthBackground}>
          <div className={styles.ImageOne} />
          <div className={styles.ImageTwo} />
          <div className={styles.ImageThree} />
          <div className={styles.ImageFour} />
        </div>
      </div>
    </div>
  );
};

export default LogoAndPackagingImages;
