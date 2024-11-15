import style from "./Advantages.module.scss";
import Button from "@/components/Button/Button";
import Image from "next/image";
export default function Advantages({ firstId }) {
  return (
    <section className={`section ${style.advantages}`}>
      <div className={`container ${style.wrapper}`}>
        <div className={style.wrapper__container}>
          <h2 className={`title white  ${style.advantages__title}`}>Advantages</h2>
          <ul className={style.advlist}>
            <li>
              <Image
                src="/images/star.webp"
                alt="star"
                loading="lazy"
                width={30}
                height={29}
              />
              <p>Diverse gaming options</p>
            </li>
            <li>
              <Image
                src="/images/star.webp"
                alt="star"
                loading="lazy"
                width={30}
                height={29}
              />
              <p>Frequent promotions</p>
            </li>
            <li>
              <Image
                src="/images/star.webp"
                alt="star"
                loading="lazy"
                width={30}
                height={29}
              />
              <p>Multiple dining venues</p>
            </li>
            <li>
              <Image
                src="/images/star.webp"
                alt="star"
                loading="lazy"
                width={30}
                height={29}
              />
              <p>Live entertainment and events</p>
            </li>
            <li>
              <Image
                src="/images/star.webp"
                alt="star"
                loading="lazy"
                width={30}
                height={29}
              />
              <p>Central location</p>
            </li>
          </ul>
          <Button
            href={`/casino/${firstId}`}
            size="big"
            className={style.button}
          >
            Know more
          </Button>
        </div>
        <div className={style.line}></div>
        <div className={style.appBox}>
          <h2 className={`title ${style.advantages__title}`}>
            Magic palace APP
          </h2>
          <div className={style.appImgBox}>
            <Image
              className={`${style.appPhoneImg} ${style.appPhoneImgMob}`}
              src="/images/phone-mob.webp"
              alt="Rocket Casino phone"
              loading="lazy"
              width={304}
              height={440}
            />
            <Image
              className={`${style.appPhoneImg} ${style.appPhoneImgDesk}`}
              src="/images/phone-desk.webp"
              alt="Rocket Casino phone"
              loading="lazy"
              width={351}
              height={502}
            />
            <div className={style.linkList}>
              <a href={`/casino/${firstId}`}>
                <Image
                  src="/images/appstore.webp"
                  alt="appstore"
                  loading="lazy"
                  width={181}
                  height={53}
                />
              </a>
              <a href={`/casino/${firstId}`}>
                <Image
                  src="/images/googleplay.webp"
                  alt="googleplay"
                  loading="lazy"
                  width={181}
                  height={53}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
