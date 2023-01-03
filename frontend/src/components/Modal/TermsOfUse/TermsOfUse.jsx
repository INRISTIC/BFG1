import CloseBtn from "../CloseBtn/CloseBtn";
import s from "./TermsOfUse.module.css";
import { useTranslation } from "react-i18next";

const TermsOfUse = () => {
  const { t } = useTranslation();
  return (
    <div className={s.scrollBlock}>
      <div className={s.modal}>
        <h3 className={s.title}>{t("TermsOfUse.0")}</h3>
        <div className={s.block}>
          <ul>
            <li>{t("TermsOfUse.1")}</li>
            <li>
            {t("TermsOfUse.11")}
            </li>
            <li>
            {t("TermsOfUse.12")}
            </li>
            <li>{t("TermsOfUse.2")}</li>
            <li>
            {t("TermsOfUse.21")}
            </li>
            <li>
            {t("TermsOfUse.22")}
            </li>
            <li>
            {t("TermsOfUse.23")}
            </li>
            <li>{t("TermsOfUse.24")}</li>
            <li>
            {t("TermsOfUse.25")}
            </li>
            <li>
            {t("TermsOfUse.26")}
            </li>
            <li>{t("TermsOfUse.3")}</li>
            <li>
            {t("TermsOfUse.31")}
            </li>
            <li>
            {t("TermsOfUse.32")}
            </li>
            <li>
            {t("TermsOfUse.33")}
            </li>
            <li>{t("TermsOfUse.4")}</li>
            <li>
            {t("TermsOfUse.41")}
            </li>
            <li>
            {t("TermsOfUse.42")}
            </li>
            <li>{t("TermsOfUse.43")}</li>
          </ul>
        </div>
        <CloseBtn />
      </div>
    </div>
  );
};

export default TermsOfUse;
