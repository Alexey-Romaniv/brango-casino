"use client";
import { useEffect, useState } from "react";
import Payments from "../Payments/Payments";
import Licenses from "../Licenses/Licenses";
import Providers from "../Providers/Providers";
import Mobile from "../Mobile/Mobile";

export default function BottomComponent() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.adkey-seo.com/api/website/get-website/559"
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
      <Payments firstId={data?.offers[0].id} />
      <Licenses />
      <Providers firstId={data?.offers[0].id} />
      <Mobile firstId={data?.offers[0].id} />
    </>
  );
}
