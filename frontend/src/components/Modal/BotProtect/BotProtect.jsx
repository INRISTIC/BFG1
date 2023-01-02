import CloseBtn from "../CloseBtn/CloseBtn";
import s from "./BotProtect.module.css";
import { closeModal } from "../../../store/slices/sliceModal";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const BotProtect = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const onCloseModal = () => {
    dispatch(closeModal())
  }
  return (
    <div className={s.modal}>
      <div className={s.text}>
        {t("BotProtect.higtText")}
        <span>@bforgame_bot</span>
        {t("BotProtect.lowText")}
      </div>
      <button className={s.continueBtn} onClick={onCloseModal}>{t("Donat.continue")}</button>
      <CloseBtn />
    </div>
  );
};

export default BotProtect;
