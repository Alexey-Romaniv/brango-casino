"use client";
import style from "./Games.module.scss";
import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Games({ firstId }) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.adkey-seo.com/api/website/get-games/gambling"
        );
        const loadData = await response.json();
        setData(loadData);
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (!dataLoaded) {
      fetchData();
    }
  }, [dataLoaded]);
  return (
    !!dataLoaded && (
      <section className={`section ${style.section__games}`} id="games">
        <div className="container">
          <h2 className="title">
            TOP <span className="accent">GAMES</span>
          </h2>
          <ul className={style.list}>
            {data.map((game) => {
              return (
                <li key={game.id}>
                  <div className={style.cardBox}>
                    <div className={style.card}>
                      <div className={style.cardFront}>
                        <img
                          src={`https://api.adkey-seo.com/storage/images/games/${game.image}`}
                          alt={game.name}
                          loading="lazy"
                        />
                      </div>
                      <div className={style.cardBack}>
                        <a href={`/casino/${firstId}`}>
                          <p>{game.name}</p>
                          <span>
                            <Image
                              src="/images/play.svg"
                              alt="play"
                              loading="lazy"
                              width={29}
                              height={29}
                            />{" "}
                            Play now
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <Button
            className={style.btnGames}
            href={`/casino/${firstId}`}
            size="big"
            center
          >
            All games
          </Button>
        </div>
      </section>
    )
  );
}
