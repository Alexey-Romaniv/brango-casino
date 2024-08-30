import style from "./Mobile.module.scss"
import Image from "next/image";
export default function Mobile({firstId}) {
    return (
        <section className={`section ${style.mobileSection}`} id="mobile">
            <div className={`container ${style.wrapper}`}>
                <div className="">
                    <h2 className="title"> Grey Eagle app</h2>
                    <p>
                        There is no special Grey Eagle Casino app available for download. However, you can efficiently
                        plan your visit to the casino and secure reservations directly through the official Grey Eagle
                        Casino online platform. By utilizing the website, you have the flexibility to select from a
                        diverse range of accommodation options, dining experiences, and gaming opportunities.
                        <br/>
                        The user-friendly interface on the website enables you to explore the various amenities provided
                        by the casino, access the Grey Eagle Casino map for easy navigation, and finalize your
                        reservations with just a few simple clicks. Whether you're interested in booking a room,
                        indulging in top-notch dining, enjoying your favorite casino games securing Grey Eagle Casino
                        concert seating, indulging in top-notch dining, or enjoying your favorite casino games. The Grey
                        Eagle Casino website delivers a comprehensive and hassle-free booking experience to cater to all
                        your needs.
                    </p>
                    <div className={style.linkList}>
                        <a href={`/casino/${firstId}`}><Image src="/images/appstore.webp" alt="appstore"  loading="lazy" width={168} height={50}/></a>
                        <a href={`/casino/${firstId}`}><Image src="/images/googleplay.webp" alt="googleplay"  loading="lazy" width={168} height={50}/></a>

                    </div>
                    </div>
                <Image className={style.phoneImg} src="/images/phone.webp" alt="Grey Eagle Casino phone" loading="lazy" width={312} height={527}/>

            </div>
            <div className="container">
                <ul className={style.infoList}>
                    <li>
                        <h2 className="title">Languages</h2>
                        <p>
                            Grey Eagle Casino provides services and communication exclusively in English, ensuring clear
                            and consistent interactions with all guests. The dedicated staff offers excellent customer
                            service to assist visitors, emphasizing efficiency and a welcoming environment for everyone
                            to enjoy the casino's amenities.
                        </p>
                    </li>
                    <li>
                        <h2 className="title">Currencies</h2>
                        <p>
                            Grey Eagle Casino accepts Canadian dollars (CAD) as its primary currency. However, the
                            casino also accepts US dollars (USD) for some of its games and promotions. It is important
                            to note that any winnings in USD will be converted to CAD at the time of withdrawal. The
                            casino also has ATMs on-site for easy access to cash in either currency.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}


