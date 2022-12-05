import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { donatWay } from "../../../../../store/slices/sliceDonat";

import { ReactComponent as Card } from "../../../../../assets/images/donat-card.svg";
import { ReactComponent as Qiwi } from "../../../../../assets/images/donat-qiwi.svg";
import { ReactComponent as Money } from "../../../../../assets/images/donat-money.svg";

import s from "./WayDonat.module.css";

const WayDonat = () => {
  // const initialState = {
  //   card: false,
  //   qiwi: false,
  //   money: false
  // }

  const [active, setActive] = useState({});
  const donat = useSelector((state) => state.donat);

  const donatCard = donat.donatCard;
  const donatQiwi = donat.donatQiwi;
  const donatMoney = donat.donatMoney;

  const dispatch = useDispatch();

  const onDonatWay = (nameObj) => {
    let newObj;

    if (nameObj === "donatCard") {
      newObj = {
        ...donat,
        [nameObj]: { ...donatCard, status: true },
        donatWay: false,
      };
    } else if (nameObj === "donatQiwi") {
      newObj = {
        ...donat,
        [nameObj]: { ...donatQiwi, status: true },
        donatWay: false,
      };
    } else if (nameObj === "donatMoney") {
      newObj = {
        ...donat,
        [nameObj]: { ...donatMoney, status: true },
        donatWay: false,
      };
    }

    console.log(newObj, nameObj)
    setActive({});
    dispatch(donatWay(newObj));
  };

  const onActive = (...obj) => {
    // if (JSON.stringify(obj) === JSON.stringify([active])) {
    //   setActive({});
    // } else {
    //   setActive(...obj);
    // }
    console.log(...obj)
    setActive(...obj);
  };

  return (
    <div className={s.donatBlock}>
      <div className={s.subTitle}>Выберите систему оплаты</div>
      <div className={s.listBtn}>
        <button
          className={
            active.donatCard ? s.bankCard + " " + s.active : s.bankCard
          }
          onClick={
            () => onActive({ donatCard: true })
          }
        >
          <div className={s.img}>
            <Card className={s.bankCardImg} />
          </div>

          <div className={s.bankCardText}>
            <div className={s.bankCardTitle}>Банковская карта</div>
            <div className={s.bankCardSubTitle}>
              VISA/MASTERCARD/МИР/UNIONPAY
            </div>
          </div>
        </button>

        <button
          className={
            active.donatQiwi ? s.bankCard + " " + s.active : s.bankCard
          }
          onClick={
            () => onActive({ donatQiwi: true })
          }
        >
          <div className={s.img}>
            <Qiwi className={s.bankQiwiImg} />
          </div>
          <div className={s.bankCardText}>
            <div className={s.bankCardTitle}>Qiwi Wallet</div>
            <div className={s.bankCardSubTitle}>Электронный кошелек</div>
          </div>
        </button>

        <button
          className={
            active.donatMoney ? s.bankCard + " " + s.active : s.bankCard
          }
          onClick={
            () => onActive({ donatMoney: true })
          }
        >
          <div className={s.img}>
            <Money className={s.bankMoneyImg} />
          </div>

          <div className={s.bankCardText}>
            <div className={s.bankCardTitle}>ЮMoney</div>
            <div className={s.bankCardSubTitle}>Электронный кошелек</div>
          </div>
        </button>
      </div>

      <button
        className={
          Object.keys(active).length ? s.sendBtn : s.sendBtn + " " + s.none 
        }
        onClick={() =>
          onDonatWay(Object.keys(active)[0])
        }
      >
        Продолжить
      </button>
    </div>
  );
};

export default WayDonat;
