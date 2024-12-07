import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="border-y dark:border-slate-700">
      <div className="bg-base-300 lg:pl-16 pl-5 pt-10  text-gray-700 dark:bg-gray-900 dark:text-white">
        {/* About Section */}

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4  dark:text-white text-base text-gray-800 max-w-screen-2xl mx-auto my-9 px-2">
          {/* Features Section */}
          <div>
            <h3 className="font-bold  mb-2 text-lg  dark:text-white">
              Features
            </h3>
            <ul>
              <li>Room Booking</li>
              <li className="my-2 py-2  dark:text-white border-y border-dashed border-gray-600">
                Admin Control Panel
              </li>
              <li>Search & Filter</li>
              <li className="my-2 py-2 border-y border-dashed border-gray-600">
                Pricing Options
              </li>
              <li>Payment Integration</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold  mb-2 text-lg">Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li className="my-2 py-2 border-y border-dashed border-gray-600">
                Contact
              </li>
              <li>FAQs</li>
              <li className="my-2 py-2 border-y border-dashed border-gray-600">
                Privacy Policy
              </li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-bold  mb-2 text-lg">Resources</h3>
            <ul>
              <li>User Guide</li>
              <li className="my-2 py-2 border-y border-dashed border-gray-600">
                Admin Guide
              </li>
              <li>Community Support</li>
              <li className="my-2 py-2 border-y border-dashed border-gray-600">
                API Documentation
              </li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold  mb-2 text-lg">Contact</h3>
            <ul>
              <li className=" cursor-pointer">
                <IoCall className="inline-block mr-2" /> Call Us: +1 234 567 890
              </li>
              <li className="my-2 py-2 border-y border-dashed border-gray-600">
                <FaEnvelope className="inline-block  mr-2" /> Email:
                support@smartmeet.com
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-base-400 py-4">
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-white p-2 dark:text-black rounded-full">
              <FaFacebookF className=" text-xl" />
            </a>
            <a href="#" className="bg-white p-2 dark:text-black rounded-full">
              <FaTwitter className=" text-xl" />
            </a>
            <a href="#" className="bg-white dark:text-black p-2 rounded-full">
              <FaInstagram className=" text-xl" />
            </a>
            <a href="#" className="bg-white  dark:text-black p-2 rounded-full">
              <FaLinkedin className=" text-xl" />
            </a>
          </div>
          <p className="text-center dark:text-white mt-4">
            Copyright © {new Date().getFullYear()} Smart Meet. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
