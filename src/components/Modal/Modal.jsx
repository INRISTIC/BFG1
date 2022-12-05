import s from "./Modal.module.css";
import Windmill from "./Windmill/Windmill";
import Inventory from "./Inventory/Inventory";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/sliceModal";
import { openHeader, closeHeader } from "../../store/slices/sliceHeader";

const Modal = () => {
  const modal = useSelector((state) => state.modal);
  const header = useSelector((state) => state.header);
  const dispatch = useDispatch();

  const active = modal.modalStatus;
  const modalWindmill = modal.modalWindmill;
  const modalInventory = modal.modalInventory;

  const headerActive = header.headerStatus;
  const settingsActiv = header.settingsStatus;

  if (headerActive || settingsActiv) {
    console.log(10)
    return (
      <div
        className={headerActive || settingsActiv ? s.modal + " " + s.active : s.modal}
        onClick={() => dispatch(closeHeader())}
      >
        <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        </div>
      </div>
    );
  } else if (active) {
    return (
      <div
        className={active ? s.modal + " " + s.active : s.modal}
        onClick={() => dispatch(closeModal())}
      >
        <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
          {modalWindmill && <Windmill />}
          {modalInventory && <Inventory />}
        </div>
      </div>
    );
  }
};

export default Modal;
