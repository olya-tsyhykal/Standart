import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const PrivateRoute = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
 
  if (isLogin) {

    return <Outlet />;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;
