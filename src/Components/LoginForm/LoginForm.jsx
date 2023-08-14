import { useState } from "react";
import TextField from "../TextField/TextField";
import { fields } from "../TextField/fields";
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
      
        <TextField
          value={email}
          onChange={hendleInputChange}
          {...fields.email}
          className={s.formInput}
        />
        <div className={s.formText}>
          введіть корректний emil. Наприклад - polupan@mail.com
        </div>
        
        <TextField
          value={password}
          onChange={hendleInputChange}
          {...fields.password}
          className={s.formInput}
        />
        <div className={s.formText}>
          cannot be less than 8 characters and must contain at least one number,
          one lowercase, and one uppercase Latin letter. For example -
          Butterfly01
        </div>
      </div>
      <button type="submit" className={s.button}>
        Увійти в особистий кабінет
      </button>
    </form>
  );
};

export default LoginForm;
