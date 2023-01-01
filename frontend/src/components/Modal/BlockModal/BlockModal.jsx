import CloseBtn from "../CloseBtn/CloseBtn";
import s from "./BlockModal.module.css";

const BlockModal = () => {
  return (
    <div className={s.modal}>
      <h3 className={s.blockTitle}>Вы заблокированы !</h3>
      <div className={s.title}>
        <span>Оскорбительное поведение</span>
      </div>
      <div className={s.desc}>
        Оскорбление члена команды администрации в особо жесткой манере
      </div>
      <button className={s.button}>Обратиться в поддержку</button>
      <CloseBtn />
    </div>
  );
};

export default BlockModal;
