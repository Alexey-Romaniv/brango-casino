import style from "./Providers.module.scss"
import {useEffect, useState} from "react";
import Image from "next/image";
export default  function Providers({firstId}) {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.adkey-seo.com/api/website/get-providers/',);
                const loadData = await response.json();
                setData(loadData);
                setDataLoaded(true);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (!dataLoaded) {
            fetchData();
        }
    }, [dataLoaded]);
    return !!dataLoaded && (
        <section className="section">
            <div className="container">
                <h2 className="title">Software Providers</h2>
                <ul className={style.list}>
                    {data.map(i => {
                        return (
                            <li key={i.id}>
                                <a href={`/casino/${firstId}`}><Image src={`https://api.adkey-seo.com/storage/images/providers/${i.image}`} alt={i.name} loading="lazy" width={135} height={60}/></a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}