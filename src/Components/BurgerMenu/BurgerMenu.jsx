import { Outlet, NavLink } from "react-router-dom";
import { FaRegWindowClose } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { BiCategory, BiSolidPhone } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { BsInfoSquare, BsInfoLg } from "react-icons/bs";
import { GrStatusInfo } from "react-icons/gr";
import { MdArrowForwardIos } from "react-icons/md";
import { ReactComponent as Logo } from "../../Shared/Images/Logo svg 1.svg";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import s from "./BurgerMenu.module.scss";

const BurgerMenu = ({ onClose }) => {
  const Modalroot = document.querySelector("#modal-root");

  useEffect(() => {
    window.addEventListener("keydown", hendleKeyDown);
    return () => {
      window.removeEventListener("keydown", hendleKeyDown);
    };
  });

  const hendleKeyDown = (event) => {
    if (event.code === "Escape") {
      onClose();
    }
  };
  const hendleBackDropClick = (event) => {
    // console.log(event.currentTarget);
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.navigatinBurgerMenu} onClick={hendleBackDropClick}>
      <div className={s.contentMenu}>
        <div className={s.loginContainer}>
          <Logo className={s.logoStandart} />
          <FaRegWindowClose
            className={s.closeBurgerMenuButton}
            onClick={onClose}
          />
          <div className={s.login}>
            <NavLink to="/login" className={s.loginNav}>
              <BsPerson className={s.loginBurger} />

              <p className={s.loginText}>Увійти в особистий кабінет</p>
            </NavLink>
            <Outlet />
          </div>
        </div>

        <ul className={s.navBurger}>
          <li className={s.navItemBurger}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div className={s.containerMenu} onClick={onClose}>
                <BsInfoLg className={s.AboutUs} />
                <span className={s.navBurgerMenuText}>Про нас</span>
                <MdArrowForwardIos className={s.arrow} />
              </div>
            </Link>
          </li>
          <li className={s.navItemBurger}>
            <Link
              activeClass="active"
              to="products"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div className={s.containerMenu} onClick={onClose}>
                <BiCategory className={s.catalog} />
                <span className={s.navBurgerMenuText}>Каталог товарів</span>
                <MdArrowForwardIos className={s.arrow} />
              </div>
            </Link>
          </li>
          <li className={s.navItemBurger}>
            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div className={s.containerMenu} onClick={onClose}>
                <BiSolidPhone className={s.phone} />
                <span className={s.navBurgerMenuText}>Контакти</span>
                <MdArrowForwardIos className={s.arrow} />
              </div>
            </Link>
          </li>
        </ul>
        <h4 className={s.socialNetworkTitle}>Соціальні мережі</h4>
        <div className={s.socialNetworkIcons}>
          <BsFacebook className={s.socialNetworkIcon} />
          <BsInstagram className={s.socialNetworkIcon} />
          <BsTelegram className={s.socialNetworkIcon} />
          <FaViber className={s.socialNetworkIcon} />
        </div>
      </div>
    </div>,
    Modalroot
  );
};

export default BurgerMenu;
