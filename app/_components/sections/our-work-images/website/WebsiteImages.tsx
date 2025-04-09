import React from "react";
import styles from "./WebsiteImages.module.css";
import Image from "next/image";
const WebsiteImages = () => {
  return (
    <div className={`${styles.WebsiteImages} panel`}>
      <div className="container">
        <div className={styles.MainImage}>
          <Image src="/trkulja-web-1.png" alt="laptop-image" fill={true} />
        </div>
        <div className={styles.MainImageContainer}>
          <Image src="/trkulja-web-2.png" alt="main-image" fill={true} />
        </div>
        <div className={styles.Flex}>
          <div>
            <Image src="/trkulja-web-3.png" alt="main-image" fill={true} />
          </div>
          <div>
            <Image src="/trkulja-web-4.png" alt="main-image" fill={true} />
          </div>
          <div>
            <Image src="/trkulja-web-5.png" alt="main-image" fill={true} />
          </div>
        </div>
        <div className={styles.MainImageContainer}>
          <Image src="/trkulja-web-6.png" alt="main-image" fill={true} />
        </div>
      </div>
    </div>
  );
};

export default WebsiteImages;
