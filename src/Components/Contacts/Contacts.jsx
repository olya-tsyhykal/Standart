import s from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.0231329040785!2d36.56021527562302!3d49.5029571551321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412759c0cf3f4443%3A0x7e76a63fa0e55615!2z0LLRg9C7LiDQktC10YHQvdGP0L3QsCwg0JTQvtC90LXRhtGMLCDQpdCw0YDQutGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNjQyNTA!5e0!3m2!1suk!2sua!4v1689167168598!5m2!1suk!2sua"
        width="400"
        height="300"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={s.googleMap}
      ></iframe>
    </div>
  );
};

export default Contacts;
