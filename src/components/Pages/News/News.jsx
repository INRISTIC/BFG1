import s from "./News.module.css";

const News = () => {
  return (
    <>
      <div className={s.newsTitle}>News</div>
      <div className={s.newsBlock}>
        <div className={s.newsBlockLeft}>
          <div className={s.newsBlockTg}>
            <div className={s.tgTitle}>Не пропускай новости !</div>
            <div className={s.tgText}>Подписывайся на наш телеграм канал</div>
            <button  className={s.tgBtn}>Перейти</button>
          </div>
          <div className={s.stats}>
            <div>Количество сообщений: 35 682 195</div>
            <div>Дней со дня основания: 65</div>
            <div>Онлайн: 154</div>
          </div>
        </div>
        <div className={s.newsBlockRight}>
          <div className={s.filter}>
            <div className={s.filterBtn}>Сортировка</div>
            <div className={s.filterOptions}>
              <div>Рейтинг</div>
              <div>Дата</div>
            </div>
          </div>
          <div className={s.newsList}>
            <div className={s.newsPost}>
              <div className={s.postImgContainer}>
                <img src="" alt="" className={s.postImg} />
              </div>
              <div className={s.postContainer}>
                <div className={s.postHeader}>
                  <div className={s.postTitle}>Название новости</div>
                  <div className={s.postRating}>* * * * *</div>
                  <div className={s.postData}>14.11.2022</div>
                </div>
                <div className={s.postDescription}>
                  Описание новости Описание новости Описание новости Описание
                  новости Описание новости Описание новостиОписание новости
                  Описание новости Описание новости Описание новости Описание
                  новостиОписание новости
                </div>
                <button className={s.postFullBtn}>Развернуть</button>
              </div>
            </div>
            <div className={s.newsPost}>
              <div className={s.postImgContainer}>
                <img src="" alt="" className={s.postImg} />
              </div>
              <div className={s.postContainer}>
                <div className={s.postHeader}>
                  <div className={s.postTitle}>Название новости</div>
                  <div className={s.postRating}>* * * * *</div>
                  <div className={s.postData}>14.11.2022</div>
                </div>
                <div className={s.postDescription}>
                  Описание новости Описание новости Описание новости Описание
                  новости Описание новости Описание новостиОписание новости
                  Описание новости Описание новости Описание новости Описание
                  новостиОписание новости
                </div>
                <button className={s.postFullBtn}>Развернуть</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
