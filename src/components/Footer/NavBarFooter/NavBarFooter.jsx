import { NavLink } from "react-router-dom";
import useWindowSize from "../../../hooks/widthHook";
import s from "./NavBarFooter.module.css";
import { openModal } from "../../../store/slices/sliceModal";
import { useDispatch } from "react-redux";

const setActive = ({ isActive }) => (isActive ? s.active : s.notActive);

const NavBarFooter = () => {
  const [width] = useWindowSize();
  const dispatch = useDispatch();
  const onModalOpen = () => {
    dispatch(openModal({modalPersonInfo: true}))
  }


  return (
    <nav className={s.nav}>
      <div className={s.navBlock}>
        <div className={s.footerBlock}>
          {width <= 810 ? (
            <>
              <div className={s.linkPhone}>
                <NavLink to="/" className={setActive}>
                  Главная
                </NavLink>
                <NavLink to="/terms-of-use" className={setActive}>
                  Пользовательское соглашение
                </NavLink>
              </div>

              <div className={s.linkPhone}>
                <NavLink to="/news" className={setActive}>
                  Новости
                </NavLink>
                <NavLink to="/user-conditions" className={setActive}>
                  Условия пользования
                </NavLink>
              </div>
            </>
          ) : (
            <>
            <NavLink to="/" className={setActive}>
                  Главная
                </NavLink>
            <NavLink to="/" className={setActive}>
                  Главная
                </NavLink>
            </>
          )}
          <NavLink to="/donat" className={setActive}>
            Донат
          </NavLink>

          <NavLink to="/info" className={setActive}>
            Информация
          </NavLink>

          <span className={s.span}>Все права защищены © 2022 </span>
        </div>
        {width > 810 && (
            <div className={s.footerBlock}>
                <button className={s.button} onClick={onModalOpen}>
                  Пользовательское соглашение
                </button>
                <NavLink to="/user-conditions" className={setActive} >
                  Условия пользования
                </NavLink>
            </div>
          )}

      </div>
    </nav>
  );
};

export default NavBarFooter;
