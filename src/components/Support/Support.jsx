import style from "./Support.module.scss";
import Image from "next/image";

export default function Support() {
    return (
        <section className={`section ${style.section__support}`}>
            <div className={`container ${style.support__container}`}>
                <div>
                    <h2 className={`title ${style.title}`}>
                        Support
                    </h2>
                    <div className={style.box}>
                        <p>
                            Client support at the venue is available 24/7 through live chat, email, and a toll-free
                            phone line for U.S. and Canadian partakers. This around-the-clock assistance ensures
                            partakers can resolve issues promptly, enhancing the overall user venture.
                        </p>

                    </div>
                </div>
                <Image
                    className={style.supportImg}
                    src="/images/form.webp"
                    alt="Rocket Casino form"
                    width={680}
                    height={518}
                />
            </div>
        </section>
    );
}
