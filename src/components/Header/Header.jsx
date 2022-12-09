import NavBar from "./NavBar/NavBar";
import NavBarPhone from "./NavBarPhone/NavBarPhone";
import Settings from "./Settings/Settings";
import {
  openHeader,
  closeHeader,
  openSettings,
} from "../../store/slices/sliceHeader";
import { useSelector, useDispatch } from "react-redux";

import useWindowSize from "../../hooks/widthHook";

import s from "./Header.module.css";

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

  const closeSetting = () => {
    dispatch(closeHeader());
  };

  return (
    <header
      className={
        (width <= 830 ? s.navDefault : undefined) +
        " " +
        (header ? s.navNoOpen : undefined) +
        " " +
        (width <= 830 && (header || settings) ? s.navOpen : undefined)
      }
    >
      <div className={s.headerLeft}>
        <div className={s.logo}>BFG</div>
        {width > 830 && <NavBar />}
      </div>
      <Settings active={settings} openSettings={openSetting} closeSetting={closeSetting}/>
      {width <= 830 && (
        <NavBarPhone active={header} openNavList={openNavList} />
      )}
    </header>
  );
};

export default Header;
