"use client";
import style from "@/components/Payments/Payments.module.scss";
import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Payments({ firstId }) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.adkey-seo.com/api/website/get-payments/471"
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
      <section className={`section ${style.section__payment}`} id="payments">
        <div className="container">
          <h2 className="title">PAYMENT METHODS</h2>
          <ul className={style.list}>
            <li className={style.headerRow}>
              <span>Method</span>
              <span>Type</span>
              <span>Country</span>
              <span>Commission</span>
              <span>Processing time</span>
              <span>Minimum deposit</span>
              <span>Deposit</span>
            </li>
            {data.map((i) => {
              return (
                <li key={i.image}>
                  <span>
                    <Image
                      src={`https://api.adkey-seo.com/storage/images/payments/${i.image}`}
                      alt={i.name}
                      loading="lazy"
                      width={110}
                      height={36}
                    />
                  </span>
                  <span>{i.type}</span>
                  <span>{i.country}</span>
                  <span>{i.commission}</span>
                  <span>{i.processing_time}</span>
                  <span>{i.min_dep}</span>
                  <span>
                    <Button
                      href={`/casino/${firstId}`}
                      size="small"
                      color="second"
                      className={`${style.btn} ${style.btn__green}`}
                    >
                      Deposit
                    </Button>
                  </span>
                </li>
              );
            })}
          </ul>
          <ul className={style.listDesk}>
            {data.map((i) => {
              return (
                <li className={style.list__item} key={i.name}>
                  <div className={style.listDeskImg}>
                    <Image
                      src={`https://api.adkey-seo.com/storage/images/payments/${i.image}`}
                      alt={i.name}
                      width={120}
                      height={64}
                    />
                  </div>
                  <div className={style.listDeskBox}>
                    <div className={style.listDeskOptions}>
                      <span>Type</span>
                      <span>Country</span>
                      <span>Commission</span>
                      <span>Processing time</span>
                      <span>Minimum deposit</span>
                    </div>
                    <div className={style.listDeskOptions}>
                      <span>{i.type}</span>
                      <span>{i.country}</span>
                      <span>{i.commission}</span>
                      <span>{i.processing_time}</span>
                      <span>{i.min_dep}</span>
                    </div>
                  </div>
                  <Button
                    className={`${style.btn} ${style.btn__green}`}
                    href={`/casino/${firstId}`}
                    size="big"
                    color="second"
                  >
                    Deposit
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    )
  );
}
