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
  const faqMas = privilege.items;
  const chet = [];
  const nechet = [];
  const last = [];

  if (faqMas.length > 0) {
    if (faqMas.length % 2 === 0) {
      for (let i = 0; i < faqMas.length; i++) {
        if (i % 2 === 0) {
          chet.push(faqMas[i]);
        } else if (i % 2 === 1) {
          nechet.push(faqMas[i]);
        }
      }
    } else {
      for (let i = 0; i < faqMas.length; i++) {
        if (i === faqMas.length - 1) {
          last.push(faqMas[i])
        } else if (i % 2 === 0) {
          chet.push(faqMas[i]);
        } else if (i % 2 === 1) {
          nechet.push(faqMas[i]);
        }
      }
    }
  }

  return (
    <div className={s.PrivilegeBlock}>
      <h1 className={s.title}>Привелегии</h1>
      <div className={s.informationRow}>
        <div className={s.informationCol}>
          {(!isPrivilegeStatus &&
            chet.length > 0) &&
            chet.map((item) => (
              <InfoElement item={item} key={item._id} />
            ))}
        </div>
        <div className={s.informationCol}>
          {(!isPrivilegeStatus &&
            nechet.length > 0) &&
            nechet.map((item) => (
              <InfoElement item={item} key={item._id} />
            ))}
        </div>
      </div>

      {last.length > 0 ? <div className={s.informationRow + " " + s.informationRowOnly}>
        <div className={s.informationCol}>
          <InfoElement item={last[0].item} key={last[0].item._id} />
        </div>
      </div> : undefined}
    </div>
  );
};

export default PrivilegeBlock;
