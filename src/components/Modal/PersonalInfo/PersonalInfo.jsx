import CloseBtn from "../CloseBtn/CloseBtn";
import s from "./PersonalInfo.module.css";
import { useTranslation } from "react-i18next";

const PersonalInfo = () => {
  const { t } = useTranslation();
  return (
    <div className={s.scrollBlock}>
      <div className={s.modal}>
        <h3 className={s.title}>{t("PersonalInfo.0")}</h3>
        <div className={s.block}>
          <ul>
            <li>{t("PersonalInfo.1")}</li>
            <li>
            {t("PersonalInfo.11")}
            </li>
            <li>
            {t("PersonalInfo.12")}
            </li>
            <li>{t("PersonalInfo.2")}</li>
            <li>
            {t("PersonalInfo.21")}
            </li>
            <li>
            {t("PersonalInfo.22")}
            </li>
            <li>
            {t("PersonalInfo.23")}
            </li>
            <li>{t("PersonalInfo.24")}</li>
            <li>
            {t("PersonalInfo.25")}
            </li>
            <li>
            {t("PersonalInfo.26")}
            </li>
            <li>{t("PersonalInfo.3")}</li>
            <li>
            {t("PersonalInfo.31")}
            </li>
            <li>
            {t("PersonalInfo.32")}
            </li>
            <li>
            {t("PersonalInfo.33")}
            </li>
            <li>{t("PersonalInfo.4")}</li>
            <li>
            {t("PersonalInfo.41")}
            </li>
            <li>
            {t("PersonalInfo.42")}
            </li>
            <li>{t("PersonalInfo.43")}</li>
          </ul>
        </div>
        <CloseBtn />
      </div>
    </div>
  );
};

export default PersonalInfo;
