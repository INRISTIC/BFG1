import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import s from "./NavBar.module.css";



const NavBar = () => {
  let { pathname } = useLocation();
  let navStat = false;
  if (pathname === "/stat") {
    navStat = true;
  } else {
    navStat = false;
  }

  
  

  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? s.active + ' ' + s.nav : s.nav)}>
        Главная
      </NavLink>

      <NavLink to="/news" className={({ isActive }) => (isActive ? s.active + ' ' + s.nav : s.nav)}>
        Новости
      </NavLink>

      <NavLink to="/donat" className={({ isActive }) => (isActive ? s.active + ' ' + s.nav : s.nav)}>
        Донат
      </NavLink>

      {navStat && (
        <NavLink to="/stat" className={({ isActive }) => (isActive ? s.active + ' ' + s.nav : s.nav)}>
          Личная статистика
        </NavLink>
      )}

      <NavLink to="/info" className={({ isActive }) => (isActive ? s.active + ' ' + s.nav : s.nav)}>
        Информация
      </NavLink>
    </nav>
  );
};

export default NavBar;
