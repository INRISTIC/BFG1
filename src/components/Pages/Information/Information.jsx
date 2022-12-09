import s from "./Information.module.css";
import FAQBlock from "./FAQBlock/FAQBlock";
import AnswerBlock from "./AnswerBlock/AnswerBlock";
import RegulationsBlock from "./RegulationsBlock/RegulationsBlock";
import PrivilegeBlock from "./PrivilegeBlock/PrivilegeBlock";
import ConnectWithUs from "../Donat/ConnectWithUs/ConnectWithUs";

const Information = () => {
  return (
    <>
      <FAQBlock />
      <RegulationsBlock />
      <PrivilegeBlock />
      <AnswerBlock />
      <ConnectWithUs />
    </>
  )
}

export default Information;