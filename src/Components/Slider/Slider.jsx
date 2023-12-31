import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import { AiFillStar } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import s from "./Slider.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import { Value } from "sass";
// import "swiper/scss/pagination";

const Slider = () => {
  const pageWidth = document.documentElement.scrollWidth;
  // console.log(pageWidth);
  return (
    <div className={s.container}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        // pagination={{ clickable: true }}
        className={s.mySwiper}
        slidesPerView={pageWidth <= 400 ? 1.2 : 2.5}
        style={{
          // "--swiper-navigation-color": "#E49A38",
          "--swiper-navigation-size": "20px",
          "zIndex": "0",
          // "--swiper-pagination-bullet-inactive-color": "#999999",
          // "--swiper-pagination-bullet-inactive-opacity": "1",
          // "--swiper-pagination-bullet-size": "16px",
          // "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
      >
        <SwiperSlide>
          <div className={s.cart}>
            <div className={s.nameContainer}>
              <BsPerson className={s.icon} />
              <h4 className={s.name}>Новіков</h4>
            </div>
            <p className={s.date}>12.06.2023</p>
            <div className={s.stars}>
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
            </div>
            <p className={s.review}>
              Я дуже задоволений своїми покупками. Все, що мені було треба,
              знайшов дуже швидко. Власник дуже привітний. Буду рекомендувати
              своїм друзям.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.cart}>
            <div className={s.nameContainer}>
              <BsPerson className={s.icon} />
              <h4 className={s.name}>Гарячов</h4>
            </div>
            <p className={s.date}>01.07.2023</p>
            <div className={s.stars}>
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
            </div>
            <p className={s.review}>
              Вже в п’ятий раз роблю замовлення в цьому магазині. Задоволений
              рівнем сервісу і якістю товарів. Хотів би порекомендувати робити
              додаткові знижки для постійних кліентів. Це було б дуже приємно.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.cart}>
            <div className={s.nameContainer}>
              <BsPerson className={s.icon} />
              <h4 className={s.name}>Горлова</h4>
            </div>
            <p className={s.date}>02.06.2023</p>
            <div className={s.stars}>
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
            </div>
            <p className={s.review}>
              Час від часу купляю тут різні товари в подарунок своєму чоловіку.
              Він дуже полубляє риболовлю. То ж в мене завжди є змога легко і
              зручно вибрати йому щось гарне.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.cart}>
            <div className={s.nameContainer}>
              <BsPerson className={s.icon} />
              <h4 className={s.name}>Білик</h4>
            </div>
            <p className={s.date}>09.07.2023</p>
            <div className={s.stars}>
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
            </div>
            <p className={s.review}>
              Це найкращій магазин для риболовлі в нашому селищі. Дужу вдячний
              за консультацію при купілі прикормки. Супер, дякую!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.cart}>
            <div className={s.nameContainer}>
              <BsPerson className={s.icon} />
              <h4 className={s.name}>Полупан</h4>
            </div>
            <p className={s.date}>18.07.2023</p>
            <div className={s.stars}>
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
              <AiFillStar className={s.star} />
            </div>
            <p className={s.review}>
              Супер магазин. А ще власник - це топовий ігрок в "Деберц". Дякую
              за покупки, нехай щастить!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
