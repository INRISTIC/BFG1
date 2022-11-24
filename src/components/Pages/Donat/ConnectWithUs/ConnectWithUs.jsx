import s from "./ConnectWithUs.module.css";

import robot from "../../../../assets/images/emoji-happy.svg";
import tg from "../../../../assets/images/tg.svg";
import right from "../../../../assets/images/arrow-right.svg";

const ConnectWithUs = () => {
  return (
    <div className={s.connestWithUs}>
      <div className={s.title}>Связаться с нами</div>
      <div className={s.buttons}>
        <button className={s.connestBtn}>
          <div className={s.imgRobot}>
            <img src={robot} alt="" />
          </div>
          Перейти в бота
          <div className={s.imgArrow} >
            <img src={right} alt=""/>
          </div>
        </button>
        <button className={s.connestBtn}>
          <div className={s.imgTg}>
            <img src={tg} alt="" />
          </div>
          @username
          <div className={s.imgArrow} >
            <img src={right} alt=""/>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ConnectWithUs;
