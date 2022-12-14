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
import { ReactComponent as DollarTopIcon } from "../../../assets/images/dollarTop-stat.svg";
import { ReactComponent as ClansIcon } from "../../../assets/images/clans-stat.svg";
import { ReactComponent as Up } from "../../../assets/images/status-up-stat.svg";

import { ReactComponent as TopsIcon } from "../../../assets/images/tops-stat.svg";

import s from "./PersonalStatistics.module.css";

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
      <div className={s.title}>???????????? ????????????????????</div>

      <div className={s.statsBlockContainer}>
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
              ???????? ??????????????????????: 18.03.2022 ?? 17:35:02
            </div>
            <div className={s.dataRegisterBlock}>
              <input
                type="email"
                placeholder="?????????????? E-mail"
                className={s.email}
              />
              <button className={s.dataRegisterBtn}>??????????????????</button>
            </div>
          </div>
          <div className={s.stats}>
            <div className={s.statsInfo}>
              <div className={s.statsLeft}>
                <div className={s.statsItem}>
                  <ProfileIcon className={s.icon} />
                  ????????????: <span>??????????????????</span>
                </div>
                <div className={s.statsItem}>
                  <DollarIcon className={s.icon} />
                  ??????????: <span>100 000$</span>
                </div>
                <div className={s.statsItem}>
                  <HomeIcon className={s.icon} />?? ??????????:{" "}
                  <span>100 000 000$</span>
                </div>
                <div className={s.statsItem}>
                  <BCoinsIcon className={s.icon} />
                  B-Coins: <span>142 743 ????.</span>
                </div>
                <div className={s.statsItem}>
                  <BitcoinIcon className={s.icon} />
                  ????????????????: <span>0.000534 btc</span>
                </div>
                <div className={s.statsItem}>
                  <EnerguIcon className={s.icon} />
                  ??????????????: <span>215 623 ????.</span>
                </div>
                <div className={s.statsItem}>
                  <StatusIcon className={s.icon} />
                  ??????????????: <span>623 072 ????.</span>
                </div>
              </div>
              <div className={s.statsRight}>
                <div className={s.statsItem}>
                  <HomeRightIcon className={s.icon} />
                  ??????????????????: <span>????????????????</span>
                </div>
                <div className={s.statsItem}>
                  <HomeTwoIcon className={s.icon} />
                  ??????: <span>????????????????</span>
                </div>
                <div className={s.statsItem}>
                  <CarIcon className={s.icon} />
                  ????????????: <span>????????????????</span>
                </div>
                <div className={s.statsItem}>
                  <AirplanIcon className={s.icon} />
                  ??????????????: <span>????????????????</span>
                </div>
                <div className={s.statsItem}>
                  <VertolIcon className={s.iconVert} />
                  ????????????????: <span>????????????????</span>
                </div>
                <div className={s.statsItem}>
                  <MedalIcon className={s.icon} />
                  ????????: <span>56 347 ????.</span>
                </div>
                <div className={s.statsItem}>
                  <MoreIcon className={s.icon} />
                  ?????????? ?????????????? ??????: <span>50 ??????</span>
                </div>
              </div>
            </div>

            <div className={s.buttons}>
              <button className={s.statsItemBtn}>???????????????????? ???? ??????????</button>
              <button className={s.statsItemBtn}>?????????????????? ????????????????</button>
            </div>
          </div>
        </div>
      </div>

      <div className={s.statsBlockContainer}>
        <div className={s.statsButtons}>
          <button
            data-text="????????????"
            className={s.statsButton}
            onClick={() => dispatch(openModal({ modalWindmill: true }))}
          ></button>
          <button
            data-text="??????????"
            className={s.statsButton}
            onClick={() => dispatch(openModal({ modalInventory: true }))}
          ></button>
          <button
            data-text="??????????"
            className={s.statsButton}
            onClick={() => dispatch(openModal({ modalInventory: true }))}
          ></button>

          <button
            data-text="??????????"
            className={s.statsButton}
            onClick={() => dispatch(openModal({ modalInventory: true }))}
          ></button>

          <button
            data-text="??????????"
            className={s.statsButton}
            onClick={() => dispatch(openModal({ modalInventory: true }))}
          ></button>
          <button
            data-text="??????????"
            className={s.statsButton}
            onClick={() => dispatch(openModal({ modalInventory: true }))}
          ></button>
          <button
            data-text="??????????"
            className={s.statsButton}
            onClick={() => dispatch(openModal({ modalInventory: true }))}
          ></button>
        </div>
      </div>

      <div className={s.statsBlockContainer}>
        <div className={s.TopsPlayers}>
          <div className={s.TopsPlayersHeader}>
            <TopsIcon className={s.topIcon} />
            ?????? 100 ??????????????
          </div>
          <div className={s.TopsRatings}>
            <div className={s.TopsPlayersFilter}>
              <button
                className={
                  statsBtn.rating
                    ? s.ActiveTopsPlayyersFilterBtn
                    : s.TopsPlayyersFilterBtn
                }
                onClick={() => onChangeStats({ rating: true })}
              >
                <Up />
                ??????????????
              </button>
              <button
                className={
                  statsBtn.valute
                    ? s.ActiveTopsPlayyersFilterBtn
                    : s.TopsPlayyersFilterBtn
                }
                onClick={() => onChangeStats({ valute: true })}
              >
                <DollarTopIcon />
                ????????????
              </button>
              <button
                className={
                  statsBtn.clan
                    ? s.ActiveTopsPlayyersFilterBtn
                    : s.TopsPlayyersFilterBtn
                }
                onClick={() => onChangeStats({ clan: true })}
              >
                <ClansIcon />
                ??????????
              </button>
            </div>
            <div
              className={s.TopsPlayersBlock + " " + scrollClass}
              onScroll={(e) => scrollTop(e)}
            >
              <div className={s.TopsPlayersBlockTitle}>
                <div>ID</div>
                <div>????????????????</div>
                <div>
                  {statsBtn.rating && "??????????????"}
                  {statsBtn.clan && "??????????????"}
                  {statsBtn.valute && "????????????"}
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
      </div>
    </>
  );
};

export default PersonalStatistics;
