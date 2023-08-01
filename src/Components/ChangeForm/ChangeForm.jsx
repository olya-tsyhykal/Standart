import { useState } from "react";
import TextField from "../TextField/TextField";

import s from "./ChangeForm.module.scss";

const ChangeForm = ({ onSubmit, id, toggleModal }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const hendleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "link":
        setLink(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        return;
    }
  };

  const hendleSubmit = (event) => {
    event.preventDefault();
    const product = {
      name,
      gallery: link,
      price: parseFloat(price),
      description,
    };
    // console.log(id, product);
    onSubmit(id, product);

    resetForm();
    toggleModal();
  };

  const resetForm = () => {
    setName("");
    setLink("");
    setDescription("");
    setPrice("");
  };
  return (
    <div>
      <form onSubmit={hendleSubmit} className={s.ChangeForm}>
        <div className={s.form}>
          <h1 className={s.title}>Заповніть інформацію</h1>
          <input
            value={name}
            onChange={hendleInputChange}
            name="name"
            placeholder="назва товару"
            required={true}
            type="text"
            className={s.addName}
          />

          <textarea
            value={description}
            onChange={hendleInputChange}
            name="description"
            placeholder="опис продукту"
            required={true}
            type="text"
            autoFocus
            className={s.addDescription}
          />

          <input
            value={link}
            onChange={hendleInputChange}
            name="link"
            placeholder="посилання на товар"
            required={true}
            type="text"
            className={s.addLink}
          />

          <input
            value={price}
            onChange={hendleInputChange}
            name="price"
            placeholder="Введіть вартість"
            required={true}
            type="text"
            className={s.addPrice}
          />
        </div>
        <button type="submit" className={s.add}>
          Додати товар
        </button>
      </form>
    </div>
  );
};

export default ChangeForm;
