import { useLayoutEffect, useState, useEffect, createRef } from "react";
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

function changeScroll(e, func) {
  let scrollBottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight;
  scrollBottom = Math.round(scrollBottom);

  if (!scrollBottom) {
    func(true);

  } else {
    func(false);
  }
}

function changeStyleSlide(slides, newWidth) {
  slides.forEach((el, i) => {
    let left = i ? newWidth * i : 0;
    let transitionDuration = el.current.style.transitionDuration;
    let transformMove = i ? newWidth : 0;
    transformMove = el.current.style.transform.indexOf('-') !== -1 ? -transformMove : transformMove;

    let styles = 'float: left;' +
      'position: relative;' +
      'transition-property: transform;' +
      `width:${newWidth}px;` +
      `left: -${left}px;` +
      `transition-duration: ${transitionDuration};` +
      `transform: translate(${transformMove}px, 0px) translateZ(0px);`;

    el.current.setAttribute('style', styles);
  });
}

function rerenderStyleSlide(slides, width) {
  slides.forEach((el) => {
    let transitionDuration = el.current.style.transitionDuration;

    let transformStyle = el.current.style.transform;
    let transformMove = parseFloat(transformStyle.split('translate(')[1].split('px')[0]);

    if (transformMove !== 0) {

      if (transformMove < 0) {
        transformMove = -width;

      } else {
        transformMove = width;
      }
    }

    transformStyle = `translate(${transformMove}px, 0px) translateZ(0px)`;

    let leftStyle = el.current.style.left;

    let styles = 'float: left;' +
      'position: relative;' +
      'transition-property: transform;' +
      `width:${width}px;` +
      `left: ${leftStyle};` +
      `transition-duration: ${transitionDuration};` +
      `transform: ${transformStyle};`;

    el.current.setAttribute('style', styles);
  });
}

function changeStyleSlidesContainer(ref, slides, func) {
  let parent = ref.current;
  let widthSlidesContainer = parent.clientWidth;
  func(widthSlidesContainer);

  let styles = 'overflow: hidden;' +
    'position: relative;' +
    'transition-property: transform;' +
    `width:${widthSlidesContainer * slides.length}px;`;

  ref.current.children[0].children[0].setAttribute('style', styles);
}

const News = () => {
  const [width] = useWindowSize();
  const [sort, setSort] = useState({ rating: false, time: false });
  const btnActive = (arg) => {
    setSort({ ...sort, [arg]: !sort[arg] });
  };

  let reactSwipeEl;

  const [scrollDown, setScrolling] = useState(false);

  const classesLists = `${s.newsList}`;
  const classesListsShadow = `${classesLists} ${s.newsList_shadow}`;

  const [widthSlide, ChangeWidthSlide] = useState(786);

  const refComponent = createRef();
  const checkWidth = [createRef(), createRef(), createRef(), createRef(), createRef(), createRef()];

  useEffect(() => {
    if (width <= 850) {
      changeStyleSlidesContainer(refComponent, checkWidth, ChangeWidthSlide);
    }
  }, [refComponent, checkWidth, width]);


  useEffect(() => {
    if (width <= 850) {
      changeStyleSlide(checkWidth, widthSlide);
    }
  }, [checkWidth, widthSlide, width]);

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
            <div className={s.sliderBlock} ref={refComponent}>
              <ReactSwipe
                swipeOptions={{ continuous: true }}
                ref={(el) => (reactSwipeEl = el)}
              >
                <div className={s.slidePostContainer} ref={checkWidth[0]}>
                  <Post />
                </div>

                <div className={s.slidePostContainer} ref={checkWidth[1]}>
                  <Post />
                </div>

                <div className={s.slidePostContainer} ref={checkWidth[2]}>
                  <Post />
                </div>

                <div className={s.slidePostContainer} ref={checkWidth[3]}>
                  <Post />
                </div>

                <div className={s.slidePostContainer} ref={checkWidth[4]}>
                  <Post />
                </div>

                <div className={s.slidePostContainer} ref={checkWidth[5]}>
                  <Post />
                </div>
              </ReactSwipe>

              <button className={s.leftBtn} onClick={() => {
                reactSwipeEl.next();
                rerenderStyleSlide(checkWidth, widthSlide);
              }}>

                <ArrowRight className={s.arrowBtnPrevRight} />

              </button>

              <button className={s.rightBtn} onClick={() => {
                reactSwipeEl.prev();
                rerenderStyleSlide(checkWidth, widthSlide);
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
