import style from "./Licenses.module.scss";
import Image from "next/image";

export default function Licenses() {
  return (
    <section className={`section ${style.section__license}`}>
      <div className="container">
        <div className={style.box}>
          <div>
            <h2 className="title">
              Licenses: Rocket Play Casino No Deposit Bonus Codes 2022
            </h2>
            <p>
              The service operates legally. The confirmation is a valid Curacao
              license. Information about the license is available on the
              official website.
            </p>
          </div>
          <div>
            <Image
              src="/images/licence_logo.webp"
              alt="license"
              width={240}
              height={240}
              loading="lazy"
              className={style.img}
            />
          </div>

          <div>
            <h2 className={`title ${style.section__title}`}>
              Software Technologies: Casino Rocket Bonus Codes
            </h2>
            <p>
              The company that owns the Australian casino cooperates with many
              well-known providers of gaming software. You have a great
              opportunity to choose a game from your favorite provider, or try
              games from new providers.
            </p>
            <br />
            <p>
              Among the most famous are BGaming, BetSoft, NetEnt, Habanero,
              Evolution, Amatic and many others. Most of the pokies and some
              other gambling games are available on the site in free demo mode.
            </p>
          </div>
          <div>
            <h2 className={`title ${style.section__title}`}>
              Security: Rocket Play Casino No Deposit Sign Up Bonus
            </h2>
            <p>
              The service uses a multi-level security system, provides reliable
              data encryption and strictly adheres to the privacy policy.
              Therefore, playing here is absolutely safe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
