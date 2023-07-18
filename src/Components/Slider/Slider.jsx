import Carousel from "react-bootstrap/Carousel";
import s from "./Slider.module.scss";

const Slider = () => {
  
  return (
    <div className={s.slider}>
      <Carousel>
        <Carousel.Item interval={2000}>
          <div className={s.cart}>
            <h4 className={s.name}>Юрій Полупан</h4>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={s.cart}>
            <h4 className={s.name}>Олександр Білик</h4>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={s.cart}>
            <h4 className={s.name}>Олександр Новіков</h4>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={s.cart}>
            <h4 className={s.name}>Юрій Гарячев</h4>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={s.cart}>
            <h4 className={s.name}>Михаїл Фесенко</h4>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
