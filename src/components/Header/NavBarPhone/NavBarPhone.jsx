import { useLocation, NavLink } from "react-router-dom";
import s from "./NavBarPhone.module.css";
import { ReactComponent as Burger } from "../../../assets/images/burger.svg";



const NavBarPhone = ({active, openNavList}) => {
  

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
        >
          Главная
        </NavLink>

        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? s.active + " " + s.nav : s.nav
          }
        >
          Новости
        </NavLink>

        <NavLink
          to="/donat"
          className={({ isActive }) =>
            isActive ? s.active + " " + s.nav : s.nav
          }
        >
          Донат
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
          Информация
        </NavLink>
      </nav>
      :
      <></>
      }
    </>
  );
};

export default NavBarPhone;
