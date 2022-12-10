import { useState } from "react";
import s from "./AnswerBlock.module.css";

const AnswerBlock = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={s.answerBlockContainer}>
      <div className={s.answerBlock}>
        <div className={s.title}>Не нашел ответа на свой вопрос ?</div>
        <div className={s.subTitle}>Задай его !</div>
        <div className={s.inputList}>
          {active ? (
            <label className={s.label}>
              <input
                className={s.inputLabel}
                type="text"
                placeholder="Введите ваш id"
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
                placeholder="Введите ваш email"
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
            placeholder="Введите тему вопроса"
            className={s.input}
          />
          <textarea
            rows={3}
            type="text"
            placeholder="Введите описание вопроса"
            className={s.input}
          />
          <div className={s.labelCheckbox}>
            <input type="checkbox" className={s.checkbox} id="checkbox" name="checkbox" />
            <label className={s.checkboxText} htmlFor="checkbox">
              я соглашаюсь с условиями пользовательского соглашение и политикой
              конфиденциальности
            </label>
          </div>
          <button className={s.buttonQuastion}>
            Задать вопрос
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnswerBlock;
