import { Outlet } from "react-router-dom";
import Navber from "../../Navber/Navber";
import Footer from "../../Footer/Footer";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const Layout = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="dark:bg-gray-900 dark:text-white">
        <div className="lg:mr-12 lg:ml-12 p-4 ">
          <Outlet></Outlet>
          <ScrollToTop></ScrollToTop>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
