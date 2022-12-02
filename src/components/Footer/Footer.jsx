import React from "react";

import s from "./Footer.module.css";
import NavBarFooter from "./NavBarFooter/NavBarFooter";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerBlock}>
        <div className={s.footerBlockLeft}>
          <div className={s.logo}>BFG</div>
          <NavBarFooter />
        </div>
        <div className={s.footerBlockRight}>
          <div>Все права защищены © 2022 </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
