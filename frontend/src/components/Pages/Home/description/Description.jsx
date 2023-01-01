import React from "react";
import { useTranslation } from "react-i18next";

import panda1 from "../../../../assets/images/panda-bottom1.png";
import panda2 from "../../../../assets/images/panda-bottom2.png";
import panda3 from "../../../../assets/images/panda-bottom3.png";

import s from "./Description.module.css";

const Description = () => {
  const { t } = useTranslation();
  return (
    <div className={s.description}>
      <div className={s.title}>{t("Description.title")}</div>
      <div className={s.block}>
        {t("Description.text")}
      </div>
      <div className={s.listImg}>
        <div className={s.listItemImg}>
          <img src={panda1} alt="" />
        </div>
        <div className={s.listItemImg}>
          <img src={panda2} alt="" />
        </div>
        <div className={s.listItemImg}>
          <img src={panda3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Description;
