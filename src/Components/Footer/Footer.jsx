import { animateScroll as scroll } from "react-scroll";
import s from "./Footer.module.scss";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className={s.footer} onClick={scrollToTop}>
      Всі права захищені &copy;
    </footer>
  );
};

export default Footer;
