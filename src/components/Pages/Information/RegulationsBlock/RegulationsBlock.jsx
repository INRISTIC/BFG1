import s from "./RegulationsBlock.module.css";
import RulesItem from "../RulesItem/RulesItem";

const RegulationsBlock = () => {
  return (
    <div className={s.regulationBlockContainer}>
      <h1 className={s.title}>Правила</h1>
      <div className={s.informationRow}>
        <div className={s.informationCol}>
          <RulesItem />
          <RulesItem />
        </div>

        <div className={s.informationCol}>
          <RulesItem />
          <RulesItem />
        </div>
      </div>
    </div>
  );
};

export default RegulationsBlock;
