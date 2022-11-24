import s from "./PersonalStatistics.module.css";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../../store/slices/sliceModal";

const PersonalStatistics = () => {
  const dispatch = useDispatch();
  
  return (
    <>
      <div className={s.title}>Личная статистика</div>
      <div className={s.statsBlock}>
        <div className={s.statsBlockHeader}>
          <div className={s.statsBlockAvatar}>
            <div className={s.avatarContainer}>
              <div className={s.avatarContainerImg}>
                <img src="" alt="" className={s.Img} />
              </div>
              <div>ArtLab</div>
            </div>
          </div>
          <div className={s.dataRegister}>
            Дата регистрации: 18.03.2022 в 17:35:02
          </div>
          <div className={s.dataRegisterBlock}>
            <input
              type="email"
              placeholder="Введите E-mail"
              className={s.email}
            />
            <button className={s.dataRegisterBtn}>Сохранить</button>
          </div>
        </div>
        <div className={s.stats}>
          <div className={s.statsLeft}>
            <div className={s.statsItem}>Статус: Создатель</div>
            <div className={s.statsItem}>Денег: 100 000$</div>
            <div className={s.statsItem}>В банке: 100 000 000$</div>
            <div className={s.statsItem}>B-Coins: 142 743 ед.</div>
            <div className={s.statsItem}>Биткоины: 0.000534 btc</div>
            <div className={s.statsItem}>Энергия: 215 623 ед.</div>
            <div className={s.statsItem}>Рейтинг: 623 072 ед.</div>
            <button className={s.statsItemBtn}>Статистика по играм</button>
          </div>
          <div className={s.statsRight}>
            <div className={s.statsItem}>Имущество: название</div>
            <div className={s.statsItem}>Дом: название</div>
            <div className={s.statsItem}>Машина: название</div>
            <div className={s.statsItem}>Самолёт: название</div>
            <div className={s.statsItem}>Вертолёт: название</div>
            <div className={s.statsItem}>Опыт: 56 347 ед.</div>
            <div className={s.statsItem}>Всего сыграно игр: 50 раз</div>
            <button className={s.statsItemBtn}>Последние действия</button>
          </div>
        </div>
      </div>
      <div className={s.statsButtons}>
        <button className={s.statsButton} onClick={() => dispatch(openModal({modalInventory: true}))}>
          <img src="" alt="" className={s.statsButtonImg} />
        </button>
        <button className={s.statsButton} onClick={() => dispatch(openModal({modalWindmill: true}))}>
          <img src="" alt="" className={s.statsButtonImg} />
        </button>
        <button className={s.statsButton} onClick={() => dispatch(openModal({modalWindmill: true}))}>
          <img src="" alt="" className={s.statsButtonImg} />
        </button>
        <button className={s.statsButton} onClick={() => dispatch(openModal({modalWindmill: true}))}>
          <img src="" alt="" className={s.statsButtonImg} />
        </button>
        <button className={s.statsButton} onClick={() => dispatch(openModal({modalWindmill: true}))}>
          <img src="" alt="" className={s.statsButtonImg} />
        </button>
        <button className={s.statsButton} onClick={() => dispatch(openModal({modalWindmill: true}))}>
          <img src="" alt="" className={s.statsButtonImg} />
        </button>
        <button className={s.statsButton} onClick={() => dispatch(openModal({modalWindmill: true}))}>
          <img src="" alt="" className={s.statsButtonImg} />
        </button>
      </div>
      <div className={s.TopsPlayers}>
        <div className={s.TopsPlayyersHeader}>ТОП 100 игроков</div>
        <div>
          <div className={s.TopsPlayersFilter}>
            <button className={s.TopsPlayyersFilterBtn}>Рейтинг</button>
            <button className={s.TopsPlayyersFilterBtn}>Валюта</button>
            <button className={s.TopsPlayyersFilterBtn}>Кланы</button>
          </div>
          <div className={s.TopsPlayersBlock}>
            <div className={s.TopsPlayersBlockTitle}>
              <div className={s.TopsPlayersBlockTitleLeft}>
                <div>ID</div>
                <div>Название</div>
              </div>
              <div>Рейтинг</div>
            </div>
            <div className={s.TopsPlayersBlockList}>
              <div className={s.TopsPlayersBlockTitle}>
                <div className={s.TopsPlayersBlockTitleLeft}>
                  <div>123423</div>
                  <div>ArtLab</div>
                </div>
                <div>243 562 434</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalStatistics;
