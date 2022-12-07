import s from "./RegulationsBlock.module.css";
import InfoElement from "../InfoElement/InfoElement";

const RegulationsBlock = () => {
  return (
    <div className={s.RegulatBlock}>
      <h1 className={s.title}>Правила</h1>
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
    </div>
  );
};

export default RegulationsBlock;
