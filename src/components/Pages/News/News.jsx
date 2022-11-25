import s from "./News.module.css";

import Post from "./Post/Post";

import sort from "../../../assets/images/sort-icon.svg";
import arrow from "../../../assets/images/arrow-bottom.svg";

const News = () => {
  return (
    <>
      <h1 className={s.newsTitle}>News</h1>
      <div className={s.newsBlock}>
        <div className={s.newsBlockLeft}>
          <div className={s.newsBlockTg}>
            <div className={s.tgTitle}>Не пропускай новости !</div>
            <div className={s.tgText}>Подписывайся на наш телеграм канал</div>
            <button className={s.tgBtn}>Перейти</button>
          </div>
          <div className={s.stats}>
            <div>
              Количество сообщений: <span>35 682 195</span>
            </div>
            <div>
              Дней со дня основания: <span>65</span>
            </div>
            <div>
              Онлайн: <span>154</span>
            </div>
          </div>
        </div>
        <div className={s.newsBlockRight}>
          <div className={s.filter}>
            <div className={s.filterBtn}>
              <img src={sort} alt="" />
              Сортировка
            </div>
            <div className={s.filterOptions}>
              <div className={s.sortBtns}>
              Рейтинг
              <img src={arrow} alt="" />
              </div>
              <div className={s.sortBtns}>
              Дата
              <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          <div className={s.newsList}>
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
