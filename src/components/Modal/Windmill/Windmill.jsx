import s from "./Windmill.module.css";


const Windmill = () => {
  return (
    <div className={s.modal}>
      <div className={s.title}>Ветряк</div>
      <div className={s.list}>
        <div className={s.listItem}>N: N</div>
        <div className={s.listItem}>N: N</div>
        <div className={s.listItem}>N: N</div>
        <div className={s.listItem}>N: N</div>
        <div className={s.listItem}>N: N</div>
      </div>
    </div>
  );
};

export default Windmill;
