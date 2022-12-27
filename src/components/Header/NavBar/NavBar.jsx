import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import s from "./NavBar.module.css";

const NavBar = () => {
  const { t } = useTranslation();

  let { pathname } = useLocation();
  let navStat = false;
  if (pathname === "/stat") {
    navStat = true;
  } else {
    navStat = false;
  }

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? s.active + " " + s.nav : s.nav
        }
      >
        {t("NavBar.home")}
      </NavLink>

      <NavLink
        to="/news"
        className={({ isActive }) =>
          isActive ? s.active + " " + s.nav : s.nav
        }
      >
        {t("NavBar.news")}
      </NavLink>

      <NavLink
        to="/donat"
        className={({ isActive }) =>
          isActive ? s.active + " " + s.nav : s.nav
        }
      >
        {t("NavBar.donat")}
      </NavLink>

      {navStat && (
        <NavLink
          to="/stat"
          className={({ isActive }) =>
            isActive ? s.active + " " + s.nav : s.nav
          }
        >
          Личная статистика
        </NavLink>
      )}

      <NavLink
        to="/info"
        className={({ isActive }) =>
          isActive ? s.active + " " + s.nav : s.nav
        }
      >
        {t("NavBar.info")}
      </NavLink>
    </nav>
  );
};

export default NavBar;
