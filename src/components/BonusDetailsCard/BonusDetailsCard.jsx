"use client";
import Image from "next/image";
import { useState } from "react";
import style from "./BonusDetailCard.module.scss";
import Button from "@/components/Button/Button";

export default function BonusDetailsCard({ data }) {
  const [isDetailShow, setIsDetailShow] = useState(false);

  return (
    <>
      <div className={style.mainBox}>
        <span>
          <Image
            src={`https://api.adkey-seo.com/storage/images/offers/${data.logo}`}
            alt="CasinoLogo"
            width={160}
            height={64}
            className={style.casinoLogo}
          />
        </span>
        <span className={style.mobileNone}>Welcome bonus</span>
        <span>{data.bonuses.rate}</span>
        <span>
          {!!data.bonuses.free_spins ? `${data.bonuses.free_spins} FS` : ""}
        </span>
        <span
          className={style.infoBtn}
          onClick={() => setIsDetailShow(!isDetailShow)}
        >
          <Image src="/images/info.svg" alt="info" width={32} height={32} />
        </span>
        <div className={style.mobileNone}>
          <Button
            size="small"
            color="second"
            className={style.btn__desk}
            href={`/casino/${data.id}`}
          >
            Get the bonus
          </Button>
        </div>
      </div>
      <div
        className={`${style.detailsBox} ${!!isDetailShow ? style.isOpen : ""}`}
      >
        <p className={style.detailsBox__text}>
          <span>Maximum amount:</span>
          <span className={style.detailsBox__span}>{data.bonuses.amount}</span>
        </p>
        <p className={style.detailsBox__text}>
          <span>Wager:</span>
          <span className={style.detailsBox__span}>{data.wager}</span>
        </p>
        <p className={style.detailsBox__text}>
          <span>Bonus code:</span>
          <span className={style.detailsBox__span}>-</span>
        </p>
        <div className={style.desktopNone}>
          <Button
            size="big"
            color="second"
            className={style.btn}
            href={`/casino/${data.id}`}
          >
            Get the bonus
          </Button>
        </div>
      </div>
    </>
  );
}
