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
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-10 px-16"
      style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
    >
      {/* Badge */}
      <div
        className="px-6 py-2 text-sm font-bold tracking-widest uppercase"
        style={{
          border: "1px solid #2A5298",
          backgroundColor: "#0D1B2A",
          color: "#E8003D",
        }}
      >
        Let the games begin
      </div>

      {/* Headline — single component keeps both lines the same font size */}
      <FitTextPair
        line1="VP, Skins, Bundles, Battlepass"
        line1ClassName="font-bold uppercase text-white text-center"
        line1Style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
        line2="Instantly on Discord"
        line2ClassName="font-bold uppercase italic text-center"
        line2Style={{ fontFamily: "var(--font-tungsten), sans-serif", color: "#E8003D" }}
        maxSize={140}
      />

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-2">
        {/* Add to Discord DM */}
        <a
          href="#"
          className="btn-animated relative flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest text-white uppercase"
          style={{
            fontFamily: "var(--font-tungsten), sans-serif",
            backgroundColor: "#5865F2",
            clipPath: "polygon(0 0, 100% 0, 100% 55%, 94% 100%, 0 100%)",
          }}
        >
          <RiDiscordFill size={20} />
          Add to Discord DM
        </a>

        {/* Invite Bot to Server */}
        <a
          href="#"
          className="btn-animated relative flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-tungsten), sans-serif",
            backgroundColor: "#E8E8F0",
            color: "#5865F2",
            clipPath: "polygon(0 0, 100% 0, 100% 55%, 94% 100%, 0 100%)",
          }}
        >
          Invite bot to server
        </a>
      </div>
    </main>

    <HowItWorks />
    <WhyBuyFromUs />
    <BattlePass />
    <LatestNews />
    <UpgradeArsenal />
    </>
  );
}
