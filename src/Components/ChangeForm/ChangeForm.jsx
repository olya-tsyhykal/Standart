import { useState } from "react";
import { useForm } from "react-hook-form";
import s from "./ChangeForm.module.scss";

const ChangeForm = ({ onSubmit, id, toggleModal }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

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

  const hendleSubmitForm = (event) => {
    // event.preventDefault();
    const product = {
      name,
      gallery: link,
      price: parseFloat(price),
      description,
    };
    // console.log(id, product);
    onSubmit(id, product);
    reset();
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
      <form onSubmit={handleSubmit(hendleSubmitForm)} className={s.ChangeForm}>
        <div className={s.form}>
          <h1 className={s.title}>Заповніть інформацію</h1>
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
            <p>
              {errors?.price?.message ||
                "*Не повинен містити інших символів, крім чисел та крапки або коми"}
            </p>
          )}
        </div>
        </div>
        <button type="submit" className={isValid
                            ? s.add
                            : `${s.add} ${s.addDisabled}`} disabled={!isValid}>
          Змінити товар
        </button>
      </form>
    </div>
  );
};

export default ChangeForm;
