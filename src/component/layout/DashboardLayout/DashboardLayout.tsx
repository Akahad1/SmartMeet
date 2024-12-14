import { useState } from "react";
import {
  FaHome,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaPlus,
  FaDollarSign,
  FaCog,
  FaBars,
  FaMeetup,
  FaChevronUp,
  FaAngleDown,
  FaSplotch,
  FaLock,
} from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";
import DashboardNavbar from "../../../pages/Deashboard/DashboardNavber/DashboardNavber";
import { CiLock } from "react-icons/ci";
import { FaBook } from "react-icons/fa6";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthorization, setIsAuthorization] = useState(false);

  const toggleAuthorization = () => {
    setIsAuthorization(!isAuthorization);
  };
  const [isRooms, setIsRooms] = useState(false);

  const toggleRooms = () => {
    setIsRooms(!isRooms);
  };
  const [isSlot, setSlote] = useState(false);

  const toggleSlote = () => {
    setSlote(!isSlot);
  };
  const [isBooking, setisBooking] = useState(false);

  const toggleBooking = () => {
    setisBooking(!isBooking);
  };

  return (
    <div className="relative">
      {/* Toggle Icon for Mobile */}
      <button
        className="fixed top-4 left-4 z-50 bg-green-600 text-white p-2 rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-md transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64`}
      >
        <div className="p-4 text-xl flex items-center lg:ml-5">
          <div className=" lg:flex">
            <FaMeetup className="w-14 h-12 mr-2" />
            <p className="text-2xl mt-2 lg:font-serif ">
              <span className="text-blue-700">Smart </span>Meet
            </p>
            {/* <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
                          <img src={logo} className="rounded-full" />
                        </div> */}
          </div>
        </div>
        <nav className="mt-4">
          <ul className="lg:ml-6">
            <Link to="/dashboard/admin">
              <li className="p-4 hover:bg-gray-100 flex items-center">
                <FaHome className="mr-2 h-5 w-7" /> Dashboard
              </li>
            </Link>
            {/* 1 */}
            <div className="">
              <p
                onClick={toggleRooms}
                className="cursor-pointer block  hover:text-blue-700 px-3 py-2 rounded-md"
              >
                <FaBox size={20} className="inline mr-2 ml-2" />
                Rooms
                {isRooms ? (
                  <FaChevronUp size={20} className="inline ml-2 " />
                ) : (
                  <FaAngleDown size={18} className="inline ml-2 " />
                )}
              </p>

              <div className={`space-y-2 mt-1 ml-5 ${isRooms ? "" : "hidden"}`}>
                <Link to="/dashboard/createRoom">
                  <li
                    className={`cursor-pointer 
                
                  block   px-3 py-2 rounded-md"
                  rounded-md"
               hover:text-blue-700`}
                  >
                    Create Room
                  </li>
                </Link>
                <Link to="/dashboard/showRooms">
                  <li
                    className={`cursor-pointer 
               
                   block   p rounded-md
                     px-3 py-2 rounded-md"
               hover:text-blue-700`}
                  >
                    Show Rooms
                  </li>
                </Link>
              </div>
            </div>
            {/* 2 */}
            <div className="">
              <p
                onClick={toggleSlote}
                className="cursor-pointer block  hover:text-blue-700 px-3 py-2 rounded-md"
              >
                <FaSplotch size={20} className="inline mr-2 ml-2" />
                Slots
                {isSlot ? (
                  <FaChevronUp size={20} className="inline ml-2 " />
                ) : (
                  <FaAngleDown size={18} className="inline ml-2 " />
                )}
              </p>

              <div className={`space-y-2 mt-1 ml-5 ${isSlot ? "" : "hidden"}`}>
                <Link to="/dashboard/createSlot">
                  <li
                    className={`cursor-pointer 
                
                  block   px-3 py-2 rounded-md"
                  rounded-md"
               hover:text-blue-700`}
                  >
                    Create Slote
                  </li>
                </Link>
                <Link to="/dashboard/showRooms">
                  <li
                    className={`cursor-pointer 
               
                   block   p rounded-md
                     px-3 py-2 rounded-md"
               hover:text-blue-700`}
                  >
                    Show Slote
                  </li>
                </Link>
              </div>
            </div>
            {/* 3*/}
            <div className="">
              <p
                onClick={toggleBooking}
                className="cursor-pointer block  hover:text-blue-700 px-3 py-2 rounded-md"
              >
                <FaBook size={20} className="inline mr-2 ml-2" />
                Booking
                {isBooking ? (
                  <FaChevronUp size={20} className="inline ml-2 " />
                ) : (
                  <FaAngleDown size={18} className="inline ml-2 " />
                )}
              </p>

              <div
                className={`space-y-2 mt-1 ml-5 ${isBooking ? "" : "hidden"}`}
              >
                <Link to="/dashboard/bookingRooms">
                  <li
                    className={`cursor-pointer 
                
                  block   px-3 py-2 rounded-md"
                  rounded-md"
               hover:text-blue-700`}
                  >
                    Show Booking
                  </li>
                </Link>
              </div>
            </div>

            {/* <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaPlus className="mr-2 h-5 w-7" /> Add Product
            </li> */}

            {/* 1 */}
            <div className="">
              <p
                onClick={toggleAuthorization}
                className="cursor-pointer block  hover:text-blue-700 px-3 py-2 rounded-md"
              >
                <FaLock size={20} className="inline mr-2 ml-2" />
                Authorization
                {isAuthorization ? (
                  <FaChevronUp size={20} className="inline ml-2 " />
                ) : (
                  <FaAngleDown size={18} className="inline ml-2 " />
                )}
              </p>

              <div
                className={`space-y-2 mt-1 ml-5 ${
                  isAuthorization ? "" : "hidden"
                }`}
              >
                <Link to="/register">
                  <li
                    className={`cursor-pointer 
                
                  block   px-3 py-2 rounded-md"
                  rounded-md"
               hover:text-blue-700`}
                  >
                    Sing Up
                  </li>
                </Link>
                <Link to="/login">
                  <li
                    className={`cursor-pointer 
               
                   block   p rounded-md
                     px-3 py-2 rounded-md"
               hover:text-blue-700`}
                  >
                    Sing In
                  </li>
                </Link>
              </div>
            </div>
            <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaCog className="mr-2 h-5 w-7" /> Settings
            </li>
          </ul>
        </nav>
      </aside>

      {/* Overlay (to close sidebar on mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="ml-0 md:ml-64 transition-all duration-300 ">
        <DashboardNavbar></DashboardNavbar>
        <div className="bg-[#F8F9FA] min-h-screen p-4 lg:p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
