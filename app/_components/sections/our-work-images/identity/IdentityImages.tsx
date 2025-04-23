import React from "react";
import styles from "./IdentityImages.module.css";
import Image from "next/image";
export const IdentityImages = () => {
  return (
    <div className="panel">
      <div className={styles.IdentityImages}>
        <div className="container">
          <div className={styles.MainImageContainerTop}>
            <Image
              src="/mpathy-1.jpg"
              alt="website-design"
              fill
              quality={100}
            />
          </div>
          <div className={styles.Flex}>
            <div>
              <Image
                src="/mpathy-2.jpg"
                alt="website-design"
                fill
                quality={100}
              />
            </div>
            <div>
              <Image
                src="/mpathy-3.jpg"
                alt="website-design"
                fill
                quality={100}
              />
            </div>
            <div>
              <Image
                src="/mpathy-4.jpg"
                alt="website-design"
                fill
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.IdentityImagesBottom}>
        <div className={styles.IdentityImagesBottomWrapper}>
          <div className={styles.DesktopImageContainer}>
            <Image
              src="/mpathy-5.png"
              alt="website-design"
              fill
              quality={100}
            />
          </div>
          <div className="container ">
            <div className={styles.BelowDesktopImageContainer}>
              <div className={styles.MainImageContainer}>
                <Image
                  src="/mpathy-6.png"
                  alt="website-design"
                  fill
                  quality={100}
                />
              </div>
              <div className={styles.FlexBottom}>
                <div>
                  <Image
                    src="/mpathy-7.png"
                    alt="website-design"
                    fill
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src="/mpathy-8.png"
                    alt="website-design"
                    fill
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src="/mpathy-9.png"
                    alt="website-design"
                    fill
                    quality={100}
                  />
                </div>
              </div>
              <div className={styles.MainImageContainer}>
                <Image
                  src="/mpathy-10.png"
                  alt="website-design"
                  fill
                  quality={100}
                />
              </div>
              <div className={styles.MainImageContainer}>
                <Image
                  src="/mpathy-11.png"
                  alt="website-design"
                  fill
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
