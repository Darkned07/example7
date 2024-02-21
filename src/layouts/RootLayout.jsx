import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <header className="bg-[#101010]">
        <Navbar />
      </header>
      {/* iltimos main tagiga max-container clasini yozmang sayt buzilishi mumkun ! */}
      <main className="grow">
        <Outlet />
      </main>
      <footer className="bg-[#101010] pt-[52px] pb-[38px]">
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
