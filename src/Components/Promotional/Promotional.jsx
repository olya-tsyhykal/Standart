import React from "react";
import s from "./Promotional.module.scss";
import vudka from "../../Shared/Images/vudka.jpg";

const Promotional = () => {
  return (
    <section id="promotions">
      <h2 className={s.title}>Акційні пропозиції</h2>
      <div className={s.promotionContainer}>
        <h3 className={s.promotionTitle}>ПРОПОЗИЦІЯ МІСЯЦЯ</h3>
        <div className={s.promCard}>
          <img src={vudka} alt="fishing rod" className={s.promotionFoto} />
          <div className={s.prom}>
            <p className={s.description}>
              Купуй вудку за найвигіднішою ціною тільки в нашому магазині. Твій
              правильний вибір.
            </p>
            <div div className={s.priceContainer}>
              <p className={s.oldPrice}>1240 грн</p>
              <p className={s.newPrice}>800 грн</p>
            </div>
          </div>
        </div>
        <div className={s.promFigure}></div>
      </div>
    </section>
  );
};

export default Promotional;
