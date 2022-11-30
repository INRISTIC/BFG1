import s from "./PersonalStatistics.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../../store/slices/sliceModal";
import { changeBtn } from "../../../store/slices/sliceStat";

import PlayerItem from "./PlayerItem/PlayerItem";

import { ReactComponent as ProfileIcon } from "../../../assets/images/profile-stat.svg";
import { ReactComponent as DollarIcon } from "../../../assets/images/dollar-stat.svg";
import { ReactComponent as BCoinsIcon } from "../../../assets/images/bCoins-stat.svg";
import { ReactComponent as BitcoinIcon } from "../../../assets/images/bitcoin-stat.svg";
import { ReactComponent as HomeIcon } from "../../../assets/images/home-stat.svg";
import { ReactComponent as EnerguIcon } from "../../../assets/images/energy-stat.svg";
import { ReactComponent as StatusIcon } from "../../../assets/images/status-stat.svg";
import { ReactComponent as HomeRightIcon } from "../../../assets/images/home-stat.svg";
import { ReactComponent as HomeTwoIcon } from "../../../assets/images/energy-stat.svg";
import { ReactComponent as CarIcon } from "../../../assets/images/status-stat.svg";
import { ReactComponent as AirplanIcon } from "../../../assets/images/airplane-stat.svg";
import { ReactComponent as MedalIcon } from "../../../assets/images/medal-stat.svg";
import { ReactComponent as MoreIcon } from "../../../assets/images/more-square-stat.svg";
import { ReactComponent as VertolIcon } from "../../../assets/images/vertol-stat.svg";

import { ReactComponent as WindowIcon } from "../../../assets/images/window-stat.svg";
import { ReactComponent as ServerIcon } from "../../../assets/images/server-stat.svg";
import { ReactComponent as KirkaIcon } from "../../../assets/images/kirka-stat.svg";
import { ReactComponent as HouseIcon } from "../../../assets/images/house-stat.svg";
import { ReactComponent as HouseTwoIcon } from "../../../assets/images/house2-stat.svg";
import { ReactComponent as SvizIcon } from "../../../assets/images/sviz-stat.svg";
import { ReactComponent as VetrycIcon } from "../../../assets/images/vetryc-stat.svg";

import { ReactComponent as TopsIcon } from "../../../assets/images/tops-stat.svg";

const PersonalStatistics = () => {
  const statsBtn = useSelector((state) => state.stats);
  const dispatch = useDispatch();

  const [scrollClass, setClass] = useState("");
  const scrollTop = function (e) {
    if (!scrollClass) {
      setClass(s.active);
    }
  };

  if (scrollClass) {
    setTimeout(() => {
      setClass(false);
    }, 1000);
  }

  const onChangeStats = (btn) => {
    dispatch(changeBtn(btn));
  };

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
              <ProfileIcon className={s.icon} />
              Статус: <span>Создатель</span>
            </div>
            <div className={s.statsItem}>
              <DollarIcon className={s.icon} />
              Денег: <span>100 000$</span>
            </div>
            <div className={s.statsItem}>
              <HomeIcon className={s.icon} />В банке: <span>100 000 000$</span>
            </div>
            <div className={s.statsItem}>
              <BCoinsIcon className={s.icon} />
              B-Coins: <span>142 743 ед.</span>
            </div>
            <div className={s.statsItem}>
              <BitcoinIcon className={s.icon} />
              Биткоины: <span>0.000534 btc</span>
            </div>
            <div className={s.statsItem}>
              <EnerguIcon className={s.icon} />
              Энергия: <span>215 623 ед.</span>
            </div>
            <div className={s.statsItem}>
              <StatusIcon className={s.icon} />
              Рейтинг: <span>623 072 ед.</span>
            </div>
            <button className={s.statsItemBtn}>Статистика по играм</button>
          </div>
          <div className={s.statsRight}>
            <div className={s.statsItem}>
              <HomeRightIcon className={s.icon} />
              Имущество: <span>название</span>
            </div>
            <div className={s.statsItem}>
              <HomeTwoIcon className={s.icon} />
              Дом: <span>название</span>
            </div>
            <div className={s.statsItem}>
              <CarIcon className={s.icon} />
              Машина: <span>название</span>
            </div>
            <div className={s.statsItem}>
              <AirplanIcon className={s.icon} />
              Самолёт: <span>название</span>
            </div>
            <div className={s.statsItem}>
              <VertolIcon className={s.iconVert} />
              Вертолёт: <span>название</span>
            </div>
            <div className={s.statsItem}>
              <MedalIcon className={s.icon} />
              Опыт: <span>56 347 ед.</span>
            </div>
            <div className={s.statsItem}>
              <MoreIcon className={s.icon} />
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
          <VetrycIcon className={s.statsButtonImg} />
        </button>
        <button
          className={s.statsButton}
          onClick={() => dispatch(openModal({ modalWindmill: true }))}
        >
          <WindowIcon className={s.statsButtonImg} />
        </button>
        <button
          className={s.statsButton}
          onClick={() => dispatch(openModal({ modalWindmill: true }))}
        >
          <ServerIcon className={s.statsButtonImg} />
        </button>
        <button
          className={s.statsButton}
          onClick={() => dispatch(openModal({ modalWindmill: true }))}
        >
          <KirkaIcon className={s.statsButtonImg} />
        </button>
        <button
          className={s.statsButton}
          onClick={() => dispatch(openModal({ modalWindmill: true }))}
        >
          <HouseIcon className={s.statsButtonImg} />
        </button>
        <button
          className={s.statsButton}
          onClick={() => dispatch(openModal({ modalWindmill: true }))}
        >
          <HouseTwoIcon className={s.statsButtonImg} />
        </button>
        <button
          className={s.statsButton}
          onClick={() => dispatch(openModal({ modalWindmill: true }))}
        >
          <SvizIcon className={s.statsButtonImg} />
        </button>
      </div>
      <div className={s.TopsPlayers}>
        <div className={s.TopsPlayersHeader}>
          <TopsIcon />
          ТОП 100 игроков
        </div>
        <div className={s}>
          <div className={s.TopsPlayersFilter}>
            <button
              className={
                statsBtn.rating
                  ? s.ActiveTopsPlayyersFilterBtn
                  : s.TopsPlayyersFilterBtn
              }
              onClick={() => onChangeStats({ rating: true })}
            >
              Рейтинг
            </button>
            <button
              className={
                statsBtn.valute
                  ? s.ActiveTopsPlayyersFilterBtn
                  : s.TopsPlayyersFilterBtn
              }
              onClick={() => onChangeStats({ valute: true })}
            >
              Валюта
            </button>
            <button
              className={
                statsBtn.clan
                  ? s.ActiveTopsPlayyersFilterBtn
                  : s.TopsPlayyersFilterBtn
              }
              onClick={() => onChangeStats({ clan: true })}
            >
              Кланы
            </button>
          </div>
          <div
            className={s.TopsPlayersBlock + " " + scrollClass}
            onScroll={(e) => scrollTop(e)}
          >
            <div className={s.TopsPlayersBlockTitle}>
              <div>ID</div>
              <div>Название</div>
              <div>
                {statsBtn.rating && "Рейтинг"}
                {statsBtn.clan && "Рейтинг"}
                {statsBtn.valute && "Валюта"}
              </div>
            </div>
            <div className={s.TopsPlayersBlockList}>
              <PlayerItem />
              <PlayerItem />
              <PlayerItem />
              <PlayerItem />
              <PlayerItem />
              <PlayerItem />
              <PlayerItem />
              <PlayerItem />
              <PlayerItem />
              <PlayerItem />
              <PlayerItem />
              <PlayerItem />
              <PlayerItem />
              <PlayerItem />
              <PlayerItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalStatistics;
