import style from "./AdvantagesSection.module.scss";

export default function AdvantagesSection() {
    return (
        <section className={`section ${style.historySection}`}>
            <div className="container">
                <div className={style.list}>
                    <div className={style.list__top}>
                        <h2 className={`title white ${style.section__mainTitle}`}>
                            Extreme Casino Brango Advantages
                        </h2>
                        <p>
                            Brango is a popular choice for online partakers due to its impressive features and focus on
                            user convenience. Here’s a quick overview of the main advantages and disadvantages:
                        </p>
                    </div>
                    <div className={style.section__grid}>
                        <div>
                            <h2 className={`title white ${style.section__title}`}>Advantages</h2>
                            <ul className={style.adv__list}>
                                <li>
                                    <p>Fast payouts</p>
                                </li>
                                <li>
                                    <p>Cryptocurrency support</p>
                                </li>
                                <li>
                                    <p>24/7 client service</p>
                                </li>
                                <li>
                                    <p>User-friendly interface</p>
                                </li>
                                <li>
                                    <p>Mobile-friendly design</p>
                                </li>
                                <li>
                                    <p>Diverse game selection</p>
                                </li>
                                <li>
                                    <p>Frequent advancements and bonuses</p>
                                </li>
                                <li>
                                    <p>Secure two-factor authentication</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={`title white ${style.section__title}`}>Disadvantages</h2>
                            <ul className={style.adv__list}>
                                <li>
                                    <p>Limited game providers</p>
                                </li>
                                <li>
                                    <p>Restricted access in some countries</p>
                                </li>
                                <li>
                                    <p>Few live dealer options</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
