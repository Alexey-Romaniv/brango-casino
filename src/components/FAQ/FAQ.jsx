import style from "./FAQ.module.scss";
import FAQItem from "@/components/FAQ/FAQItem";

export default function FAQ() {
    const questionList = [
        {
            id: "1",
            q: "Is there a VIP and Casino Brango 20 free spins program?",
            a: "Yes, Brango offers a five-level VIP program with benefits like increased cashout limits, comp points, and exclusive Brango Casino free chip bonuses.",
        },
        {
            id: "2",
            q: "What are the minimum and maximum cashout limits?",
            a: "The minimum cashout is NZ$20, while the weekly maximum cashout limit is NZ$4,000, which increases with VIP level.",
        },
        {
            id: "3",
            q: "Are there live dealer titles and Brango Casino no deposit codes available?",
            a: "No, Brango does not offer live dealer titles; it focuses on slots, table titles, and video poker instead.",
        },
        {
            id: "4",
            q: "How quickly are Casino Brango codes processed?",
            a: "Cashouts, especially via cryptocurrency, are typically processed within 24 hours, ensuring fast access to funds.",
        }, {
            id: "5",
            q: "Does Brango Casino offer trustworthy gambling tools?",
            a: "Yes, partakers can set daily, weekly, and monthly deposit limits to encourage trustworthy gambling.",
        },
        {
            id: "6",
            q: "What type of tournaments does Brango Casino host?",
            a: "Brango offers slot tournaments and weekly points races, with cash prizes subject to low wager.",
        },
        {
            id: "7",
            q: "Are there any recurring daily bonuses and Casino Brango free chip?",
            a: "Yes, the venue offers daily reload bonusesand Casino Brango no deposit bonus, like 50% no-rules bonuses for cryptocurrency users.",
        },
        {
            id: "8",
            q: "Can I deposit and play in cryptocurrency?",
            a: "Absolutely, Brango supports several cryptocurrencies, including Bitcoin, Litecoin, Ethereum, and Dogecoin.",
        },
    ];
    return (
        <section className={`section ${style.section__faq}`}>
            <div className="container">
                <h2 className={`title ${style.section__title}`}>FAQ</h2>
                <ul className={style.list}>
                    {questionList.map((i) => {
                        return (
                            <li key={i.id}>
                                <FAQItem item={i}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
