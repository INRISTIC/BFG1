import s from "./Information.module.css";
import FAQBlock from "./FAQBlock/FAQBlock";
import AnswerBlock from "./AnswerBlock/AnswerBlock";
import RegulationsBlock from "./RegulationsBlock/RegulationsBlock";
import ConnectWithUs from "../Donat/ConnectWithUs/ConnectWithUs";

const Information = () => {
  return (
    <>
      <FAQBlock />
      <RegulationsBlock />
      <AnswerBlock />
      <ConnectWithUs />
    </>
  )
}

export default Information;