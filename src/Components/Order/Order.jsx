import s from "./Order.module.scss";
import { FaTrash } from "react-icons/fa";

const Order = ({
  item,
  deleteOrder,
  setSearchProducts,
  searchProducts,
  count,
}) => {
  const increment = () => {
    setSearchProducts(
      searchProducts.map((el) => {
        if (el.product.id === item.id) {
          el.count += 1;
        }
        return el;
      })
    );
  };

  const dicrement = () => {
    const itemProd = searchProducts.find((el) => el.product.id === item.id);
    if (itemProd.count <= 1) {
      return;
    }
    setSearchProducts(
      searchProducts.map((el) => {
        if (el.product.id === item.id) {
          el.count -= 1;
        }
        return el;
      })
    );
  };

  return (
    <li className={s.productItem} id={item.id}>
      <div className={s.imageNameContainer}>
        <img className={s.image} src={item.gallery} alt={item.name} />
        <h2 className={s.name}>{item.name}</h2>
      </div>
      <div className={s.priceContainer}>
        <div className={s.incrementDecrementContainer}>
          <div className={s.plus} onClick={increment}>
            +
          </div>
          <div className={s.plus}>{count}</div>
          <div className={s.plus} onClick={dicrement}>
            -
          </div>
        </div>
        <p className={s.price}>{((item.price * count).toFixed(2))} грн</p>
        <FaTrash
          className={s.del}
          onClick={() => {
            deleteOrder(item.id);
          }}
        />
      </div>
    </li>
  );
};

export default Order;
