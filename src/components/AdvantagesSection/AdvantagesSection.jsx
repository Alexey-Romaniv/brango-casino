import style from "./AdvantagesSection.module.scss";

export default function AdvantagesSection() {
  return (
    <section className={`section ${style.historySection}`}>
      <div className="container">
        <ul className={style.list}>
          <li>
            <h2 className="title">
              Advantages and Disadvantages: Casino Rocket Australia
            </h2>
            <p>
              To objectively evaluate Casino Rocket online, you need to study
              the main advantages and disadvantages of this service. After that,
              you can make a final decision for yourself about whether to play
              on this site or look for other options among web platforms in
              Australia.
            </p>
          </li>
          <div className={style.section__grid}>
            <li>
              <h2 className={`title ${style.section__title}`}>Advantages</h2>
              <ul className={style.adv__list}>
                <li>range of games</li>
                <li>generous bonuses</li>
                <li>many promotions</li>
                <li>constant tournaments</li>
                <li>large prize pools</li>
                <li>live casino</li>
                <li>different payment systems</li>
                <li>large selection of providers</li>
              </ul>
            </li>
            <li>
              <h2 className={`title ${style.section__title}`}>Disadvantages</h2>
              <ul className={style.adv__list}>
                <li>no online chat</li>
                <li>application not for all OS</li>
              </ul>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
}