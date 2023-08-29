import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import s from "./Promotional.module.scss";
import vudka from "../../Shared/Images/vudka.jpg";
import motil from "../../Shared/Images/motil.jpg";
import oparish from "../../Shared/Images/oparish.jpg";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const Promotional = () => {
  return (
    <section id="promotions">
      <h2 className={s.title}>Акційні пропозиції</h2>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{ clickable: true }}
        centeredSlides={true}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          // disableOnInteraction: false,
        }}
        loop={true}
        style={{
          "z-index": "0",
        }}
      >
        <SwiperSlide>
        <div className={s.promotionContainer}>
            <h3 className={s.promotionTitle}>ПРОПОЗИЦІЯ МІСЯЦЯ</h3>
            <div className={s.promCard}>
              <img src={vudka} alt="fishing rod" className={s.promotionFoto} />
              <div className={s.prom}>
                <p className={s.description}>
                  Купуй вудку за найвигіднішою ціною тільки в нашому магазині.
                  Твій правильний вибір.
                </p>
                <div div className={s.priceContainer}>
                  <p className={s.oldPrice}>1240 грн</p>
                  <p className={s.newPrice}>800 грн</p>
                </div>
              </div>
            </div>
            <div className={s.promFigure}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={s.promotionContainer}>
            <h3 className={s.promotionTitle}>ПРОПОЗИЦІЯ МІСЯЦЯ</h3>
            <div className={s.promCard}>
              <img src={motil} alt="motil" className={s.promotionFoto} />
              <div className={s.prom}>
                <p className={s.description}>
                  Мотиль - універсальна наживка і чудово працює не тільки
                  взимку, але й для риболовлі і навесні, і восени, і в літній
                  період.
                </p>
                <div div className={s.priceContainer}>
                  <p className={s.oldPrice}>60 грн</p>
                  <p className={s.newPrice}>40 грн</p>
                </div>
              </div>
            </div>
            <div className={s.promFigure}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={s.promotionContainer}>
            <h3 className={s.promotionTitle}>ПРОПОЗИЦІЯ МІСЯЦЯ</h3>
            <div className={s.promCard}>
              <img src={oparish} alt="oparish" className={s.promotionFoto} />
              <div className={s.prom}>
                <p className={s.description}>
                  Опариші – це основа для рибалок на річках і озерах, так само
                  як і велика приманка для мисливців на велику рибу.
                </p>
                <div div className={s.priceContainer}>
                  <p className={s.oldPrice}>80 грн</p>
                  <p className={s.newPrice}>60 грн</p>
                </div>
              </div>
            </div>
            <div className={s.promFigure}></div>
          </div>
        </SwiperSlide>
        </Swiper>
    </section>
  );
};

export default Promotional;
