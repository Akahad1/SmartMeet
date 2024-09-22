import { Outlet } from "react-router-dom";
import Navber from "./component/Navber/Navber";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
