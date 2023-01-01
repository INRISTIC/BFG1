import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import s from "./DonatBlock.module.css";
import WayDonat from "./WayDonat/WayDonat";
import DonatQiwi from "./DonatQiwi/DonatQiwi";

const DonatBlock = () => {
  const { t } = useTranslation();
  const donat = useSelector((state) => state.donat);

  return (
    <div className={s.donatBlock}>
      <h1 className={s.title}>{t("NavBar.donat")}</h1>
      {donat.donatWay && <WayDonat />}
      {donat.donatCard.status && <DonatQiwi />}
      {donat.donatQiwi.status && <DonatQiwi />}
      {donat.donatMoney.status && <DonatQiwi />}
    </div>
  )
}

export default DonatBlock;