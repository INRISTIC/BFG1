import s from "./Post.module.css";

import { Rate } from 'antd';

import { ReactComponent as Star } from "../../../../assets/images/star-gray.svg"

import ava from "../../../../assets/images/panda-post.png";
import { ReactComponent as Arrow } from "../../../../assets/images/arrow-right.svg";

const Post = () => {
  return (
    <div className={s.newsPost}>
      <div className={s.postImgContainer}>
        <img src={ava} alt="" className={s.postImg} />
      </div>
      <div className={s.postContainer}>
        <div className={s.postHeader}>
          <div className={s.postTitle}>Название новости</div>
          <Rate character={<Star />} style={{ fontSize: 23.4, marginInlineEnd: 0}} className={s.stars}/>
          <div className={s.postData}>14.11.2022</div>
        </div>
        <div className={s.postDescription}>
          Описание новости Описание новости Описание новости Описание новости
          Описание новости Описание новостиОписание новости Описание новости
          Описание новости Описание новости Описание новостиОписание новости
        </div>
        <button className={s.postFullBtn}>
          Развернуть
          <Arrow className={s.arrow}/>
        </button>
      </div>
    </div>
  );
};

export default Post;
