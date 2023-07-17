import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { FaShoppingCart, FaWindowClose } from "react-icons/fa";
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

const Header = ({ searchProducts, deleteOrder }) => {
  let sum = 0;
  searchProducts.forEach((el) => (sum += Number.parseFloat(el.price)));

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
          <li className={s.nav_item}>Про нас</li>
          <li className={s.nav_item}>Каталог</li>
          <li className={s.nav_item}>Контакти</li>
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
            <h2 className={s.title}>КОРЗИНА</h2>

            {searchProducts.length > 0 ? (
              <div className={s.cartContainer}>
                <ul>
                  {searchProducts?.map((item) => (
                    <Order
                      key={item.id}
                      item={item}
                      deleteOrder={deleteOrder}
                    />
                  ))}
                </ul>
                <p className={s.sum}>Загальна сума: {sum.toFixed(2)} грн.</p>
                <form id="tg" onSubmit={hendleSubmit}>
                  <div className={s.cartForm}>
                    <TextField
                      value={name}
                      onChange={hendleInputChange}
                      {...fields.name}
                    />
                    <TextField
                      value={number}
                      onChange={hendleInputChange}
                      {...fields.number}
                    />
                  </div>
                  <Button type="submit" variant="success">
                    Відправити
                  </Button>
                </form>
              </div>
            ) : (
              <h2 className={s.pusto}>Товари відсутні</h2>
            )}
            <FaWindowClose onClick={toggleModal} className={s.modal__close} />
          </div>
        </Modal>
      )}
    </header>
  );
};

export default Header;
