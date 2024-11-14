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

    setTimeout(() => {
      offers.forEach((i) => {
        if (+params.id === i.id) {
          // console.log(i)


          router.replace(i.link);
        }
      });
    }, 500);
  }, [offers]);
  return <Loader />;
};
export default Offer;
