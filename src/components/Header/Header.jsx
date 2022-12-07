import { useLayoutEffect, useState } from "react";
import s from "./Header.module.css";
import NavBar from "./NavBar/NavBar";
import NavBarPhone from "./NavBarPhone/NavBarPhone";
import Settings from "./Settings/Settings";
import {
  openHeader,
  closeHeader,
  openSettings,
} from "../../store/slices/sliceHeader";
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
  const header = useSelector((state) => state.header.headerStatus);
  const settings = useSelector((state) => state.header.settingsStatus);
  const dispatch = useDispatch();
  const [width] = useWindowSize();

  const openNavList = () => {
    if (!header) {
      dispatch(openHeader());
    } else {
      dispatch(closeHeader());
    }
  };

  const openSetting = () => {
    if (!settings) {
      dispatch(openSettings());
    } else {
      dispatch(closeHeader());
    }
  };

    return (
      <header className={(width <= 830  ? s.navOpen : undefined) + ' ' + (header || settings ? s.navNoOpen : undefined)}>
        <div className={s.headerLeft}>
          <div className={s.logo}>BFG</div>
          {width > 830 && <NavBar />}
        </div>
        <Settings active={settings} openSettings={openSetting}  />
        {width <= 830 && <NavBarPhone active={header} openNavList={openNavList} />}
      </header>
    );
};

export default Header;
