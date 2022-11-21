import s from "./Header.module.css";
import NavBar from "./NavBar/NavBar";
import Settings from "./Settings/Settings";

const Header = () => {
  return (
    <header>
      <div className={s.headerLeft}>
        <div className={s.logo}>BFG</div>
        <NavBar />
      </div>
      <Settings />
    </header>
  );
};

export default Header;
