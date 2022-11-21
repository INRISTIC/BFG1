import s from "./ConnectWithUs.module.css";

const ConnectWithUs = () => {
  return (
    <div className={s.connestWithUs}>
      <div>Связь с нами</div>
      <button className={s.connestBtn}>Перейти в бота</button>
      <button className={s.connestBtn}>@username</button>
    </div>
  );
};

export default ConnectWithUs;
