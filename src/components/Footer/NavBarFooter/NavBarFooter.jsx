import { NavLink } from "react-router-dom";
import s from "./NavBarFooter.module.css";

const setActive = ({ isActive }) => (isActive ? s.active : s.notActive);

const NavBarFooter = () => {
  return (
    <nav className={s.nav}>
      <div className={s.navBlock}>
        <div>
          <NavLink to="/" className={setActive}>
            Главная
          </NavLink>

          <NavLink to="/news" className={setActive}>
            Новости
          </NavLink>

          <NavLink to="/donat" className={setActive}>
            Донат
          </NavLink>

          <NavLink to="/info" className={setActive}>
            Информация
          </NavLink>

          <span className={s.span}>Все права защищены © 2022 </span>
        </div>
        <div>
          <NavLink to="/terms-of-use" className={setActive}>
            Пользовательское соглашение
          </NavLink>

          <NavLink to="/user-conditions" className={setActive}>
            Условия пользования
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBarFooter;
