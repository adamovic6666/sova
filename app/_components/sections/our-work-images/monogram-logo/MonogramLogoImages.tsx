import React from "react";
import styles from "./MonogramLogoImages.module.css";
import Image from "next/image";

const MonogramLogoImages = () => {
  return (
    <div className={`${styles.MonogramLogoImages} panel`}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image src="/toros-img-1.webp" alt="monogram-logo" fill />
        </div>
        <div className={styles.MainImageContainer}>
          <Image src="/toros-img-2.webp" alt="monogram-logo" fill />
        </div>
        <div className={styles.Flex}>
          <div>
            <Image src="/toros-img-3.webp" alt="monogram-logo" fill />
          </div>
          <div>
            <Image src="/toros-img-4.webp" alt="logo-color-palette" fill />
          </div>
        </div>
        <div className={styles.MainImageContainerBottom}>
          <Image src="/toros-img-5.webp" alt="monogram-logo" fill />
        </div>
      </div>
    </div>
  );
};

export default MonogramLogoImages;
