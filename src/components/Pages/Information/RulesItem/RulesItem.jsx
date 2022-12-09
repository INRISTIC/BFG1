import s from "./RulesItem.module.css";
import { ReactComponent as Arrow } from "../../../../assets/images/arrow-bottom.svg";

import { useState } from "react";

const RulesItem = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div
      className={open ? s.infoElement : s.infoElement + " " + s.hidden}
      onClick={() => setOpen(!open)}
    >
      <div className={s.infoElement__header_block}>
        <span
          className={
            open
              ? s.infoElement__header_text + " " + s.activeColor
              : s.infoElement__header_text
          }
        >
          Как попасть в ТОП 100
        </span>
        <button
          className={
            open
              ? s.infoElement__header_btn +
                " " +
                s.infoElement__header_btn_active
              : s.infoElement__header_btn
          }
        >
          <Arrow className={open ? s.arrow + ' ' + s.arrowActive : s.arrow} />
        </button>
      </div>
      <div className={open ? s.activeText : s.closed + ' ' + s.defaultBlosk }>
        <span className={s.text}>
          Вы сможете пополнить баланс с помощью Qiwi Wallet, Банковской картой и
          Юmoney
        </span>
      </div>
    </div>
  );
};

export default RulesItem;
