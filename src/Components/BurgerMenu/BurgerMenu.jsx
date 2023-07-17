import { Outlet, NavLink } from "react-router-dom";
import { FaRegWindowClose } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { BiCategory, BiSolidPhone } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
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
            <NavLink to="/login">
              <BsPerson className={s.loginBurger} />
            </NavLink>
            <Outlet />
            <p className={s.loginText}>Увійти в особистий кабінет</p>
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
              <div className={s.containerMenu}>
                <FcAbout className={s.AboutUs} />
                <span className={s.navBurgerMenuText}>Про нас</span>
                <MdArrowForwardIos className={s.arrow} />
              </div>
            </Link>
          </li>
          <li className={s.navItemBurger}>
            <div className={s.containerMenu}>
              <BiCategory className={s.catalog} />
              <span className={s.navBurgerMenuText}>Каталог товарів</span>
              <MdArrowForwardIos className={s.arrow} />
            </div>
          </li>
          <li className={s.navItemBurger}>
            <div className={s.containerMenu}>
              <BiSolidPhone className={s.phone} />
              <span className={s.navBurgerMenuText}>Контакти</span>
              <MdArrowForwardIos className={s.arrow} />
            </div>
          </li>
        </ul>
      </div>
    </div>,
    Modalroot
  );
};

export default BurgerMenu;
