import s from "./DonatBlock.module.css";
import WayDonat from "./WayDonat/WayDonat";
import { useSelector, useDispatch } from "react-redux";
import DonatQiwi from "./DonatQiwi/DonatQiwi";

const DonatBlock = () => {

  const donat = useSelector((state) => state.donat);

  return (
    <div className={s.donatBlock}>
      <div className={s.title}>Донат</div>
      {donat.donatWay && <WayDonat />}
      {donat.donatCard.status && <DonatQiwi />}
      {donat.donatQiwi.status && <DonatQiwi />}
      {donat.donatMoney.status && <DonatQiwi />}
    </div>
  )
}

export default DonatBlock;