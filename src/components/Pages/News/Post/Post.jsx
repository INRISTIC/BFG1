import s from "./Post.module.css";
import React from "react";
import { useState, useEffect, createRef } from "react";
import { Rate } from 'antd';

import { ReactComponent as Star } from "../../../../assets/images/star-gray.svg"

import ava from "../../../../assets/images/panda-post.png";
import { ReactComponent as Arrow } from "../../../../assets/images/arrow-right.svg";

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
  const [heightPostContant, ChangeHeightPostContantState] = useState(0);
  const [open, setOpen] = useState(false);

  const refComponent = createRef();

  const classesDescHiddenClose = `${s.postDescription} ${s.postDescription_hidden}`;
  const classesDescHiddenOpen = `${classesDescHiddenClose} ${s.postDescription_shadow}`;

  const classesPostOpen = `${s.newsPost} ${s.newsPost_open}`;

  useEffect(() => changeHeightPostContant(refComponent, ChangeHeightPostContantState), [refComponent]);

  return (
    <div className={heightPostContant > 120 ? open ? classesPostOpen : s.newsPost : s.newsPost}>
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
        <div className={heightPostContant > 120 ? !open ? classesDescHiddenOpen : classesDescHiddenClose : s.postDescription} ref={refComponent}>
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
          Описание новости Описание новости Описание новости Описание новости
          Описание новости Описание новости Описание новости Описание новости
        </div>

        {heightPostContant > 120 ?
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
