import React from "react";

import s from "./Stat.module.css";

import statInfoBlockImg from "../../../../assets/images/statMainBlockImg.svg";

const Stat = () => {
  return (
    <div className={s.stat}>
      <div className={s.statMainBlock}>
        <div className={s.statInfoBlockCircles}></div>

        <div className={s.statInfoBlockImgContainer}>
          <img src={statInfoBlockImg} alt="" />
        </div>

        <button className={s.statInfoBlockBtn}>Перейти в бота</button>
      </div>

      <div className={s.statInfoBlock}>
        <div className={s.statInfoElement}>
          <div className={s.statInfoElementTextBlock}>
            <span>Онлайн</span>
            <span>153</span>
          </div>
        </div>

        <div className={s.statInfoElement}>
          <div className={s.statInfoElementTextBlock}>
            <span>Количество пользователей</span>
            <span>35 312</span>
          </div>
        </div>
      </div>

      <div className={s.statInfoBlock}>
        <div className={s.statInfoElement}>
          <div className={s.statInfoElementTextBlock}>
            <span>Количество сообщений</span>
            <span>35 682 195</span>
          </div>
        </div>

        <div className={s.statInfoElement}>
          <div className={s.statInfoElementTextBlock}>
            <span>Количество дней с основания</span>
            <span>162</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
