import s from "./Modal.module.css";
import Windmill from "./Windmill/Windmill";
import Inventory from "./Inventory/Inventory";
import { useSelector } from "react-redux";
// import { closeModal } from "../../store/slices/sliceModal";

const Modal = () => {
  const modal = useSelector((state) => state.modal);
  // const dispatch = useDispatch();

  const active = modal.modalStatus;
  const modalWindmill = modal.modalWindmill;
  const modalInventory = modal.modalInventory;

  
  
  return (
    <div
      className={active ? s.modal + " " + s.active : s.modal}
      // onClick={() => dispatch(closeModal())}
    >
      <div className={s.modalContent} /*onClick={(e) => e.stopPropagation()}*/>
        {modalWindmill && <Windmill />}
        {modalInventory && <Inventory />}
        
      </div>
    </div>
  );
};

export default Modal;
