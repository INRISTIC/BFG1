import React from "react";
import s from "./Settings.module.css";
import {ReactComponent as Setting} from "../../../assets/images/settings.svg"
import SettingModal from "./SettingModal/SettingModal";

const SettingsBlock = ({active, openSettings}) => {

  return (
    <>
      <button className={s.button} onClick={openSettings}>
        <Setting className={s.icon} />
      </button>
      {active && <SettingModal/>}
    </>
  )
}

export default SettingsBlock;