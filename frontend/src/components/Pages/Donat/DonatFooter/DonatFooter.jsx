import { useTranslation } from "react-i18next";

import s from "./DonatFooter.module.css";
import ConnectWithUs from "../ConnectWithUs/ConnectWithUs";
import coin from "../../../../assets/images/coin.svg"

const DonatFooter = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={s.courseRub}>
        <div className={s.header}>
          <span className={s.icon}><img src={coin} /></span>
          <span>{t("Donat.valute")}</span>
        </div>
        <div className={s.main}>1 RUB - 1 B-Coin</div>
      </div>
      <ConnectWithUs />
    </>
  );
};

export default DonatFooter;
