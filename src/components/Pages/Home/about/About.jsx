import React from "react";

import panda from "../../../../assets/images/panda-about.png";

import s from "./About.module.css";

const About = () => {
  return (
    <div className={s.about}>
      <div className={s.title}>О нас</div>

      <div className={s.block}>
        <div className={s.blockLeft}>
          <p className={s.blockLeftText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
            justo mollis lectus pretium ultricies. Ut placerat mi et ipsum
            tristique, in luctus odio vestibulum. Aenean ligula elit,
            pellentesque in sagittis vitae, luctus in enim. Vivamus ut risus
            lacinia, pulvinar eros nec, feugiat justo. Nunc eget cursus sem.
            Curabitur at enim vitae elit dictum bibendum ac et neque. Praesent
            et diam nec est hendrerit convallis eu vitae risus. Mauris viverra
            erat ut magna suscipit dignissim. Curabitur ultricies, ligula eu
            iaculis auctor, nisl elit vestibulum elit, ac egestas orci diam nec.
          </p>
          <button className={s.button}>Перейти в бота</button>
        </div>
        <div className={s.blockRight}>
          <img src={panda} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
