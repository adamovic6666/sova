import React from "react";
import styles from "./IdentityImages.module.css";
import Image from "next/image";
export const IdentityImages = () => {
  return (
    <>
      <div className={`${styles.IdentityImages} panel`}>
        <div className="container">
          <div className={styles.MainImageContainer}>
            <Image src="/mpathy-1.jpg" alt="main-image" fill={true} />
          </div>
          <div className={styles.Flex}>
            <div>
              <Image src="/mpathy-2.jpg" alt="laptop-image" fill={true} />
            </div>
            <div>
              <Image src="/mpathy-3.jpg" alt="laptop-image" fill={true} />
            </div>
            <div>
              <Image src="/mpathy-4.jpg" alt="laptop-image" fill={true} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.IdentityImagesBottom} panel`}>
        <div className={styles.IdentityImagesBottomWrapper}>
          <div className={styles.DesktopImageContainer}>
            <Image src="/mpathy-5.png" alt="main-image" fill={true} />
          </div>
          <div className="container">
            <div className={styles.MainImageContainer}>
              <Image src="/mpathy-6.png" alt="main-image" fill={true} />
            </div>
            <div className={styles.FlexBottom}>
              <div>
                <Image src="/mpathy-7.png" alt="laptop-image" fill={true} />
              </div>
              <div>
                <Image src="/mpathy-8.png" alt="laptop-image" fill={true} />
              </div>
              <div>
                <Image src="/mpathy-9.png" alt="laptop-image" fill={true} />
              </div>
            </div>
            <div className={styles.MainImageContainer}>
              <Image src="/mpathy-10.png" alt="main-image" fill={true} />
            </div>
            <div className={styles.MainImageContainer}>
              <Image src="/mpathy-11.png" alt="main-image" fill={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
