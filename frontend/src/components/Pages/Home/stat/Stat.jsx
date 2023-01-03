import React from "react";
import { useLayoutEffect, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { fetchSettings } from "../../../../store/slices/sliceSettings";

import s from "./Stat.module.css";

import statInfoBlockImg from "../../../../assets/images/statMainBlockImg.svg";


function useWindowSize() {
  const [size, setSize] = useState([0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const Stat = () => {

  const { t } = useTranslation();

  const [width] = useWindowSize();

  const dispatch = useDispatch();
  const { settings } = useSelector(state => state.settings);
  const isSettingsLoading = settings.status === "loading";

  useEffect(() => {
    dispatch(fetchSettings())
  }, [])

  return (
    <div className={s.stat}>
      {width > 830 ? (
        <>
          <div className={s.statMainBlock}>
            <div className={s.statInfoBlockCircles}></div>

            <div className={s.statInfoBlockImgContainer}>
              <img src={statInfoBlockImg} alt="" />
            </div>

            <button className={s.statInfoBlockBtn}>{t("Stat.bots")}</button>

          </div>

          <div className={s.statInfoBlock}>
            <div className={s.statInfoElement}>
              <div className={s.statInfoElementTextBlock}>
                <span>{t("Stat.online")}</span>
                <span>{Number(settings.info.online).toLocaleString('ru-RU')}</span>
              </div>
            </div>

            <div className={s.statInfoElement}>
              <div className={s.statInfoElementTextBlock}>
                <span>{t("Stat.count_users")}</span>
                <span>{Number(settings.info.users_count).toLocaleString('ru-RU')}</span>
              </div>
            </div>
          </div>

          <div className={s.statInfoBlock}>
            <div className={s.statInfoElement}>
              <div className={s.statInfoElementTextBlock}>
                <span>{t("Stat.count_sms")}</span>
                <span>{Number(settings.info.users_sms).toLocaleString('ru-RU')}</span>
              </div>
            </div>

            <div className={s.statInfoElement}>
              <div className={s.statInfoElementTextBlock}>
                <span>{t("Stat.count_days")}</span>
                <span>{!isSettingsLoading && Number(Math.floor((Date.parse(new Date) - Date.parse(settings.info.updatedAt)) / (1000 * 3600 * 24))).toLocaleString('ru-RU')}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={s.statMainBlock}>
            <div className={s.statMainBlockSmall}></div>
          </div>
          <div className={s.statInfoBlockSmall}>
            <div className={s.statInfoElementTextBlockSmallUsers}>
              <span>{t(Stat.count)}<br />{t(Stat.users)}</span>
              <span>{Number(settings.info.users_count).toLocaleString('ru-RU')}</span>
            </div>

            <div className={s.statInfoElementTextBlockSmall}>
              <span>{t("Stat.count_sms")}</span>
              <span>{Number(settings.info.users_sms).toLocaleString('ru-RU')}</span>
            </div>

            <div className={s.statInfoElementTextBlockSmall}>
              <span>{t("Stat.count_days")}</span>
              <span>{!isSettingsLoading && Number(Math.floor((Date.parse(new Date) - Date.parse(settings.info.updatedAt)) / (1000 * 3600 * 24))).toLocaleString('ru-RU')}</span>
            </div>

            <div className={s.statInfoElementTextBlockSmall}>
              <span>{t("Stat.online")}</span>
              <span>{Number(settings.info.online).toLocaleString('ru-RU')}</span>
            </div>

            <button className={s.statInfoBlockBtn}>{t("Stat.bots")}</button>
          </div>
        </>
      )}
    </div >
  );
};

export default Stat;
