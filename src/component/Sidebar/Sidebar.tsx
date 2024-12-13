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
} from "react-icons/fa";
import DashboardNavbar from "../../pages/Deashboard/DashboardNavber/DashboardNavber";

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
        <div className="p-4 text-xl font-bold text-green-600 flex items-center">
          <FaHome className="mr-2" /> Nest Mart & Grocery
        </div>
        <nav className="mt-4">
          <ul className="lg:ml-10">
            <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaHome className="mr-2 " /> Dashboard
            </li>
            <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaBox className="mr-2" /> Products
            </li>
            <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaShoppingCart className="mr-2" /> Orders
            </li>
            <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaUsers className="mr-2" /> Sellers
            </li>
            <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaPlus className="mr-2" /> Add Product
            </li>
            <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaDollarSign className="mr-2" /> Transactions
            </li>
            <li className="p-4 hover:bg-gray-100 flex items-center">
              <FaCog className="mr-2" /> Settings
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
        <div className="bg-[#F8F9FA] min-h-screen">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p>Resize the screen to see the responsive sidebar in action.</p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
