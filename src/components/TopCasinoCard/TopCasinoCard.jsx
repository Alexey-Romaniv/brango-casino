import Button from "../Button/Button";

import style from "./TopCasinoCard.module.scss";
import Image from "next/image";
export default function TopCasinoCard({ data }) {
  const { logo, name, bonuses, id } = data;
  return (
    <div className={style.card}>
      <Image
        src={`https://api.adkey-seo.com/storage/images/offers/${logo}`}
        width={190}
        height={76}
        alt="CASINO LOGO"
        className={style.card__logo}
        loading="lazy"
      />
      <h3 className={style.card__name}>{name}</h3>
      <p className={style.card__title}>Welcome Bonus</p>
      <p className={style.bonus}>{bonuses.welcome_bonus}</p>
      <Button size="small" color="second" href={`/casino/${id}`}>
        Claim Bonus
      </Button>
    </div>
  );
}
