import About from "@/components/About/About";
import FAQ from "@/components/FAQ/FAQ";
import Support from "@/components/Support/Support";
import Info from "@/components/Info/Info";
import BonusesAndPromos from "@/components/BonusesAndPromos/BonusesAndPromos";
import AdvantagesSection from "@/components/AdvantagesSection/AdvantagesSection";
import TopComponent from "@/components/TopComponent/TopComponent";
import BottomComponent from "@/components/BottomComponent/BottomComponent";

export default function Home() {
  return (
    <>
      <TopComponent />
      <About />
      <BottomComponent />
      <FAQ />
      <Info />
      <Support />
      <BonusesAndPromos />
      <AdvantagesSection />
    </>
  );
}
