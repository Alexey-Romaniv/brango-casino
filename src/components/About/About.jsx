import style from "./About.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <section className={`section ${style.historySection}`} id="history">
      <div className="container">
        <ul className={style.list}>
          <li className={style.firstRow}>
            <div>
              <h1 className="title">Rocket Casino</h1>
              <ul className={style.adventList}>
                <li>generous bonuses</li>
                <li>more than 1000 gambling games</li>
                <li>24/7 technical support</li>
              </ul>
              <br />
              <p>
                At Rocket Play Casino, from the moment of registration,
                customers understand why this service is so popular. After all,
                here you are greeted by a generous welcome bonus, an incredible
                selection of gambling entertainment, a professional technical
                support team and constantly updated promotions and special
                offers.
                <br />
                <br />
                If you have not yet had time to get acquainted with this online
                platform, then the Rocket Play Casino review will be a useful
                and informative source. Now you can find out what Rocket Play
                online Casino is, what are the main advantages of this place and
                how to get the most rewards and benefits from playing on this
                site.
              </p>
            </div>
            <Image
              className={style.aboutLaptop}
              src="/images/notebook.webp"
              alt="Rocet Casino macbook"
              width={464}
              height={283}
              loading="lazy"
            />
          </li>

          <li id="signin">
            <h2 className={`title ${style.title__small}`}>
              Login: Rocket Play Casino Log In
            </h2>
            <p>
              To become a full-fledged client of the service, you need to create
              a Rocket Casino login. To do this, the casino offers two main
              options. The first option is to register and create a Rocket Play
              Casino login using email. The second option is to use an existing
              Telegram account. Each client decides for himself which of the
              registration methods is better to use.
              <br />
              <br />
              If you decide to choose Casino Rocket login using email, then you
              will have to go through the following steps:
            </p>
            <ol>
              <li>Go to the site.</li>
              <li>Fill out a special form at the top left on the main page.</li>
              <li>Enter a valid email</li>
              <li>Come up with a strong password.</li>
              <li>Select a country from the list.</li>
              <li>Select your preferred game currency.</li>
              <li>Agree to the terms of use.</li>
              <li>Click on the account creation button.</li>
            </ol>
            <br />
            <br />
            <p>
              Now you can Rocket Play Casino sign up through the link in the
              message that will be sent to your email. This completes the
              registration. But it would be right to also go through
              verification.
            </p>
          </li>
          <li>
            <h2 className={`title ${style.title__small}`}>
              Verification: Rocket Play Casino Sign Up Promo Code
            </h2>
            <p>
              After completing the Rocket Casino sign up procedure, you need to
              log into your personal account on the website and fill out the
              page with your personal data. During the verification process, you
              should provide some information and send a scanned copy of your
              documents. This is necessary to confirm the legality of your
              sources of income, your age, the authenticity of your name, and
              your place of residence.
              <br />
              <br />
              Be prepared to send copies of your passport, bank statements,
              utility bills, etc. But don't worry. All your information will be
              under the reliable protection of Rocket Play online Casino.
            </p>
          </li>
          <li>
            <h2 className={`title ${style.title__small}`}>
              Deposit Methods: Rocket Play Casino Reviews
            </h2>
            <p>
              Since you can get the Casino Rocket no deposit bonus only by
              participating in the loyalty program, you will have to deposit
              money into your gaming account. This will allow you to play not
              only in demo mode and receive real winnings.
            </p>
            <br />
            <ul className={style.pay__list}>
              <li>Visa</li>
              <li>Mastercard</li>
              <li>Neosurf</li>
              <li>Skrill</li>
              <li>Bank Transfer</li>
              <li>Bitcoin</li>
              <li>Litecoin</li>
              <li>Rapid</li>
              <li>Paysafe</li>
              <li>MiFinity</li>
              <li>Jetone, etc.</li>
            </ul>
            <br />
            <p>
              As you can see, you can use bank cards, direct bank transfers,
              electronic systems, as well as various types of crypto wallets.
            </p>
            <br />
            <p>
              The minimum deposit size is currently 2AU$. This amount is enough
              to receive a welcome bonus upon registration.
            </p>
          </li>
          <li>
            <h2 className={`title ${style.title__small}`}>
              Withdrawal Methods: Rocket Play Casino Bonus Codes
            </h2>
            <p>
              For Rocket Play Casino withdrawal, you can use similar payment
              systems that are available when replenishing your gaming account.
              The minimum order amount will be from AU$30-40. The waiting time
              for the application to be processed depends on the selected
              payment system. For example, e-wallets and crypto wallets allow
              you to withdraw money almost instantly. Withdrawals to bank cards
              take 1-3 business days. If you make a request for a bank transfer,
              then you will need to wait up to 7 business days.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
