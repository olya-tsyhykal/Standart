import s from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section id="contacts">
      <h2 className={s.title}>Контакти</h2>
      <div className={s.contacts}>
        <div className={s.contactsContainer}>
          <div className={s.adress}>
            <h3 className={s.adressTitle}>Адреса:</h3>
            <p className={s.adressName}>
              Україна, Харківська область, смт. Донець
            </p>
            <p className={s.streetName}>вул. Весняна, 42</p>
          </div>
          <div className={s.telefon}>
            <h3 className={s.telefonTitle}>Контактні телефони:</h3>
            <p className={s.telefonFirst}>
              +38(050)3004406 <span>(дзвінки з 09:00 до 16:00)</span>
            </p>
            <p className={s.telefonSecond}>
              +38(050)3004406 <span>(viber/telegram)</span>
            </p>
          </div>
          <div className={s.email}>
            <h3 className={s.emailTitle}>Електронна пошта:</h3>
            <p className={s.emailAdress}>standart+@gmail.com</p>
          </div>
          <div className={s.time}>
            <h3 className={s.timeTitle}>Часи роботи магазину:</h3>
            <p className={s.dayOfWork}>Пн-Пт 09:00-16:00 </p>
            <p className={s.dayOfWork}>Сб-Нд 09:00-14:00 </p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.0231329040785!2d36.56021527562302!3d49.5029571551321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412759c0cf3f4443%3A0x7e76a63fa0e55615!2z0LLRg9C7LiDQktC10YHQvdGP0L3QsCwg0JTQvtC90LXRhtGMLCDQpdCw0YDQutGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNjQyNTA!5e0!3m2!1suk!2sua!4v1689167168598!5m2!1suk!2sua"
          width="400"
          height="300"
          allowFullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={s.googleMap}
        ></iframe>
      </div>
    </section>
  );
};

export default Contacts;
