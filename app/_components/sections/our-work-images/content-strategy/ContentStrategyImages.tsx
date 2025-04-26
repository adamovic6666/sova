import Image from "next/image";
import React from "react";
import styles from "./ContentStrategyImages.module.css";
const ContentStrategyImages = () => {
  return (
    <div className={`${styles.ContentStrategyImages} panel`}>
      <div className={styles.MainImageContainer}>
        <Image
          src="/sadrzaj-drustvene-mreze.webp"
          alt="laptop-image"
          fill={true}
        />
      </div>
      <div className={styles.MainImageContainerMobile}>
        <Image
          src="/sadrzaj-drustvene-mreze-crop.webp"
          alt="laptop-image"
          fill={true}
        />
      </div>
      <div className="container">
        <div className={styles.ImagesContainerGridOddWrapper}>
          <div className={styles.ImagesContainerGridOdd}>
            <div>
              <Image
                src="/vitex-1.webp"
                alt="proizvodnja-sadrzaj-drustvene-mreze"
                fill
              />
            </div>
            <div>
              <Image
                src="/vitex-2.webp"
                alt="drustvene-mreze-dizajn-sadrzaj"
                fill
              />
            </div>
            <div>
              <Image src="/vitex-3.webp" alt="drustvene-mreze-sadrzaj" fill />
            </div>
            <div>
              <Image
                src="/vitex-4.webp"
                alt="proizvodnja-sadrzaj-drustvene-mreze"
                fill
              />
            </div>
          </div>
          <div className={styles.ImagesContainerGridEven}>
            <div>
              <Image
                src="/vitex-5.webp"
                alt="drustvene-mreze-proizvodnja-sadrzaj"
                fill
              />
            </div>
            <div>
              <Image
                src="/vitex-6.webp"
                alt="drustvene-mreze-proizvodnja-sadrzaj"
                fill
              />
            </div>
            <div>
              <Image
                src="/vitex-7.webp"
                alt="drustvene-mreze-proizvodnja-sadrzaj"
                fill
              />
            </div>
            <div>
              <Image
                src="/vitex-8.webp"
                alt="drustvene-mreze-proizvodnja-sadrzaj"
                fill
              />
            </div>
          </div>
          <div className={styles.ImagesContainerGridOdd}>
            <div>
              <Image
                src="/vitex-9.webp"
                alt="drustvene-mreze-postovi-dizajn"
                fill
              />
            </div>
            <div>
              <Image
                src="/vitex-10.webp"
                alt="drustvene-mreze-postovi-dizajn"
                fill
              />
            </div>
            <div>
              <Image
                src="/vitex-11.webp"
                alt="drustvene-mreze-postovi-dizajn"
                fill
              />
            </div>
            <div>
              {" "}
              <Image
                src="/vitex-12.webp"
                alt="drustvene-mreze-postovi-dizajn"
                fill
              />
            </div>
          </div>
          <div className={styles.ImagesContainerGridEven}>
            <div>
              <Image src="/vitex-13.webp" alt="postovi-drustvene-mreze" fill />
            </div>
            <div>
              <Image src="/vitex-14.webp" alt="postovi-drustvene-mreze" fill />
            </div>
            <div>
              <Image src="/vitex-15.webp" alt="postovi-drustvene-mreze" fill />
            </div>
            <div>
              <Image
                src="/vitex-16.webp"
                alt="postovi-dizajn-drustvene-mreze"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStrategyImages;
