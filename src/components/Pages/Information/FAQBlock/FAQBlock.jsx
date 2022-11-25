import s from "./FAQBlock.module.css";

import InfoElement from "../InfoElement/InfoElement";

const FAQBlock = () => {

  return (
    <div className={s.informationBlockContainer}>
      <h1 className={s.title}>F.A.Q</h1>

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
  )
}

export default FAQBlock;