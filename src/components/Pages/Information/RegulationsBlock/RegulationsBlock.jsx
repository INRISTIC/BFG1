import { fetchRegulation } from "../../../../store/slices/sliceFaq";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import s from "./RegulationsBlock.module.css";
import RulesItem from "../RulesItem/RulesItem";

const RegulationsBlock = () => {
  const dispatch = useDispatch();

  const { regulation } = useSelector((state) => state.faqs);
  useEffect(() => {
    dispatch(fetchRegulation());
  }, []);

  const isRegulationStatus = regulation.status === "loading";

  return (
    <div className={s.regulationBlockContainer}>
      <h1 className={s.title}>Правила</h1>
      <div className={s.informationRow}>
        <div className={s.informationCol}>
          {!isRegulationStatus &&
            regulation.items.map((item) => <RulesItem item={item} key={item._id}/>)}
        </div>

        {/* <div className={s.informationCol}>
          <RulesItem />
          <RulesItem />
        </div> */}
      </div>
    </div>
  );
};

export default RegulationsBlock;
