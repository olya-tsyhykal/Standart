import s from "./Order.module.scss";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

const Order = ({ item, deleteOrder, setStateSum, setQuantity }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setQuantity(count);
  }, [count]);

  const increment = () => {
    setCount((prevstate) => prevstate + 1);

    setStateSum((prevstate) => prevstate + item.price);
  };
  const dicrement = () => {
    if (count <= 1) {
      setCount(1);

      return;
    }
    setCount((prevstate) => prevstate - 1);

    setStateSum((prevstate) => prevstate - item.price);
  };
  console.log("count:", count);
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
        <p className={s.price}>{item.price * count} грн</p>
        <FaTrash
          className={s.del}
          onClick={() => {
            // setStateSum((prevstate) => prevstate - item.price * count);

            deleteOrder(item.id);
          }}
        />
      </div>
    </li>
  );
};

export default Order;
