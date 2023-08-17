import { useState } from "react";
import { nanoid } from "nanoid";
import { Outlet, NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { BsPerson, BsCart2 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "../Modal/Modal";
import Order from "../Order/Order";
import { ReactComponent as Logo } from "../../Shared/Images/Logo svg 1.svg";

import { sendMassege } from "../../Shared/Servises/tgAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link, animateScroll as scroll } from "react-scroll";
import { useForm } from "react-hook-form";

const Header = ({
  searchProducts,
  deleteOrder,
  setStateSum,
  setSearchProducts,
}) => {
  const sum = searchProducts.reduce((acc, el) => {
    return acc + el.product.price * el.count;
  }, 0);

  const [cartOpen, setCartOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  // console.log("Name:", name);
  // console.log("Number:", number);
  // console.log(watch("name"));

  const productItem = searchProducts?.map((item) => item.product.name);

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

  const handleSubmitForm = (event) => {
    // event.preventDefault();


    let messege = `<b>Замовлення з сайту!</b>\n`;
    messege += `<b>Ім'я замовника: ${name}</b>\n`;
    messege += `<b>Телефон замовника: ${number}</b>\n`;
    messege += `<b>Список товарів: ${productItem}</b>\n`;
    messege += `<b>Загальна сума замовлення: ${sum} грн.</b>\n`;

    sendMassege(messege);

    resetForm();
    reset();
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

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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

          <Logo className={s.logoStandart} onClick={scrollToTop} />
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
            <BsCart2
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
              <BsCart2 className={s.cartIcon} />
              <h2 className={s.title}>Кошик</h2>
            </div>

            {searchProducts.length > 0 ? (
              <div className={s.cartContainer}>
                <div className={s.headerCart}>
                  <p className={s.headerCartTitle}>Назва</p>
                  <div className={s.headerCartBlock}>
                    <p className={s.headerCartTitle}>Кількість</p>
                    <p className={s.headerCartTitle}>Вартість</p>
                    <p className={s.headerCartTitle}>Видалити</p>
                  </div>
                </div>
                <ul>
                  {searchProducts?.map((item) => (
                    <Order
                      key={nanoid()}
                      item={item.product}
                      count={item.count}
                      deleteOrder={deleteOrder}
                      setStateSum={setStateSum}
                      setSearchProducts={setSearchProducts}
                      searchProducts={searchProducts}
                    />
                  ))}
                </ul>

                <p className={s.contactsTitle}>
                  Вкажіть контактні данні для оформлення
                </p>
                <form id="tg" onSubmit={handleSubmit(handleSubmitForm)}>
                  <div className={s.formContainer}>
                    <div className={s.cartForm}>
                      <label className={s.label}>
                        <input
                          {...register("name", {
                            required: "*Поле обов'язкове для заповнення",
                            maxLength: {
                              value: 20,
                              message: "Максимальна довжина 20 символів"
                            },
                            minLength: {
                              value: 3,
                              message: "Мінімальна довжина 3 символи"
                            },
                            pattern: /^\S+$/,
                          })}
                          value={name}
                          onChange={hendleInputChange}
                          className={s.inputForm}
                          name="name"
                          placeholder="Ім'я"
                          type="text"
                        />
                        <div className={s.errors}>
                          {errors?.name && (
                            <p>
                              {errors?.name?.message ||
                                "*Не повинен містити пробілів, Мінімальна довжина 3 символи та максимальна 20"}
                            </p>
                          )}
                        </div>
                      </label>
                      <label className={s.label}>
                        <input
                          {...register("number", {
                            required: "*Поле обов'язкове для заповнення",
                            maxLength: {
                              value: 19,
                              message: "Максимальна довжина 19 символів"
                            },
                            minLength: {
                              value: 13,
                              message: "Мінімальна довжина 13 символи"
                            },
                            pattern:
                              /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
                          })}
                          value={number}
                          onChange={hendleInputChange}
                          className={s.inputForm}
                          name="number"
                          placeholder="+38 (000) 000 00 00"
                          type="tel"
                        />
                        <div className={s.errors}>
                          {errors?.number && (
                            <p>
                              {errors?.number?.message ||
                                "*Введіть номер телефону в правильному форматі, наприклад +38 (066) 666 66 66"}
                            </p>
                          )}
                        </div>
                      </label>
                    </div>

                    <div className={s.payContainer}>
                      <p className={s.sum}>
                        До сплати: <span>{sum.toFixed(2)} грн</span>
                      </p>
                      <button type="submit" className={isValid ? s.buttonOrder: `${s.buttonOrder} ${s.buttonOrderDisabled}`} disabled={!isValid}>
                        Замовити
                      </button>
                    </div>
                  </div>
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
