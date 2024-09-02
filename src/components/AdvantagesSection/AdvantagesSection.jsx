import style from "./AdvantagesSection.module.scss";

export default function AdvantagesSection() {
  return (
    <section className={`section ${style.historySection}`}>
      <div className="container">
        <div className={style.list}>
          <div className={style.list__top}>
            <h2 className={`title ${style.section__mainTitle}`}>
              Advantages and Disadvantages: Casino Rocket Australia
            </h2>
            <p>
              To objectively evaluate Casino Rocket online, you need to study
              the main advantages and disadvantages of this service. After that,
              you can make a final decision for yourself about whether to play
              on this site or look for other options among web platforms in
              Australia.
            </p>
          </div>
          <div className={style.section__grid}>
            <div>
              <h2 className={`title ${style.section__title}`}>Advantages</h2>
              <ul className={style.adv__list}>
                <li>
                  <p>range of games</p>
                </li>
                <li>
                  <p>generous bonuses</p>
                </li>
                <li>
                  <p>many promotions</p>
                </li>
                <li>
                  <p>constant tournaments</p>
                </li>
                <li>
                  <p>large prize pools</p>
                </li>
                <li>
                  <p>live casino</p>
                </li>
                <li>
                  <p>different payment systems</p>
                </li>
                <li>
                  <p>large selection of providers</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={`title ${style.section__title}`}>Disadvantages</h2>
              <ul className={style.adv__list}>
                <li>
                  <p>no online chat</p>
                </li>
                <li>
                  <p>application not for all OS</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
