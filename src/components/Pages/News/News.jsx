import { useLayoutEffect, useState } from "react";
import ReactSwipe from "react-swipe";
import Post from "./Post/Post";

import { ReactComponent as Arrow } from "../../../assets/images/arrow-bottom.svg";
import { ReactComponent as ArrowRight } from "../../../assets/images/arrow-left.svg";
import { ReactComponent as ArrowLeft } from "../../../assets/images/arrow-left.svg";
import sortIcon from "../../../assets/images/sort-icon.svg";

import s from "./News.module.css";

function useWindowSize() {
  const [size, setSize] = useState([0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const News = () => {
  const [width] = useWindowSize();
  const [sort, setSort] = useState({ rating: false, time: false });
  const btnActive = (arg) => {
    setSort({ ...sort, [arg]: !sort[arg] });
  };

  let reactSwipeEl;

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
              <button
                className={
                  sort.rating
                    ? s.sortBtns1 + " " + s.sortBtnsActive
                    : s.sortBtns1
                }
                onClick={() => btnActive("rating")}
              >
                Рейтинг
                <Arrow className={s.arrow} />
              </button>
              <button
                className={
                  sort.time ? s.sortBtns2 + " " + s.sortBtnsActive : s.sortBtns2
                }
                onClick={() => btnActive("time")}
              >
                Дата
                <Arrow className={s.arrow} />
              </button>
            </div>
          </div>
          {width > 850 ? (
            <div className={s.newsList}>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          ) : (
            <div className={s.sliderBlock}>
              <ReactSwipe
                swipeOptions={{ continuous: true }}
                ref={(el) => (reactSwipeEl = el)}
              >
                <div>
                  <Post />
                </div>
                <div>
                  <Post />
                </div>
                <div>
                  <Post />
                </div>
              </ReactSwipe>
              <button className={s.leftBtn} onClick={() => reactSwipeEl.next()}>
                <ArrowRight className={s.arrowBtnPrevRight} />
              </button>
              <button
                className={s.rightBtn}
                onClick={() => reactSwipeEl.prev()}
              >
                <ArrowLeft className={s.arrowBtnPrevLeft} />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default News;
