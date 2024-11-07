import style from "./About.module.scss";
import Image from "next/image";

export default function About() {
    return (
        <section className={`section ${style.historySection}`} id="history">
            <div className="container">
                <ul className={style.list}>
                    <li className={style.firstRow}>
                        <div>
                            <h1 className="title">Brango Casino</h1>
                            <ul className={style.adventList}>
                                <li>
                                    <p>500%, matched up to NZ$1,000</p>
                                </li>
                                <li>
                                    <p>200% No Rules Bonus</p>
                                </li>
                                <li>
                                    <p>40x wagering requirement</p>
                                </li>
                            </ul>
                            <br/>
                            <p>
                                Brango is a distinctive online gaming platform that has captured the attention of
                                partakers worldwide for its quick payout times, cryptocurrency options, and diverse game
                                selection. Known for its dedication to smooth, user-friendly gameplay and modern
                                features, the venue has established itself as a leader in the online gambling space,
                                appealing particularly to crypto enthusiasts and those seeking efficient payment
                                processing. The casino offers a robust variety of titles, including slots,
                                table titles,
                                and specialty titles, all powered by reliable software providers. With 24/7 client
                                support and unique advancement offers, the venue aims to provide a seamless and
                                enjoyable playing venture for both new and seasoned partakers.

                            </p>
                        </div>
                        <Image
                            className={style.aboutLaptop}
                            src="/images/notebook.webp"
                            alt="Brango Casino macbook"
                            width={464}
                            height={283}
                            loading="lazy"
                        />
                    </li>

                    <li id="signin">
                        <h2 className={`title ${style.title__small}`}>
                            About Casino Brango Login
                        </h2>
                        <p>
                            The venue has built a reputation for its accessible, player-friendly platform that brings a
                            wide array of titles and innovative features to online gamblers worldwide. Recognized for
                            its strong commitment to cryptocurrency payments and rapid cashout processing, the venue
                            appeals to both casual and serious partakers looking for a seamless gaming venture. The
                            platform is powered by industry-leading software, ensuring high-quality graphics, smooth
                            gameplay, and fair outcomes across its slots, table titles, and unique specialty options.
                            With an emphasis on convenience, the casino provides 24/7 support to help partakers maximize
                            their venture, from advancements to easy-access bonuses and frequent loyalty rewards.

                            <br/>
                            <br/>
                            Brango Casino login is straightforward and designed for user convenience. To access the
                            platform, partakers start by entering their registered email address and password on the
                            login page, which provides a secure gateway to the full scope of features. For added
                            security, Casino Brango supports two-factor authentication, giving participants peace of
                            mind about their account’s safety. Once logged in, partakers can quickly navigate to their
                            favorite titles, check their account balance, manage deposits and cashouts, and access
                            advancement offers. The login interface is optimized for both desktop and mobile devices,
                            allowing users to enjoy a seamless venture regardless of their preferred device.

                        </p>

                    </li>
                    <div className={style.flex}>

                    <li>
                        <h2 className={`title ${style.title__small}`}>
                            Deposit Methods
                        </h2>
                        <p>
                            For deposits, options include Visa, MasterCard, American Express, and Prepaid Visa for quick
                            and efficient transactions. Cryptocurrency enthusiasts can also use Bitcoin, Ethereum,
                            Litecoin, Dogecoin, Solana, and USDT, offering enhanced security and fast processing times.
                            Interac and Neosurf are also available, ensuring partakers have access to convenient
                            alternatives based on their bias and geographic location. The minimum deposit amount is
                            typically NZ$20, allowing partakers to start gaming without a high entry requirement.
                        </p>

                    </li>
                    <li>
                        <h2 className={`title ${style.title__small}`}>
                            Withdrawal Methods
                        </h2>
                        <p>
                            Cashouts at the venue are equally streamlined, with methods including Bitcoin, Interac, bank
                            transfer, and checks by courier. Cryptocurrency cashouts are particularly fast, often
                            processed within 24 hours, while other options like bank transfers may take a few business
                            days depending on the method. All cashout requests require prior account verification, which
                            involves submitting valid ID documentation as a security measure. This scope of options and
                            quick processing ensures that partakers have reliable and diverse means to access their
                            winnings.
                        </p>

                    </li>
                    </div>

                </ul>
            </div>
        </section>
    );
}
