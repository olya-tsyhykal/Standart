import { useState } from "react";
import TextField from "../TextField/TextField";
import s from "./AddProductForm.module.scss";

const AddProductForm = ({ onSubmit }) => {
  const categories = [
    "Виберіть категорію...",
    "Товари для дому",
    "Все для прибирання",
    "Товари для риболовлі",
  ];
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");

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
      case "country":
        setCountry(value);
        break;
      default:
        return;
    }
  };

  const hendleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      gallery: link,
      price: Number.parseFloat(price),
      description,
      country,
      category,
    };
    // console.log(data);
    onSubmit(data);

    resetForm();
  };

  const resetForm = () => {
    setCategory("");
    setCountry("");
    setDescription("");
    setLink("");
    setName("");
    setPrice("");
  };

  const optionsCategories = categories.map((category, index) => {
    return (
      <option key={index} value={category}>
        {category}
      </option>
    );
  });

  return (
    <form onSubmit={hendleSubmit} className={s.form}>
      <div className={s.addForm}>
        <h1 className={s.title}>Заповніть інформацію</h1>
        <div className={s.addComponent}>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className={s.select}
          >
            {optionsCategories}
          </select>
        </div>

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
  );
};

export default AddProductForm;
