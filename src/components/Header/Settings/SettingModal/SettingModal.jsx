import React from "react";
import { useSelector, useDispatch } from "react-redux";

import s from "./SettingModal.module.css";
import { set } from "../../../../store/slices/sliceTheme";
import cn from "classnames";

import {ReactComponent as Sun} from "../../../../assets/images/sun.svg"
import  {ReactComponent as Moon} from "../../../../assets/images/moon.svg"

const SettingModal = ({ className }) => {
  const theme = useSelector((state) => state.theme);
  console.log(theme)
  const dispatch = useDispatch();

  const handleChangeNight = () => {
    dispatch(set("dark"));
  };

  const handleChangeLight = () => {
    dispatch(set("light"));
  };

  return (
    <div className={s.settingsModal}>
      <div className={s.translate}>
        <button>RU</button>
        <button>UA</button>
        <button>EN</button>
      </div>
      <div className={s.theme}>
        <button
          className={cn(
            className,
            s.root,
            theme === "light" ? s.light + ' ' + s.active : s.light
          )}
          onClick={handleChangeLight}
        >
          <Sun className={s.icon}/>
        </button>
        <button
          className={cn(
            className,
            s.root,
            theme === "dark" ? s.dark + ' ' + s.active : s.dark
          )}
          onClick={handleChangeNight}
        >
          <Moon className={s.icon}/>
        </button>
      </div>
    </div>
  );
};

export default SettingModal;
