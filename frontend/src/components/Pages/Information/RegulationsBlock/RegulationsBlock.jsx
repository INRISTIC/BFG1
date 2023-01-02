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
  const faqMas = regulation.items;
  const chet = [];
  const nechet = [];
  const last = [];

  if (faqMas.length > 0) {
    if (faqMas.length % 2 === 0) {
      for (let i = 0; i < faqMas.length; i++) {
        if (i % 2 === 0) {
          chet.push(faqMas[i]);
        } else if (i % 2 === 1) {
          nechet.push(faqMas[i]);
        }
      }
    } else {
      for (let i = 0; i < faqMas.length; i++) {
        if (i === faqMas.length - 1) {
          last.push(faqMas[i])
        } else if (i % 2 === 0) {
          chet.push(faqMas[i]);
        } else if (i % 2 === 1) {
          nechet.push(faqMas[i]);
        }
      }
    }
  }

  return (
    <div className={s.regulationBlockContainer}>
      <h1 className={s.title}>Правила</h1>
      <div className={s.informationRow}>
        <div className={s.informationCol}>
          {(!isRegulationStatus &&
            chet.length > 0) &&
            chet.map((item) => (
              <RulesItem item={item} key={item._id} />
            ))}
        </div>
        <div className={s.informationCol}>
          {(!isRegulationStatus &&
            nechet.length > 0) &&
            nechet.map((item) => (
              <RulesItem item={item} key={item._id} />
            ))}
        </div>
      </div>
      {last.length > 0 ? <div className={s.informationRow + " " + s.informationRowOnly}>
        <div className={s.informationCol}>
          <RulesItem item={last[0].item} key={last[0].item._id} />
        </div>
      </div> : undefined}
    </div>
  );
};

export default RegulationsBlock;
