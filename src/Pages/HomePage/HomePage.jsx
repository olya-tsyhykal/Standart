import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Products from "../../Components/Products/Products";
import Contacts from "../../Components/Contacts/Contacts";

import { getProducts } from "../../Shared/Servises/api";
import Hero from "../../Components/Hero/Hero";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Reviews from "../../Components/Reviews/Reviews";
import Promotional from "../../Components/Promotional/Promotional";

const HomePage = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [tovar, setTovar] = useState([]);
  const [filteredByCategories, setfilteredByCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [stateSum, setStateSum] = useState(0);

  useEffect(() => {
    const productsItems = async () => {
      const data = await getProducts(page);
      setTovar((prevstate) => [...prevstate, ...data]);
      setfilteredByCategories((prevstate) => [...prevstate, ...data]);
    };
    productsItems();
  }, [page]);

  const findIdProduct = (event) => {
    const findProduct = tovar.find(
      (item) => item.id === event.currentTarget.id
    );
    const dublicate = searchProducts.find(
      (element) => element.product.id === findProduct.id
    );

    if (!dublicate) {
      setSearchProducts((prevstate) => [
        ...prevstate,
        { product: findProduct, count: 1 },
      ]);
    }
    toast.info('Дякуємо! Товар доданий до корзини!', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };
  const deleteOrder = (id) => {
    const delProduct = searchProducts.filter((item) => item.product.id !== id);
    setSearchProducts(delProduct);
  };
  const chooseCategory = (category) => {
    const filteredList = tovar.filter((item) =>
      item.category.toLowerCase().includes(category.toLowerCase())
    );
    setfilteredByCategories(filteredList);
    if (category === "Всі товари") {
      setfilteredByCategories(tovar);
    }
  };
  const onClickLoadVore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header
        searchProducts={searchProducts}
        deleteOrder={deleteOrder}
        stateSum={stateSum}
        setStateSum={setStateSum}
        setSearchProducts={setSearchProducts}
      />
      <Hero />
      <AboutUs />
      <Promotional />
      <Products
        data={filteredByCategories}
        findIdProduct={findIdProduct}
        onClickLoadVore={onClickLoadVore}
        chooseCategory={chooseCategory}
      />
      <Contacts />
      <Reviews />
      <Footer />
    </div>
  );
};

export default HomePage;
