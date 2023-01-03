import s from "./Donat.module.css";
import DonatBlock from "./DonatBLock/DonatBlock";
import DonatFooter from "./DonatFooter/DonatFooter";
import { useEffect } from "react";
import { openModal } from "../../../store/slices/sliceModal";
import { useDispatch } from "react-redux";

const Donat = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(openModal({ modalBotProtect: true }))
    }, 2000)
    return () => {
      clearTimeout(timer);
    }
  }, []);
  return (
    <>
      <DonatBlock />
      <DonatFooter />
    </>
  );
};

export default Donat;
