"use client";

import { useState } from "react";
import style from "./FAQ.module.scss";
import Image from "next/image";
export default function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <p className={style.question} onClick={handleOpen}>
        {isOpen ? (
          <Image
            className={style.img}
            src="/images/minus.svg"
            width={24}
            height={24}
            alt="minus"
          />
        ) : (
          <Image
            className={style.img}
            src="/images/plus.svg"
            width={24}
            height={24}
            alt="plus"
          />
        )}
        <span>{item.q}</span>
      </p>
      {isOpen && <p className={style.answer}>{item.a}</p>}
    </>
  );
}
