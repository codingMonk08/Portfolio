import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CustomCursor from "./components/Style/CustomCursor";


function Layout() {
  return (
    <>
      <Navbar />
      <main data-scroll-section>
        <Outlet />
      </main>
      <Footer />
      <CustomCursor/>
    </>
  );
}

export default Layout;
