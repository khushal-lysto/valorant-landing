import HomeNav from "@/components/home/HomeNav";
import HomeHero from "@/components/home/HomeHero";
import HomeMarquee from "@/components/home/HomeMarquee";
import HomeUseCases from "@/components/home/HomeUseCases";
import HomeDemo from "@/components/home/HomeDemo";
import HomeCTA from "@/components/home/HomeCTA";
import HomeFooter from "@/components/home/HomeFooter";

export default function Home() {
  return (
    <main style={{ fontFamily: "var(--font-lexend), sans-serif" }}>
      <HomeNav />
      <HomeHero />
      <HomeMarquee />
      <HomeUseCases />
      <HomeDemo />
      <HomeCTA />
      <HomeFooter />
    </main>
  );
}
