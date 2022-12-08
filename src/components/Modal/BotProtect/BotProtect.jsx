import CloseBtn from "../CloseBtn/CloseBtn";
import s from "./BotProtect.module.css";

const BotProtect = () => {
  return (
    <div className={s.modal}>
      <div className={s.text}>
        Проверьте, что вы написали боту
        <span>@bforgame_bot</span>
        хотя бы одно сообщение
      </div>
      <button className={s.continueBtn}>Продолжить</button>
      <CloseBtn />
    </div>
  );
};

export default BotProtect;
