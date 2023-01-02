import CloseBtn from "../CloseBtn/CloseBtn";
import s from "./FatalPay.module.css";
import { useTranslation } from "react-i18next";

const FatalPay = () => {
  const { t } = useTranslation();
  return (
    <div className={s.modal}>
      <div className={s.fatal}></div>
      <h3 className={s.title}>{t("ModalFatalPay")}</h3>
      <CloseBtn />
    </div>
  );
};

export default FatalPay;
