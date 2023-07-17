import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className={s.banerContetntTop}>
          <h1 className={s.title}>Standart+</h1>
          <h2 className={s.slogan}>Зручність. Якість. Вигідна ціна.</h2>
          <p className={s.description}>
            Найкращі товари для вашого дому та риболовлі за найнижчими цінами
          </p>
        </div>
      </div>
      <div className={s.baner}>
        <div className={s.banerContent}>
          <h1 className={s.title}>Standart+</h1>
          <h2 className={s.slogan}>Зручність. Якість. Вигідна ціна.</h2>
          <p className={s.description}>
            Найкращі товари для вашого дому та риболовлі за найнижчими цінами
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
