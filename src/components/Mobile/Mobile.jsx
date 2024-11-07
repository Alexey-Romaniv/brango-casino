import style from "./Mobile.module.scss";
import Image from "next/image";

export default function Mobile({firstId}) {
    return (
        <section className={`section ${style.mobileSection}`} id="mobile">
            <div className={`container ${style.wrapper}`}>
                <div className="top">
                    <h2 className={`title ${style.section__mainTitle}`}>
                        Casino App
                    </h2>
                    <Image
                        className={style.phoneImg}
                        src="/images/img-phone.webp"
                        alt="Rocket Casino phone"
                        loading="lazy"
                        width={635}
                        height={649}
                    />
                    <p>
                        While the venue doesn’t provide a dedicated mobile app, the platform is fully optimized for
                        mobile browsers on both iOS and Android devices. Partakers can access the full scope of titles
                        and functionalities from their smartphone or tablet, offering a convenient playing venture on
                        the go.

                    </p>
                    <div className={style.linkList}>
                        <a href={`/casino/${firstId}`}>
                            <Image
                                src="/images/googleplay.webp"
                                alt="googleplay"
                                loading="lazy"
                                width={168}
                                height={50}
                                className={style.linkImg}
                            />
                        </a>
                        <a href={`/casino/${firstId}`}>
                            <Image
                                src="/images/appstore.webp"
                                alt="appstore"
                                loading="lazy"
                                width={168}
                                height={50}
                                className={style.linkImg}
                            />
                        </a>
                    </div>
                </div>

            </div>
            <div className="container">
                <ul className={style.infoList}>
                    <li>
                        <h2 className={`title ${style.section__title}`}>
                            Brango Casino sister sites Currencies
                        </h2>
                        <p>
                            Brango supports several major currencies, including USD and EUR, alongside popular
                            cryptocurrencies such as Bitcoin, Litecoin, Dogecoin, Ethereum, and Tether (USDT). This
                            flexibility makes it accessible to both fiat and crypto partakers, with easy conversion
                            options for smoother transactions.

                        </p>
                    </li>
                    <li>
                        <h2 className={`title ${style.section__title}`}>
                            Languages
                        </h2>
                        <p>
                            Currently, the venue supports English, catering to a global audience, but particularly
                            focusing on regions like North America, where English is predominantly spoken among its user
                            base.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
