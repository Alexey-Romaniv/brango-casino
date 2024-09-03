"use client";
import style from "./TopCasino.module.scss";
import btnStyle from "../Button/Button.module.scss";
import TopCasinoCard from "@/components/TopCasinoCard/TopCasinoCard";
import { useState } from "react";
import Loader from "@/components/Loader/Loader";
export default function TopCasino({ offers, country }) {
  const [showAll, setShowAll] = useState(false);

  const getVisibleItems = () => {
    return showAll ? offers : offers.slice(0, 8);
  };
  return !offers ? (
    <Loader />
  ) : (
    <section className="section" id="casino">
      <div className="container">
        <h2 className="title">Top Casinos {country}</h2>
        <ul className={style.list}>
          {getVisibleItems().map((i) => {
            return (
              <li key={i.id}>
                <TopCasinoCard data={i} />
              </li>
            );
          })}
        </ul>
        {offers?.length > 8 && !showAll && (
          <button
            className={`${style.btn} ${btnStyle.btn} ${btnStyle.big} ${btnStyle.center}`}
            onClick={() => setShowAll(true)}
          >
            All Casino
          </button>
        )}
      </div>
    </section>
  );
}
