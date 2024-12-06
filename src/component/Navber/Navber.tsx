import { Link } from "react-router-dom";
import logo from "../../../public/Imgage/Black White Yellow Simple Initial Name Logo.png";
import { veryfiyToken } from "../../utils/veryfiyToken";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  logOut,
  TUser,
  useCurrentToken,
} from "../../redux/fearutes/auth/authSlice";
import { useEffect, useState } from "react";
import { FaMeetup } from "react-icons/fa";

const Navber = () => {
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
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();
  let user;
  if (token) {
    user = veryfiyToken(token);
  }
  return (
    <div>
      <div className="navbar bg-base-200 dark:border-y dark:border-slate-700  dark:bg-gray-900 dark:text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dark:bg-gray-900 dark:text-white menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-80 p-2 shadow"
            >
              <button className="lg:mr-14 lg:mt-0 mt-1 text-lg  ">
                <Link to="/">Home</Link>
              </button>
              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
                <Link to="/meetingRooms">Meeting Rooms</Link>
              </button>

              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg ">
                <Link to="/aboutUs">About Us</Link>
              </button>
              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
                <Link to="/contactUs">Contact Us</Link>
              </button>
              {(user as TUser)?.role === "admin" ? (
                <>
                  <details className="dropdown">
                    <summary className="  mt-1 ml-20  text-lg ">
                      Dashboard
                    </summary>
                    <ul className="menu  dropdown-content dark:bg-gray-900 dark:text-white bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                      <li>
                        <details className="dropdown">
                          <summary className=" ">Room Management</summary>
                          <ul className="menu dark:bg-gray-900 dark:text-white dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li>
                              <Link to="/createRoom">Create Room</Link>
                            </li>
                            <li>
                              <Link to="/showRooms">Show Rooms</Link>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details className="dropdown">
                          <summary className=" ">Slots Management</summary>
                          <ul className="menu dark:bg-gray-900 dark:text-white dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li>
                              <Link to="/createSlot">Create Slot</Link>
                            </li>
                            <li>
                              <Link to="/showSlotes">Show Slot</Link>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details className="dropdown">
                          <summary className=" ">Booking Management</summary>
                          <ul className="menu dark:bg-gray-900 dark:text-white dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li>
                              <Link to="/bookingRooms">Booking Rooms</Link>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                  <button className="lg:hidden mt-1 text-lg ml-3">
                    <p
                      onClick={() => dispatch(logOut())}
                      className="  lg:mr-16 mr-10"
                    >
                      Log Out
                    </p>
                  </button>
                </>
              ) : (
                <></>
              )}
              {(user as TUser)?.role === "user" ? (
                <>
                  <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
                    <Link to="/MyBookings">My Bookings</Link>
                  </button>
                  <button className="lg:hidden mt-1 text-lg ml-3">
                    <p
                      onClick={() => dispatch(logOut())}
                      className="  lg:mr-16 mr-10"
                    >
                      Log Out
                    </p>
                  </button>
                </>
              ) : (
                <></>
              )}

              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
                <Link to="/register">Register</Link>
              </button>
            </ul>
          </div>

          <div className="  lg:m-5 lg:ml-20 hidden lg:flex">
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
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <button className="lg:mr-14 lg:mt-0 mt-1 text-lg  ">
              <Link to="/">Home</Link>
            </button>
            <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
              <Link to="/meetingRooms">Meeting Rooms</Link>
            </button>

            <button className="lg:mr-10 lg:mt-0 mt-1 text-lg ">
              <Link to="/aboutUs">About Us</Link>
            </button>
            <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
              <Link to="/contactUs">Contact Us</Link>
            </button>
            <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
              <Link to="/register">Register</Link>
            </button>
            {(user as TUser)?.role === "admin" ? (
              <details className="dropdown">
                <summary className="lg:mr-10 lg:mt-0 mt-1 text-lg ">
                  Dashboard
                </summary>
                <ul className="menu dropdown-content dark:bg-gray-900 dark:text-white bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <details className="dropdown">
                      <summary className=" ">Room Management</summary>
                      <ul className="menu dark:bg-gray-900 dark:text-white dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                          <Link to="/createRoom">Create Room</Link>
                        </li>
                        <li>
                          <Link to="/showRooms">Show Rooms</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details className="dropdown">
                      <summary className=" ">Slots Management</summary>
                      <ul className="menu dark:bg-gray-900 dark:text-white dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                          <Link to="/createSlot">Create Slot</Link>
                        </li>
                        <li>
                          <Link to="/showSlotes">Show Slot</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details className="dropdown">
                      <summary className=" ">Booking Management</summary>
                      <ul className="menu dark:bg-gray-900 dark:text-white dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                          <Link to="/bookingRooms">Booking Rooms</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            ) : (
              <></>
            )}
            {(user as TUser)?.role === "user" ? (
              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
                <Link to="/MyBookings">My Bookings</Link>
              </button>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="navbar-end ">
          {(user as TUser)?.role == "admin" ? (
            <>
              <button className="hidden lg:flex text-xl">
                <p
                  onClick={() => dispatch(logOut())}
                  className="  lg:mr-16 mr-10"
                >
                  Log Out
                </p>
              </button>
            </>
          ) : (
            <></>
          )}
          {(user as TUser)?.role == "user" ? (
            <>
              <button className="hidden lg:flex text-xl">
                <p
                  onClick={() => dispatch(logOut())}
                  className="  lg:mr-16 mr-10"
                >
                  Log Out
                </p>
              </button>
            </>
          ) : (
            <></>
          )}
          <div className="flex">
            <div>
              <label className="inline-flex items-center cursor-pointer lg:mt-0 mt-14 mr-2">
                {/* <span className="mr-2 text-gray-800 dark:text-gray-200">
                  Light Mode
                </span> */}
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                {/* <span className="ml-2 text-gray-800 dark:text-gray-200">
                  Dark Mode
                </span> */}
              </label>
            </div>
            <div className="avatar  lg:m-5 flex lg:hidden m-3">
              <div className="w-24 rounded-3xl">
                {" "}
                <img src={logo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
