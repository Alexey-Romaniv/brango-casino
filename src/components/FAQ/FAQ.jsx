import style from "./FAQ.module.scss";
import FAQItem from "@/components/FAQ/FAQItem";

export default function FAQ() {
  const questionList = [
    {
      id: "1",
      q: "Is this site legal?",
      a: "Yes. This service is licensed in Curacao.",
    },
    {
      id: "2",
      q: "How do I install the app?",
      a: "Go to the website to download the Android app.",
    },
    {
      id: "3",
      q: "Can I play from mobile devices?",
      a: "Yes. There is an app and a mobile version of the site.",
    },
    {
      id: "4",
      q: "What is the minimum deposit?",
      a: "The minimum deposit is AU$ 20.",
    },
  ];
  return (
    <section className={`section ${style.section__faq}`}>
      <div className="container">
        <h2 className="title">FAQ</h2>
        <ul className={style.list}>
          {questionList.map((i) => {
            return (
              <li key={i.id}>
                <FAQItem item={i} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
