import s from "./WayDonat.module.css"
import { useSelector, useDispatch } from "react-redux";
import { donatWay } from "../../../../../store/slices/sliceDonat";

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
      donatWay: false
    }

    console.log(newObj)
    dispatch(donatWay(newObj))
  }

  return (
    <div className={s.donatBlock}>
      <div className={s.subTitle}>Выберите систему оплаты</div>
      <div className={s.listBtn}>

        <button className={s.bankCard} onClick={() => onDonatWay({...donatCard, status: true}, 'donatCard')}>
          <img src="" alt="" className={s.bankCardImg}/>
          <div className={s.bankCardText}>
            <div className={s.bankCardTitle}>Банковская карта</div>
            <div className={s.bankCardSubTitle}>VISA/MASTERCARD/МИР/UNIONPAY</div>
          </div>
        </button>

        <button className={s.bankCard} onClick={() => onDonatWay({...donatQiwi, status: true}, 'donatQiwi')}>
          <img src="" alt="" className={s.bankCardImg}/>
          <div className={s.bankCardText}>
            <div className={s.bankCardTitle}>Qiwi Wallet</div>
            <div className={s.bankCardSubTitle}>Электронный кошелек</div>
          </div>
        </button>

        <button className={s.bankCard} onClick={() => onDonatWay({...donatMoney, status: true}, 'donatMoney')}>
          <img src="" alt="" className={s.bankCardImg}/>
          <div className={s.bankCardText}>
            <div className={s.bankCardTitle}>ЮMoney</div>
            <div className={s.bankCardSubTitle}>Электронный кошелек</div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default WayDonat;