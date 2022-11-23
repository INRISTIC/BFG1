import s from "./DonatQiwi.module.css";

import { useSelector, useDispatch } from "react-redux";
import { donatWay } from "../../../../../store/slices/sliceDonat";

const DonatQiwi = () => {
  const donat = useSelector((state) => state.donat);
  const dispatch = useDispatch();

  const donatCard = donat.donatCard;
  const donatQiwi = donat.donatQiwi;
  const donatMoney = donat.donatMoney;

  const onBack = () => {
    dispatch(
      donatWay({
        donatWay: true,
        donatCard: { ...donatCard, status: false },
        donatQiwi: { ...donatQiwi, status: false },
        donatMoney: { ...donatMoney, status: false },
      })
    );
  };

  return (
    <div className={s.donatBlock}>
      <button onClick={onBack}>Back</button>
      <div className={s.subTitle}>Заполните все поля</div>
      <div className={s.bankCard}>
        <img src="" alt="" className={s.bankCardImg} />
        <div className={s.bankCardText}>
          <div className={s.bankCardTitle}>
          {donatCard.status && donatCard.name} 
          {donatQiwi.status && donatQiwi.name} 
          {donatMoney.status && donatMoney.name} 
          </div>
        </div>
      </div>
      <div className={s.listInput}>
        <input type="number" placeholder="Введите сумму" />
        <input type="number" placeholder="Введите ID" />
        <input type="email" placeholder="Введите E-mail" />
        <button>Оплатить</button>
      </div>
    </div>
  );
};

export default DonatQiwi;
