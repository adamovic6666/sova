import Image from "next/image";
import React from "react";
import styles from "./ContentStrategyImages.module.css";
const ContentStrategyImages = () => {
  return (
    <div className={`${styles.ContentStrategyImages} panel`}>
      <div className={styles.MainImageContainer}>
        <Image
          src="/sadrzaj-drustvene-mreze.png"
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
                src="/vitex-1.png"
                alt="proizvodnja-sadrzaj-drustvene-mreze"
                fill
              />
            </div>
            <div>
              <Image
                src="/vitex-2.png"
                alt="drustvene-mreze-dizajn-sadrzaj"
                fill
              />
            </div>
            <div>
              <Image src="/vitex-3.png" alt="drustvene-mreze-sadrzaj" fill />
            </div>
            <div>
              <Image
                src="/vitex-4.png"
                alt="proizvodnja-sadrzaj-drustvene-mreze"
                fill
              />
            </div>
          </div>
          <div className={styles.ImagesContainerGridEven}>
            <div>
              <Image
                src="/vitex-5.png"
                alt="drustvene-mreze-proizvodnja-sadrzaj"
                fill
              />
            </div>
            <div>
              <Image
                src="/vitex-6.png"
                alt="drustvene-mreze-proizvodnja-sadrzaj"
                fill
              />
            </div>
            <div>
              <Image
                src="/vitex-07.png"
                alt="drustvene-mreze-proizvodnja-sadrzaj"
                fill
              />
            </div>
            <div>
              <Image
                src="/vitex-8.png"
                alt="drustvene-mreze-proizvodnja-sadrzaj"
                fill
              />
            </div>
          </div>
          <div className={styles.ImagesContainerGridOdd}>
            <div>
              <Image
                src="/vitex-09.png"
                alt="drustvene-mreze-postovi-dizajn"
                fill
              />
            </div>
            <div>
              <Image
                src="/vitex-10.png"
                alt="drustvene-mreze-postovi-dizajn"
                fill
              />
            </div>
            <div>
              <Image
                src="/vitex-11.png"
                alt="drustvene-mreze-postovi-dizajn"
                fill
              />
            </div>
            <div>
              {" "}
              <Image
                src="/vitex-12.png"
                alt="drustvene-mreze-postovi-dizajn"
                fill
              />
            </div>
          </div>
          <div className={styles.ImagesContainerGridEven}>
            <div>
              <Image src="/vitex-13.png" alt="postovi-drustvene-mreze" fill />
            </div>
            <div>
              <Image src="/vitex-14.png" alt="postovi-drustvene-mreze" fill />
            </div>
            <div>
              <Image src="/vitex-015.png" alt="postovi-drustvene-mreze" fill />
            </div>
            <div>
              <Image
                src="/vitex-16.png"
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
