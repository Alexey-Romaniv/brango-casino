import style from "./Hero.module.scss";
import Button from "../Button/Button.jsx";
export default function Hero({ firstId, firstBonus }) {
  return (
    <section className={style.section}>
      <div className={`${style.wrapper}`}>
        <p className={style.title}>
          WELCOME <br /> BONUS
        </p>
        <p className={style.text}>
          Exclusive welcome offer of <br />
          {firstBonus}
        </p>
        <Button href={`/casino/${firstId}`} className={style.button}>
          Claim Bonus
        </Button>
      </div>
    </section>
  );
}
