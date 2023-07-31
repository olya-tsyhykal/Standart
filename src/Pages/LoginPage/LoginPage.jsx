import { useDispatch } from "react-redux";
import { loginOperation } from "../../Shared/Redux/auth/auth-operations";
import { Navigate } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import useAuth from "../../Shared/hooks/useAuth";
import Backgroundvideo from "../../Shared/video/water.mp4";

import s from "./LoginPage.module.scss";

const LoginPage = () => {
  const dispatch = useDispatch();
  const onLogin = (data) => {
    dispatch(loginOperation(data));
  };
  const isLogin = useAuth();
  if (isLogin) {
    return <Navigate to="/products" />;
  }

  return (
    <div>
      <video autoPlay loop muted className={s.bgVideo}>
        <source src={Backgroundvideo} type="video/mp4" />
      </video>
      <div className={s.bgcolor}>
        <div className={s.loginForm}>
          <h1 className={s.title}>ВХІД</h1>
          <LoginForm onSubmit={onLogin} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
