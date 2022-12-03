import CloseBtn from "../CloseBtn/CloseBtn";
import s from "./Inventory.module.css";

const Inventory = () => {
  return (
    <div className={s.modal}>
      <div className={s.title}>
        <span>Склад</span>
      </div>
      <div className={s.list}>
        <div
          data-count="10"
          data-title="Кирпич"
          className={s.listItem + " " + s.active}
        >
          <img src={require("../../../assets/images/kirpich.png")} alt="" className={s.img} />
          <div className={s.hoverEl}>
            <div>Название: Кирпич</div>
            <div>Количество: 56 шт.</div>
          </div>
        </div>
        <div className={s.listItem}></div>
        <div className={s.listItem}></div>
        <div className={s.listItem}></div>
        <div className={s.listItem}></div>
        <div className={s.listItem}></div>
        <div className={s.listItem}></div>
        <div className={s.listItem}></div>
        <div className={s.listItem}></div>
        <div className={s.listItem}></div>
        <div className={s.listItem}></div>
        <div className={s.listItem}></div>
        <div className={s.listItem}></div>
        <div className={s.listItem}></div>
        <div className={s.listItem}></div>
      </div>
      <CloseBtn />
    </div>
  );
};

export default Inventory;
