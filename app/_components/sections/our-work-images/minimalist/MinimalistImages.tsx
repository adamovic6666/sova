import React from "react";
import styles from "./MinimalistImages.module.css";
import Image from "next/image";
const MinimalistImages = () => {
  return (
    <div className={`${styles.MinimalistImages} panel`}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image src="/motechevo-1.webp" alt="logo-dizajn" fill quality={100} />
        </div>
        <div className={styles.Flex}>
          <div>
            <Image
              src="/motechevo-2.webp"
              alt="logo-dizajn"
              fill
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/motechevo-3.webp"
              alt="logo-dizajn"
              fill
              quality={100}
            />
          </div>
        </div>
        <div className={styles.MainImageContainer}>
          <Image src="/motechevo-4.webp" alt="logo-dizajn" fill quality={100} />
        </div>
      </div>
    </div>
  );
};

export default MinimalistImages;
