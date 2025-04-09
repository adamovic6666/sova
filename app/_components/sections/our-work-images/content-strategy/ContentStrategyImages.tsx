import Image from "next/image";
import React from "react";
import styles from "./ContentStrategyImages.module.css";
const ContentStrategyImages = () => {
  return (
    <div className={`${styles.ContentStrategyImages} panel`}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image
            src="/sadrzaj-drustvene-mreze.png"
            alt="laptop-image"
            fill={true}
          />
        </div>
        <div className={styles.ImagesContainerGridOddWrapper}>
          <div className={styles.ImagesContainerGridOdd}>
            <div>
              <Image src="/vitex-1.webp" alt="vitex-image" fill={true} />
            </div>
            <div>
              s
              <Image src="/vitex-2.png" alt="vitex-image" fill={true} />
            </div>
            <div>
              <Image src="/vitex-3.png" alt="vitex-image" fill={true} />
            </div>
            <div>
              <Image src="/vitex-4.png" alt="vitex-image" fill={true} />
            </div>
          </div>
          <div className={styles.ImagesContainerGridEven}>
            <div>
              <Image src="/vitex-5.png" alt="vitex-image" fill={true} />
            </div>
            <div>
              <Image src="/vitex-6.png" alt="vitex-image" fill={true} />
            </div>
            <div>
              <Image src="/vitex-7.png" alt="vitex-image" fill={true} />
            </div>
            <div>
              <Image src="/vitex-8.png" alt="vitex-image" fill={true} />
            </div>
          </div>
          <div className={styles.ImagesContainerGridOdd}>
            <div>
              {" "}
              <Image src="/vitex-9.png" alt="vitex-image" fill={true} />
            </div>
            <div>
              <Image src="/vitex-10.png" alt="vitex-image" fill={true} />
            </div>
            <div>
              <Image src="/vitex-11.png" alt="vitex-image" fill={true} />
            </div>
            <div>
              {" "}
              <Image src="/vitex-12.png" alt="vitex-image" fill={true} />
            </div>
          </div>
          <div className={styles.ImagesContainerGridEven}>
            <div>
              <Image src="/vitex-13.png" alt="vitex-image" fill={true} />
            </div>
            <div>
              <Image src="/vitex-14.png" alt="vitex-image" fill={true} />
            </div>
            <div>
              <Image src="/vitex-15.png" alt="vitex-image" fill={true} />
            </div>
            <div>
              <Image src="/vitex-16.png" alt="vitex-image" fill={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStrategyImages;
