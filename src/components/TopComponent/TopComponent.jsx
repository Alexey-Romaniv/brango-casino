"use client";
import { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import TopCasino from "../TopCasino/TopCasino";
import BonusDetails from "../BonusDetails/BonusDetails";
import Loader from "../Loader/Loader";
import Advantages from "../Advantages/Advantages";
import Games from "../Games/Games";

export default function TopComponent() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.adkey-seo.com/api/website/get-website/294"
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
    <>
      <Hero
        firstId={data?.offers[0].id}
        firstBonus={data?.offers[0].bonuses.welcome_bonus}
      />
      <TopCasino offers={data?.offers} country={data?.website.country_name} />
      {!data || data.length === 0 ? (
        <Loader />
      ) : (
        <BonusDetails offers={data?.offers} />
      )}
      <Advantages firstId={data?.offers[0].id} />
      <Games firstId={data?.offers[0].id} />
    </>
  );
}
