import React from "react";
import { useTranslation } from "react-i18next";

import s from "./About.module.css";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className={s.about}>
      <div className={s.title}>{t("PersonalInfo.1")}</div>
      <div className={s.block}>
        <div className={s.blockLeft}>
          <p className={s.blockLeftText}>
          {t("About.text")}
          </p>
          <button className={s.button}>{t("About.bots")}</button>
        </div>
        <div className={s.blockRight}>
          <img src={require("../../../../assets/images/panda-about.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
