import { RiDiscordFill } from "react-icons/ri";
import FitTextPair from "@/components/FitTextPair";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyBuyFromUs from "@/components/sections/WhyBuyFromUs";
import BattlePass from "@/components/sections/BattlePass";
import LatestNews from "@/components/sections/LatestNews";
import UpgradeArsenal from "@/components/sections/UpgradeArsenal";

export default function Home() {
  return (
    <>

    <HowItWorks />
    <WhyBuyFromUs />
    <BattlePass />
    <LatestNews />
    <UpgradeArsenal />
    </>
  );
}
