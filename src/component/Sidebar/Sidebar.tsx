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
} from "react-icons/fa";
import DashboardNavbar from "../../pages/Deashboard/DashboardNavber/DashboardNavber";
import { Link, Outlet } from "react-router-dom";
import { CiLock } from "react-icons/ci";

const ResponsiveSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          </div>
        </div>
        <nav className="mt-4">
          <ul className="lg:ml-6">
            <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaHome className="mr-2 h-5 w-7" /> Dashboard
            </li>
            <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaBox className="mr-2 h-5 w-7" /> Products
            </li>
            <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaShoppingCart className="mr-2 h-5 w-7" /> Orders
            </li>
            <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaUsers className="mr-2 h-5 w-7" /> Sellers
            </li>
            <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaPlus className="mr-2 h-5 w-7" /> Add Product
            </li>
            <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaDollarSign className="mr-2 h-5 w-7" /> Transactions
            </li>

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
          <h1 className="text-2xl font-bold">Main Content</h1>

          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
