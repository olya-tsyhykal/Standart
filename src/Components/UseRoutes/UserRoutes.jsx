import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import PrivateRoute from "./PrivateRoutes";
import Loading from "../Loading/Loading";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../Pages/LoginPage/LoginPage"));
const ProductsPage = lazy(() =>
  import("../../Pages/ProductsPage/ProductsPage")
);
const NotFoundPage = lazy(() =>
  import("../../Pages/NotFoundPage/NotFoundPage")
);
const AddPage = lazy(() => import("../../Pages/AddPage/AddPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/add" element={<AddPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
