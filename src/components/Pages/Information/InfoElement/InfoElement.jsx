import s from "./InfoElement.module.css";
import { ReactComponent as Arrow } from "../../../../assets/images/arrow-bottom.svg";

import { useState } from "react";

const InfoElement = () => {

  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className={open ? s.infoElement : s.infoElement + ' ' + s.hidden} onClick={() => setOpen(!open)}>
      <div className={s.infoElement__header_block}>
        <span className={s.infoElement__header_text}>Как попасть в ТОП 100</span>

        <button className={open ? s.infoElement__header_btn + ' ' + s.infoElement__header_btn_active : s.infoElement__header_btn}>
          <Arrow className={s.arrow} />
        </button>
      </div>

    </div>
  )
}

export default InfoElement;