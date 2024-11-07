import style from "./Licenses.module.scss";
import Image from "next/image";

export default function Licenses() {
    return (
        <section className={`section ${style.section__license}`}>
            <div className="container">
                <div className={style.box}>
                    <div>
                        <h2 className={`title ${style.section__title}`}>
                            Licenses
                        </h2>
                        <p>
                            Brango is licensed and regulated under the jurisdiction of Curaçao. This licensing ensures
                            that the casino adheres to international standards for fair play and security, giving
                            partakers confidence in its operational integrity.
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
                            Security
                        </h2>
                        <p>
                            To secure user data, the venue employs RSA encryption technology, which safeguards sensitive
                            information like personal details and financial transactions. They also maintain strict
                            verification processes and are committed to trustworthy gambling, allowing partakers to set
                            deposit limits and encouraging the use of parental control software if needed.

                        </p>
                    </div>

                    <div>
                        <h2 className={`title ${style.section__title}`}>
                            Software Technologies
                        </h2>
                        <p>
                            Brango operates primarily on Real Time Gaming (RTG) software, known for offering a robust
                            choice of over 400 titles, including slots, table titles, and video poker. RTG ensures
                            smooth gameplay, fair outcomes, and high-quality graphics across its game library,
                            accessible through both downloadable software and instant-play options on desktop or mobile.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}
