import s from "./InfoElement.module.css";
import { useTranslation } from "react-i18next";
import { ReactComponent as Arrow } from "../../../../assets/images/arrow-bottom.svg";

import { useState } from "react";

const InfoElement = ({ item }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <div
      className={open ? s.infoElement : s.infoElement + " " + s.hidden}
      onClick={() => setOpen(!open)}
    >
      <div className={s.infoElement__header_block}>
        <span
          className={
            open
              ? s.infoElement__header_text + " " + s.activeColor
              : s.infoElement__header_text
          }
        >
          Как попасть в ТОП 100
        </span>
        <button
          className={
            open
              ? s.infoElement__header_btn +
                " " +
                s.infoElement__header_btn_active
              : s.infoElement__header_btn
          }
        >
          <Arrow className={open ? s.arrow + " " + s.arrowActive : s.arrow} />
        </button>
      </div>
      <div className={open ? s.activeText : s.closed + " " + s.defaultBlosk}>
        <span className={s.text}>
          {i18n.language === "ru" && item.content_ru}
          {i18n.language === "en" && item.content_en}
          {i18n.language === "ua" && item.content_ua}
        </span>
      </div>
    </div>
  );
};

export default InfoElement;
