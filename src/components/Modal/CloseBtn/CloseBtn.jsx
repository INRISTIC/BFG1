import s from "./CloseBtn.module.css";

import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slices/sliceModal";

import { ReactComponent as Close } from "../../../assets/images/close-btn.svg";

const CloseBtn = () => {
  const dispatch = useDispatch();

  return (
    <button className={s.close} onClick={() => dispatch(closeModal())}>
      <Close className={s.closeIcon}/>
    </button>
  );
};

export default CloseBtn;
