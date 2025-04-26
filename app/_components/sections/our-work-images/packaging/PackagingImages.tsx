import React from "react";
import styles from "./PackagingImages.module.css";
import Image from "next/image";
const PackagingImages = () => {
  return (
    <div className={`${styles.PackagingImages} panel`}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image
            src="/trkulja-1.webp"
            alt="dizajn-pakovanja"
            fill
            quality={100}
          />
        </div>
        <div className={styles.MainImageContainer}>
          <Image
            src="/trkulja-2.webp"
            alt="dizajn-pakovanja"
            fill
            quality={100}
          />
        </div>
        <div className={styles.MainImageContainer}>
          <Image
            src="/trkulja-3.webp"
            alt="dizajn-pakovanja"
            fill
            quality={100}
          />
        </div>
        <div className={styles.MainImageContainer}>
          <Image
            src="/trkulja-4.webp"
            alt="dizajn-pakovanja"
            fill
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default PackagingImages;
