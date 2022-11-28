import { useSelector, useDispatch } from "react-redux";
import { donatWay } from "../../../../../store/slices/sliceDonat";

import { ReactComponent as Arrow } from "../../../../../assets/images/arrow-left.svg";
import { ReactComponent as Card} from "../../../../../assets/images/donat-card.svg";
import { ReactComponent as Qiwi} from "../../../../../assets/images/donat-qiwi.svg";
import { ReactComponent as Money} from "../../../../../assets/images/donat-money.svg";

import s from "./DonatQiwi.module.css";

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
      <button onClick={onBack} className={s.back}>
        <Arrow className={s.arrowLeft} />
      </button>
        <div className={s.headerBlock}>
          <div className={s.img}>
            {donatCard.status && (
              <Card className={s.bankCardImg} />
            )}
            {donatQiwi.status && (
              <Qiwi className={s.bankQiwiImg}/>
            )}
            {donatMoney.status && (
              <Money className={s.bankMoneyImg}/>
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
