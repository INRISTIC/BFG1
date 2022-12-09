import s from "./Post.module.css";
import React from "react";
import { useLayoutEffect, useState, useEffect, createRef } from "react";
import { Rate } from 'antd';

import { ReactComponent as Star } from "../../../../assets/images/star-gray.svg"

import ava from "../../../../assets/images/panda-post.png";
import { ReactComponent as Arrow } from "../../../../assets/images/arrow-right.svg";

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

function changeHeightPostContant(ref, func) {
  let changeHTML = true;
  let oldHieght = 0;

  const fn = () => {
    if (ref.current == null) {
      changeHTML = false;
      return;
    }

    let newHieght = Math.round(ref.current.scrollHeight);

    if (oldHieght === newHieght) {
      changeHTML = false;
    }

    oldHieght = newHieght;
  };

  const intervalIdClear = setInterval(() => {
    fn();

    if (ref.current == null) {
      clearInterval(intervalIdClear);
      return;
    }

    if (!changeHTML) {
      let height = Math.round(ref.current.scrollHeight);
      func(height);

      clearInterval(intervalIdClear);
    }
  }, 100);
}

const Post = () => {
  const [width] = useWindowSize();

  const [heightPostContant, ChangeHeightPostContantState] = useState(180);
  const [open, setOpen] = useState(false);

  const refComponent = createRef();

  const classesDescHiddenClose = `${s.postDescription} ${s.postDescription_hidden}`;
  const classesDescHiddenOpen = `${classesDescHiddenClose} ${s.postDescription_shadow}`;

  const classesPostOpen = `${s.newsPost} ${s.newsPost_open}`;

  useEffect(() => changeHeightPostContant(refComponent, ChangeHeightPostContantState), [refComponent]);

  let flag;

  if (width > 850) {
    flag = heightPostContant > 120;
  } else {
    flag = heightPostContant > 170;
  }

  return (
    <div className={flag ? open ? classesPostOpen : s.newsPost : s.newsPost}>
      <div className={s.postImgContainer}>
        <img src={ava} alt="" className={s.postImg} />
      </div>
      <div className={s.postContainer}>
        <div className={s.postHeader}>
          <div className={s.postTitle}>Название новости</div>

          <div className={s.postTitleDate}>
            <Rate character={<Star className={s.star} />} style={{ fontSize: 23.4, marginInlineEnd: 0 }} className={s.stars} />
            <div className={s.postData}>14.11.2022</div>
          </div>

        </div>
        <div className={flag ? !open ? classesDescHiddenOpen : classesDescHiddenClose : s.postDescription} ref={refComponent}>
          <p>Описание новости Описание новости Описание новости Описание новости
            Описание новости Описание новости Описание новости Описание новости
            Описание новости Описание новости Описание новости Описание новости
            Описание новости Описание новости Описание новости Описание новости
            Описание новости Описание новости Описание новости Описание новости
            Описание новости Описание новости Описание новости Описание новости
            Описание новости Описание новости Описание новости Описание новости
            Описание новости Описание новости Описание новости Описание новости
            Описание новости Описание новости Описание новости Описание новости
            Описание новости Описание новости Описание новости Описание новости
            Описание новости Описание новости Описание новости Описание новости
            Описание новости Описание новости Описание новости Описание новости
            Описание новости Описание новости Описание новости Описание новости
            Описание новости Описание новости Описание новости Описание новости
            Описание новости Описание новости Описание новости Описание новости</p>
        </div>

        {flag ?
          (
            <button className={s.postFullBtn} onClick={() => setOpen(!open)}>
              {!open ? "Развернуть" : "Скрыть"}
              <Arrow className={s.arrow} style={{ width: 19, height: 20 }} />
            </button>
          ) : false
        }

      </div>
    </div>
  );
};

export default Post;
