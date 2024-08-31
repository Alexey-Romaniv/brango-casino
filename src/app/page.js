import Loader from "@/components/Loader/Loader";
import Hero from "@/components/Hero/Hero";
import TopCasino from "@/components/TopCasino/TopCasino";
import BonusDetails from "@/components/BonusDetails/BonusDetails";
import Advantages from "@/components/Advantages/Advantages";
import Games from "@/components/Games/Games";
import About from "@/components/About/About";
import Payments from "@/components/Payments/Payments";
import Licenses from "@/components/Licenses/Licenses";
import Providers from "@/components/Providers/Providers";
import Mobile from "@/components/Mobile/Mobile";
import FAQ from "@/components/FAQ/FAQ";
import Support from "@/components/Support/Support";
import Info from "@/components/Info/Info";
import BonusesAndPromos from "@/components/BonusesAndPromos/BonusesAndPromos";
import AdvantagesSection from "@/components/AdvantagesSection/AdvantagesSection";

export default async function Home() {
  const response = await fetch(
    "https://api.adkey-seo.com/api/website/get-website/294"
  );
  const data = await response.json();

  return (
    <>
      <Hero
        firstId={data?.offers[0].id}
        firstBonus={data?.offers[0].bonuses.welcome_bonus}
      />
      <TopCasino offers={data?.offers} country={data?.website.country_name} />
      {!data ? <Loader /> : <BonusDetails offers={data?.offers} />}
      <Advantages firstId={data?.offers[0].id} />
      <Games firstId={data?.offers[0].id} />
      <About />
      <Payments firstId={data?.offers[0].id} />
      <Licenses />
      <Providers firstId={data?.offers[0].id} />
      <Mobile firstId={data?.offers[0].id} />
      <FAQ />

      <Info />
      <Support />
      <BonusesAndPromos />
      <AdvantagesSection />
    </>
  );
}
