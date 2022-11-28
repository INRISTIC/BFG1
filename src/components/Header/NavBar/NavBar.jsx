import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import s from "./NavBar.module.css";

const setActive = ({ isActive }) => (isActive ? s.active : s.notActive);

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
      <NavLink to="/" className={setActive}>
        Главная
      </NavLink>

      <NavLink to="/news" className={setActive}>
        Новости
      </NavLink>

      <NavLink to="/donat" className={setActive}>
        Донат
      </NavLink>

      {navStat && (
        <NavLink to="/stat" className={setActive}>
          Личная статистика
        </NavLink>
      )}

      <NavLink to="/info" className={setActive}>
        Информация
      </NavLink>
    </nav>
  );
};

export default NavBar;
