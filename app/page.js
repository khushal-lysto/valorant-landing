import HomeNav from "@/components/home/HomeNav";
import HomeHero from "@/components/home/HomeHero";
import HomeBento from "@/components/home/HomeBento";
import HomeUseCases from "@/components/home/HomeUseCases";
import HomeFooter from "@/components/home/HomeFooter";

export default function Home() {
  return (
    <main style={{ fontFamily: "var(--font-lexend), sans-serif" }}>
      <HomeNav />
      <HomeHero />
      <HomeBento />
      <HomeUseCases />
      <HomeFooter />
    </main>
  );
}
