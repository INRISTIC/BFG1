import s from "./PersonalStatistics.module.css";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../../store/slices/sliceModal";
import profileIcon from "../../../assets/images/profile-stat.svg";
import dollarIcon from "../../../assets/images/dollar-stat.svg";
import bCoinsIcon from "../../../assets/images/bCoins-stat.svg";
import bitcoinIcon from "../../../assets/images/bitcoin-stat.svg";
import homeIcon from "../../../assets/images/home-stat.svg";
import energuIcon from "../../../assets/images/energy-stat.svg";
import statusIcon from "../../../assets/images/status-stat.svg";
import homeRightIcon from "../../../assets/images/home-stat.svg";
import homeTwoIcon from "../../../assets/images/energy-stat.svg";
import carIcon from "../../../assets/images/status-stat.svg";
import airplanIcon from "../../../assets/images/airplane-stat.svg";
import medalIcon from "../../../assets/images/medal-stat.svg";
import moreIcon from "../../../assets/images/more-square-stat.svg";
import vertolIcon from "../../../assets/images/vertol-stat.svg";

import windowIcon from "../../../assets/images/window-stat.svg";
import serverIcon from "../../../assets/images/server-stat.svg";
import kirkaIcon from "../../../assets/images/kirka-stat.svg";
import houseIcon from "../../../assets/images/house-stat.svg";
import houseTwoIcon from "../../../assets/images/house2-stat.svg";
import svizIcon from "../../../assets/images/sviz-stat.svg";
import vetrycIcon from "../../../assets/images/vetryc-stat.svg";

import topsIcon from "../../../assets/images/tops-stat.svg";

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
              <div className={s.headerTitle}>ArtLab</div>
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
            <div className={s.statsItem}>
              <img src={profileIcon} alt="" />
              Статус: <span>Создатель</span>
            </div>
            <div className={s.statsItem}>
              <img src={dollarIcon} alt="" />
              Денег: <span>100 000$</span>
            </div>
            <div className={s.statsItem}>
              <img src={homeIcon} alt="" />В банке: <span>100 000 000$</span>
            </div>
            <div className={s.statsItem}>
              <img src={bCoinsIcon} alt="" />
              B-Coins: <span>142 743 ед.</span>
            </div>
            <div className={s.statsItem}>
              <img src={bitcoinIcon} alt="" />
              Биткоины: <span>0.000534 btc</span>
            </div>
            <div className={s.statsItem}>
              <img src={energuIcon} alt="" />
              Энергия: <span>215 623 ед.</span>
            </div>
            <div className={s.statsItem}>
              <img src={statusIcon} alt="" />
              Рейтинг: <span>623 072 ед.</span>
            </div>
            <button className={s.statsItemBtn}>Статистика по играм</button>
          </div>
          <div className={s.statsRight}>
            <div className={s.statsItem}>
              <img src={homeRightIcon} alt="" />
              Имущество: <span>название</span>
            </div>
            <div className={s.statsItem}>
              <img src={homeTwoIcon} alt="" />
              Дом: <span>название</span>
            </div>
            <div className={s.statsItem}>
              <img src={carIcon} alt="" />
              Машина: <span>название</span>
            </div>
            <div className={s.statsItem}>
              <img src={airplanIcon} alt="" />
              Самолёт: <span>название</span>
            </div>
            <div className={s.statsItem}>
              <img src={vertolIcon} alt="" />
              Вертолёт: <span>название</span>
            </div>
            <div className={s.statsItem}>
              <img src={medalIcon} alt="" />
              Опыт: <span>56 347 ед.</span>
            </div>
            <div className={s.statsItem}>
              <img src={moreIcon} alt="" />
              Всего сыграно игр: <span>50 раз</span>
            </div>
            <button className={s.statsItemBtn}>Последние действия</button>
          </div>
        </div>
      </div>
      <div className={s.statsButtons}>
        <button
          className={s.statsButton}
          onClick={() => dispatch(openModal({ modalInventory: true }))}
        >
          <img src={vetrycIcon} alt="" className={s.statsButtonImg} />
        </button>
        <button
          className={s.statsButton}
          onClick={() => dispatch(openModal({ modalWindmill: true }))}
        >
          <img src={windowIcon} alt="" className={s.statsButtonImg} />
        </button>
        <button
          className={s.statsButton}
          onClick={() => dispatch(openModal({ modalWindmill: true }))}
        >
          <img src={serverIcon} alt="" className={s.statsButtonImg} />
        </button>
        <button
          className={s.statsButton}
          onClick={() => dispatch(openModal({ modalWindmill: true }))}
        >
          <img src={kirkaIcon} alt="" className={s.statsButtonImg} />
        </button>
        <button
          className={s.statsButton}
          onClick={() => dispatch(openModal({ modalWindmill: true }))}
        >
          <img src={houseIcon} alt="" className={s.statsButtonImg} />
        </button>
        <button
          className={s.statsButton}
          onClick={() => dispatch(openModal({ modalWindmill: true }))}
        >
          <img src={houseTwoIcon} alt="" className={s.statsButtonImg} />
        </button>
        <button
          className={s.statsButton}
          onClick={() => dispatch(openModal({ modalWindmill: true }))}
        >
          <img src={svizIcon} alt="" className={s.statsButtonImg} />
        </button>
      </div>
      <div className={s.TopsPlayers}>
        <div className={s.TopsPlayersHeader}>
          <img src={topsIcon} alt="" />
          ТОП 100 игроков
        </div>
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
              <div className={s.TopsPlayersBlockItem}>
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
