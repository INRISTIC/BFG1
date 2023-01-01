import { useEffect } from "react";
import { fetchFaqs } from "../../../../store/slices/sliceFaq";
import { useDispatch, useSelector } from "react-redux";
import s from "./FAQBlock.module.css";

import InfoElement from "../InfoElement/InfoElement";


const FAQBlock = () => {
  const dispatch = useDispatch();
  const { faqs } = useSelector(state => state.faqs)
  useEffect(() => {
    dispatch(fetchFaqs());
  }, [])

  const isFaqsStatus = faqs.status === 'loading'

  return (
    <div className={s.informationBlockContainer}>
      <h1 className={s.title}>F.A.Q</h1>

      <div className={s.informationRow}>
        <div className={s.informationCol}>
        {!isFaqsStatus && faqs.items.map((item) => (
          <InfoElement item={item} key={item._id}/>
        )) }
        </div>
      </div>
    </div>
  )
}

export default FAQBlock;