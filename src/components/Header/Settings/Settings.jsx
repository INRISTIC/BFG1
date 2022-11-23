import React, { useState } from "react";
import s from "./Settings.module.css";
import {ReactComponent as Setting} from "../../../assets/images/settings.svg"
import SettingModal from "./SettingModal/SettingModal";

const SettingsBlock = () => {

  const [active, setActive] = useState(false);

  let modalSettings = () => {
    setActive(!active)
  }

  return (
    <React.StrictMode>
      <button className={s.button} onClick={modalSettings}>
        <Setting className={s.icon} />
      </button>
      {active && <SettingModal/>}
    </React.StrictMode>
  )
}

export default SettingsBlock;