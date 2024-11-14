"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
const Offer = ({ params }) => {
  const router = useRouter();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [offers, setOffers] = useState([]);


  useEffect(() => {
    if (document.referrer && !document.referrer.includes(window.location.hostname)) {
      router.replace('/'); // Перенаправляем на первую страницу
      return;
    }
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.adkey-seo.com/api/website/get-website/559"
        );
        if (data && data.offers) {
          setOffers(data.offers);
          setDataLoaded(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (!dataLoaded) {
      fetchData();
    }
  }, [dataLoaded]);
  useEffect(() => {
    if (document.referrer && !document.referrer.includes(window.location.hostname)) {
      router.replace('/'); // Перенаправляем на первую страницу
      return;
    }
    console.log("reg", document.referrer);
    setTimeout(() => {
      offers.forEach((i) => {
        if (+params.id === i.id) {
          // console.log(i)


          router.push(i.link);
        }
      });
    }, 500);
  }, [offers]);
  return <Loader />;
};
export default Offer;
