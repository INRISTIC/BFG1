import s from "./DonatQiwi.module.css";

import { useSelector, useDispatch } from "react-redux";
import { donatWay } from "../../../../../store/slices/sliceDonat";
import card from "../../../../../assets/images/donat-card.svg";
import qiwi from "../../../../../assets/images/donat-qiwi.svg";
import money from "../../../../../assets/images/donat-money.svg";

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
    <>
      
      <div className={s.subTitle}>Заполните все поля</div>
      <div className={s.bankCard}>
      <button onClick={onBack} className={s.back}></button>
        <div className={s.headerBlock}>
          <div className={s.img}>
            {donatCard.status && (
              <img src={card} alt="" className={s.bankCardImg} />
            )}
            {donatQiwi.status && (
              <img src={qiwi} alt="" className={s.bankCardImg} />
            )}
            {donatMoney.status && (
              <img src={money} alt="" className={s.bankCardImg} />
            )}
          </div>

          <div className={s.bankCardText}>
            <div className={s.bankCardTitle}>
              {donatCard.status && donatCard.name}
              {donatQiwi.status && donatQiwi.name}
              {donatMoney.status && donatMoney.name}
            </div>
          </div>
        </div>

        <div className={s.inputList}>
          <input type="text" placeholder="Введите сумму" className={s.input} />
          <input type="text" placeholder="Введите ID" className={s.input} />
          <input
            type="email"
            placeholder="Введите E-mail"
            className={s.input}
          />
        </div>

        <button className={s.pay}>Оплатить</button>
      </div>
    </>
  );
};

export default DonatQiwi;
