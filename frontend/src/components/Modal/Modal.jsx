import s from "./Modal.module.css";
import { useLayoutEffect, useState } from "react";
import Windmill from "./Windmill/Windmill";
import Inventory from "./Inventory/Inventory";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/sliceModal";
import { openHeader, closeHeader } from "../../store/slices/sliceHeader";
import CompletPay from "./CompletPay/CompletPay";
import FatalPay from "./FatalPay/FatalPay";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import TermsOfUse from "./TermsOfUse/TermsOfUse";
import BotProtect from "./BotProtect/BotProtect";
import BlockModal from "./BlockModal/BlockModal";

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

const Modal = () => {
  const [width] = useWindowSize();

  const modal = useSelector((state) => state.modal);
  const header = useSelector((state) => state.header);
  const dispatch = useDispatch();

  const active = modal.modalStatus;
  const modalWindmill = modal.modalWindmill;
  const modalInventory = modal.modalInventory;
  const modalComplete = modal.modalComplete;
  const modalFatal = modal.modalFatal;
  const personalInfo = modal.modalPersonInfo;
  const termsOfUse = modal.modalTermsOfUse;
  const modalBot = modal.modalBotProtect;
  const modalBlock = modal.modalBlock;

  const headerActive = header.headerStatus;
  const settingsActiv = header.settingsStatus;

  if ((headerActive || settingsActiv) && width <= 830) {
    return (
      <div
        className={headerActive || settingsActiv ? s.modal + " " + s.activeHeader : s.modal}
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
          {modalComplete && <CompletPay />}
          {modalFatal && <FatalPay />}
          {personalInfo && <PersonalInfo />}
          {termsOfUse && <TermsOfUse />}
          {modalBot && <BotProtect />}
          {modalBlock && <BlockModal />}
        </div>
      </div>
    );
  }
};

export default Modal;
