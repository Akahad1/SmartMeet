import { useEffect, useState } from "react";
import { FaUser, FaHome } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import FullscreenToggle from "../../../component/FullscreenToggle/FullscreenToggle";

const DashboardNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user previously selected dark mode in the local storage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(savedMode === "true");
    }
  }, []);

  useEffect(() => {
    // Apply the class to the body to switch between light and dark modes
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);
  const handleLogOut = () => {};
  return (
    <div className=" bg-white w-full shadow-2xl shadow-slate-900">
      <div className="navbar   border-b  ">
        <div className="navbar-start">
          <button className=" p-2 inline h-24 lg:hidden"></button>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end mr-4">
          <div className="flex gap-3">
            <div className="lg:mr-2 mt-4">
              <input
                type="checkbox"
                className="toggle toggle-accent"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </div>
            <div className="lg:mr-2 mt-2">
              <FullscreenToggle></FullscreenToggle>
            </div>
            <div className="avatar">
              <div className="w-10 h-10 mt-2 rounded-full">
                {/* {userData?.data.image ? (
                  <img src={userData?.data.image} />
                ) : ( */}
                <>
                  {" "}
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </>
                {/* )} */}
              </div>
              {/* </Suspense> */}
            </div>
            <div>
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1 mr-3">
                  <li>
                    <details>
                      <summary>
                        {/* <Suspense fallback={isLoading}>
                        {userData?.data.name}
                      </Suspense> */}
                        Sahad
                      </summary>
                      <ul className="bg-base-100 rounded-t-none p-3 mb-5 ">
                        <li className="flex lg:hidden mr-10">
                          <Link to="/">
                            {" "}
                            <FaHome className="inline h-4 w-4 mr-2 " />
                            Home
                          </Link>
                        </li>
                        <li className="flex">
                          <Link to="/profile">
                            {" "}
                            <FaUser className="inline h-4 mr-2 " /> Profile
                          </Link>
                        </li>
                        <li>
                          <div onClick={() => handleLogOut()}>
                            <IoMdLogOut size={20} className="inline " /> SingOut{" "}
                          </div>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
