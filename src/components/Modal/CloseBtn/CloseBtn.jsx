import s from "./CloseBtn.module.css";

import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slices/sliceModal";

const CloseBtn = () => {
  const dispatch = useDispatch();

  return <button className={s.close} onClick={() => dispatch(closeModal())}></button>;
};

export default CloseBtn;
