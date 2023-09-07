import { nanoid } from "nanoid";
import UserMenu from "../../Components/UserMenu/UserMenu";
import s from "./ProductsPage.module.scss";
import Modal from "../../Components/Modal/Modal";
import ChangeForm from "../../Components/ChangeForm/ChangeForm";
import {
  getProducts,
  delProduct,
  changeProduct,
} from "../../Shared/Servises/api";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
// import { Outlet, NavLink } from "react-router-dom";

import Footer from "../../Components/Footer/Footer";
import ModalDelProduct from "../../Components/ModalDelProduct/ModalDelProduct";
import AddProductForm from "../../Components/AddProductForm/AddProductForm";
import { addProduct } from "../../Shared/Servises/api";

const ProductsPage = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowDel, setIsShowDel] = useState(false);
  const [isShowAdd, setIsShowAdd] = useState(false);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchInfo, setSearchInfo] = useState({});

  useEffect(() => {
    const productsItems = async () => {
      const data = await getProducts(page);

      setData((prevstate) => [...prevstate, ...data]);
    };
    productsItems();
  }, [page]);

  // const productsItems = async () => {
  //   const data = await getProducts(page);
  //   console.log(data);
  //   setData([...data]);
  // };
  const toggleModal = () => {
    setIsShow(!isShow);
  };
  const toggleModalDel = () => {
    setIsShowDel(!isShowDel);
  };
  const toggleModalAdd = () => {
    setIsShowAdd(!isShowAdd);
  };

  const findDetails = (event) => {
    const findInfo = data.find((item) => item.id === event.currentTarget.id);
    setSearchInfo(findInfo);
  };

  const deleteProduct = (id) => {
    delProduct(id);
    const removeProduct = data.filter((item) => item.id !== id);
    setData(removeProduct);
  };
  const onSubmit = (id, product) => {
    changeProduct(id, product);
  };

  const onClickLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const addToProducts = (product) => {
    addProduct(product);

    const productsItems = async () => {
      const data = await getProducts(page);

      setData(data);
    };
    setTimeout(() => {
      productsItems();
    }, 400);
  };

  const productItem = data?.map(
    ({ id, gallery, name, category, price, description }) => (
      <li
        className={s.productItem}
        key={nanoid()}
        id={id}
        onClick={findDetails}
      >
        <div className={s.itemContainer}>
          <p className={s.name}>{name}</p>
          <p className={s.description}>{description}</p>
          <div className={s.imgContainer}>
            <img className={s.image} src={gallery} alt={name} id={id} />
            <div className={s.priceContainer}>
              <p className={s.price}>{price} грн.</p>
              <p className={s.category}>{category}</p>

              <BiSolidEdit
                className={s.editProduct}
                id={id}
                onClick={toggleModal}
              />

              <FaTrash
                className={s.deleteProduct}
                onClick={toggleModalDel}
                // onClick={() => deleteProduct(id)}
              />
            </div>
          </div>
        </div>
      </li>
    )
  );
  const { id } = searchInfo;

  return (
    <div className={s.bgcolor}>
      <UserMenu />
      <div className={s.bgContainer}>
        <h1 className={s.title}>Додавайте товари та редагуйте асортимент</h1>
        {/* <NavLink to="/add"> */}
        <button
          type="button"
          className={s.addProductButton}
          onClick={toggleModalAdd}
        >
          <AiOutlinePlusCircle className={s.plusButton} />
          <span>Додати новий товар</span>
        </button>
        {isShowAdd && (
          <Modal onClose={toggleModalAdd}>
            <AddProductForm
              onSubmit={addToProducts}
              toggleModal={toggleModalAdd}
            />
          </Modal>
        )}
        {/* </NavLink> */}
        {/* <Outlet /> */}
        <h2 className={s.listProductsTitle}>Список товарів</h2>
        <div className={s.headerProducts}>
          <p className={s.headerProductsTitle}>Назва</p>
          <p className={s.headerProductsTitle}>Опис</p>
          <p className={s.headerProductsTitle}>Вартість</p>
          <p className={s.headerProductsTitle}>Категорія</p>
          <p className={s.headerProductsTitle}>Редагувати</p>
        </div>
        <ul className={s.products}>{productItem}</ul>
        <button type="button" className={s.loadMore} onClick={onClickLoadMore}>
          Завантажити ще
        </button>
        {isShow && (
          <Modal onClose={toggleModal}>
            <ChangeForm onSubmit={onSubmit} id={id} toggleModal={toggleModal} />
          </Modal>
        )}
        {isShowDel && (
          <ModalDelProduct
            onClose={toggleModalDel}
            deleteProduct={deleteProduct}
            id={id}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
