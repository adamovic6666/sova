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
              src="/mpathy-1.webp"
              alt="website-design"
              fill
              quality={100}
            />
          </div>
          <div className={styles.Flex}>
            <div>
              <Image
                src="/mpathy-2.webp"
                alt="website-design"
                fill
                quality={100}
              />
            </div>
            <div>
              <Image
                src="/mpathy-3.webp"
                alt="website-design"
                fill
                quality={100}
              />
            </div>
            <div>
              <Image
                src="/mpathy-4.webp"
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
              src="/mpathy-5.webp"
              alt="website-design"
              fill
              quality={100}
            />
          </div>
          <div className="container ">
            <div className={styles.BelowDesktopImageContainer}>
              <div className={styles.MainImageContainer}>
                <Image
                  src="/mpathy-6.webp"
                  alt="website-design"
                  fill
                  quality={100}
                />
              </div>
              <div className={styles.FlexBottom}>
                <div>
                  <Image
                    src="/mpathy-7.webp"
                    alt="website-design"
                    fill
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src="/mpathy-8.webp"
                    alt="website-design"
                    fill
                    quality={100}
                  />
                </div>
                <div>
                  <Image
                    src="/mpathy-9.webp"
                    alt="website-design"
                    fill
                    quality={100}
                  />
                </div>
              </div>
              <div className={styles.MainImageContainer}>
                <Image
                  src="/mpathy-10.webp"
                  alt="website-design"
                  fill
                  quality={100}
                />
              </div>
              <div className={styles.MainImageContainer}>
                <Image
                  src="/mpathy-11.webp"
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
