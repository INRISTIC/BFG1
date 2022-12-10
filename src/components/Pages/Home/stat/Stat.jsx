import React from "react";

import s from "./Stat.module.css";

import statInfoBlockImg from "../../../../assets/images/statMainBlockImg.svg";

const Stat = () => {
  return (
    <div className={s.stat}>
      <div className={s.statMainBlock}>
        <div className={s.statInfoBlockImgContainer}>
          <img src={statInfoBlockImg} alt="" />
        </div>

        <button className={s.statInfoBlockBtn}>Перейти в бота</button>
      </div>

      <div className={s.statInfoBlock}></div>
      <div className={s.statInfoBlock}></div>
    </div>
  );
};

export default Stat;
