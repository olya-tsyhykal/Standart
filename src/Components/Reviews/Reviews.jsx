import s from "./Reviews.module.scss";
import Slider from "../Slider/Slider";

const Reviews = () => {
  return (
    <section id="reviews">
      <h2 className={s.title}>Відгуки покупців</h2>
      <Slider />
    </section>
  );
};

export default Reviews;
