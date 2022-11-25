import { useSelector, useDispatch } from "react-redux";
import { donatWay } from "../../../../../store/slices/sliceDonat";

import card from "../../../../../assets/images/donat-card.svg";
import qiwi from "../../../../../assets/images/donat-qiwi.svg";
import money from "../../../../../assets/images/donat-money.svg";

import s from "./WayDonat.module.css";

const WayDonat = () => {
  const donat = useSelector((state) => state.donat);

  const donatCard = donat.donatCard;
  const donatQiwi = donat.donatQiwi;
  const donatMoney = donat.donatMoney;

  const dispatch = useDispatch();

  const onDonatWay = (donatClick, nameObj) => {
    let newObj = {
      ...donat,
      [nameObj]: donatClick,
      donatWay: false,
    };

    dispatch(donatWay(newObj));
  };

  console.log('load')

  return (
    <div className={s.donatBlock}>
      <div className={s.subTitle}>Выберите систему оплаты</div>
      <div className={s.listBtn}>
        <button
          className={s.bankCard}
          onClick={() =>
            onDonatWay({ ...donatCard, status: true }, "donatCard")
          }
        >
          <div className={s.img}>
            <img src={card} alt="" className={s.bankCardImg} />
          </div>

          <div className={s.bankCardText}>
            <div className={s.bankCardTitle}>Банковская карта</div>
            <div className={s.bankCardSubTitle}>
              VISA/MASTERCARD/МИР/UNIONPAY
            </div>
          </div>
        </button>

        <button
          className={s.bankCard}
          onClick={() =>
            onDonatWay({ ...donatQiwi, status: true }, "donatQiwi")
          }
        >
          <div>
            <img src={qiwi} alt="" className={s.bankCardImg} />
          </div>
          <div className={s.bankCardText}>
            <div className={s.bankCardTitle}>Qiwi Wallet</div>
            <div className={s.bankCardSubTitle}>Электронный кошелек</div>
          </div>
        </button>

        <button
          className={s.bankCard}
          onClick={() =>
            onDonatWay({ ...donatMoney, status: true }, "donatMoney")
          }
        >
          <div>
            <img src={money} alt="" className={s.bankCardImg} />
          </div>

          <div className={s.bankCardText}>
            <div className={s.bankCardTitle}>ЮMoney</div>
            <div className={s.bankCardSubTitle}>Электронный кошелек</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WayDonat;
