import Facebook from "../svg/Facebook";
import Instagram from "../svg/Instagram";
import Linkedin from "../svg/Linkedin";
import styles from "./CompanyDetails.module.css";

const CompanyDetails = () => {
  return (
    <div className={styles.CompanyDetails}>
      <div>
        <p>
          <span>Sova Creative Studio</span>
        </p>
        <p className={styles.CompanyDetailsFlex}>
          <span> Phone:</span>

          <a href="tel:+381-66-234-324">+381-66-234-324</a>
        </p>
        <p className={styles.CompanyDetailsFlex}>
          <span> E-mail:</span>
          <a href="mailto:info@sova.ooo">info@sova.ooo</a>
        </p>
        <p className={styles.CompanyDetailsFlex}>
          <span> Linkedin </span>

          <a
            href="https://www.linkedin.com/company/sova.creative/"
            target="_blank"
          >
            <Linkedin />
          </a>
        </p>
        <p className={styles.CompanyDetailsFlex}>
          <span>Instagram </span>
          <a href="https://www.instagram.com/sova.creative/" target="_blank">
            <Instagram />
          </a>
        </p>
        <p className={styles.CompanyDetailsFlex}>
          <span>Facebook </span>
          <a href="https://www.facebook.com/sova.creative" target="_blank">
            <Facebook />
          </a>
        </p>
      </div>
    </div>
  );
};

export default CompanyDetails;
