import style from "./Licenses.module.scss";
import Image from "next/image";

export default function Licenses() {
    return (
        <section className="section">
            <div className="container">

                <div className={style.box}>
                    <div>
                        <h2 className="title">Licenses</h2>
                        <p>Grey Eagle Casino operates under the licensing and regulatory oversight of the Alberta
                            Gaming,
                            Liquor, and Cannabis Commission (AGLC). The licensing by the AGLC signifies that Grey Eagle
                            Casino upholds high standards of integrity, security, and responsible gaming practices,
                            providing guests with confidence in the legitimacy and reliability of the casino
                            operations.</p>

                    </div>
                    <div><Image src="/images/aglc.jpeg" alt="license" width={280} height={186} loading="lazy"/></div>

                    <div>
                        <h2 className="title">Software Technologies</h2>
                        <p>Grey Eagle Casino offers a diverse and exciting gaming experience by partnering with some top
                            software providers in the industry. By collaborating with Microgaming, Playtech, NetEnt,
                            Evolution Gaming, and IGT, Grey Eagle Casino ensures that players have access to a wide
                            range of high-quality games that cater to all preferences. Whether you're a fan of classic
                            slots, live dealer games, or cutting-edge video slots, Grey Eagle Casino has something for
                            everyone thanks to its partnership with these renowned software developers.
                        </p>
                    </div>
                    <div>
                        <h2 className="title">Security</h2>
                        <p>At Grey Eagle Casino, security is paramount. The establishment employs cutting-edge technology
                            and industry best practices to protect patron information and transactions. From encryption
                            protocols to secure payment gateways, every aspect of the casino's operations is designed to
                            safeguard against cyber threats and unauthorized access. Adhering to strict regulatory
                            standards, Grey Eagle online Casino ensures a safe and fair gaming environment for all players.
                        </p>
                    </div>
                </div>
            </div>
        </section>
)
}