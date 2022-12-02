import { useLayoutEffect, useState } from "react";
import s from "./Header.module.css";
import NavBar from "./NavBar/NavBar";
import NavBarPhone from "./NavBarPhone/NavBarPhone";
import Settings from "./Settings/Settings";
import { openModalCommon, closeModal } from "../../store/slices/sliceModal";
import { useSelector, useDispatch } from "react-redux";

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

const Header = () => {
  const modalActive = useSelector((state) => state.modal.modalStatus);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [width] = useWindowSize();

  const openNavList = () => {
    if (!modalActive) {
      dispatch(openModalCommon())
      setActive(!active)
    } else {
      dispatch(closeModal())
      setActive(!active)
    }
    
  }

  if (width > 830) {
    return (
      <header>
        <div className={s.headerLeft}>
          <div className={s.logo}>BFG</div>
          <NavBar />
        </div>
        <Settings />
      </header>
    );
  } else {
    return (
      <header className={active ? s.navOpen : undefined}>
        <div className={s.logo}>BFG</div>
        <Settings />
        <NavBarPhone active={active} openNavList={openNavList}/>
      </header>
    );
  }
};

export default Header;
