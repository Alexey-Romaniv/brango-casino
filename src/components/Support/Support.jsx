import style from "./Support.module.scss";
import Image from "next/image";
export default function Support() {
  return (
    <section className={`section ${style.section__support}`}>
      <div className={`container ${style.support__container}`}>
        <div>
          <h2 className="title">
            Support: Rocket Play Casino No Deposit Bonus Codes 2023
          </h2>
          <div className={style.box}>
            <p>
              The Casino Rocket service was founded in 2020. Since then, the
              site has begun to rapidly develop and conquer new regions. Thanks
              to the license, the platform is available in different countries.
              Although the main region of activity is Australia.
            </p>
            <br />
            <p>There are several options for contacting its support:</p>
            <ul className={style.list}>
              <li>
                <p>e-mail</p>
              </li>
              <li>
                <p>social networks</p>
              </li>
              <li>
                <p>FAQ</p>
              </li>
            </ul>
            <br />
            <p>
              Unfortunately, at the moment there is no online chat and support
              phone number.
            </p>
          </div>
        </div>
        <Image
          className={style.supportImg}
          src="/images/form.webp"
          alt="Rocket Casino form"
          width={420}
          height={200}
        />
      </div>
    </section>
  );
}
