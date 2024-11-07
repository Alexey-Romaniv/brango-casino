import style from "./Info.module.scss";

export default function Info() {
    return (
        <section className={`section ${style.historySection}`}>
            <div className="container">
                <div className={style.list}>
                    <div>
                        <h2 className="title">
                            Available to Play at Brango Casino
                        </h2>
                        <p>
                            Brango offers a well-rounded choice of titles, catering to diverse bias and skill levels
                            among online partakers. Known for partnering with top-tier software providers, the venue
                            delivers high-quality graphics, smooth performance, and engaging themes. Here’s a closer
                            look at the gaming options available:

                        </p>
                    </div>
                    <div className={style.section__grid}>
                        <div>
                            <h2 className={`title ${style.section__title}`}>
                                Slots
                            </h2>
                            <p>
                                Brango’s slot selection is extensive and designed to cater to all player bias, with
                                options ranging from classic fruit slots that evoke nostalgia to modern adventure and
                                fantasy-themed titles that provide immersive stories and high-quality graphics.
                                Partakers can explore diverse game mechanics, from traditional three-reel slots to more
                                advanced five-reel versions with unique paylines and customizable betting options.
                                Beyond the visuals, Brango’s slots stand out for their engaging features, which include
                                Brango Casino 50 free spins, cascading reels, multipliers, expanding wilds, and bonus
                                rounds, all aimed at enhancing the chances for partakers to land winning combinations.
                                Popular titles such as Achilles, Cash Bandits, and Eagle Shadow Fist offer diverse
                                gameplay ventures, from historical battles to crime capers and mythical adventures,
                                appealing to both newcomers who enjoy straightforward gameplay and seasoned partakers
                                looking for added depth and reward.

                            </p>
                        </div>
                        <div>
                            <h2 className={`title ${style.section__title}`}>
                                Table
                            </h2>
                            <p>
                                For partakers seeking the strategic depth and thrill of traditional casino titles, the
                                venue delivers a comprehensive scope of classic table titles, each designed to mimic the
                                authentic atmosphere of a physical casino. Options include timeless favorites like
                                blackjack, roulette, and baccarat, all presented with high-quality graphics and smooth
                                animations that make for an engaging venture. The blackjack variations, such as Classic
                                Blackjack and European Blackjack, allow partakers to choose formats that suit their
                                preferred strategies, while roulette options, including American and European Roulette,
                                offer different levels of challenge and excitement. Baccarat enthusiasts will also find
                                Brango’s take on this classic game to be intuitive and visually appealing, giving
                                partakers a realistic table venture right from their screen.

                            </p>
                        </div>
                        <div>
                            <h2 className={`title ${style.section__title}`}>
                                Video Poker
                            </h2>
                            <p>
                                For fans of titles that combine elements of strategy and luck, the venue presents an
                                impressive array of video poker titles, where skillful play can improve winning
                                potential. This category features popular versions like Jacks or Better, Deuces Wild,
                                and Aces and Eights, each offering unique rules and payout structures. Video poker at
                                Brango is not only about landing winning hands but also about understanding odds and
                                employing optimal strategies, making it a favorite for those who enjoy a more
                                interactive playing venture. Partakers can find varying pay tables that cater to their
                                preferred balance of risk and reward, and with high payout rates, video poker presents
                                opportunities for substantial wins.

                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
