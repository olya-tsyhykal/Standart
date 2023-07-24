import { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "../Modal/Modal";
import Order from "../Order/Order";
import Button from "react-bootstrap/Button";
import { ReactComponent as Logo } from "../../Shared/Images/Logo svg 1.svg";

import TextField from "../TextField/TextField";
import { fields } from "../TextField/fields";
import { sendMassege } from "../../Shared/Servises/tgAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = ({ searchProducts, deleteOrder }) => {
  const [stateSum, setStateSum] = useState(0);

  useEffect(() => {
    setStateSum(
      searchProducts.reduce((acc, el) => {
        return acc + el.price;
      }, 0)
    );
  }, [searchProducts]);

  console.log(stateSum);

  const [cartOpen, setCartOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  // console.log(searchProducts);

  const productItem = searchProducts?.map((item) => item.name);
  // console.log(productItem);
  const hendleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const hendleSubmit = (event) => {
    event.preventDefault();

    let messege = `<b>Замовлення з сайту!</b>\n`;
    messege += `<b>Ім'я замовника: ${name}</b>\n`;
    messege += `<b>Телефон замовника: ${number}</b>\n`;
    messege += `<b>Список товарів: ${productItem}</b>\n`;
    messege += `<b>Загальна сума замовлення: ${sum} грн.</b>\n`;

    sendMassege(messege);

    resetForm();
    toggleModal();
    toast.success("Дякуємо за замовлення, ми Вам перетелефонуємо !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };
  const toggleBurgerMenu = () => {
    setIsShow(!isShow);
  };
  const toggleModal = () => {
    setCartOpen(!cartOpen);
  };

  // console.log(searchProducts);

  return (
    <header>
      <ToastContainer />
      <div className={s.header}>
        {isShow && <BurgerMenu onClose={toggleBurgerMenu} />}
        <div className={s.logo}>
          <RxHamburgerMenu
            className={s.gamburgerMenu}
            onClick={() => setIsShow(!isShow)}
          />
          <Logo className={s.logoStandart} />
        </div>

        <ul className={s.nav}>
          <li className={s.nav_item}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Про нас
            </Link>
          </li>
          <li className={s.nav_item}>
            <Link
              activeClass="active"
              to="products"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Каталог
            </Link>
          </li>
          <li className={s.nav_item}>
            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Контакти
            </Link>
          </li>
        </ul>

        <div className={s.icons}>
          <div className={s.loginContainer}>
            <NavLink to="/login">
              <BsPerson className={s.login} />
            </NavLink>
            <Outlet />
          </div>
          <div className={s.shoppingCart}>
            <FaShoppingCart
              className={
                cartOpen
                  ? `${s.shoppingCartButton} ${s.active}`
                  : s.shoppingCartButton
              }
              onClick={toggleModal}
            />
            <div className={s.sumOfProducts}>
              <span className={s.sumCart}>{searchProducts.length}</span>
            </div>
          </div>
        </div>
      </div>

      {cartOpen && (
        <Modal onClose={toggleModal}>
          <div className={s.modalContent}>
            <div className={s.titleContainer}>
              <FaShoppingCart className={s.cartIcon} />
              <h2 className={s.title}>Кошик</h2>
            </div>

            {searchProducts.length > 0 ? (
              <div className={s.cartContainer}>
                <ul>
                  {searchProducts?.map((item) => (
                    <Order
                      key={item.id}
                      item={item}
                      deleteOrder={deleteOrder}
                      setStateSum={setStateSum}
                    />
                  ))}
                </ul>
                <p className={s.contactsTitle}>
                  Вкажіть контактні данні для оформлення
                </p>
                <form id="tg" onSubmit={hendleSubmit}>
                  <div className={s.cartForm}>
                    <input
                      value={name}
                      onChange={hendleInputChange}
                      className={s.inputForm}
                      {...fields.name}
                    />
                    <input
                      value={number}
                      onChange={hendleInputChange}
                      className={s.inputForm}
                      {...fields.number}
                    />
                  </div>

                  <p className={s.sum}>До сплати: {stateSum.toFixed(2)} грн.</p>
                  <Button type="submit" variant="success">
                    Замовити
                  </Button>
                </form>
              </div>
            ) : (
              <h2 className={s.pusto}>Товари відсутні</h2>
            )}
            <AiOutlineClose onClick={toggleModal} className={s.modal__close} />
          </div>
        </Modal>
      )}
    </header>
  );
};

export default Header;
