import LogoWhite from "../../svg/LogoWhite";
import Menu from "../../ui/menu/Menu";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className="container">
        <LogoWhite />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
