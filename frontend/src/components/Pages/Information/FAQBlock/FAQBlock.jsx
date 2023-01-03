import { useEffect } from "react";
import { fetchFaqs } from "../../../../store/slices/sliceFaq";
import { useDispatch, useSelector } from "react-redux";
import s from "./FAQBlock.module.css";

import InfoElement from "../InfoElement/InfoElement";

const FAQBlock = () => {
  const dispatch = useDispatch();
  const { faqs } = useSelector((state) => state.faqs);
  useEffect(() => {
    dispatch(fetchFaqs());
  }, []);

  const isFaqsStatus = faqs.status === "loading";
  const faqMas = faqs.items;
  let chet = [];
  let nechet = [];
  let last = [];

  if (faqMas.length > 0) {
    if (faqMas.length % 2 == 0) {
      for (let i = 0; i < faqMas.length; i++) {
        if (i % 2 == 0) {
          chet.push(faqMas[i]);
        } else if (i % 2 == 1) {
          nechet.push(faqMas[i]);
        }
      }
    } else {
      for (let i = 0; i < faqMas.length; i++) {
        if (i === faqMas.length - 1) {
          last.push(faqMas[i]);
          console.log(last[0]);
        } else if (i % 2 == 0) {
          chet.push(faqMas[i]);
        } else if (i % 2 == 1) {
          nechet.push(faqMas[i]);
        }
      }
    }
  }

  return (
    <div className={s.informationBlockContainer}>
      <h1 className={s.title}>F.A.Q</h1>
      <div className={s.informationRow}>
        <div className={s.informationCol}>
          {!isFaqsStatus &&
            chet.length > 0 &&
            chet.map((item) => <InfoElement item={item} key={item._id} />)}
        </div>
        <div className={s.informationCol}>
          {!isFaqsStatus &&
            nechet.length > 0 &&
            nechet.map((item) => <InfoElement item={item} key={item._id} />)}
        </div>
      </div>
      {last.length > 0 ? (
        <div className={s.informationRow + " " + s.informationRowOnly}>
          <div className={s.informationCol}>
            <InfoElement item={last[0]} key={last[0]._id} />
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default FAQBlock;
