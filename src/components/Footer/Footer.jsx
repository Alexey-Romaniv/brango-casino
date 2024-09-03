import style from "./Footer.module.scss";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={`container ${style.wrapper}`}>
        <a href="/#main" className={style.footerLogo}>
          <Image
            src="/images/logo.svg"
            alt="Rocket Casino logo"
            width={114}
            height={44}
          />
        </a>
        <div>
          <ul className={`${style.footerList} ${style.listPayment}`}>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/pay-1.svg"
                alt="Mastercard"
                width={92}
                height={52}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/pay-1-h.svg"
                alt="Mastercard"
                loading="lazy"
                width={92}
                height={52}
              />
            </li>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/pay-2.svg"
                alt="Visa"
                width={161}
                height={52}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/pay-2-h.svg"
                alt="Visa"
                loading="lazy"
                width={161}
                height={52}
              />
            </li>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/pay-3.svg"
                alt="Neteller"
                width={288}
                height={52}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/pay-3-h.svg"
                alt="Neteller"
                loading="lazy"
                width={288}
                height={52}
              />
            </li>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/pay-4.svg"
                alt="Skrill"
                width={157}
                height={52}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/pay-4-h.svg"
                alt="Skrill"
                width={157}
                height={52}
                loading="lazy"
              />
            </li>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/pay-5.svg"
                alt="Bitcoin"
                width={54}
                height={52}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/pay-5-h.svg"
                alt="Bitcoin"
                loading="lazy"
                width={54}
                height={52}
              />
            </li>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/pay-6.svg"
                alt="LiteCoin"
                width={49}
                height={52}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/pay-6-h.svg"
                alt="LiteCoin"
                loading="lazy"
                width={49}
                height={52}
              />
            </li>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/pay-7.svg"
                alt="paymant-logo"
                width={32}
                height={52}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/pay-7-h.svg"
                alt="paymant-logo"
                loading="lazy"
                width={32}
                height={52}
              />
            </li>
          </ul>

          <ul className={`${style.footerList} ${style.listSponsor}`}>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/sponsor-1.svg"
                alt="GPWA"
                width={150}
                height={58}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/sponsor-1-ho.svg"
                alt="GPWA"
                loading="lazy"
                width={150}
                height={58}
              />
            </li>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/sponsor-2.svg"
                alt="gambleA"
                width={207}
                height={58}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/sponsor-2-ho.svg"
                alt="gambleA"
                loading="lazy"
                width={207}
                height={58}
              />
            </li>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/sponsor-3.svg"
                alt="GamCare"
                width={207}
                height={58}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/sponsor-3-ho.svg"
                alt="GamCare"
                loading="lazy"
                width={207}
                height={58}
              />
            </li>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/sponsor-4.svg"
                alt="Gambling therapy"
                width={207}
                height={58}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/sponsor-4-ho.svg"
                alt="Gambling therapy"
                loading="lazy"
                width={207}
                height={58}
              />
            </li>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/sponsor-5.svg"
                alt="Gamban"
                width={207}
                height={58}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/sponsor-5-ho.svg"
                alt="Gamban"
                loading="lazy"
                width={207}
                height={58}
              />
            </li>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/sponsor-6.svg"
                alt="BetBlocker"
                width={353}
                height={58}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/sponsor-6-ho.svg"
                alt="BetBlocker"
                loading="lazy"
                width={353}
                height={58}
              />
            </li>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/sponsor-7.svg"
                alt="iTech Labs"
                width={58}
                height={58}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/sponsor-7-ho.svg"
                alt="iTech Labs"
                loading="lazy"
                width={58}
                height={58}
              />
            </li>
            <li className={style.footerItem}>
              <Image
                className={style.imgMain}
                src="/images/sponsor-8.svg"
                alt="eCOGRA"
                width={193}
                height={58}
                loading="lazy"
              />
              <Image
                className={style.imgHover}
                src="/images/sponsor-8-ho.svg"
                alt="eCOGRA"
                loading="lazy"
                width={193}
                height={58}
              />
            </li>
          </ul>

          <p className={style.copy}>
            <span>18+</span>Copyright © 2024 Rocket Casino
          </p>
        </div>
      </div>
    </footer>
  );
}
