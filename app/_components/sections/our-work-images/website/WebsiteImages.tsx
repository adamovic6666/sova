import React from "react";
import styles from "./WebsiteImages.module.css";
import Image from "next/image";
const WebsiteImages = () => {
  return (
    <div className={`${styles.WebsiteImages} panel`}>
      <div className={styles.MainImage}>
        <Image
          src="/trkulja-web-1.png"
          alt="website-fotografije"
          fill
          quality={100}
        />
      </div>
      <div className={styles.MainImageMobile}>
        <Image
          src="/trkulja-web-1-crop.webp"
          alt="website-fotografije"
          fill
          quality={100}
        />
      </div>
      <div className="container">
        <div className={styles.BelowMainImage}>
          <div className={styles.MainImageContainer}>
            <Image
              src="/trkulja-web-2.png"
              alt="website-fotografije"
              fill
              quality={100}
            />
          </div>
          <div className={styles.Flex}>
            <div>
              <Image
                src="/trkulja-web-3.png"
                alt="website-fotografije"
                fill
                quality={100}
              />
            </div>
            <div>
              <Image
                src="/trkulja-web-4.png"
                alt="website-fotografije"
                fill
                quality={100}
              />
            </div>
            <div>
              <Image
                src="/trkulja-web-5.png"
                alt="website-fotografije"
                fill
                quality={100}
              />
            </div>
          </div>
          <div className={styles.MainImageContainer}>
            <Image
              src="/trkulja-web-6.png"
              alt="website-fotografije"
              fill
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteImages;
