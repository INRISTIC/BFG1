import { useLayoutEffect, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import Post from "./Post/Post";

import axios from "../../../axios";

import { ReactComponent as Arrow } from "../../../assets/images/arrow-bottom.svg";
import { ReactComponent as ArrowRight } from "../../../assets/images/arrow-left.svg";
import { ReactComponent as ArrowLeft } from "../../../assets/images/arrow-left.svg";
import sortIcon from "../../../assets/images/sort-icon.svg";

import s from "./News.module.css";
import "swiper/css";
import { fetchPosts } from "../../../store/slices/slicePosts";
import { fetchSettings } from "../../../store/slices/sliceSettings";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 48,
    }}
    spin
  />
);

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
  let scrollBottom =
    e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight;
  scrollBottom = Math.round(scrollBottom);

  func(!scrollBottom);
}

const News = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { settings } = useSelector((state) => state.settings);
  let postsMas = posts.items;
  const [postsMasHook, setPosts] = useState([]);
  const isPostsLoading = posts.status === "loading";
  const isSettingsLoading = settings.status === "loading";

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchSettings());
  }, []);

  useEffect(() => {
    setPosts(postsMas)
  }, [postsMas]);


  useEffect(() => {
    if (posts.items.length > 0) {
      let arr = [];
      for (let i = 0; i < posts.items.length; i++) {
        arr.push(false);
      }
      setFlags(arr);
    }
  }, [posts.items.length]);

  const [width] = useWindowSize();
  const [sort, setSort] = useState({ rating: false, time: false });

  const btnActive = (arg) => {
    if (arg === "rating") {
      setPosts(sortRating(postsMasHook));
    } else if (arg === "time") {
      setPosts(sortDate(postsMasHook));
    }
    setSort({ ...sort, [arg]: !sort[arg] });
  };

  const [scrollDown, setScrolling] = useState(false);

  const classesLists = `${s.newsList}`;
  const classesListsShadow = `${classesLists} ${s.newsList_shadow}`;

  const [flagsOpen, setFlags] = useState([]);
  const [flagClose, setClose] = useState(false);
  const swiperRef = useRef();

  const sortRating = (posts) => {
    let funcPosts = [...posts];
    if (sort.rating) {
      funcPosts = funcPosts.sort((a, b) => a.rating - b.rating);
      return funcPosts;
    } else {
      funcPosts = funcPosts.sort((a, b) => b.rating - a.rating);
      return funcPosts
    }
  };

  const sortDate = (posts) => {
    let funcPosts = [...posts];
    if (sort.time) {
      return funcPosts.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    } else {
      return funcPosts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }
  };

  return (
    <>
      <h1 className={s.newsTitle}>{t("News.title")}</h1>
      <div className={s.newsBlock}>
        <div className={s.newsBlockLeft}>
          <div className={s.newsBlockTg}>
            <div className={s.tgTitle}>{t("News.noWatchNews")}</div>
            <div className={s.tgText}>{t("News.subscribeTg")}</div>
            <button className={s.tgBtn}>{t("News.goTg")}</button>
          </div>
          <div className={s.stats}>
            <div>
              {t("Stat.count_sms")}: <span>{settings.info.users_sms}</span>
            </div>
            <div>
              {t("Stat.count_days")}:{" "}
              <span>
                {!isSettingsLoading &&
                  Math.floor(
                    (Date.parse(new Date()) -
                      Date.parse(settings.info.updatedAt)) /
                      (1000 * 3600 * 24)
                  )}
              </span>
            </div>
            <div>
              {t("Stat.online")}: <span>{settings.info.online}</span>
            </div>
          </div>
        </div>
        <div className={s.newsBlockRight}>
          <div className={s.filter}>
            <div className={s.filterBtn}>
              <img src={sortIcon} alt="" />
              {t("News.sorts")}
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
                {t("News.rating")}
                <Arrow className={s.arrow} />
              </button>
              <button
                className={
                  sort.time ? s.sortBtns2 + " " + s.sortBtnsActive : s.sortBtns2
                }
                onClick={() => btnActive("time")}
              >
                {t("News.date")}
                <Arrow className={s.arrow} />
              </button>
            </div>
          </div>
          {width > 850 ? (
            <div className={s.newsListContainer}>
              <div
                className={!scrollDown ? classesListsShadow : classesLists}
                onScroll={(e) => changeScroll(e, setScrolling)}
              >
                {isPostsLoading ? (
                  <div className={s.loader}>
                    <Spin indicator={antIcon} />
                  </div>
                ) : (
                  postsMasHook.map((item) => <Post item={item} key={item._id} />)
                )}
              </div>
            </div>
          ) : (
            <div className={s.sliderBlock}>
              <Swiper
                spaceBetween={300}
                slidesPerView={1}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {isPostsLoading ? (
                  <div className={s.loader}>
                    <Spin indicator={antIcon} />
                  </div>
                ) : (
                  postsMasHook.map((item, index) => (
                    <SwiperSlide className={s.slidePostContainer}>
                      <Post
                        item={item}
                        flagsOpen={flagsOpen}
                        changeFlagOpen={setFlags}
                        flagClose={flagClose}
                        changeFlagClose={setClose}
                        index={String(index)}
                        key={item._id}
                      />
                    </SwiperSlide>
                  ))
                )}
              </Swiper>

              <button
                className={s.leftBtn}
                onClick={() => {
                  swiperRef.current?.slideNext();
                  flagsOpen.forEach((el) => (el ? setClose(true) : ""));
                }}
              >
                <ArrowRight className={s.arrowBtnPrevRight} />
              </button>

              <button
                className={s.rightBtn}
                onClick={() => {
                  swiperRef.current?.slidePrev();
                  flagsOpen.forEach((el) => (el ? setClose(true) : ""));
                }}
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
