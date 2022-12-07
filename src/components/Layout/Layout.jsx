import { Outlet } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import BtnScrollUp from "../BtnScrollUp/BtnScrollUp";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import s from "./Layout.module.css";
import { useSelector } from "react-redux";

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

const Layout = () => {
  const header = useSelector((state) => state.header.headerStatus);
  const settings = useSelector((state) => state.header.settingsStatus);
  const [width] = useWindowSize();

  return (
    <>
      <div className={(header || settings) && width <= 830  ? s.header : undefined}>
        <Header />
      </div>

      <main className={s.main}>
        <Outlet />
        <BtnScrollUp />
      </main>
      <Footer />
      <Modal />
    </>
  );
};

export default Layout;
