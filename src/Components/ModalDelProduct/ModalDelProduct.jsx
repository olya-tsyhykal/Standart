import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./ModalDelProduct.module.scss";


const ModalDelProduct = ({onClose, deleteProduct, id}) => {
    const Modalroot = document.querySelector("#modal-root");

  useEffect(() => {
    window.addEventListener("keydown", hendleKeyDown);
    return () => {
      window.removeEventListener("keydown", hendleKeyDown);
    };
  });

  const hendleKeyDown = (event) => {
    if (event.code === "Escape") {
      onClose();
    }
  };
  const hendleBackDropClick = (event) => {
    // console.log(event.currentTarget);
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.navigation} onClick={hendleBackDropClick}>
      <div className={s.contentMenu}>
      <h3 className={s.title}>Ви впевнені, що хочете видалити товар?</h3>
      <div className={s.buttonBox}>
            <button type="button" className={s.button} onClick={() => {
                deleteProduct(id);
                onClose();
                }}>Так</button>
            <button type="button" className={s.button} onClick={onClose}>Ні</button>
            </div>
      </div>
    </div>,
    Modalroot
  );
}

export default ModalDelProduct;