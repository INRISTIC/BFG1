import CloseBtn from "../CloseBtn/CloseBtn";
import s from "./BotProtect.module.css";
import { closeModal } from "../../../store/slices/sliceModal";
import { useDispatch } from "react-redux";

const BotProtect = () => {
  const dispatch = useDispatch()
  const onCloseModal = () => {
    dispatch(closeModal())
  }
  return (
    <div className={s.modal}>
      <div className={s.text}>
        Проверьте, что вы написали боту
        <span>@bforgame_bot</span>
        хотя бы одно сообщение
      </div>
      <button className={s.continueBtn} onClick={onCloseModal}>Продолжить</button>
      <CloseBtn />
    </div>
  );
};

export default BotProtect;
