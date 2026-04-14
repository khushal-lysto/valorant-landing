import CreatorCommerceNav from "@/components/CreatorCommerceNav";
import HomeHero from "@/components/home/HomeHero";
import HomeBento from "@/components/home/HomeBento";
import HomeUseCases from "@/components/home/HomeUseCases";
import HomeCTA from "@/components/home/HomeCTA";
import HomeFooter from "@/components/home/HomeFooter";

export default function Home() {
  return (
    <main style={{ fontFamily: "var(--font-lexend), sans-serif" }}>
      <CreatorCommerceNav />
      <HomeHero />
      <HomeBento />
      <HomeCTA />
      <HomeUseCases />
      <HomeFooter />
    </main>
  );
}
