import WhyBuyCard from "./WhyBuyCard";

const cards = [
  {
    number: "01",
    title: "Instant Speed",
    description:
      "Automated delivery means no waiting. Get your code sent to your inbox within seconds of payment, 24/7.",
    variant: "dark",
  },
  {
    number: "02",
    title: "Best Prices",
    description:
      "Stop overpaying in the game store. We consistently offer the lowest rates on the market, getting you more VP for your money.",
    variant: "light",
  },
  {
    number: "03",
    title: "100% Genuine",
    description:
      "Zero ban risk. We are a verified reseller using only official sources, so your account stays safe while you save.",
    variant: "dark",
  },
];

export default function WhyBuyFromUs() {
  return (
    <section className="bg-cream-grid w-full min-h-screen py-20 border-b border-gray-300 flex flex-col justify-center">
      <div className="max-w-[1440px] mx-auto px-16">

        {/* Heading */}
        <div className="mb-6">
          <h2
            className="text-6xl md:text-8xl font-bold uppercase text-[#0F1923]"
            style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
          >
            Why buy from us?
          </h2>
          {/* Red underline */}
          <div className="mt-3 h-[3px] w-40 bg-[#FF4655]" />
        </div>

        {/* Spacer */}
        <div className="mb-12" />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <WhyBuyCard key={card.number} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}
