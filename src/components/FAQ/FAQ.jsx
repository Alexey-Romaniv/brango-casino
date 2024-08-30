import style from "./FAQ.module.scss";
import FAQItem from "@/components/FAQ/FAQItem";

export default function FAQ() {
    const questionList = [
        {
            id: "1",
            q: "How to get to Grey Eagle Casino?",
            a: "You can get to Grey Eagle Casino at 3779 Grey Eagle Drive Southwest, Calgary, AB, T3E 3X8 by following the address provided."
        },
        {
            id: "2",
            q: "Is Grey Eagle Casino mobile friendly?",
            a: "There are no special apps or online options available to play. You can enjoy your gaming experience by visiting the Grey Eagle Resort and Casino."
        },
        {
            id: "3",
            q: "Does the Grey Eagle Resort and Casino have a pool?",
            a: "This beautiful 4-star resort hotel features amenities exclusive to each guest, including the pool. You can check Grey Eagle Casino photos to ensure."
        },
        {
            id: "4",
            q: "What time does Grey Eagle Casino open?",
            a: "Grey Eagle Casino is open 24/7. The poker rooms are available from 2 pm to 2 am."
        },

    ]
    return (
        <section className="section">
            <div className="container">
                <h2 className="title">FAQ</h2>
                <ul className={style.list}>
                    {questionList.map(i => {
                        return (
                            <li key={i.id}>
                                <FAQItem item={i}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}