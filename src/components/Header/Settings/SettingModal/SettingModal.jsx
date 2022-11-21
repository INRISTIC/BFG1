import React from "react";
import { useSelector, useDispatch } from "react-redux";

import s from "./SettingModal.module.css";
import { set } from "../../../../store/slices/sliceTheme";
import cn from "classnames";

const SettingModal = ({ className }) => {
  const theme = useSelector((state) => state.theme);
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
            theme === "dark" ? s.dark : s.light
          )}
          onClick={handleChangeLight}
        >
          light
        </button>
        <button
          className={cn(
            className,
            s.root,
            theme === "dark" ? s.dark : s.light
          )}
          onClick={handleChangeNight}
        >
          night
        </button>
      </div>
    </div>
  );
};

export default SettingModal;
