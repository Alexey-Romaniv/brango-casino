"use client"

import {useState} from "react";
import style from "./FAQ.module.scss"
export default function FAQItem({item}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <p className={style.question} onClick={handleOpen}>
                <span>{isOpen ? "–" : "+"}</span> {item.q}
            </p>
            {isOpen && <p className={style.answer}>{item.a}</p>}
        </>
    )
}