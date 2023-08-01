import { nanoid } from "nanoid";
import UserMenu from "../../Components/UserMenu/UserMenu";
import s from "./ProductsPage.module.scss";
import Modal from "../../Components/Modal/Modal";
import {
  getProducts,
  changeProduct,
  addProduct,
  delProduct,
} from "../../Shared/Servises/api";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import ChangeForm from "../../Components/ChangeForm/ChangeForm";
import Footer from "../../Components/Footer/Footer";
// import AddProductForm from "../../Components/AddProductForm/AddProductForm";

const ProductsPage = () => {
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchInfo, setSearchInfo] = useState({});
  const [findProduct, setFindProduct] = useState(false);
  console.log(data);

  useEffect(() => {
    const productsItems = async () => {
      const data = await getProducts(page);

      setData((prevstate) => [...prevstate, ...data]);
    };
    productsItems();
  }, [page, findProduct]);

  const toggleModal = () => {
    setIsShow(!isShow);
    // console.log(isShow);
  };
  const findDetails = (event) => {
    const findInfo = data.find((item) => item.id === event.currentTarget.id);
    setSearchInfo(findInfo);
  };
  const onSubmit = (id, product) => {
    changeProduct(id, product);

    // setFindProduct(true);
  };

  const deleteProduct = (id) => {
    delProduct(id);
    setFindProduct(true);
    // console.log(id);
  };

  const onClickLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
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
              <BiSolidEdit className={s.editProduct} />
              <FaTrash
                className={s.deleteProduct}
                onClick={() => deleteProduct(id)}
              />
            </div>
          </div>
        </div>
      </li>
    )
  );

  return (
    <div className={s.bgcolor}>
      <UserMenu />
      <div className={s.bgContainer}>
        <h1 className={s.title}>Додавайте товари та редагуйте асортимент</h1>
        <NavLink to="/add">
          <button type="button" className={s.addProductButton}>
            <AiOutlinePlusCircle className={s.plusButton} />
            <span>Додати новий товар</span>
          </button>
        </NavLink>
        <Outlet />
        <h2 className={s.listProductsTitle}>Список товарів</h2>
        {/* <AddProductForm onSubmit={addToProducts} /> */}
        <ul className={s.products}>{productItem}</ul>
        <button type="button" className={s.loadMore} onClick={onClickLoadMore}>
          Загурзити ще
        </button>
        {/* {isShow && (
        <Modal onClose={toggleModal}>
          <div className={s.modal}>
            <img className={s.imageDetails} src={gallery} alt={name} />
            <p className={s.nameModal}>{name}</p>
            <p className={s.priceModal}>Ціна: {price} грн.</p>
          </div>
          <ChangeForm onSubmit={onSubmit} id={id} toggleModal={toggleModal} />
        </Modal>
      )} */}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
