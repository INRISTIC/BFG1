import CloseBtn from "../CloseBtn/CloseBtn";
import s from "./BlockModal.module.css";
import { useTranslation } from "react-i18next";

const BlockModal = () => {
  const { t } = useTranslation();
  return (
    <div className={s.modal}>
      <h3 className={s.blockTitle}>{t("BlockModal.ban")}</h3>
      <div className={s.title}>
        <span>{t("BlockModal.banMassage")}</span>
      </div>
      <div className={s.desc}>
      {t("BlockModal.descBan")}
      </div>
      <button className={s.button}>{t("BlockModal.supports")}</button>
      <CloseBtn />
    </div>
  );
};

export default BlockModal;
