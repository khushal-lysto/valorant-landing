import "./creator-commerce.css";

export const metadata = {
  title: "Creator Commerce — Gaming Influencer Storefront",
  description: "A branded gaming storefront for creators. Sell digital products your fans already buy. Earn commission on every sale.",
};

export default function CreatorCommerceLayout({ children }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
}
