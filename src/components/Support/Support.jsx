import style from "./Support.module.scss";
import Image from "next/image";
export default function Support() {
    return (
        <section className="section">
            <div className="container">
                <h2 className="title">Support</h2>
                <div className={style.box}>
                    <p>Grey Eagle Casino offers excellent customer support through various channels, including email and
                        social media platforms such as LinkedIn, Facebook, Instagram, and TikTok. Guests can reach out
                        for assistance, information, or inquiries through these channels to enhance their experience at
                        the casino.</p>
                    <Image className={style.supportImg} src="/images/form.webp" alt="Grey Eagle Casino form" width={419} height={252}/>
                </div>
            </div>
        </section>
    )
}