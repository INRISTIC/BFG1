import { useLayoutEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Post from "./Post/Post";

import { ReactComponent as Arrow } from "../../../assets/images/arrow-bottom.svg";
import { ReactComponent as ArrowRight } from "../../../assets/images/arrow-left.svg";
import { ReactComponent as ArrowLeft } from "../../../assets/images/arrow-left.svg";
import sortIcon from "../../../assets/images/sort-icon.svg";

import s from "./News.module.css";
import 'swiper/css';


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

function changeScroll(e, func) {
  let scrollBottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight;
  scrollBottom = Math.round(scrollBottom);

  func(!scrollBottom);
}

const News = () => {
  const [width] = useWindowSize();
  const [sort, setSort] = useState({ rating: false, time: false });

  const btnActive = (arg) => {
    setSort({ ...sort, [arg]: !sort[arg] });
  };

  const [scrollDown, setScrolling] = useState(false);

  const classesLists = `${s.newsList}`;
  const classesListsShadow = `${classesLists} ${s.newsList_shadow}`;

  const [flagsOpen, setFlags] = useState([false, false, false, false, false, false]);
  const [flagClose, setClose] = useState(false);

  const swiperRef = useRef();

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
            <div className={s.newsListContainer}>
              <div className={!scrollDown ? classesListsShadow : classesLists} onScroll={(e) => changeScroll(e, setScrolling)}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
              </div>
            </div>
          ) : (
            <div className={s.sliderBlock}>
              <Swiper spaceBetween={300} slidesPerView={1} onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}>
                <SwiperSlide className={s.slidePostContainer}>
                  <Post flagsOpen={flagsOpen} changeFlagOpen={setFlags} flagClose={flagClose} changeFlagClose={setClose} index='0' />
                </SwiperSlide>

                <SwiperSlide className={s.slidePostContainer}>
                  <Post flagsOpen={flagsOpen} changeFlagOpen={setFlags} flagClose={flagClose} changeFlagClose={setClose} index='1' />
                </SwiperSlide>

                <SwiperSlide className={s.slidePostContainer}>
                  <Post flagsOpen={flagsOpen} changeFlagOpen={setFlags} flagClose={flagClose} changeFlagClose={setClose} index='2' />
                </SwiperSlide>

                <SwiperSlide className={s.slidePostContainer}>
                  <Post flagsOpen={flagsOpen} changeFlagOpen={setFlags} flagClose={flagClose} changeFlagClose={setClose} index='3' />
                </SwiperSlide>

                <SwiperSlide className={s.slidePostContainer}>
                  <Post flagsOpen={flagsOpen} changeFlagOpen={setFlags} flagClose={flagClose} changeFlagClose={setClose} index='4' />
                </SwiperSlide>

                <SwiperSlide className={s.slidePostContainer}>
                  <Post flagsOpen={flagsOpen} changeFlagOpen={setFlags} flagClose={flagClose} changeFlagClose={setClose} index='5' />
                </SwiperSlide>
              </Swiper>

              <button className={s.leftBtn} onClick={() => {
                swiperRef.current?.slideNext();
                flagsOpen.forEach(el => el ? setClose(true) : '');
              }}>

                <ArrowRight className={s.arrowBtnPrevRight} />

              </button>

              <button className={s.rightBtn} onClick={() => {
                swiperRef.current?.slidePrev();
                flagsOpen.forEach(el => el ? setClose(true) : '');
              }}>

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
