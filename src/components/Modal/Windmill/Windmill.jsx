import CloseBtn from "../CloseBtn/CloseBtn";
import s from "./Windmill.module.css";


const Windmill = () => {
  return (
    <div className={s.modal}>
      <div className={s.title}><span>Ветряк</span></div>
      <div className={s.list}>
        <div className={s.listItem}>N: N</div>
        <div className={s.listItem}>N: N</div>
        <div className={s.listItem}>N: N</div>
        <div className={s.listItem}>N: N</div>
        <div className={s.listItem}>N: N</div>
      </div>
      <CloseBtn />
    </div>
  );
};

export default Windmill;
