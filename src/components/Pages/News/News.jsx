import { useState } from "react";

import Post from "./Post/Post";

import { ReactComponent as Arrow} from "../../../assets/images/arrow-bottom.svg";

import sortIcon from "../../../assets/images/sort-icon.svg";

import s from "./News.module.css";

const News = () => {

  const [sort, setSort] = useState({rating: false, time: false})

  const btnActive = (arg) => {
    setSort({...sort, [arg]: !sort[arg]})
  }

  console.log(sort)

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
              <img src={sortIcon} alt="" />
              Сортировка
            </div>
            <div className={s.filterOptions}>
              <button className={sort.rating ? s.sortBtns1 + ' ' + s.sortBtnsActive : s.sortBtns1} onClick={() => btnActive('rating')}>
              Рейтинг
              <Arrow className={s.arrow}/>
              </button>
              <button className={sort.time ? s.sortBtns2 + ' ' + s.sortBtnsActive : s.sortBtns2} onClick={() => btnActive('time')}>
              Дата
              <Arrow className={s.arrow}/>
              </button>
            </div>
          </div>
          <div className={s.newsList}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
