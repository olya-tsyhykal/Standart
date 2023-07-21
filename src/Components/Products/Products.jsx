import { nanoid } from "nanoid";
import s from "./Products.module.scss";
import Modal from "../../Components/Modal/Modal";
import { useState } from "react";
import Categories from "../Categories/Categories";

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

  const productItem = filterList?.map(
    ({ id, gallery, name, country, price, category }) => (
      <li className={s.productItem} key={nanoid()} id={id}>
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
    )
  );
  const { id, gallery, name, country, description, price } = searchInfo;
  return (
    <section id="products">
      <h2 className={s.title}>Каталог товарів</h2>
      <Categories chooseCategory={chooseCategory} />
      <input
        type="search"
        name="filter"
        value={filter}
        placeholder="назва товару..."
        onChange={(event) => {
          setFilter(event.target.value);
        }}
        className={s.filter}
      />
      <ul className={s.products}>{productItem}</ul>
      <button type="button" className={s.loadMore} onClick={onClickLoadVore}>
        Загрузити ще
      </button>
      {isShow && (
        <Modal onClose={toggleModal}>
          <h2 className={s.titleModalDetails}>Детальна інформація</h2>
          <img className={s.imageDetails} src={gallery} alt={name} />
          <h2 className={s.name}>{name}</h2>
          <h3 className={s.country}>{country}</h3>
          <p className={s.description}>{description}</p>
          <b className={s.price}>Ціна: {price} грн.</b>
          <div className={s.add_to_card} onClick={findIdProduct} id={id}>
            +
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Products;
