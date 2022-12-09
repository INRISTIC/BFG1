import s from "./PrivilegeBlock.module.css";
import InfoElement from "../InfoElement/InfoElement";

const PrivilegeBlock = () => {
  return (
    <div className={s.PrivilegeBlock}>
      <h1 className={s.title}>Привелегии</h1>
      <div className={s.informationRow}>
        <div className={s.informationCol}>
          <InfoElement />
          <InfoElement />
        </div>

        <div className={s.informationCol}>
          <InfoElement />
          <InfoElement />
        </div>
      </div>

      <div className={s.informationRow + ' ' + s.informationRowOnly}>
        <div className={s.informationCol}>
          <InfoElement />
        </div>
      </div>
    </div>
  );
};

export default PrivilegeBlock;
