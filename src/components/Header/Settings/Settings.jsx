import React from "react";
import s from "./Settings.module.css";
import {ReactComponent as Setting} from "../../../assets/images/settings.svg"
import SettingModal from "./SettingModal/SettingModal";
import { useRef } from "react";

const SettingsBlock = ({active, openSettings, closeSetting}) => {
  const btnRef = useRef(null)
  return (
    <>
      <button className={s.button} onClick={openSettings} ref={btnRef}>
        <Setting className={s.icon} />
      </button>
      <SettingModal active={active} closeSetting={closeSetting} btnRef={btnRef}/>
    </>
  )
}

export default SettingsBlock;