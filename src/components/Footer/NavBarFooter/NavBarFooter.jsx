import { NavLink } from "react-router-dom";
import useWindowSize from "../../../hooks/widthHook";
import { useTranslation } from "react-i18next";
import s from "./NavBarFooter.module.css";
import { openModal } from "../../../store/slices/sliceModal";
import { useDispatch } from "react-redux";

const setActive = ({ isActive }) => (isActive ? s.active : s.notActive);

const NavBarFooter = () => {
  const { t } = useTranslation();
  const [width] = useWindowSize();
  const dispatch = useDispatch();
  const onModalOpen = () => {
    dispatch(openModal({ modalPersonInfo: true }));
  };

  return (
    <nav className={s.nav}>
      <div className={s.navBlock}>
        <div className={s.footerBlock}>
          {width <= 810 ? (
            <>
              <div className={s.linkPhone}>
                <NavLink to="/" className={setActive}>
                  {t("NavBar.home")}
                </NavLink>
                <button className={s.button} onClick={onModalOpen}>
                  {t("NavBar.termsOfUse")}
                </button>
              </div>

              <div className={s.linkPhone}>
                <NavLink to="/news" className={setActive}>
                  {t("NavBar.news")}
                </NavLink>
                <button className={s.button} onClick={onModalOpen}>
                  {t("NavBar.userTerms")}
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/" className={setActive}>
                {t("NavBar.home")}
              </NavLink>
              <NavLink to="/news" className={setActive}>
                {t("NavBar.news")}
              </NavLink>
            </>
          )}
          <NavLink to="/donat" className={setActive}>
            {t("NavBar.donat")}
          </NavLink>

          <NavLink to="/info" className={setActive}>
            {t("NavBar.info")}
          </NavLink>

          <span className={s.span}>{t("NavBar.rules")} © 2022 </span>
        </div>
        {width > 810 && (
          <div className={s.footerBlock}>
            <button className={s.button} onClick={onModalOpen}>
              {t("NavBar.termsOfUse")}
            </button>
            <button className={s.button} onClick={onModalOpen}>
              {t("NavBar.userTerms")}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBarFooter;
