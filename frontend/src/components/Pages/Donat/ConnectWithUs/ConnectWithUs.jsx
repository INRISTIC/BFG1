import s from "./ConnectWithUs.module.css";
import { useTranslation } from "react-i18next";

import robot from "../../../../assets/images/emoji-happy.svg";
import tg from "../../../../assets/images/tg.svg";
import right from "../../../../assets/images/arrow-right.svg";

const ConnectWithUs = () => {
  const { t } = useTranslation();
  return (
    <div className={s.connestWithUsContainer}>
      <div className={s.connestWithUs}>
        <div className={s.title}>{t("ConnectWithUs.connection")}</div>
        <div className={s.buttons}>
          <button className={s.connestBtn}>
            <div className={s.imgRobot}>
              <img src={robot} alt="" />
            </div>
            {t("ConnectWithUs.bots")}
            <div className={s.imgArrow} >
              <img src={right} alt="" />
            </div>
          </button>
          <button className={s.connestBtn}>
            <div className={s.imgTg}>
              <img src={tg} alt="" />
            </div>
            @username
            <div className={s.imgArrow} >
              <img src={right} alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
