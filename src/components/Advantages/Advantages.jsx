import style from "./Advantages.module.scss";
import Button from "@/components/Button/Button";
import Image from "next/image";
export default function Advantages({ firstId }) {
  return (
    <section className={`section ${style.advantages}`}>
      <div className={`container ${style.wrapper}`}>
        <div className={style.wrapper__container}>
          <h2 className={`title ${style.advantages__title}`}>Advantages</h2>
          <ul className={style.advlist}>
            <li>
              <Image
                src="/images/star.svg"
                alt="star"
                loading="lazy"
                width={30}
                height={30}
              />
              Diverse gaming options
            </li>
            <li>
              <Image
                src="/images/star.svg"
                alt="star"
                loading="lazy"
                width={30}
                height={30}
              />
              Frequent promotions
            </li>
            <li>
              <Image
                src="/images/star.svg"
                alt="star"
                loading="lazy"
                width={30}
                height={30}
              />
             Multiple dining venues
            </li>
            <li>
              <Image
                src="/images/star.svg"
                alt="star"
                loading="lazy"
                width={30}
                height={30}
              />
              Live entertainment and events
            </li>
            <li>
              <Image
                src="/images/star.svg"
                alt="star"
                loading="lazy"
                width={30}
                height={30}
              />
              Central location
            </li>
          </ul>
          <Button href={`/casino/${firstId}`} size="big">
            Know more
          </Button>
        </div>
        <div className={style.line}></div>
        <div className={style.appBox}>
          <h2 className={`title ${style.advantages__title}`}>Rocket Casino APP</h2>
          <div className={style.appImgBox}>
            <Image
              className={style.appPhoneImg}
              src="/images/phone-mob.webp"
              alt="Rocket Casino phone"
              loading="lazy"
              width={512}
              height={487}
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
