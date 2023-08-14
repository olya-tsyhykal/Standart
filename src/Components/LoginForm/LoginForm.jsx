import { useState } from "react";

import s from "./LoginForm.module.scss";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hendleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const hendleSubmit = (event) => {
    event.preventDefault();
    const dataUser = {
      email,
      password,
    };

    onSubmit(dataUser);

    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={hendleSubmit} className={s.loginForm}>
      <div className={s.form}>
        <div className={s.formItem}>
          <input
            value={email}
            onChange={hendleInputChange}
            className={s.formInput}
            type="email"
            name="email"
            id="email"
            required
            pattern="\S+@[a-z]+\.[a-z]+"
            title="The email must contain only Latin lowercase letters, @ and  a dot without spacesю  For example - barbos@mail.com"
          />
          <label className={s.formLabel} htmlFor="email">
            Email
          </label>
          <p className={s.formText}>
            *введіть корректний emil. Наприклад - barbos@gmail.com
          </p>
        </div>
        <div className={s.formItem}>
          <input
            value={password}
            onChange={hendleInputChange}
            className={s.formInput}
            type="password"
            name="password"
            id="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="The password cannot be less than 8 characters and must contain at least one number, one lowercase, and one uppercase Latin letter. For example - Butterfly01"
          />
          <label className={s.formLabel} htmlFor="password">
            Password
          </label>
          <p className={s.formText}>
            *не може бути менше 8 символів, має містити <br />принаймні одне число,
            одну малу і одну велику <br />латинську літеру. Наприклад - Butterfly01
          </p>
        </div>
      </div>
      <button type="submit" className={s.button}>
        Увійти в особистий кабінет
      </button>
    </form>
  );
};

export default LoginForm;
