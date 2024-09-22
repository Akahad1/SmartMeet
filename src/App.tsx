import { Outlet } from "react-router-dom";
import Navber from "./component/Navber/Navber";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Navber></Navber>
      <div className="lg:mr-12 lg:ml-12 m-4">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
