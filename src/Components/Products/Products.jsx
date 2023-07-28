import { nanoid } from "nanoid";
import { useMemo } from "react";
import s from "./Products.module.scss";
import Modal from "../../Components/Modal/Modal";
import { useState } from "react";
import Categories from "../Categories/Categories";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Products = ({ data, findIdProduct, onClickLoadVore, chooseCategory }) => {
  const [isShow, setIsShow] = useState(false);
  const [searchInfo, setSearchInfo] = useState({});
  const [filter, setFilter] = useState("");

  const toggleModal = () => {
    setIsShow(!isShow);
  };
  const findDetails = (event) => {
    const findInfo = data.find((item) => item.id === event.currentTarget.id);
    setSearchInfo(findInfo);
  };
  const filterList = data.filter((item) =>
    item.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  const keyId = useMemo(() => nanoid(), []);

  const productItem = filterList?.map(({ id, gallery, name, price }) => (
    <li className={s.productItem} key={id} id={id}>
      <div onClick={toggleModal}>
        <img
          className={s.image}
          src={gallery}
          alt={name}
          id={id}
          onClick={findDetails}
        />
      </div>
      <p className={s.name}>{name}</p>
      <b className={s.price}>{price} грн</b>
      <div className={s.add_to_card} onClick={findIdProduct} id={id}>
        Додати
      </div>
    </li>
  ));
  const { id, gallery, name, description, price } = searchInfo;
  return (
    <section id="products">
      <h2 className={s.title}>Каталог товарів</h2>
      <Categories chooseCategory={chooseCategory} />
      <div className={s.search}>
        <FiSearch className={s.iconSearch} />
        <input
          type="search"
          name="filter"
          value={filter}
          placeholder="пошук товарів..."
          onChange={(event) => {
            setFilter(event.target.value);
          }}
          className={s.filter}
        />
      </div>
      <ul className={s.products}>{productItem}</ul>
      <button type="button" className={s.loadMore} onClick={onClickLoadVore}>
        Загрузити ще
      </button>
      {isShow && (
        <Modal onClose={toggleModal}>
          <div className={s.modalDetails}>
            <AiOutlineClose
              className={s.closeModalDetails}
              onClick={toggleModal}
            />
            <h2 className={s.nameDetails}>{name}</h2>
            <div className={s.detailsContainer}>
              <p className={s.description}>{description}</p>
              <div className={s.priceContainer}>
                <img className={s.imageDetails} src={gallery} alt={name} />

                <p className={s.priceDetails}>
                  Вартість: <span>{price}</span> грн
                </p>
                <div className={s.addDetails} onClick={findIdProduct} id={id}>
                  Додати
                </div>
                <div className={s.priceDetailsDesktopContainer}>
                  <p className={s.priceDetailsDesktop}>
                    Вартість: <span>{price}</span> грн
                  </p>
                  <div
                    className={s.addDetailsDesktop}
                    onClick={findIdProduct}
                    id={id}
                  >
                    Додати
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Products;
