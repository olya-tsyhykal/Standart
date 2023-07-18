// import Carousel from "react-bootstrap/Carousel";
import { Carousel } from "@trendyol-js/react-carousel";
import s from "./Slider.module.scss";

const Slider = () => {
  const pageWidth = document.documentElement.scrollWidth;
  console.log(pageWidth);
  return (
    <div className={s.container}>
      <Carousel show={pageWidth <= 400 ? 1.5 : 2.5} slide={pageWidth <= 400 ? 1 : 2} swiping={true}>
        <div className={s.cart}>
          <h4 className={s.name}>Polupan Yurii</h4>
        </div>
        <div className={s.cart}>
          <h4 className={s.name}>Olexandr Belik</h4>
        </div>
        <div className={s.cart}>
          <h4 className={s.name}>3</h4>
        </div>
        <div className={s.cart}>
          <h4 className={s.name}>4</h4>
        </div>
        <div className={s.cart}>
          <h4 className={s.name}>5</h4>
        </div>
      </Carousel>
    </div>
    // <div className={s.slider}>
    //   <Carousel>
    //     <Carousel.Item interval={2000}>
    //       <div className={s.cart}>
    //         <h4 className={s.name}>Юрій Полупан</h4>
    //       </div>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <div className={s.cart}>
    //         <h4 className={s.name}>Олександр Білик</h4>
    //       </div>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <div className={s.cart}>
    //         <h4 className={s.name}>Олександр Новіков</h4>
    //       </div>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <div className={s.cart}>
    //         <h4 className={s.name}>Юрій Гарячев</h4>
    //       </div>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <div className={s.cart}>
    //         <h4 className={s.name}>Михаїл Фесенко</h4>
    //       </div>
    //     </Carousel.Item>
    //   </Carousel>
    // </div>
  );
};

export default Slider;
