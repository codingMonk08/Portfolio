import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function Layout() {
  return (
    <>
      <Navbar />
      <main data-scroll-section>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
