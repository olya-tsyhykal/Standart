import { useState } from "react";
import s from "./AddProductForm.module.scss";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";

const AddProductForm = ({ onSubmit, toggleModal }) => {
  const categories = [
    "Виберіть категорію...",
    "Товари для дому",
    "Все для прибирання",
    "Товари для риболовлі",
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const [category, setCategory] = useState("Товари для дому");
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

  const hendleSubmitForm = (event) => {
    // event.preventDefault();
    const data = {
      name,
      gallery: link,
      price: Number.parseFloat(price).toFixed(2),
      description,
      country,
      category,
    };
    // const newData = { id: nanoid(), ...data };
    // setAddData(newData);

    onSubmit(data);

    resetForm();
    reset();
    toggleModal();
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
      <option key={index} value={category} >
        {category}
      </option>
    );
  });

  return (
    <form onSubmit={handleSubmit(hendleSubmitForm)} className={s.form}>
      <div className={s.addForm}>
        <h1 className={s.title}>Заповніть інформацію</h1>
        <div className={s.addComponent}>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className={s.select}
            required
          >
            {optionsCategories}
          </select>
        </div>

        <input
          value={name}
          onChange={hendleInputChange}
          name="name"
          placeholder="Введіть назву товару"
          required={true}
          type="text"
          className={s.addName}
        />

        <textarea
          value={description}
          onChange={hendleInputChange}
          name="description"
          placeholder="Введіть опис товару"
          required={true}
          type="text"
          autoFocus
          className={s.addDescription}
        />

        <input
          value={link}
          onChange={hendleInputChange}
          name="link"
          placeholder="Введіть посилання на товар"
          required={true}
          type="text"
          className={s.addLink}
        />

        <input
          {...register("price", {
            required: "*Поле обов'язкове для заповнення",
            maxLength: {
              value: 20,
              message: "Максимальна довжина 20 символів",
            },
            pattern: /[0-9\.]/,
          })}
          value={price}
          onChange={hendleInputChange}
          name="price"
          placeholder="Введіть вартість"
          type="number"
          className={s.addPrice}
        />
        <div className={s.errors}>
          {errors?.price && (
            <p className={s.error}>
              {errors?.price?.message ||
                "*Не повинен містити інших символів, крім чисел та крапки або коми"}
            </p>
          )}
        </div>
      </div>
      <button type="submit" className={isValid
                            ? s.add
                            : `${s.add} ${s.addDisabled}`} disabled={!isValid}>
        Додати товар
      </button>
    </form>
  );
};

export default AddProductForm;
