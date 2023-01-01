import CloseBtn from "../CloseBtn/CloseBtn";
import s from "./CompletPay.module.css";

const CompletPay = () => {
  return (
    <div className={s.modal}>
      <div className={s.complete}></div>
      <h3 className={s.title}>Оплата прошла успешно</h3>
      <CloseBtn />
    </div>
  );
};

export default CompletPay;
