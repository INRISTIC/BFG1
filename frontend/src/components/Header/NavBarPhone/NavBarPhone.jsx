import { useLocation, NavLink } from "react-router-dom";
import s from "./NavBarPhone.module.css";
import { ReactComponent as Burger } from "../../../assets/images/burger.svg";
import { closeHeader } from "../../../store/slices/sliceHeader";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";



const NavBarPhone = ({active, openNavList}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const closeFon = () => {
    dispatch(closeHeader())
  }

  let { pathname } = useLocation();
  let navStat = false;
  if (pathname === "/stat") {
    navStat = true;
  } else {
    navStat = false;
  }

  

  return (
    <>
      <button className={s.button} onClick={openNavList}>
        <Burger className={s.burger}/>
      </button>
      { active ?
        <nav className={navStat ? s.navList + " " +  s.navListFive : s.navList}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? s.active + " " + s.nav : s.nav
          }
          onClick={closeFon}
        >
          {t("NavBar.home")}
        </NavLink>

        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? s.active + " " + s.nav : s.nav
          }
          onClick={closeFon}
        >
          {t("NavBar.news")}
        </NavLink>

        <NavLink
          to="/donat"
          className={({ isActive }) =>
            isActive ? s.active + " " + s.nav : s.nav
          }
          onClick={closeFon}
        >
          {t("NavBar.donat")}
        </NavLink>

        {navStat && (
          <NavLink
            to="/stat"
            className={({ isActive }) =>
              isActive ? s.active + " " + s.nav : s.nav
            }
            onClick={closeFon}
          >
            Личная статистика
          </NavLink>
        )}

        <NavLink
          to="/info"
          className={({ isActive }) =>
            isActive ? s.active + " " + s.nav : s.nav
          }
          onClick={closeFon}
        >
          {t("NavBar.info")}
        </NavLink>
      </nav>
      :
      <></>
      }
    </>
  );
};

export default NavBarPhone;
