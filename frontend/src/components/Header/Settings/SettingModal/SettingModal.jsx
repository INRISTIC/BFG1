import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import s from "./SettingModal.module.css";
import { set } from "../../../../store/slices/sliceTheme";
import cn from "classnames";

import { ReactComponent as Sun } from "../../../../assets/images/sun.svg";
import { ReactComponent as Moon } from "../../../../assets/images/moon.svg";

const SettingModal = ({ className, active, closeSetting, btnRef }) => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const settingRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const handleClick = e => {
      if (!settingRef.current) return;
      if (!settingRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
        closeSetting()
      }
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [active, btnRef, closeSetting])

  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();


  const handleChangeNight = () => {
    dispatch(set("dark"));
  };

  const handleChangeLight = () => {
    dispatch(set("light"));
  };

  if (!active) return null;

  return (
    <div ref={settingRef} className={s.settingsModal}>
      <div className={s.translate}>
        <button onClick={() => changeLanguage("ru")} className={i18n.language === "ru" && s.activeBtn}>RU</button>
        <button onClick={() => changeLanguage("ua")} className={i18n.language === "ua" && s.activeBtn}>UA</button>
        <button onClick={() => changeLanguage("en")} className={i18n.language === "en" && s.activeBtn}>EN</button>
      </div>
      <div className={s.theme}>
        <button
          className={cn(
            className,
            s.root,
            theme === "light" ? s.light + " " + s.active : s.light
          )}
          onClick={handleChangeLight}
        >
          <Sun className={s.icon} />
        </button>
        <button
          className={cn(
            className,
            s.root,
            theme === "dark" ? s.dark + " " + s.active : s.dark
          )}
          onClick={handleChangeNight}
        >
          <Moon className={s.icon} />
        </button>
      </div>
    </div>
  );
};

export default SettingModal;
