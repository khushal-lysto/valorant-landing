import Header from "@/components/Header";
import HomeFooter from "@/components/home/HomeFooter";

export default function ValorantLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <HomeFooter />
    </>
  );
}
