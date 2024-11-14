'use client'
import style from "./Hero.module.scss";
import Button from "../Button/Button.jsx";
import {useEffect, useState} from "react";
export default function Hero({ firstId, firstBonus }) {
  const [text, setText] = useState("offer");


  useEffect(() => {
    const updateText = () => {
      setText(window.innerWidth < 768 ? "bonus" : "offer");
    };

    // Устанавливаем текст при монтировании и добавляем слушатель для обновлений при изменении размера окна
    updateText();
  }, []);
  return (
    <section className={style.section}>
      <div className={`${style.wrapper}`}>
        <h2 className={style.title}>
          WELCOME <br /> BONUS
        </h2>
        <p className={style.text}>
          Exclusive welcome {text} of <br />
          {firstBonus}
        </p>
        <Button href={`/casino/${firstId}`} className={style.button}>
          Claim Bonus
        </Button>
      </div>
    </section>
  );
}
