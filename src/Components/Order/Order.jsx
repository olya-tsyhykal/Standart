import s from "./Order.module.scss";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

const Order = ({ item, deleteOrder }) => {
  const [state, setState] = useState(1);
  // const [sumArray, setSumArray] = useState([]);

  const increment = () => {
    setState((prevstate) => prevstate + 1);
    // const newPrice = state * price;
    // console.log(newPrice);
    // setSumArray((prevstate) => [...prevstate, newPrice]);
  };
  const dicrement = () => {
    if (state <= 1) {
      setState(1);
      return;
    }
    setState((prevstate) => prevstate - 1);
  };
  // console.log(sumArray);
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
          <div className={s.plus}>{state}</div>
          <div className={s.plus} onClick={dicrement}>
            -
          </div>
        </div>
        <p className={s.price}>{item.price * state} грн</p>
        <FaTrash className={s.del} onClick={() => deleteOrder(item.id)} />
      </div>
    </li>
  );
};

export default Order;
