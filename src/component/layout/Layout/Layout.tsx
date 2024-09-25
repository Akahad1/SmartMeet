import { Outlet } from "react-router-dom";
import Navber from "../../Navber/Navber";
import Footer from "../../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="lg:mr-12 lg:ml-12 m-4">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
