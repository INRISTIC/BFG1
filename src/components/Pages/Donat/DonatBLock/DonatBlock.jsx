import s from "./DonatBlock.module.css"

const DonatBlock = () => {
  return (
    <div className={s.donatBlock}>
      <div className={s.title}>Донат</div>
      <div className={s.subTitle}>Выберите систему оплаты</div>
      <div className={s.listBtn}>
        <button className={s.bankCard}>
          <img src="" alt="" className={s.bankCardImg}/>
          <div className={s.bankCardText}>
            <div className={s.bankCardTitle}>Банковская карта</div>
            <div className={s.bankCardSubTitle}>VISA/MASTERCARD/МИР/UNIONPAY</div>
          </div>
        </button>
        <button className={s.bankCard}>
          <img src="" alt="" className={s.bankCardImg}/>
          <div className={s.bankCardText}>
            <div className={s.bankCardTitle}>Qiwi Wallet</div>
            <div className={s.bankCardSubTitle}>Электронный кошелек</div>
          </div>
        </button>
        <button className={s.bankCard}>
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

export default DonatBlock;