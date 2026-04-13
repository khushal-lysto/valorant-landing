import "./artemis.css";

export const metadata = {
  title: "Artemis — Discord Gift Card Bot for Gaming Communities",
};

export default function ArtemisLayout({ children }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Roboto:wght@300;400;500;700&family=PT+Mono&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
}
