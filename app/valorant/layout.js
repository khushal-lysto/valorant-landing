import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ValorantLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
