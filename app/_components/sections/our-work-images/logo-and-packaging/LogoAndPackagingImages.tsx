import React from "react";
import styles from "./LogoAndPackagingImages.module.css";
import Image from "next/image";

const LogoAndPackagingImages = () => {
  return (
    <div className={styles.LogoAndPackagingImages}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image src="/vabo-1.jpg" alt="dizajn-logotipa" fill quality={100} />
        </div>
        <div className={styles.MainImageContainer}>
          <Image src="/vabo-2.jpg" alt="dizajn-logotipa" fill quality={100} />
        </div>
      </div>
      <div className="panel">
        <div className={styles.FullWidthBackground}>
          <div className={styles.ImageOne} />
        </div>
      </div>
    </div>
  );
};

export default LogoAndPackagingImages;
