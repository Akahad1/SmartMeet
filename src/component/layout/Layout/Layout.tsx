import { Outlet } from "react-router-dom";
import Navber from "../../Navber/Navber";
import Footer from "../../Footer/Footer";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const Layout = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="lg:mr-12 lg:ml-12 m-4">
        <Outlet></Outlet>
        <ScrollToTop></ScrollToTop>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
