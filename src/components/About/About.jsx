import style from "./About.module.scss"
import Image from "next/image";

export default function About() {
    return (
        <section className={`section ${style.historySection}`} id="history">
            <div className="container">
                <ul className={style.list}>
                    <li className={style.firstRow}>
                        <div >
                            <h1 className="title">Grey Eagle Casino</h1>
                            <ul className={style.adventList}>
                                <li>1000 slot machines</li>
                                <li>Diversity of table games</li>
                                <li>84,000 square feet of gaming action</li>
                            </ul>
                            <br/>
                            <p>
                                Grey Eagle Resort and Casino stands as a renowned destination in Calgary, AB, Canada,
                                boasting a 15-year history and a prominent status as one of the most frequented gambling
                                establishments in the province. Its widespread popularity can be attributed to a
                                multitude
                                of factors, including its unwavering commitment to security and legitimacy, a diverse
                                selection of top-tier casino games, and an exceptional atmosphere.
<br/><br/>
                                Spanning an impressive 84,000 square feet, the venue offers a comprehensive gaming
                                experience that caters to a wide range of preferences. Whether it's slot machines, table
                                games, or poker that piques your interest, the casino is sure to have it all. Moreover,
                                the
                                interior of the casino exudes a welcoming ambiance, with distinct areas designed to
                                accommodate different player preferences, ensuring a comfortable and enjoyable gaming
                                experience for all.
                            </p>
                        </div>
                        <Image className={style.aboutLaptop} src="/images/mac.webp" alt="Grey Eagle Casino macbook" width={405} height={269} loading="lazy"/>
                    </li>

                    <li id="signin">
                        <h2 className="title">Grey Eagle Casino Hours: When and How To Start Your Winning Way
                            (Login)</h2>
                        <p>
                            To start playing at the Grey Eagle Resort and Casino, you can take advantage of the 24-hour
                            operating schedule, allowing for flexibility in planning your gaming and entertainment
                            activities. Upon arrival, you can proceed to the guest services or player's club desk to
                            sign up for a membership card, which may provide access to various perks and rewards.
                            <br/><br/>
                            Once registered, you can explore the diverse gaming options, including slot machines, table
                            games, and poker, and choose your preferred game to begin playing. The casino maintains a
                            casual and relaxed dress code, allowing guests to dress comfortably while adhering to basic
                            standards of cleanliness and decency. This policy ensures that all guests can enjoy a
                            pleasant and respectful environment during their visit to the casino.

                        </p>
                    </li>
                    <li>
                        <h2 className="title">Calgary Grey Eagle Casino Advantages</h2>
                        <p>
                            Grey Eagle Casino in Canada goes above and beyond to provide an exceptional experience for
                            its guests through a variety of promotions and rewards programs. The casino's Winning
                            Program offers members exclusive benefits, including personalized offers, birthday rewards,
                            and access to VIP events. By earning points through gameplay, guests can unlock even more
                            perks such as complimentary hotel stays, concert tickets, and luxurious gifts.
                            <br/><br/>
                            Additionally, Grey Eagle Casino frequently hosts exciting promotions like cash giveaways,
                            car draws, and themed events that add an extra layer of excitement to the gaming experience.
                            With its generous rewards programs and engaging promotions, Grey Eagle Casino sets itself
                            apart as a premier destination for those seeking not only top-notch gaming and
                            entertainment, but also ample opportunities to win big and be rewarded for their loyalty.
                        </p>
                    </li>
                    <li>
                        <h2 className="title">Deposit Methods</h2>
                        <p>
                            Grey Eagle Casino offers various deposit methods for players, including credit/debit cards,
                            online banking transfers, e-wallets, and casino checks. Credit/debit card options include
                            Visa and Mastercard, while online banking transfers can be made from checking or savings
                            accounts. E-wallet deposits are available through services like PayPal or Apple Pay, and
                            casino check deposits can be made in person. Each method has minimum and maximum amounts,
                            with fees possible. The minimum deposit is $10, with a maximum of $10,000, but limits may
                            vary by payment method, so it's best to confirm with the casino directly.
                        </p>
                    </li>
                    <li>
                        <h2 className="title">Withdrawal Methods </h2>
                        <p>
                            The minimum withdrawal at Grey Eagle Casino is $100, and the maximum withdrawal is $5,000
                            per day. Grey Eagle Casino is an online casino that offers a variety of games including
                            slots, table games, and video poker. Players can enjoy a wide range of bonuses and
                            promotions, as well as a secure and easy-to-use platform. Withdrawals can be made through a
                            variety of methods, including cash, Visa or MasterCard. It's significant to note that there
                            may be additional fees associated with certain withdrawal methods.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}