"use client";
import style from "./BonusDetails.module.scss";
import btnStyle from "@/components/Button/Button.module.scss";
import BonusDetailsCard from "@/components/BonusDetailsCard/BonusDetailsCard.jsx";
import { useEffect, useState } from "react";

export default function BonusDetails({ offers }) {
  const [bonusList, setBonusList] = useState(offers);
  const [randomList, setRandomList] = useState([]);

  useEffect(() => {
    const firstList = bonusList?.slice(0, 6);
    setRandomList(firstList);
  }, []);
  const setList = () => {
    const newList = getRandomElements(bonusList);
    setRandomList(newList);
  };
  function getRandomElements(arr) {
    const randomElements = [];
    const usedIndexes = []; // Массив для хранения уже использованных индексов

    // Используем цикл while, чтобы добавить 6 случайных элементов
    while (randomElements.length < 6 && usedIndexes.length < arr.length) {
      const randomIndex = Math.floor(Math.random() * arr.length);

      // Проверяем, использовался ли уже этот индекс
      if (!usedIndexes.includes(randomIndex)) {
        const randomElement = arr[randomIndex];
        randomElements.push(randomElement);
        usedIndexes.push(randomIndex);
      }
    }

    return randomElements;
  }
  return (
    <section className={`section ${style.sectionBonus}`} id="bonuses">
      <div className="container">
        <h2 className="title">BONUS DETAILS</h2>
        <ul className={style.list}>
          <li className={style.headerRow}>
            <span>Casino</span>
            <span>Bonuses</span>
            <span>Rate</span>
            <span className={style.freeSpinMob}>Free spins</span>
            <span className={style.freeSpinDesk}>
              Free <br /> spins
            </span>
            <span>
              More <br /> info
            </span>
            <span>Get</span>
          </li>
          {randomList.map((i, index) => {
            return (
              <li key={index} className={style.bodyRow}>
                <BonusDetailsCard data={i} />
              </li>
            );
          })}
        </ul>
        <button
          className={`${style.btnBonus} ${btnStyle.btn} ${btnStyle.big} ${btnStyle.center}`}
          onClick={setList}
        >
          Refresh
        </button>
      </div>
    </section>
  );
}
