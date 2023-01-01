import { useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./AnswerBlock.module.css";

const AnswerBlock = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  return (
    <div className={s.answerBlockContainer}>
      <div className={s.answerBlock}>
        <div className={s.title}>{t("Information.noAnswer")}</div>
        <div className={s.subTitle}>{t("Information.noAnswerSubTitle")}</div>
        <div className={s.inputList}>
          {active ? (
            <label className={s.label}>
              <input
                className={s.inputLabel}
                type="text"
                placeholder={t("Information.id")}
              />
              <button
                className={s.buttonLabel}
                onClick={() => setActive(!active)}
              >
                E-mail
              </button>
            </label>
          ) : (
            <label className={s.label}>
              <input
                className={s.inputLabel}
                type="email"
                placeholder={t("Information.email")}
              />
              <button
                className={s.buttonLabel}
                onClick={() => setActive(!active)}
              >
                id
              </button>
            </label>
          )}
          <input
            type="text"
            placeholder={t("Information.theme")}
            className={s.input}
          />
          <textarea
            rows={3}
            type="text"
            placeholder={t("Information.description")}
            className={s.input}
          />
          <div className={s.labelCheckbox}>
            <input
              type="checkbox"
              className={s.checkbox}
              id="checkbox"
              name="checkbox"
            />
            <label className={s.checkboxText} htmlFor="checkbox">
              {t("Information.personal")}
            </label>
          </div>
          <button className={s.buttonQuastion}>
            {t("Information.answer")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnswerBlock;
