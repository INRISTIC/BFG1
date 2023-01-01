import { fetchPrivilege } from "../../../../store/slices/sliceFaq";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./PrivilegeBlock.module.css";
import InfoElement from "../InfoElement/InfoElement";

const PrivilegeBlock = () => {
  const dispatch = useDispatch();
  const { privilege } = useSelector((state) => state.faqs);
  useEffect(() => {
    dispatch(fetchPrivilege());
  }, []);

  const isPrivilegeStatus = privilege.status === "loading";

  return (
    <div className={s.PrivilegeBlock}>
      <h1 className={s.title}>Привелегии</h1>
      <div className={s.informationRow}>
        <div className={s.informationCol}>
          {!isPrivilegeStatus &&
            privilege.items.map((item) => <InfoElement item={item} key={item._id}/>)}
        </div>

        {/* <div className={s.informationCol}>
          <InfoElement />
          <InfoElement />
        </div> */}
      </div>

      {/* <div className={s.informationRow + " " + s.informationRowOnly}>
        <div className={s.informationCol}>
          <InfoElement />
        </div>
      </div> */}
    </div>
  );
};

export default PrivilegeBlock;
