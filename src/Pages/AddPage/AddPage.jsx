import AddProductForm from "../../Components/AddProductForm/AddProductForm";
import { addProduct } from "../../Shared/Servises/api";
import { useNavigate } from "react-router-dom";
import s from "./AddPage.module.scss";

const AddPage = () => {
  const navigate = useNavigate();

  const addToProducts = (product) => {
    addProduct(product);
    console.log(product);
    navigate(-1);
  };

  return (
    <div>
      <AddProductForm onSubmit={addToProducts} />
    </div>
  );
};

export default AddPage;
