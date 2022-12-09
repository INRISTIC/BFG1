import CloseBtn from "../CloseBtn/CloseBtn";
import s from "./FatalPay.module.css";

const FatalPay = () => {
  return (
    <div className={s.modal}>
      <div className={s.fatal}></div>
      <h3 className={s.title}>Оплата не прошла или была отклонена</h3>
      <CloseBtn />
    </div>
  );
};

export default FatalPay;
