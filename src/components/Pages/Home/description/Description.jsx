import React from "react";

import panda1 from "../../../../assets/images/panda-bottom1.png";
import panda2 from "../../../../assets/images/panda-bottom2.png";
import panda3 from "../../../../assets/images/panda-bottom3.png";

import s from "./Description.module.css";

const Description = () => {
  return (
    <div className={s.description}>
      <div className={s.title}>Описание</div>
      <div className={s.block}>
        <p>
          Mauris molestie blandit urna eget auctor. Fusce sapien velit, varius
          et accumsan eu, scelerisque at ligula. Morbi efficitur purus arcu, a
          molestie orci scelerisque quis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Mauris sed
          interdum ante, non interdum neque. Sed vulputate, urna ac pellentesque
          posuere, neque purus aliquam elit, ut hendrerit arcu diam in lacus.
          Pellentesque dapibus fringilla ante, non efficitur diam feugiat eget.
          Suspendisse ligula leo, aliquet consequat interdum at, cursus vitae
          felis. Donec eget libero non massa viverra tincidunt. Nam tristique,
          eros id fermentum efficitur, nisl augue imperdiet nibh, sed mollis
          enim neque sit amet lorem.
        </p>

        <p>
          Nulla facilisi. Maecenas porta risus nunc, ut pulvinar augue rutrum
          sed. Aenean tempus, lectus eu maximus posuere, dui ante eleifend quam,
          sed porta nisl velit at ipsum. Proin vel mauris mollis, tincidunt
          risus eget, congue risus. Suspendisse ut magna luctus turpis dapibus
          volutpat ut non augue. Pellentesque elit ante, aliquam nec varius ac,
          efficitur quis diam. Proin gravida risus arcu, ut viverra tellus
          faucibus sit amet.
        </p>
      </div>
      <div className={s.listImg}>
        <div className={s.listItemImg}>
          <img src={panda1} alt="" />
        </div>
        <div className={s.listItemImg}>
          <img src={panda2} alt="" />
        </div>
        <div className={s.listItemImg}>
          <img src={panda3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Description;
