import CloseBtn from "../CloseBtn/CloseBtn";
import s from "./CompletPay.module.css";
import { useTranslation } from "react-i18next";

const CompletPay = () => {
  const { t } = useTranslation();
  return (
    <div className={s.modal}>
      <div className={s.complete}></div>
      <h3 className={s.title}>{t("ModalCompletePay")}</h3>
      <CloseBtn />
    </div>
  );
};

export default CompletPay;
