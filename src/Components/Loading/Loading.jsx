import s from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={s.spinner}>
      <div className={s.spinnerin}></div>
    </div>
  );
};

export default Loading;
