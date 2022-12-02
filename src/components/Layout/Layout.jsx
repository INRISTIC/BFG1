import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import s from "./Layout.module.css";

const Layout = () => {
  

  return (
    <>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
      <Modal />
    </>
  );
};

export default Layout;
