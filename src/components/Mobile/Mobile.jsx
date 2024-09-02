import style from "./Mobile.module.scss";
import Image from "next/image";
export default function Mobile({ firstId }) {
  return (
    <section className={`section ${style.mobileSection}`} id="mobile">
      <div className={`container ${style.wrapper}`}>
        <div className="top">
          <h2 className={`title ${style.section__mainTitle}`}>
            App: Rocket Casino Mobile
          </h2>
          <p>
            You can experience all the benefits of Rocket Play Casino mobile. To
            do this, you need to download the application through the official
            website. An alternative option is to play on the mobile version of
            the website. This became possible due to the fact that the web
            service is created in HTML5 format.
          </p>
          <div className={style.linkList}>
            <a href={`/casino/${firstId}`}>
              <Image
                src="/images/appstore.webp"
                alt="appstore"
                loading="lazy"
                width={168}
                height={50}
              />
            </a>
            <a href={`/casino/${firstId}`}>
              <Image
                src="/images/googleplay.webp"
                alt="googleplay"
                loading="lazy"
                width={168}
                height={50}
              />
            </a>
          </div>
        </div>
        <Image
          className={style.phoneImg}
          src="/images/img-phone.webp"
          alt="Rocket Casino phone"
          loading="lazy"
          width={312}
          height={527}
        />
      </div>
      <div className="container">
        <ul className={style.infoList}>
          <li>
            <h2 className={`title ${style.section__title}`}>
              Currencies: Rocket Casino No Deposit Bonus Codes 2022
            </h2>
            <p>
              Since the license allows the site to operate in many countries, a
              multi-currency system is used here. These are Australian,
              Canadian, American dollars, euros, New Zealand dollars, Brazilian
              reals, as well as other national currencies and cryptocurrency.
            </p>
          </li>
          <li>
            <h2 className={`title ${style.section__title}`}>
              Languages: Rocket Casino No Deposit Bonus Codes
            </h2>
            <p>
              Rocket Casino is an incredibly popular and exciting Australian
              gambling service. It has collected many excellent games, generous
              bonuses, a profitable loyalty program and much more. The platform
              enjoys well-deserved popularity due to its reliability, honesty
              and attitude towards each client. You can choose one of several
              languages ​​for the site interface. Clients can choose from such
              languages ​​as English, French and German.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
