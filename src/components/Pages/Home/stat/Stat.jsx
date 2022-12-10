import React from "react";
import { useLayoutEffect, useState } from "react";

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
  const [width] = useWindowSize();

  return (
    <div className={s.stat}>
      {width > 830 ? (
        <>
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
                <span>253</span>
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
        </>
      ) : (
        <>
          <div className={s.statMainBlock}>
            <div className={s.statMainBlockSmall}></div>
          </div>
          <div className={s.statInfoBlockSmall}>
            <div className={s.statInfoElementTextBlockSmallUsers}>
              <span>Количество<br />пользователей</span>
              <span>253</span>
            </div>

            <div className={s.statInfoElementTextBlockSmall}>
              <span>Количество сообщений</span>
              <span>35 682 195</span>
            </div>

            <div className={s.statInfoElementTextBlockSmall}>
              <span>Количество дней с основания</span>
              <span>162</span>
            </div>

            <div className={s.statInfoElementTextBlockSmall}>
              <span>Онлайн</span>
              <span>153</span>
            </div>

            <button className={s.statInfoBlockBtn}>Перейти в бота</button>
          </div>
        </>
      )}
    </div >
  );
};

export default Stat;
